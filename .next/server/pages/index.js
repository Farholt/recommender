module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\fredr\\Documents\\Universitet\\HT20\\2DV515 - Web Intelligence\\A1\\pages\\index.tsx";

/* Lib */



const Index = () => {
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    0: isLoaded,
    1: setIsLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: users,
    1: setUsers
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]); // get users

  const {
    0: target,
    1: setTarget
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0); // target user

  const {
    0: sim,
    1: setSim
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0); // chosen similarity

  const {
    0: euclidean,
    1: setEuclidean
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]); // recommendations

  const {
    0: pearson,
    1: setPearson
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]); // recommendations

  const fetchUsers = async () => {
    await fetch('/api/users').then(res => res.json()).then(result => {
      setIsLoaded(true);
      setUsers(result);
      setTarget(result[0].id); // first user as default
    });
  };

  const fetchStats = async id => {
    await fetch(`/api/sim/${id}`).then(res => res.json()).then(result => {
      setIsLoaded(true);
      setEuclidean([{
        matching_users: result[0]['top_matching_users'][0]['euclidean'],
        matching_movies: result[0]['recommended_movies'][0]['euclidean']
      }]);
      setPearson([{
        matching_users: result[0]['top_matching_users'][1]['pearson_correlation'],
        matching_movies: result[0]['recommended_movies'][1]['pearson_correlation']
      }]);
    }, error => {
      setIsLoaded(true);
      setError(error);
    });
  };

  const handleUserChange = e => {
    setTarget(parseInt(e.target.value));
  };

  const handleSimChange = e => {
    setSim(parseInt(e.target.value));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    fetchUsers();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    target != 0 ? fetchStats(target) : null;
  }, [target]);
  let simList = [{
    value: 1,
    description: 'Euclidean'
  }, {
    value: 2,
    description: 'Pearson Colleration'
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(['container'], ['m-5']),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(['row'], ['mb-3']),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(['col-sm']),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          className: "custom-select",
          onChange: handleUserChange,
          children: users && users.map((u, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: u.id,
            children: [u.id, ": ", u.name]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 68
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(['col-sm']),
        onChange: handleSimChange,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          className: "custom-select",
          children: simList && simList.map((sim, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: i,
            children: sim.description
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 74
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(['row']),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(['col-sm']),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(['mt-3'], ['mb-3']),
          children: ["Movie Recommendations (", sim == 0 ? "Euclidean" : "Pearson Colleration", ")"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(['table']),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "#"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "Score"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: [sim == 0 && euclidean && euclidean.map((euc, i) => euc['matching_movies'].map((movies, j) => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  scope: 'row',
                  children: movies['id']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 45
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: movies['title']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 45
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: movies['score'].toFixed(4)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 45
                }, undefined)]
              }, j, true, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 48
              }, undefined);
            })), sim == 1 && pearson && pearson.map((euc, i) => euc['matching_movies'].map((movies, j) => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  scope: 'row',
                  children: movies['id']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 45
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: movies['title']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 45
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: movies['score'].toFixed(4)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 45
                }, undefined)]
              }, j, true, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 48
              }, undefined);
            }))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(['mt-3'], ['mb-3']),
            children: ["Top Matching Users (", sim == 0 ? "Euclidean" : "Pearson Colleration", ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "#"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "User"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "Score"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: [sim == 0 && euclidean && euclidean.map((euc, i) => euc['matching_users'].map((movies, j) => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  scope: 'row',
                  children: movies['id']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 45
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: movies['user_name']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 45
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: movies['euclideanScore'].toFixed(4)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 45
                }, undefined)]
              }, j, true, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 48
              }, undefined);
            })), sim == 1 && pearson && pearson.map((euc, i) => euc['matching_users'].map((movies, j) => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  scope: 'row',
                  children: movies['id']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 45
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: movies['user_name']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 45
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: movies['pearsonScore'].toFixed(4)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 45
                }, undefined)]
              }, j, true, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 48
              }, undefined);
            }))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkluZGV4IiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZVN0YXRlIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsInVzZXJzIiwic2V0VXNlcnMiLCJ0YXJnZXQiLCJzZXRUYXJnZXQiLCJzaW0iLCJzZXRTaW0iLCJldWNsaWRlYW4iLCJzZXRFdWNsaWRlYW4iLCJwZWFyc29uIiwic2V0UGVhcnNvbiIsImZldGNoVXNlcnMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0IiwiaWQiLCJmZXRjaFN0YXRzIiwibWF0Y2hpbmdfdXNlcnMiLCJtYXRjaGluZ19tb3ZpZXMiLCJoYW5kbGVVc2VyQ2hhbmdlIiwiZSIsInBhcnNlSW50IiwidmFsdWUiLCJoYW5kbGVTaW1DaGFuZ2UiLCJ1c2VFZmZlY3QiLCJzaW1MaXN0IiwiZGVzY3JpcHRpb24iLCJjeCIsIm1hcCIsInUiLCJpIiwibmFtZSIsImV1YyIsIm1vdmllcyIsImoiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtR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QUFBQSwyQkFBUDtBQUtILGFBUEQsQ0FEbUIsQ0FqQi9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkE5Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFrR0gsQ0FyS0Q7O0FBdUtlekMsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUMzS0EsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsIi8qIExpYiAqL1xyXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTsgLy8gZ2V0IHVzZXJzXHJcbiAgICBjb25zdCBbdGFyZ2V0LCBzZXRUYXJnZXRdID0gdXNlU3RhdGUoMCk7IC8vIHRhcmdldCB1c2VyXHJcbiAgICBjb25zdCBbc2ltLCBzZXRTaW1dID0gdXNlU3RhdGUoMCk7IC8vIGNob3NlbiBzaW1pbGFyaXR5XHJcblxyXG4gICAgY29uc3QgW2V1Y2xpZGVhbiwgc2V0RXVjbGlkZWFuXSA9IHVzZVN0YXRlKFtdKSAvLyByZWNvbW1lbmRhdGlvbnNcclxuICAgIGNvbnN0IFtwZWFyc29uLCBzZXRQZWFyc29uXSA9IHVzZVN0YXRlKFtdKSAvLyByZWNvbW1lbmRhdGlvbnNcclxuXHJcbiAgICBjb25zdCBmZXRjaFVzZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGZldGNoKCcvYXBpL3VzZXJzJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJzKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGFyZ2V0KHJlc3VsdFswXS5pZCk7IC8vIGZpcnN0IHVzZXIgYXMgZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmV0Y2hTdGF0cyA9IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYC9hcGkvc2ltLyR7aWR9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEV1Y2xpZGVhbihbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nX3VzZXJzOiByZXN1bHRbMF1bJ3RvcF9tYXRjaGluZ191c2VycyddWzBdWydldWNsaWRlYW4nXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nX21vdmllczogcmVzdWx0WzBdWydyZWNvbW1lbmRlZF9tb3ZpZXMnXVswXVsnZXVjbGlkZWFuJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFBlYXJzb24oW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGluZ191c2VyczogcmVzdWx0WzBdWyd0b3BfbWF0Y2hpbmdfdXNlcnMnXVsxXVsncGVhcnNvbl9jb3JyZWxhdGlvbiddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hpbmdfbW92aWVzOiByZXN1bHRbMF1bJ3JlY29tbWVuZGVkX21vdmllcyddWzFdWydwZWFyc29uX2NvcnJlbGF0aW9uJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVzZXJDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgc2V0VGFyZ2V0KHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2ltQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICAgIHNldFNpbShwYXJzZUludChlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hVc2VycygpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB0YXJnZXQgIT0gMCA/IGZldGNoU3RhdHModGFyZ2V0KSA6IG51bGw7XHJcbiAgICB9LCBbdGFyZ2V0XSlcclxuXHJcbiAgICBsZXQgc2ltTGlzdCA9IFt7IHZhbHVlOiAxLCBkZXNjcmlwdGlvbjogJ0V1Y2xpZGVhbicgfSwgeyB2YWx1ZTogMiwgZGVzY3JpcHRpb246ICdQZWFyc29uIENvbGxlcmF0aW9uJyB9XTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChbJ2NvbnRhaW5lciddLCBbJ20tNSddKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChbJ3JvdyddLCBbJ21iLTMnXSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFsnY29sLXNtJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImN1c3RvbS1zZWxlY3RcIiBvbkNoYW5nZT17aGFuZGxlVXNlckNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VycyAmJiB1c2Vycy5tYXAoKHU6IGFueSwgaTogbnVtYmVyKSA9PiA8b3B0aW9uIHZhbHVlPXt1LmlkfSBrZXk9e2l9Pnt1LmlkfToge3UubmFtZX08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goWydjb2wtc20nXSl9IG9uQ2hhbmdlPXtoYW5kbGVTaW1DaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2ltTGlzdCAmJiBzaW1MaXN0Lm1hcCgoc2ltOiBhbnksIGk6IG51bWJlcikgPT4gPG9wdGlvbiB2YWx1ZT17aX0ga2V5PXtpfT57c2ltLmRlc2NyaXB0aW9ufTwvb3B0aW9uPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChbJ3JvdyddKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goWydjb2wtc20nXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2N4KFsnbXQtMyddLCBbJ21iLTMnXSl9Pk1vdmllIFJlY29tbWVuZGF0aW9ucyAoe3NpbSA9PSAwID8gXCJFdWNsaWRlYW5cIiA6IFwiUGVhcnNvbiBDb2xsZXJhdGlvblwifSk8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e2N4KFsndGFibGUnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlRpdGxlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlNjb3JlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRXVjbGlkZWFuICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbSA9PSAwICYmIGV1Y2xpZGVhbiAmJiBldWNsaWRlYW4ubWFwKChldWM6IGFueSwgaTogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldWNbJ21hdGNoaW5nX21vdmllcyddLm1hcCgobW92aWVzOiBhbnksIGo6IG51bWJlcikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ciBrZXk9e2p9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT17J3Jvdyd9Pnttb3ZpZXNbJ2lkJ119PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21vdmllc1sndGl0bGUnXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bW92aWVzWydzY29yZSddLnRvRml4ZWQoNCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQZWFyc29uICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbSA9PSAxICYmIHBlYXJzb24gJiYgcGVhcnNvbi5tYXAoKGV1YzogYW55LCBpOiBudW1iZXIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV1Y1snbWF0Y2hpbmdfbW92aWVzJ10ubWFwKChtb3ZpZXM6IGFueSwgajogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRyIGtleT17an0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPXsncm93J30+e21vdmllc1snaWQnXX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bW92aWVzWyd0aXRsZSddfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttb3ZpZXNbJ3Njb3JlJ10udG9GaXhlZCg0KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjeChbJ210LTMnXSwgWydtYi0zJ10pfT5Ub3AgTWF0Y2hpbmcgVXNlcnMgKHtzaW0gPT0gMCA/IFwiRXVjbGlkZWFuXCIgOiBcIlBlYXJzb24gQ29sbGVyYXRpb25cIn0pPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Vc2VyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlNjb3JlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRXVjbGlkZWFuICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbSA9PSAwICYmIGV1Y2xpZGVhbiAmJiBldWNsaWRlYW4ubWFwKChldWM6IGFueSwgaTogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldWNbJ21hdGNoaW5nX3VzZXJzJ10ubWFwKChtb3ZpZXM6IGFueSwgajogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRyIGtleT17an0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPXsncm93J30+e21vdmllc1snaWQnXX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bW92aWVzWyd1c2VyX25hbWUnXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bW92aWVzWydldWNsaWRlYW5TY29yZSddLnRvRml4ZWQoNCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQZWFyc29uICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbSA9PSAxICYmIHBlYXJzb24gJiYgcGVhcnNvbi5tYXAoKGV1YzogYW55LCBpOiBudW1iZXIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV1Y1snbWF0Y2hpbmdfdXNlcnMnXS5tYXAoKG1vdmllczogYW55LCBqOiBudW1iZXIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dHIga2V5PXtqfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9eydyb3cnfT57bW92aWVzWydpZCddfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttb3ZpZXNbJ3VzZXJfbmFtZSddfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttb3ZpZXNbJ3BlYXJzb25TY29yZSddLnRvRml4ZWQoNCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==