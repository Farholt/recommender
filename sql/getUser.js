const getUser = async (db, id) => await db.all('SELECT * FROM users where id = ?', [id]);

export default getUser;