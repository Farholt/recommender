const getUser = async (db, id) => await db.all('SELECT name, id FROM users where id != ?', [id]);

export default getUser;