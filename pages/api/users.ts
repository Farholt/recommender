import { NextApiRequest, NextApiResponse } from 'next';
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

const userAll = async (req: NextApiRequest, res: NextApiResponse) => {
    /* DB connection */
    const db = await sqlite.open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });
    
    /* Retrieve users */
    const users: String = await db.all('SELECT * FROM users'); // sql
    const refined: String = JSON.stringify(users, null, 2); // json pretty
    
    res.json(refined); // response
}

export default userAll;