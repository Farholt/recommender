import { NextApiRequest, NextApiResponse } from 'next';
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

const ratingsByMovieId = async (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query.id;

    let string: String = 'Hejsan';
    let chars = string.split(',');

    /* DB connection */
    const db = await sqlite.open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });
        
    /* Retrieve ratings */
    let ratings = await db.all('SELECT title, ratings.movieId, name, users.id AS userId, ratings.rating FROM ratings, users, movies WHERE users.id = userId AND movies.id = movieId AND movies.id = ?', [id]);
    ratings = JSON.stringify(ratings, null, 2);

    res.json(ratings);
}

export default ratingsByMovieId;