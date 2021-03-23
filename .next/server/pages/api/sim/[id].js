module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/sim/[id].ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/sim/[id].ts":
/*!*******************************!*\
  !*** ./pages/api/sim/[id].ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sql_getUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../sql/getUser */ "./sql/getUser.js");
/* harmony import */ var _sql_getUserExcept__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../sql/getUserExcept */ "./sql/getUserExcept.js");
/* harmony import */ var _sql_getUserRatings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../sql/getUserRatings */ "./sql/getUserRatings.js");
/* harmony import */ var _sql_getUserRatingsExcept__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../sql/getUserRatingsExcept */ "./sql/getUserRatingsExcept.js");
/* harmony import */ var _sql_getUserExceptMainUserMovies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../sql/getUserExceptMainUserMovies */ "./sql/getUserExceptMainUserMovies.js");






const sqlite3 = __webpack_require__(/*! sqlite3 */ "sqlite3");

const sqlite = __webpack_require__(/*! sqlite */ "sqlite");

const buildJson = async (user, eUserMatch, eMovieRecommends, pCUserMatch, pCMovieRecommends) => {
  user[0]['top_matching_users'] = [];
  user[0]['top_matching_users'].push({
    euclidean: []
  });
  user[0]['top_matching_users'][0]['euclidean'] = eUserMatch;
  user[0]['top_matching_users'].push({
    pearson_correlation: []
  });
  user[0]['top_matching_users'][1]['pearson_correlation'] = pCUserMatch;
  user[0]['recommended_movies'] = [];
  user[0]['recommended_movies'].push({
    euclidean: []
  });
  user[0]['recommended_movies'][0]['euclidean'] = eMovieRecommends.map(x => {
    return {
      title: x['title'],
      id: x['movieId'],
      score: x['wsSim']
    };
  });
  user[0]['recommended_movies'].push({
    pearson_correlation: []
  });
  user[0]['recommended_movies'][1]['pearson_correlation'] = pCMovieRecommends.map(x => {
    return {
      title: x['title'],
      id: x['movieId'],
      score: x['wsSim']
    };
  });
  return user;
};
/**
 * All user ratings in an array with respective weighted values. Then try to find the duplicates and add the scores 
 * @param a 
 */


const weightedCalculations = async a => {
  let arr = []; // array for concat

  /* wsum */

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      arr.push(a[i][j]);
    }
  }

  let result = arr.reduce((accumulator, cur) => {
    let id = cur.movieId;
    let found = accumulator.find(elem => {
      return elem.movieId == id;
    });
    /* If we find duplicates we do the weighted calculations */

    if (found) {
      found.ws += cur.ws; // sum score

      found.sim += cur.sim; // sum sim for movie

      found.wsSim = found.ws / found.sim; // end recommendation score
    }
    /* ... else we just push the single into the accumulator */
    else {
        cur.wsSim = cur.ws / cur.sim; // still need to calculate end score if only one is found

        accumulator.push(cur);
      }

    return accumulator; // return to result
  }, []);
  /* sort wsSim (end score) descending order */

  result.sort((a, b) => parseFloat(b.wsSim) - parseFloat(a.wsSim));
  return result;
};
/**
 * Calculating weighted score
 * @param a 
 */


const weightedScore = async (a, sim) => {
  let arr = [];

  for (let i = 0; i < a.length; i++) {
    let wScore = a[i]['rating'] * sim;
    arr.push({
      movieId: a[i]['movieId'],
      title: a[i]['title'],
      rating: a[i]['rating'],
      wScore: wScore,
      ws: wScore,
      sim: sim,
      wsSim: 0
    });
  }

  return arr;
};
/**
 * Calculating euclidean score
 * @param a 
 * @param b 
 */


const euclideanUser = async (a, b) => {
  let sim = 0; // integer

  let n = 0; //  counter for number of matching products

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i]['movieId'] == b[j]['movieId']) {
        sim += (a[i]['rating'] - b[j]['rating']) ** 2;
        n += 1;
      }
    }
  }

  if (n == 0) {
    return 0;
  }

  let inv = 1 / (1 + sim);
  return inv;
};

const pearsonCorrelation = async (a, b) => {
  let sum1 = 0,
      sum2 = 0,
      sum1sq = 0,
      sum2sq = 0,
      pSum = 0,
      n = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i]['movieId'] == b[j]['movieId']) {
        sum1 += a[i]['rating'];
        sum2 += b[j]['rating'];
        sum1sq += a[i]['rating'] ** 2;
        sum2sq += b[j]['rating'] ** 2;
        pSum += a[i]['rating'] * b[j]['rating'];
        n += 1;
      }
    }
  }

  if (n == 0) {
    return 0;
  }

  let num = pSum - sum1 * sum2 / n;
  let den = Math.sqrt((sum1sq - sum1 ** 2 / n) * (sum2sq - sum2 ** 2 / n));
  return num / den;
};

const euclideanAPI = async (req, res) => {
  const id = req.query.id; // main user

  /* Establish DB connection */

  const db = await sqlite.open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database
  });
  /* sql */

  let user = await Object(_sql_getUser__WEBPACK_IMPORTED_MODULE_0__["default"])(db, id); // sql

  /* Retrieve ratings that belongs to main user */

  let userRatings = await Object(_sql_getUserRatings__WEBPACK_IMPORTED_MODULE_2__["default"])(db, id); // sql

  /* All other users */

  let otherUsers = await Object(_sql_getUserExcept__WEBPACK_IMPORTED_MODULE_1__["default"])(db, id); // sql

  let eUserSimilarity = []; // adding euclidean result here

  let eWScores = [];
  let pCUserSimilarity = []; // adding pearson correlation result here

  let pcWScores = [];
  /* Getting the similarity between users */

  for (let i = 0; i < otherUsers.length; i++) {
    let subId = otherUsers[i]['id'];
    let name = otherUsers[i]['name'];
    /* Retrieve ratings for all the other users */

    let otherUserRatings = await Object(_sql_getUserRatingsExcept__WEBPACK_IMPORTED_MODULE_3__["default"])(db, subId); // sql

    let euclideanScore = await euclideanUser(userRatings, otherUserRatings); // get euclidean score

    let pCScore = await pearsonCorrelation(userRatings, otherUserRatings); // get euclidean score

    /* Retrieve ratings for all the other users again, but now without the movies that main user has rated */

    let otherUserRatings2 = await Object(_sql_getUserExceptMainUserMovies__WEBPACK_IMPORTED_MODULE_4__["default"])(db, id, subId); // sql

    /* Euclidean */

    let eWScore = await weightedScore(otherUserRatings2, euclideanScore); // get weighter score

    eWScores.push({
      weighted_scores: eWScore
    });
    /* Push objects */

    eUserSimilarity.push({
      id: subId,
      user_name: name,
      euclideanScore: euclideanScore
    });
    /* Pearson Correlation above 0 */

    if (pCScore > 0) {
      let pcWScore = await weightedScore(otherUserRatings2, pCScore); // get weighter score

      pcWScores.push({
        weighted_scores: pcWScore
      });
      /* Push objects */

      pCUserSimilarity.push({
        id: subId,
        user_name: name,
        pearsonScore: pCScore
      });
    }
  }
  /* Sort similarity highest to lowest */

  /* Euclidean */


  eUserSimilarity.sort((a, b) => parseFloat(b.euclideanScore) - parseFloat(a.euclideanScore)); // /* Pearson Correlation */

  pCUserSimilarity.sort((a, b) => parseFloat(b.pearsonScore) - parseFloat(a.pearsonScore));
  let eWCalc = await weightedCalculations(eWScores.map(x => x['weighted_scores']));
  let pCWCalc = await weightedCalculations(pcWScores.map(y => y['weighted_scores']));
  res.json(JSON.stringify(await buildJson(user, eUserSimilarity, eWCalc, pCUserSimilarity, pCWCalc), null, 2));
};

/* harmony default export */ __webpack_exports__["default"] = (euclideanAPI);

/***/ }),

/***/ "./sql/getUser.js":
/*!************************!*\
  !*** ./sql/getUser.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getUser = async (db, id) => await db.all('SELECT * FROM users where id = ?', [id]);

/* harmony default export */ __webpack_exports__["default"] = (getUser);

/***/ }),

/***/ "./sql/getUserExcept.js":
/*!******************************!*\
  !*** ./sql/getUserExcept.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getUser = async (db, id) => await db.all('SELECT name, id FROM users where id != ?', [id]);

/* harmony default export */ __webpack_exports__["default"] = (getUser);

/***/ }),

/***/ "./sql/getUserExceptMainUserMovies.js":
/*!********************************************!*\
  !*** ./sql/getUserExceptMainUserMovies.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getUserExceptMainUserMovies = async (db, id, subId) => await db.all('SELECT ratings.movieId, title, ratings.rating FROM ratings, users, movies WHERE users.id = userId AND movies.id = movieId AND users.id = ? AND movieId NOT IN (SELECT ratings.movieId FROM ratings, users, movies WHERE users.id = userId AND movies.id = movieId AND users.id = ?)', [subId, id]);

/* harmony default export */ __webpack_exports__["default"] = (getUserExceptMainUserMovies);

/***/ }),

/***/ "./sql/getUserRatings.js":
/*!*******************************!*\
  !*** ./sql/getUserRatings.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getUserRatings = async (db, id) => await db.all('SELECT userId, movies.title, movieId, ratings.rating FROM ratings, users, movies WHERE users.id = userId AND movies.id = movieId AND users.id = ?', [id]);

/* harmony default export */ __webpack_exports__["default"] = (getUserRatings);

/***/ }),

/***/ "./sql/getUserRatingsExcept.js":
/*!*************************************!*\
  !*** ./sql/getUserRatingsExcept.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getUsersExcept = async (db, id) => await db.all('SELECT ratings.movieId, title, ratings.rating FROM ratings, users, movies WHERE users.id = userId AND movies.id = movieId AND users.id = ?', [id]);

/* harmony default export */ __webpack_exports__["default"] = (getUsersExcept);

/***/ }),

/***/ "sqlite":
/*!*************************!*\
  !*** external "sqlite" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sqlite");

/***/ }),

/***/ "sqlite3":
/*!**************************!*\
  !*** external "sqlite3" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sqlite3");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3NpbS8udHMiLCJ3ZWJwYWNrOi8vLy4vc3FsL2dldFVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3FsL2dldFVzZXJFeGNlcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3FsL2dldFVzZXJFeGNlcHRNYWluVXNlck1vdmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcWwvZ2V0VXNlclJhdGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3FsL2dldFVzZXJSYXRpbmdzRXhjZXB0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInNxbGl0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNxbGl0ZTNcIiJdLCJuYW1lcyI6WyJzcWxpdGUzIiwicmVxdWlyZSIsInNxbGl0ZSIsImJ1aWxkSnNvbiIsInVzZXIiLCJlVXNlck1hdGNoIiwiZU1vdmllUmVjb21tZW5kcyIsInBDVXNlck1hdGNoIiwicENNb3ZpZVJlY29tbWVuZHMiLCJwdXNoIiwiZXVjbGlkZWFuIiwicGVhcnNvbl9jb3JyZWxhdGlvbiIsIm1hcCIsIngiLCJ0aXRsZSIsImlkIiwic2NvcmUiLCJ3ZWlnaHRlZENhbGN1bGF0aW9ucyIsImEiLCJhcnIiLCJpIiwibGVuZ3RoIiwiaiIsInJlc3VsdCIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiY3VyIiwibW92aWVJZCIsImZvdW5kIiwiZmluZCIsImVsZW0iLCJ3cyIsInNpbSIsIndzU2ltIiwic29ydCIsImIiLCJwYXJzZUZsb2F0Iiwid2VpZ2h0ZWRTY29yZSIsIndTY29yZSIsInJhdGluZyIsImV1Y2xpZGVhblVzZXIiLCJuIiwiaW52IiwicGVhcnNvbkNvcnJlbGF0aW9uIiwic3VtMSIsInN1bTIiLCJzdW0xc3EiLCJzdW0yc3EiLCJwU3VtIiwibnVtIiwiZGVuIiwiTWF0aCIsInNxcnQiLCJldWNsaWRlYW5BUEkiLCJyZXEiLCJyZXMiLCJxdWVyeSIsImRiIiwib3BlbiIsImZpbGVuYW1lIiwiZHJpdmVyIiwiRGF0YWJhc2UiLCJnZXRVc2VyIiwidXNlclJhdGluZ3MiLCJnZXRVc2VyUmF0aW5ncyIsIm90aGVyVXNlcnMiLCJnZXRVc2VyRXhjZXB0IiwiZVVzZXJTaW1pbGFyaXR5IiwiZVdTY29yZXMiLCJwQ1VzZXJTaW1pbGFyaXR5IiwicGNXU2NvcmVzIiwic3ViSWQiLCJuYW1lIiwib3RoZXJVc2VyUmF0aW5ncyIsImdldFVzZXJzUmF0aW5nc0V4Y2VwdCIsImV1Y2xpZGVhblNjb3JlIiwicENTY29yZSIsIm90aGVyVXNlclJhdGluZ3MyIiwiZ2V0VXNlckV4Y2VwdE1haW5Vc2VyTW92aWVzIiwiZVdTY29yZSIsIndlaWdodGVkX3Njb3JlcyIsInVzZXJfbmFtZSIsInBjV1Njb3JlIiwicGVhcnNvblNjb3JlIiwiZVdDYWxjIiwicENXQ2FsYyIsInkiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsImFsbCIsImdldFVzZXJzRXhjZXB0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtR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Q2lDLEdBQUgsQ0FBTyxtSkFBUCxFQUE0SixDQUFDM0UsRUFBRCxDQUE1SixDQUEvQzs7QUFFZWlELDZFQUFmLEU7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUEsTUFBTTJCLGNBQWMsR0FBRyxPQUFPbEMsRUFBUCxFQUFXMUMsRUFBWCxLQUFrQixNQUFNMEMsRUFBRSxDQUFDaUMsR0FBSCxDQUFPLDRJQUFQLEVBQXFKLENBQUMzRSxFQUFELENBQXJKLENBQS9DOztBQUVlNEUsNkVBQWYsRTs7Ozs7Ozs7Ozs7QUNGQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJwYWdlcy9hcGkvc2ltL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9zaW0vW2lkXS50c1wiKTtcbiIsImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuXHJcbmltcG9ydCBnZXRVc2VyIGZyb20gJy4uLy4uLy4uL3NxbC9nZXRVc2VyJztcclxuaW1wb3J0IGdldFVzZXJFeGNlcHQgZnJvbSAnLi4vLi4vLi4vc3FsL2dldFVzZXJFeGNlcHQnO1xyXG5pbXBvcnQgZ2V0VXNlclJhdGluZ3MgZnJvbSAnLi4vLi4vLi4vc3FsL2dldFVzZXJSYXRpbmdzJztcclxuaW1wb3J0IGdldFVzZXJzUmF0aW5nc0V4Y2VwdCBmcm9tICcuLi8uLi8uLi9zcWwvZ2V0VXNlclJhdGluZ3NFeGNlcHQnO1xyXG5pbXBvcnQgZ2V0VXNlckV4Y2VwdE1haW5Vc2VyTW92aWVzIGZyb20gJy4uLy4uLy4uL3NxbC9nZXRVc2VyRXhjZXB0TWFpblVzZXJNb3ZpZXMnO1xyXG5cclxuY29uc3Qgc3FsaXRlMyA9IHJlcXVpcmUoJ3NxbGl0ZTMnKTtcclxuY29uc3Qgc3FsaXRlID0gcmVxdWlyZSgnc3FsaXRlJyk7XHJcblxyXG5jb25zdCBidWlsZEpzb24gPSBhc3luYyAodXNlcjogQXJyYXk8YW55PiwgZVVzZXJNYXRjaDogQXJyYXk8YW55PiwgZU1vdmllUmVjb21tZW5kczogQXJyYXk8YW55PiwgcENVc2VyTWF0Y2g6IEFycmF5PGFueT4sIHBDTW92aWVSZWNvbW1lbmRzOiBBcnJheTxhbnk+KSA9PiB7XHJcblxyXG4gICAgdXNlclswXVsndG9wX21hdGNoaW5nX3VzZXJzJ10gPSBbXTtcclxuICAgIHVzZXJbMF1bJ3RvcF9tYXRjaGluZ191c2VycyddLnB1c2goeyBldWNsaWRlYW46IFtdIH0pO1xyXG4gICAgdXNlclswXVsndG9wX21hdGNoaW5nX3VzZXJzJ11bMF1bJ2V1Y2xpZGVhbiddID0gZVVzZXJNYXRjaDtcclxuICAgIHVzZXJbMF1bJ3RvcF9tYXRjaGluZ191c2VycyddLnB1c2goeyBwZWFyc29uX2NvcnJlbGF0aW9uOiBbXSB9KTtcclxuICAgIHVzZXJbMF1bJ3RvcF9tYXRjaGluZ191c2VycyddWzFdWydwZWFyc29uX2NvcnJlbGF0aW9uJ10gPSBwQ1VzZXJNYXRjaDtcclxuXHJcbiAgICB1c2VyWzBdWydyZWNvbW1lbmRlZF9tb3ZpZXMnXSA9IFtdO1xyXG4gICAgdXNlclswXVsncmVjb21tZW5kZWRfbW92aWVzJ10ucHVzaCh7IGV1Y2xpZGVhbjogW10gfSk7XHJcbiAgICB1c2VyWzBdWydyZWNvbW1lbmRlZF9tb3ZpZXMnXVswXVsnZXVjbGlkZWFuJ10gPSBlTW92aWVSZWNvbW1lbmRzLm1hcCh4ID0+IHtcclxuICAgICAgICByZXR1cm4geyB0aXRsZTogeFsndGl0bGUnXSwgaWQ6IHhbJ21vdmllSWQnXSwgc2NvcmU6IHhbJ3dzU2ltJ10gfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlclswXVsncmVjb21tZW5kZWRfbW92aWVzJ10ucHVzaCh7IHBlYXJzb25fY29ycmVsYXRpb246IFtdIH0pO1xyXG4gICAgdXNlclswXVsncmVjb21tZW5kZWRfbW92aWVzJ11bMV1bJ3BlYXJzb25fY29ycmVsYXRpb24nXSA9IHBDTW92aWVSZWNvbW1lbmRzLm1hcCh4ID0+IHtcclxuICAgICAgICByZXR1cm4geyB0aXRsZTogeFsndGl0bGUnXSwgaWQ6IHhbJ21vdmllSWQnXSwgc2NvcmU6IHhbJ3dzU2ltJ10gfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbGwgdXNlciByYXRpbmdzIGluIGFuIGFycmF5IHdpdGggcmVzcGVjdGl2ZSB3ZWlnaHRlZCB2YWx1ZXMuIFRoZW4gdHJ5IHRvIGZpbmQgdGhlIGR1cGxpY2F0ZXMgYW5kIGFkZCB0aGUgc2NvcmVzIFxyXG4gKiBAcGFyYW0gYSBcclxuICovXHJcbmNvbnN0IHdlaWdodGVkQ2FsY3VsYXRpb25zID0gYXN5bmMgKGE6IEFycmF5PGFueT4pID0+IHtcclxuICAgIFxyXG4gICAgbGV0IGFycjogQXJyYXk8YW55PiA9IFtdOyAvLyBhcnJheSBmb3IgY29uY2F0XHJcblxyXG4gICAgLyogd3N1bSAqL1xyXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgYVtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBhcnIucHVzaChhW2ldW2pdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlc3VsdCA9IGFyci5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXIpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGlkID0gY3VyLm1vdmllSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGZvdW5kOiBhbnkgPSBhY2N1bXVsYXRvci5maW5kKChlbGVtOiB7IG1vdmllSWQ6IGFueTsgfSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbS5tb3ZpZUlkID09IGlkO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8qIElmIHdlIGZpbmQgZHVwbGljYXRlcyB3ZSBkbyB0aGUgd2VpZ2h0ZWQgY2FsY3VsYXRpb25zICovXHJcbiAgICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgICAgIGZvdW5kLndzICs9IGN1ci53czsgLy8gc3VtIHNjb3JlXHJcbiAgICAgICAgICAgIGZvdW5kLnNpbSArPSBjdXIuc2ltOyAvLyBzdW0gc2ltIGZvciBtb3ZpZVxyXG4gICAgICAgICAgICBmb3VuZC53c1NpbSA9IGZvdW5kLndzIC8gZm91bmQuc2ltOyAvLyBlbmQgcmVjb21tZW5kYXRpb24gc2NvcmVcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogLi4uIGVsc2Ugd2UganVzdCBwdXNoIHRoZSBzaW5nbGUgaW50byB0aGUgYWNjdW11bGF0b3IgKi9cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY3VyLndzU2ltID0gY3VyLndzIC8gY3VyLnNpbTsgLy8gc3RpbGwgbmVlZCB0byBjYWxjdWxhdGUgZW5kIHNjb3JlIGlmIG9ubHkgb25lIGlzIGZvdW5kXHJcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLnB1c2goY3VyKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7IC8vIHJldHVybiB0byByZXN1bHRcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLyogc29ydCB3c1NpbSAoZW5kIHNjb3JlKSBkZXNjZW5kaW5nIG9yZGVyICovXHJcbiAgICByZXN1bHQuc29ydCgoYTogeyB3c1NpbTogYW55OyB9LCBiOiB7IHdzU2ltOiBhbnk7IH0pID0+XHJcbiAgICAgICAgcGFyc2VGbG9hdChiLndzU2ltKSAtIHBhcnNlRmxvYXQoYS53c1NpbSlcclxuICAgICk7IFxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGluZyB3ZWlnaHRlZCBzY29yZVxyXG4gKiBAcGFyYW0gYSBcclxuICovXHJcbmNvbnN0IHdlaWdodGVkU2NvcmUgPSBhc3luYyAoYTogYW55LCBzaW06IG51bWJlcikgPT4ge1xyXG4gICAgbGV0IGFycjogQXJyYXk8YW55PiA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCB3U2NvcmU6IG51bWJlciA9IGFbaV1bJ3JhdGluZyddICogc2ltO1xyXG5cclxuICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgIG1vdmllSWQ6IGFbaV1bJ21vdmllSWQnXSxcclxuICAgICAgICAgICAgdGl0bGU6IGFbaV1bJ3RpdGxlJ10sXHJcbiAgICAgICAgICAgIHJhdGluZzogYVtpXVsncmF0aW5nJ10sXHJcbiAgICAgICAgICAgIHdTY29yZTogd1Njb3JlLFxyXG4gICAgICAgICAgICB3czogd1Njb3JlLFxyXG4gICAgICAgICAgICBzaW06IHNpbSxcclxuICAgICAgICAgICAgd3NTaW06IDBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycjtcclxufVxyXG4gXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGluZyBldWNsaWRlYW4gc2NvcmVcclxuICogQHBhcmFtIGEgXHJcbiAqIEBwYXJhbSBiIFxyXG4gKi9cclxuY29uc3QgZXVjbGlkZWFuVXNlciA9IGFzeW5jIChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgbGV0IHNpbTogbnVtYmVyID0gMDsgLy8gaW50ZWdlclxyXG4gICAgbGV0IG46IG51bWJlciA9IDA7IC8vICBjb3VudGVyIGZvciBudW1iZXIgb2YgbWF0Y2hpbmcgcHJvZHVjdHNcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGIubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGFbaV1bJ21vdmllSWQnXSA9PSBiW2pdWydtb3ZpZUlkJ10pIHtcclxuICAgICAgICAgICAgICAgIHNpbSArPSAoYVtpXVsncmF0aW5nJ10gLSBiW2pdWydyYXRpbmcnXSkgKiogMjtcclxuICAgICAgICAgICAgICAgIG4gKz0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobiA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGludjogbnVtYmVyID0gMSAvICgxICsgc2ltKTtcclxuXHJcbiAgICByZXR1cm4gaW52O1xyXG59O1xyXG5cclxuY29uc3QgcGVhcnNvbkNvcnJlbGF0aW9uID0gYXN5bmMgKGE6IGFueSwgYjogYW55KSA9PiB7XHJcbiAgICBsZXQgc3VtMSA9IDAsXHJcbiAgICAgICAgc3VtMiA9IDAsXHJcbiAgICAgICAgc3VtMXNxID0gMCxcclxuICAgICAgICBzdW0yc3EgPSAwLFxyXG4gICAgICAgIHBTdW0gPSAwLFxyXG4gICAgICAgIG4gPSAwXHJcbiAgICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYi5sZW5ndGg7IGorKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKGFbaV1bJ21vdmllSWQnXSA9PSBiW2pdWydtb3ZpZUlkJ10pIHtcclxuICAgICAgICAgICAgICAgIHN1bTEgKz0gYVtpXVsncmF0aW5nJ11cclxuICAgICAgICAgICAgICAgIHN1bTIgKz0gYltqXVsncmF0aW5nJ11cclxuXHJcbiAgICAgICAgICAgICAgICBzdW0xc3EgKz0gYVtpXVsncmF0aW5nJ10gKiogMlxyXG4gICAgICAgICAgICAgICAgc3VtMnNxICs9IGJbal1bJ3JhdGluZyddICoqIDJcclxuXHJcbiAgICAgICAgICAgICAgICBwU3VtICs9IGFbaV1bJ3JhdGluZyddICogYltqXVsncmF0aW5nJ11cclxuXHJcbiAgICAgICAgICAgICAgICBuICs9IDFcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG4gPT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG51bSA9IHBTdW0gLSAoc3VtMSAqIHN1bTIgLyBuKVxyXG4gICAgbGV0IGRlbiA9IE1hdGguc3FydCgoc3VtMXNxIC0gc3VtMSAqKiAyIC8gbikgKiAoc3VtMnNxIC0gc3VtMiAqKiAyIC8gbikpXHJcblxyXG4gICAgcmV0dXJuIG51bS9kZW47XHJcbn1cclxuXHJcbmNvbnN0IGV1Y2xpZGVhbkFQSSA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc3QgaWQ6IGFueSA9IHJlcS5xdWVyeS5pZDsgLy8gbWFpbiB1c2VyXHJcblxyXG4gICAgLyogRXN0YWJsaXNoIERCIGNvbm5lY3Rpb24gKi9cclxuICAgIGNvbnN0IGRiID0gYXdhaXQgc3FsaXRlLm9wZW4oe1xyXG4gICAgICAgIGZpbGVuYW1lOiAnLi9teWRiLnNxbGl0ZScsXHJcbiAgICAgICAgZHJpdmVyOiBzcWxpdGUzLkRhdGFiYXNlXHJcbiAgICB9KTtcclxuICAgXHJcbiAgICAvKiBzcWwgKi9cclxuICAgIGxldCB1c2VyOiBhbnkgPSBhd2FpdCBnZXRVc2VyKGRiLCBpZCk7IC8vIHNxbFxyXG4gICAgLyogUmV0cmlldmUgcmF0aW5ncyB0aGF0IGJlbG9uZ3MgdG8gbWFpbiB1c2VyICovXHJcbiAgICBsZXQgdXNlclJhdGluZ3M6IGFueSA9IGF3YWl0IGdldFVzZXJSYXRpbmdzKGRiLCBpZCk7IC8vIHNxbFxyXG5cclxuICAgIC8qIEFsbCBvdGhlciB1c2VycyAqL1xyXG4gICAgbGV0IG90aGVyVXNlcnM6IGFueSA9IGF3YWl0IGdldFVzZXJFeGNlcHQoZGIsIGlkKTsgLy8gc3FsXHJcblxyXG4gICAgbGV0IGVVc2VyU2ltaWxhcml0eTogQXJyYXk8YW55PiA9IFtdOyAvLyBhZGRpbmcgZXVjbGlkZWFuIHJlc3VsdCBoZXJlXHJcbiAgICBsZXQgZVdTY29yZXM6IEFycmF5PGFueT4gPSBbXTtcclxuXHJcbiAgICBsZXQgcENVc2VyU2ltaWxhcml0eTogQXJyYXk8YW55PiA9IFtdOyAvLyBhZGRpbmcgcGVhcnNvbiBjb3JyZWxhdGlvbiByZXN1bHQgaGVyZVxyXG4gICAgbGV0IHBjV1Njb3JlczogQXJyYXk8YW55PiA9IFtdO1xyXG5cclxuICAgIC8qIEdldHRpbmcgdGhlIHNpbWlsYXJpdHkgYmV0d2VlbiB1c2VycyAqL1xyXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG90aGVyVXNlcnMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgbGV0IHN1YklkOiBudW1iZXIgPSBvdGhlclVzZXJzW2ldWydpZCddO1xyXG4gICAgICAgIGxldCBuYW1lOiBTdHJpbmcgPSBvdGhlclVzZXJzW2ldWyduYW1lJ107XHJcblxyXG4gICAgICAgIC8qIFJldHJpZXZlIHJhdGluZ3MgZm9yIGFsbCB0aGUgb3RoZXIgdXNlcnMgKi9cclxuICAgICAgICBsZXQgb3RoZXJVc2VyUmF0aW5nczogYW55ID0gYXdhaXQgZ2V0VXNlcnNSYXRpbmdzRXhjZXB0KGRiLCBzdWJJZCkgLy8gc3FsXHJcblxyXG4gICAgICAgIGxldCBldWNsaWRlYW5TY29yZTogYW55ID0gYXdhaXQgZXVjbGlkZWFuVXNlcih1c2VyUmF0aW5ncywgb3RoZXJVc2VyUmF0aW5ncyk7IC8vIGdldCBldWNsaWRlYW4gc2NvcmVcclxuICAgICAgICBsZXQgcENTY29yZTogYW55ID0gYXdhaXQgcGVhcnNvbkNvcnJlbGF0aW9uKHVzZXJSYXRpbmdzLCBvdGhlclVzZXJSYXRpbmdzKTsgLy8gZ2V0IGV1Y2xpZGVhbiBzY29yZVxyXG5cclxuICAgICAgICAvKiBSZXRyaWV2ZSByYXRpbmdzIGZvciBhbGwgdGhlIG90aGVyIHVzZXJzIGFnYWluLCBidXQgbm93IHdpdGhvdXQgdGhlIG1vdmllcyB0aGF0IG1haW4gdXNlciBoYXMgcmF0ZWQgKi9cclxuICAgICAgICBsZXQgb3RoZXJVc2VyUmF0aW5nczI6IGFueSA9IGF3YWl0IGdldFVzZXJFeGNlcHRNYWluVXNlck1vdmllcyhkYiwgaWQsIHN1YklkKTsgLy8gc3FsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8qIEV1Y2xpZGVhbiAqL1xyXG4gICAgICAgIGxldCBlV1Njb3JlOiBhbnkgPSBhd2FpdCB3ZWlnaHRlZFNjb3JlKG90aGVyVXNlclJhdGluZ3MyLCBldWNsaWRlYW5TY29yZSk7IC8vIGdldCB3ZWlnaHRlciBzY29yZVxyXG4gICAgICAgIGVXU2NvcmVzLnB1c2goe3dlaWdodGVkX3Njb3JlczogZVdTY29yZX0pO1xyXG4gICAgXHJcbiAgICAgICAgLyogUHVzaCBvYmplY3RzICovXHJcbiAgICAgICAgZVVzZXJTaW1pbGFyaXR5LnB1c2goe1xyXG4gICAgICAgICAgICBpZDogc3ViSWQsXHJcbiAgICAgICAgICAgIHVzZXJfbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgZXVjbGlkZWFuU2NvcmU6IGV1Y2xpZGVhblNjb3JlLFxyXG4gICAgICAgIH0pOyAgXHJcblxyXG4gICAgICAgIC8qIFBlYXJzb24gQ29ycmVsYXRpb24gYWJvdmUgMCAqL1xyXG4gICAgICAgIGlmIChwQ1Njb3JlID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcGNXU2NvcmU6IGFueSA9IGF3YWl0IHdlaWdodGVkU2NvcmUob3RoZXJVc2VyUmF0aW5nczIsIHBDU2NvcmUpOyAvLyBnZXQgd2VpZ2h0ZXIgc2NvcmVcclxuICAgICAgICAgICAgcGNXU2NvcmVzLnB1c2goeyB3ZWlnaHRlZF9zY29yZXM6IHBjV1Njb3JlIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLyogUHVzaCBvYmplY3RzICovXHJcbiAgICAgICAgICAgIHBDVXNlclNpbWlsYXJpdHkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogc3ViSWQsXHJcbiAgICAgICAgICAgICAgICB1c2VyX25hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBwZWFyc29uU2NvcmU6IHBDU2NvcmUsXHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIC8qIFNvcnQgc2ltaWxhcml0eSBoaWdoZXN0IHRvIGxvd2VzdCAqL1xyXG4gICAgLyogRXVjbGlkZWFuICovXHJcbiAgICBlVXNlclNpbWlsYXJpdHkuc29ydCgoYTogeyBldWNsaWRlYW5TY29yZTogYW55OyB9LCBiOiB7IGV1Y2xpZGVhblNjb3JlOiBhbnk7IH0pID0+XHJcbiAgICBwYXJzZUZsb2F0KGIuZXVjbGlkZWFuU2NvcmUpIC0gcGFyc2VGbG9hdChhLmV1Y2xpZGVhblNjb3JlKVxyXG4gICAgKTsgXHJcbiAgICAvLyAvKiBQZWFyc29uIENvcnJlbGF0aW9uICovXHJcbiAgICBwQ1VzZXJTaW1pbGFyaXR5LnNvcnQoKGE6IHsgcGVhcnNvblNjb3JlOiBhbnk7IH0sIGI6IHsgcGVhcnNvblNjb3JlOiBhbnk7IH0pID0+XHJcbiAgICBwYXJzZUZsb2F0KGIucGVhcnNvblNjb3JlKSAtIHBhcnNlRmxvYXQoYS5wZWFyc29uU2NvcmUpXHJcbiAgICApOyBcclxuICAgIFxyXG4gICAgbGV0IGVXQ2FsYyA9IGF3YWl0IHdlaWdodGVkQ2FsY3VsYXRpb25zKGVXU2NvcmVzLm1hcCh4ID0+IHhbJ3dlaWdodGVkX3Njb3JlcyddKSk7XHJcbiAgICBsZXQgcENXQ2FsYyA9IGF3YWl0IHdlaWdodGVkQ2FsY3VsYXRpb25zKHBjV1Njb3Jlcy5tYXAoeSA9PiB5Wyd3ZWlnaHRlZF9zY29yZXMnXSkpO1xyXG5cclxuICAgIHJlcy5qc29uKEpTT04uc3RyaW5naWZ5KGF3YWl0IGJ1aWxkSnNvbih1c2VyLCBlVXNlclNpbWlsYXJpdHksIGVXQ2FsYywgcENVc2VyU2ltaWxhcml0eSwgcENXQ2FsYyksIG51bGwsIDIpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXVjbGlkZWFuQVBJOyIsImNvbnN0IGdldFVzZXIgPSBhc3luYyAoZGIsIGlkKSA9PiBhd2FpdCBkYi5hbGwoJ1NFTEVDVCAqIEZST00gdXNlcnMgd2hlcmUgaWQgPSA/JywgW2lkXSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRVc2VyOyIsImNvbnN0IGdldFVzZXIgPSBhc3luYyAoZGIsIGlkKSA9PiBhd2FpdCBkYi5hbGwoJ1NFTEVDVCBuYW1lLCBpZCBGUk9NIHVzZXJzIHdoZXJlIGlkICE9ID8nLCBbaWRdKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFVzZXI7IiwiY29uc3QgZ2V0VXNlckV4Y2VwdE1haW5Vc2VyTW92aWVzID0gYXN5bmMgKGRiLCBpZCwgc3ViSWQpID0+IGF3YWl0IGRiLmFsbCgnU0VMRUNUIHJhdGluZ3MubW92aWVJZCwgdGl0bGUsIHJhdGluZ3MucmF0aW5nIEZST00gcmF0aW5ncywgdXNlcnMsIG1vdmllcyBXSEVSRSB1c2Vycy5pZCA9IHVzZXJJZCBBTkQgbW92aWVzLmlkID0gbW92aWVJZCBBTkQgdXNlcnMuaWQgPSA/IEFORCBtb3ZpZUlkIE5PVCBJTiAoU0VMRUNUIHJhdGluZ3MubW92aWVJZCBGUk9NIHJhdGluZ3MsIHVzZXJzLCBtb3ZpZXMgV0hFUkUgdXNlcnMuaWQgPSB1c2VySWQgQU5EIG1vdmllcy5pZCA9IG1vdmllSWQgQU5EIHVzZXJzLmlkID0gPyknLCBbc3ViSWQsIGlkXSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFVzZXJFeGNlcHRNYWluVXNlck1vdmllczsiLCJjb25zdCBnZXRVc2VyUmF0aW5ncyA9IGFzeW5jIChkYiwgaWQpID0+IGF3YWl0IGRiLmFsbCgnU0VMRUNUIHVzZXJJZCwgbW92aWVzLnRpdGxlLCBtb3ZpZUlkLCByYXRpbmdzLnJhdGluZyBGUk9NIHJhdGluZ3MsIHVzZXJzLCBtb3ZpZXMgV0hFUkUgdXNlcnMuaWQgPSB1c2VySWQgQU5EIG1vdmllcy5pZCA9IG1vdmllSWQgQU5EIHVzZXJzLmlkID0gPycsIFtpZF0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0VXNlclJhdGluZ3M7IiwiY29uc3QgZ2V0VXNlcnNFeGNlcHQgPSBhc3luYyAoZGIsIGlkKSA9PiBhd2FpdCBkYi5hbGwoJ1NFTEVDVCByYXRpbmdzLm1vdmllSWQsIHRpdGxlLCByYXRpbmdzLnJhdGluZyBGUk9NIHJhdGluZ3MsIHVzZXJzLCBtb3ZpZXMgV0hFUkUgdXNlcnMuaWQgPSB1c2VySWQgQU5EIG1vdmllcy5pZCA9IG1vdmllSWQgQU5EIHVzZXJzLmlkID0gPycsIFtpZF0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0VXNlcnNFeGNlcHQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3FsaXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNxbGl0ZTNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==