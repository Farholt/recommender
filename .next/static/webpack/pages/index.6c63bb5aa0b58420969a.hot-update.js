webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\Users\\fredr\\Documents\\Universitet\\HT20\\2DV515 - Web Intelligence\\A1\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

/* Lib */



var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isLoaded = _useState2[0],
      setIsLoaded = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      users = _useState3[0],
      setUsers = _useState3[1]; // get users


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      target = _useState4[0],
      setTarget = _useState4[1]; // target user


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      sim = _useState5[0],
      setSim = _useState5[1]; // chosen similarity


  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      euclidean = _useState6[0],
      setEuclidean = _useState6[1]; // recommendations


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      pearson = _useState7[0],
      setPearson = _useState7[1]; // recommendations


  var fetchUsers = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('/api/users').then(function (res) {
                return res.json();
              }).then(function (result) {
                setIsLoaded(true);
                setUsers(result);
                setTarget(result[0].id); // first user as default
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchUsers() {
      return _ref.apply(this, arguments);
    };
  }();

  var fetchStats = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch("/api/sim/".concat(id)).then(function (res) {
                return res.json();
              }).then(function (result) {
                setIsLoaded(true);
                setEuclidean([{
                  matching_users: result[0]['top_matching_users'][0]['euclidean'],
                  matching_movies: result[0]['recommended_movies'][0]['euclidean']
                }]);
                setPearson([{
                  matching_users: result[0]['top_matching_users'][1]['pearson_correlation'],
                  matching_movies: result[0]['recommended_movies'][1]['pearson_correlation']
                }]);
              }, function (error) {
                setIsLoaded(true);
                setError(error);
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function fetchStats(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleUserChange = function handleUserChange(e) {
    setTarget(parseInt(e.target.value));
  };

  var handleSimChange = function handleSimChange(e) {
    setSim(parseInt(e.target.value));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    fetchUsers();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    target != 0 ? fetchStats(target) : null;
  }, [target]);
  var simList = [{
    value: 1,
    description: 'Euclidean'
  }, {
    value: 2,
    description: 'Pearson Colleration'
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(['container'], ['m-5']),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(['row'], ['mb-3']),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(['col-sm']),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("select", {
          className: "custom-select",
          onChange: handleUserChange,
          children: users && users.map(function (u, i) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
              value: u.id,
              children: [u.id, ": ", u.name]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 68
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(['col-sm']),
        onChange: handleSimChange,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("select", {
          className: "custom-select",
          children: simList && simList.map(function (sim, i) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
              value: i,
              children: sim.description
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 74
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(['row']),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(['col-sm']),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(['mt-3'], ['mb-3']),
          children: ["Movie Recommendations (", sim == 0 ? "Euclidean" : "Pearson Colleration", ")"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("table", {
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(['table']),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("thead", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                scope: "col",
                children: "#"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                scope: "col",
                children: "Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                scope: "col",
                children: "Score"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
            children: [sim == 0 && euclidean && euclidean.map(function (euc, i) {
              return euc['matching_movies'].map(function (movies, j) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                    scope: 'row',
                    children: movies['id']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                    children: movies['title']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                    children: movies['score']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 45
                  }, _this)]
                }, j, true, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 48
                }, _this);
              });
            }), sim == 1 && pearson && pearson.map(function (euc, i) {
              return euc['matching_movies'].map(function (movies, j) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                    scope: 'row',
                    children: movies['id']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                    children: movies['title']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                    children: movies['score']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 45
                  }, _this)]
                }, j, true, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 48
                }, _this);
              });
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(['mt-3'], ['mb-3']),
            children: ["Top Matching Users (", sim == 0 ? "Euclidean" : "Pearson Colleration", ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("thead", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                scope: "col",
                children: "#"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                scope: "col",
                children: "User"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                scope: "col",
                children: "Score"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
            children: [sim == 0 && euclidean && euclidean.map(function (euc, i) {
              return euc['matching_users'].map(function (movies, j) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                    scope: 'row',
                    children: movies['id']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                    children: movies['user_name']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                    children: movies['euclideanScore']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 45
                  }, _this)]
                }, j, true, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 48
                }, _this);
              });
            }), sim == 1 && pearson && pearson.map(function (euc, i) {
              return euc['matching_users'].map(function (movies, j) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                    scope: 'row',
                    children: movies['id']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                    children: movies['user_name']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                    children: movies['euclideanScore']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 156,
                    columnNumber: 45
                  }, _this)]
                }, j, true, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 48
                }, _this);
              });
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 25
          }, _this), sim == 1 && "Pearson"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 9
  }, _this);
};

_s(Index, "ePTueB+0THiFPwHBzXFp+oZHNog=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4IiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsInVzZXJzIiwic2V0VXNlcnMiLCJ0YXJnZXQiLCJzZXRUYXJnZXQiLCJzaW0iLCJzZXRTaW0iLCJldWNsaWRlYW4iLCJzZXRFdWNsaWRlYW4iLCJwZWFyc29uIiwic2V0UGVhcnNvbiIsImZldGNoVXNlcnMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0IiwiaWQiLCJmZXRjaFN0YXRzIiwibWF0Y2hpbmdfdXNlcnMiLCJtYXRjaGluZ19tb3ZpZXMiLCJoYW5kbGVVc2VyQ2hhbmdlIiwiZSIsInBhcnNlSW50IiwidmFsdWUiLCJoYW5kbGVTaW1DaGFuZ2UiLCJ1c2VFZmZlY3QiLCJzaW1MaXN0IiwiZGVzY3JpcHRpb24iLCJjeCIsIm1hcCIsInUiLCJpIiwibmFtZSIsImV1YyIsIm1vdmllcyIsImoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLElBQUQsQ0FEbEI7QUFBQSxNQUNUQyxLQURTO0FBQUEsTUFDRkMsUUFERTs7QUFBQSxtQkFFZ0JGLHNEQUFRLENBQUMsS0FBRCxDQUZ4QjtBQUFBLE1BRVRHLFFBRlM7QUFBQSxNQUVDQyxXQUZEOztBQUFBLG1CQUlVSixzREFBUSxDQUFDLEVBQUQsQ0FKbEI7QUFBQSxNQUlUSyxLQUpTO0FBQUEsTUFJRkMsUUFKRSxrQkFJd0I7OztBQUp4QixtQkFLWU4sc0RBQVEsQ0FBQyxDQUFELENBTHBCO0FBQUEsTUFLVE8sTUFMUztBQUFBLE1BS0RDLFNBTEMsa0JBS3lCOzs7QUFMekIsbUJBTU1SLHNEQUFRLENBQUMsQ0FBRCxDQU5k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QUEsYUFBZCxDQUZqQyxFQWVRL0IsR0FBRyxJQUFJLENBQVAsSUFBWUksT0FBWixJQUF1QkEsT0FBTyxDQUFDcUIsR0FBUixDQUFZLFVBQUNJLEdBQUQsRUFBV0YsQ0FBWDtBQUFBLHFCQUMvQkUsR0FBRyxDQUFDLGdCQUFELENBQUgsQ0FBc0JKLEdBQXRCLENBQTBCLFVBQUNLLE1BQUQsRUFBY0MsQ0FBZCxFQUMxQjtBQUNJLG9DQUFPO0FBQUEsMENBQ0g7QUFBSSx5QkFBSyxFQUFFLEtBQVg7QUFBQSw4QkFBbUJELE1BQU0sQ0FBQyxJQUFEO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREcsZUFFSDtBQUFBLDhCQUFLQSxNQUFNLENBQUMsV0FBRDtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkcsZUFHSDtBQUFBLDhCQUFLQSxNQUFNLENBQUMsZ0JBQUQ7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUhHO0FBQUEsbUJBQVNDLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBUDtBQUtILGVBUEQsQ0FEK0I7QUFBQSxhQUFaLENBZi9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE5Q0osRUEyRVEvQixHQUFHLElBQUksQ0FBUCxJQUFZLFNBM0VwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBbUdILENBdEtEOztHQUFNVixLOztLQUFBQSxLO0FBd0tTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YzYzYmI1YWEwYjU4NDIwOTY5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTGliICovXHJcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pOyAvLyBnZXQgdXNlcnNcclxuICAgIGNvbnN0IFt0YXJnZXQsIHNldFRhcmdldF0gPSB1c2VTdGF0ZSgwKTsgLy8gdGFyZ2V0IHVzZXJcclxuICAgIGNvbnN0IFtzaW0sIHNldFNpbV0gPSB1c2VTdGF0ZSgwKTsgLy8gY2hvc2VuIHNpbWlsYXJpdHlcclxuXHJcbiAgICBjb25zdCBbZXVjbGlkZWFuLCBzZXRFdWNsaWRlYW5dID0gdXNlU3RhdGUoW10pIC8vIHJlY29tbWVuZGF0aW9uc1xyXG4gICAgY29uc3QgW3BlYXJzb24sIHNldFBlYXJzb25dID0gdXNlU3RhdGUoW10pIC8vIHJlY29tbWVuZGF0aW9uc1xyXG5cclxuICAgIGNvbnN0IGZldGNoVXNlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goJy9hcGkvdXNlcnMnKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcnMocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUYXJnZXQocmVzdWx0WzBdLmlkKTsgLy8gZmlyc3QgdXNlciBhcyBkZWZhdWx0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmZXRjaFN0YXRzID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcclxuICAgICAgICBhd2FpdCBmZXRjaChgL2FwaS9zaW0vJHtpZH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXVjbGlkZWFuKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hpbmdfdXNlcnM6IHJlc3VsdFswXVsndG9wX21hdGNoaW5nX3VzZXJzJ11bMF1bJ2V1Y2xpZGVhbiddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hpbmdfbW92aWVzOiByZXN1bHRbMF1bJ3JlY29tbWVuZGVkX21vdmllcyddWzBdWydldWNsaWRlYW4nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGVhcnNvbihbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nX3VzZXJzOiByZXN1bHRbMF1bJ3RvcF9tYXRjaGluZ191c2VycyddWzFdWydwZWFyc29uX2NvcnJlbGF0aW9uJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGluZ19tb3ZpZXM6IHJlc3VsdFswXVsncmVjb21tZW5kZWRfbW92aWVzJ11bMV1bJ3BlYXJzb25fY29ycmVsYXRpb24nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXNlckNoYW5nZSA9IChlOiBhbnkpID0+IHtcclxuICAgICAgICBzZXRUYXJnZXQocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaW1DaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgc2V0U2ltKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaFVzZXJzKCk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHRhcmdldCAhPSAwID8gZmV0Y2hTdGF0cyh0YXJnZXQpIDogbnVsbDtcclxuICAgIH0sIFt0YXJnZXRdKVxyXG5cclxuICAgIGxldCBzaW1MaXN0ID0gW3sgdmFsdWU6IDEsIGRlc2NyaXB0aW9uOiAnRXVjbGlkZWFuJyB9LCB7IHZhbHVlOiAyLCBkZXNjcmlwdGlvbjogJ1BlYXJzb24gQ29sbGVyYXRpb24nIH1dO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFsnY29udGFpbmVyJ10sIFsnbS01J10pfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFsncm93J10sIFsnbWItMyddKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goWydjb2wtc20nXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdFwiIG9uQ2hhbmdlPXtoYW5kbGVVc2VyQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJzICYmIHVzZXJzLm1hcCgodTogYW55LCBpOiBudW1iZXIpID0+IDxvcHRpb24gdmFsdWU9e3UuaWR9IGtleT17aX0+e3UuaWR9OiB7dS5uYW1lfTwvb3B0aW9uPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChbJ2NvbC1zbSddKX0gb25DaGFuZ2U9e2hhbmRsZVNpbUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJjdXN0b20tc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaW1MaXN0ICYmIHNpbUxpc3QubWFwKChzaW06IGFueSwgaTogbnVtYmVyKSA9PiA8b3B0aW9uIHZhbHVlPXtpfSBrZXk9e2l9PntzaW0uZGVzY3JpcHRpb259PC9vcHRpb24+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFsncm93J10pfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChbJ2NvbC1zbSddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17Y3goWydtdC0zJ10sIFsnbWItMyddKX0+TW92aWUgUmVjb21tZW5kYXRpb25zICh7c2ltID09IDAgPyBcIkV1Y2xpZGVhblwiIDogXCJQZWFyc29uIENvbGxlcmF0aW9uXCJ9KTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17Y3goWyd0YWJsZSddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VGl0bGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U2NvcmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFdWNsaWRlYW4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltID09IDAgJiYgZXVjbGlkZWFuICYmIGV1Y2xpZGVhbi5tYXAoKGV1YzogYW55LCBpOiBudW1iZXIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV1Y1snbWF0Y2hpbmdfbW92aWVzJ10ubWFwKChtb3ZpZXM6IGFueSwgajogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRyIGtleT17an0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPXsncm93J30+e21vdmllc1snaWQnXX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bW92aWVzWyd0aXRsZSddfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttb3ZpZXNbJ3Njb3JlJ119PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQZWFyc29uICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbSA9PSAxICYmIHBlYXJzb24gJiYgcGVhcnNvbi5tYXAoKGV1YzogYW55LCBpOiBudW1iZXIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV1Y1snbWF0Y2hpbmdfbW92aWVzJ10ubWFwKChtb3ZpZXM6IGFueSwgajogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRyIGtleT17an0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPXsncm93J30+e21vdmllc1snaWQnXX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bW92aWVzWyd0aXRsZSddfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttb3ZpZXNbJ3Njb3JlJ119PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y3goWydtdC0zJ10sIFsnbWItMyddKX0+VG9wIE1hdGNoaW5nIFVzZXJzICh7c2ltID09IDAgPyBcIkV1Y2xpZGVhblwiIDogXCJQZWFyc29uIENvbGxlcmF0aW9uXCJ9KTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VXNlcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TY29yZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbSA9PSAwICYmIGV1Y2xpZGVhbiAmJiBldWNsaWRlYW4ubWFwKChldWM6IGFueSwgaTogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldWNbJ21hdGNoaW5nX3VzZXJzJ10ubWFwKChtb3ZpZXM6IGFueSwgajogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRyIGtleT17an0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPXsncm93J30+e21vdmllc1snaWQnXX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bW92aWVzWyd1c2VyX25hbWUnXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bW92aWVzWydldWNsaWRlYW5TY29yZSddfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltID09IDEgJiYgcGVhcnNvbiAmJiBwZWFyc29uLm1hcCgoZXVjOiBhbnksIGk6IG51bWJlcikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXVjWydtYXRjaGluZ191c2VycyddLm1hcCgobW92aWVzOiBhbnksIGo6IG51bWJlcikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ciBrZXk9e2p9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT17J3Jvdyd9Pnttb3ZpZXNbJ2lkJ119PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21vdmllc1sndXNlcl9uYW1lJ119PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21vdmllc1snZXVjbGlkZWFuU2NvcmUnXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW0gPT0gMSAmJiBcIlBlYXJzb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=