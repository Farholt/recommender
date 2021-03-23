import { NextApiRequest, NextApiResponse } from 'next';
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

const ratingsByUserId = async (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query.id;

    /* DB connection */
    const db = await sqlite.open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });
        
    /* Retrieve ratings */
    let ratings = await db.all('SELECT title, ratings.movieId, name, users.id AS userId, ratings.rating FROM ratings, users, movies WHERE users.id = userId AND movies.id = movieId AND users.id = ?', [id]);
    ratings = JSON.stringify(ratings, null, 2);

    res.json(ratings);
}

export default ratingsByUserId;