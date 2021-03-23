import { NextApiRequest, NextApiResponse } from 'next';

import getUser from '../../../sql/getUser';
import getUserExcept from '../../../sql/getUserExcept';
import getUserRatings from '../../../sql/getUserRatings';
import getUsersRatingsExcept from '../../../sql/getUserRatingsExcept';
import getUserExceptMainUserMovies from '../../../sql/getUserExceptMainUserMovies';

const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

const buildJson = async (user: Array<any>, eUserMatch: Array<any>, eMovieRecommends: Array<any>, pCUserMatch: Array<any>, pCMovieRecommends: Array<any>) => {

    user[0]['top_matching_users'] = [];
    user[0]['top_matching_users'].push({ euclidean: [] });
    user[0]['top_matching_users'][0]['euclidean'] = eUserMatch;
    user[0]['top_matching_users'].push({ pearson_correlation: [] });
    user[0]['top_matching_users'][1]['pearson_correlation'] = pCUserMatch;

    user[0]['recommended_movies'] = [];
    user[0]['recommended_movies'].push({ euclidean: [] });
    user[0]['recommended_movies'][0]['euclidean'] = eMovieRecommends.map(x => {
        return { title: x['title'], id: x['movieId'], score: x['wsSim'] }
    });

    user[0]['recommended_movies'].push({ pearson_correlation: [] });
    user[0]['recommended_movies'][1]['pearson_correlation'] = pCMovieRecommends.map(x => {
        return { title: x['title'], id: x['movieId'], score: x['wsSim'] }
    });

    return user;
}

/**
 * All user ratings in an array with respective weighted values. Then try to find the duplicates and add the scores 
 * @param a 
 */
const weightedCalculations = async (a: Array<any>) => {
    
    let arr: Array<any> = []; // array for concat

    /* wsum */
    for (let i: number = 0; i < a.length; i++) {
        for (let j: number = 0; j < a[i].length; j++) {
            arr.push(a[i][j]);
        }
    }

    let result = arr.reduce((accumulator, cur) => {

        let id = cur.movieId;
        
        let found: any = accumulator.find((elem: { movieId: any; }) => {
            return elem.movieId == id;
        })

        /* If we find duplicates we do the weighted calculations */
        if (found) {
            found.ws += cur.ws; // sum score
            found.sim += cur.sim; // sum sim for movie
            found.wsSim = found.ws / found.sim; // end recommendation score
        }
        /* ... else we just push the single into the accumulator */
        else {
            cur.wsSim = cur.ws / cur.sim; // still need to calculate end score if only one is found
            accumulator.push(cur)
        }
        
        return accumulator; // return to result

    }, []);

    /* sort wsSim (end score) descending order */
    result.sort((a: { wsSim: any; }, b: { wsSim: any; }) =>
        parseFloat(b.wsSim) - parseFloat(a.wsSim)
    ); 

    return result;
}

/**
 * Calculating weighted score
 * @param a 
 */
const weightedScore = async (a: any, sim: number) => {
    let arr: Array<any> = [];

    for (let i = 0; i < a.length; i++) {
        let wScore: number = a[i]['rating'] * sim;

        arr.push({
            movieId: a[i]['movieId'],
            title: a[i]['title'],
            rating: a[i]['rating'],
            wScore: wScore,
            ws: wScore,
            sim: sim,
            wsSim: 0
        });

    }

    return arr;
}
 
/**
 * Calculating euclidean score
 * @param a 
 * @param b 
 */
const euclideanUser = async (a: any, b: any) => {
    let sim: number = 0; // integer
    let n: number = 0; //  counter for number of matching products

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i]['movieId'] == b[j]['movieId']) {
                sim += (a[i]['rating'] - b[j]['rating']) ** 2;
                n += 1;
            }
        }
    }

    if (n == 0) {
        return 0;
    }

    let inv: number = 1 / (1 + sim);

    return inv;
};

const pearsonCorrelation = async (a: any, b: any) => {
    let sum1 = 0,
        sum2 = 0,
        sum1sq = 0,
        sum2sq = 0,
        pSum = 0,
        n = 0
    
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {

            if (a[i]['movieId'] == b[j]['movieId']) {
                sum1 += a[i]['rating']
                sum2 += b[j]['rating']

                sum1sq += a[i]['rating'] ** 2
                sum2sq += b[j]['rating'] ** 2

                pSum += a[i]['rating'] * b[j]['rating']

                n += 1
            }

        }
    }

    if (n == 0) {
        return 0
    }

    let num = pSum - (sum1 * sum2 / n)
    let den = Math.sqrt((sum1sq - sum1 ** 2 / n) * (sum2sq - sum2 ** 2 / n))

    return num/den;
}

const euclideanAPI = async (req: NextApiRequest, res: NextApiResponse) => {
    const id: any = req.query.id; // main user

    /* Establish DB connection */
    const db = await sqlite.open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });
   
    /* sql */
    let user: any = await getUser(db, id); // sql
    /* Retrieve ratings that belongs to main user */
    let userRatings: any = await getUserRatings(db, id); // sql

    /* All other users */
    let otherUsers: any = await getUserExcept(db, id); // sql

    let eUserSimilarity: Array<any> = []; // adding euclidean result here
    let eWScores: Array<any> = [];

    let pCUserSimilarity: Array<any> = []; // adding pearson correlation result here
    let pcWScores: Array<any> = [];

    /* Getting the similarity between users */
    for (let i: number = 0; i < otherUsers.length; i++) {

        let subId: number = otherUsers[i]['id'];
        let name: String = otherUsers[i]['name'];

        /* Retrieve ratings for all the other users */
        let otherUserRatings: any = await getUsersRatingsExcept(db, subId) // sql

        let euclideanScore: any = await euclideanUser(userRatings, otherUserRatings); // get euclidean score
        let pCScore: any = await pearsonCorrelation(userRatings, otherUserRatings); // get euclidean score

        /* Retrieve ratings for all the other users again, but now without the movies that main user has rated */
        let otherUserRatings2: any = await getUserExceptMainUserMovies(db, id, subId); // sql
            
        /* Euclidean */
        let eWScore: any = await weightedScore(otherUserRatings2, euclideanScore); // get weighter score
        eWScores.push({weighted_scores: eWScore});
    
        /* Push objects */
        eUserSimilarity.push({
            id: subId,
            user_name: name,
            euclideanScore: euclideanScore,
        });  

        /* Pearson Correlation above 0 */
        if (pCScore > 0) {
            let pcWScore: any = await weightedScore(otherUserRatings2, pCScore); // get weighter score
            pcWScores.push({ weighted_scores: pcWScore });
            
            /* Push objects */
            pCUserSimilarity.push({
                id: subId,
                user_name: name,
                pearsonScore: pCScore,
            }); 
        } 
    }

    /* Sort similarity highest to lowest */
    /* Euclidean */
    eUserSimilarity.sort((a: { euclideanScore: any; }, b: { euclideanScore: any; }) =>
    parseFloat(b.euclideanScore) - parseFloat(a.euclideanScore)
    ); 
    // /* Pearson Correlation */
    pCUserSimilarity.sort((a: { pearsonScore: any; }, b: { pearsonScore: any; }) =>
    parseFloat(b.pearsonScore) - parseFloat(a.pearsonScore)
    ); 
    
    let eWCalc = await weightedCalculations(eWScores.map(x => x['weighted_scores']));
    let pCWCalc = await weightedCalculations(pcWScores.map(y => y['weighted_scores']));

    res.json(JSON.stringify(await buildJson(user, eUserSimilarity, eWCalc, pCUserSimilarity, pCWCalc), null, 2));
}

export default euclideanAPI;