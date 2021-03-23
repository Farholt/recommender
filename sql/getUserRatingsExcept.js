const getUsersExcept = async (db, id) => await db.all('SELECT ratings.movieId, title, ratings.rating FROM ratings, users, movies WHERE users.id = userId AND movies.id = movieId AND users.id = ?', [id]);

export default getUsersExcept;