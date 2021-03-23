import { NextApiRequest, NextApiResponse } from 'next';
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

const movieById = async (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query.id;

    /* DB connection */
    const db = await sqlite.open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });
        
    /* Retrieve users */
    let movies: String = await db.all('SELECT * FROM movies WHERE id = ?', [id]); // sql
    movies = JSON.stringify(movies, null, 2); // json pretty

    res.json(movies);
}

export default movieById;