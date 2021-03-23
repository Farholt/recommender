import { NextApiRequest, NextApiResponse } from 'next';
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

const moviesAll = async (req: NextApiRequest, res: NextApiResponse) => {
    /* DB connection */
    const db = await sqlite.open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });
        
    /* Retrieve users */
    const movies: String = await db.all('SELECT * FROM movies'); // sql
    const refined: String = JSON.stringify(movies, null, 2); // json pretty
        
    res.json(refined); // response
}

export default moviesAll;