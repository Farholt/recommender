const getUserRatings = async (db, id) => await db.all('SELECT userId, movies.title, movieId, ratings.rating FROM ratings, users, movies WHERE users.id = userId AND movies.id = movieId AND users.id = ?', [id]);

export default getUserRatings;