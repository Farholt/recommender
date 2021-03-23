import { NextApiRequest, NextApiResponse } from 'next';
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

const userById = async (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query.id;

    /* DB connection */
    const db = await sqlite.open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });
        
    /* Retrieve users */
    let users: String = await db.all('SELECT * FROM users WHERE id = ?', [id]); // sql
    users = JSON.stringify(users, null, 2); // json pretty
    
    res.json(users);
}

export default userById;