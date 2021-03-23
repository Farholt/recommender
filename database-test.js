const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

async function setup() {
    
    const db = await sqlite.open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });
    
    await db.migrate({ force: 'last' });

    const users = await db.all('SELECT * FROM Users');
    console.log('ALL USERS', JSON.stringify(users, null, 2));

    const movies = await db.all('SELECT * FROM movies');
    console.log('ALL MOVIES', JSON.stringify(movies, null, 2));

    const ratings = await db.all('SELECT * FROM ratings');
    console.log('ALL RATINGS', JSON.stringify(ratings, null, 2));

    // const ratings = await db.all('SELECT ratings.movieId, title, ratings.rating FROM ratings, users, movies WHERE users.id = userId AND movies.id = movieId AND users.id = 1 AND movieId NOT IN (SELECT ratings.movieId FROM ratings, users, movies WHERE users.id = userId AND movies.id = movieId AND users.id = 4)');
    console.log(ratings);
}

setup();