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
                    children: movies['score'].toFixed(4)
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
                    children: movies['score'].toFixed(4)
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
                    lineNumber: 142,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                    children: movies['user_name']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                    children: movies['euclideanScore'].toFixed(4)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 45
                  }, _this)]
                }, j, true, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
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
                    lineNumber: 156,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                    children: movies['user_name']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                    children: movies['pearsonScore'].toFixed(4)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 45
                  }, _this)]
                }, j, true, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 48
                }, _this);
              });
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 25
          }, _this)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4IiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsInVzZXJzIiwic2V0VXNlcnMiLCJ0YXJnZXQiLCJzZXRUYXJnZXQiLCJzaW0iLCJzZXRTaW0iLCJldWNsaWRlYW4iLCJzZXRFdWNsaWRlYW4iLCJwZWFyc29uIiwic2V0UGVhcnNvbiIsImZldGNoVXNlcnMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0IiwiaWQiLCJmZXRjaFN0YXRzIiwibWF0Y2hpbmdfdXNlcnMiLCJtYXRjaGluZ19tb3ZpZXMiLCJoYW5kbGVVc2VyQ2hhbmdlIiwiZSIsInBhcnNlSW50IiwidmFsdWUiLCJoYW5kbGVTaW1DaGFuZ2UiLCJ1c2VFZmZlY3QiLCJzaW1MaXN0IiwiZGVzY3JpcHRpb24iLCJjeCIsIm1hcCIsInUiLCJpIiwibmFtZSIsImV1YyIsIm1vdmllcyIsImoiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxJQUFELENBRGxCO0FBQUEsTUFDVEMsS0FEUztBQUFBLE1BQ0ZDLFFBREU7O0FBQUEsbUJBRWdCRixzREFBUSxDQUFDLEtBQUQsQ0FGeEI7QUFBQSxNQUVURyxRQUZTO0FBQUEsTUFFQ0MsV0FGRDs7QUFBQSxtQkFJVUosc0RBQVEsQ0FBQyxFQUFELENBSmxCO0FBQUEsTUFJVEssS0FKUztBQUFBLE1BSUZDLFFBSkUsa0JBSXdCOzs7QUFKeEIsbUJBS1lOLHNEQUFRLENBQUMsQ0FBRCxDQUxwQjtBQUFBLE1BS1RPLE1BTFM7QUFBQSxNQUtEQyxTQUxDLGtCQUt5Qjs7O0FBTHpCLG1CQU1NUixzREFBUSxDQUFD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QyxDQUFqQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSEc7QUFBQSxtQkFBU0QsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFQO0FBS0gsZUFQRCxDQURtQztBQUFBLGFBQWQsQ0FIakMsRUFpQlEvQixHQUFHLElBQUksQ0FBUCxJQUFZSSxPQUFaLElBQXVCQSxPQUFPLENBQUNxQixHQUFSLENBQVksVUFBQ0ksR0FBRCxFQUFXRixDQUFYO0FBQUEscUJBQy9CRSxHQUFHLENBQUMsZ0JBQUQsQ0FBSCxDQUFzQkosR0FBdEIsQ0FBMEIsVUFBQ0ssTUFBRCxFQUFjQyxDQUFkLEVBQzFCO0FBQ0ksb0NBQU87QUFBQSwwQ0FDSDtBQUFJLHlCQUFLLEVBQUUsS0FBWDtBQUFBLDhCQUFtQkQsTUFBTSxDQUFDLElBQUQ7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERyxlQUVIO0FBQUEsOEJBQUtBLE1BQU0sQ0FBQyxXQUFEO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRyxlQUdIO0FBQUEsOEJBQUtBLE1BQU0sQ0FBQyxjQUFELENBQU4sQ0FBdUJFLE9BQXZCLENBQStCLENBQS9CO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFIRztBQUFBLG1CQUFTRCxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQVA7QUFLSCxlQVBELENBRCtCO0FBQUEsYUFBWixDQWpCL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTlDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0dILENBcktEOztHQUFNekMsSzs7S0FBQUEsSztBQXVLU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmU5MGJlYmE4ZWFhM2QyY2RiNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIExpYiAqL1xyXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTsgLy8gZ2V0IHVzZXJzXHJcbiAgICBjb25zdCBbdGFyZ2V0LCBzZXRUYXJnZXRdID0gdXNlU3RhdGUoMCk7IC8vIHRhcmdldCB1c2VyXHJcbiAgICBjb25zdCBbc2ltLCBzZXRTaW1dID0gdXNlU3RhdGUoMCk7IC8vIGNob3NlbiBzaW1pbGFyaXR5XHJcblxyXG4gICAgY29uc3QgW2V1Y2xpZGVhbiwgc2V0RXVjbGlkZWFuXSA9IHVzZVN0YXRlKFtdKSAvLyByZWNvbW1lbmRhdGlvbnNcclxuICAgIGNvbnN0IFtwZWFyc29uLCBzZXRQZWFyc29uXSA9IHVzZVN0YXRlKFtdKSAvLyByZWNvbW1lbmRhdGlvbnNcclxuXHJcbiAgICBjb25zdCBmZXRjaFVzZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGZldGNoKCcvYXBpL3VzZXJzJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJzKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGFyZ2V0KHJlc3VsdFswXS5pZCk7IC8vIGZpcnN0IHVzZXIgYXMgZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmV0Y2hTdGF0cyA9IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYC9hcGkvc2ltLyR7aWR9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEV1Y2xpZGVhbihbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nX3VzZXJzOiByZXN1bHRbMF1bJ3RvcF9tYXRjaGluZ191c2VycyddWzBdWydldWNsaWRlYW4nXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nX21vdmllczogcmVzdWx0WzBdWydyZWNvbW1lbmRlZF9tb3ZpZXMnXVswXVsnZXVjbGlkZWFuJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFBlYXJzb24oW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGluZ191c2VyczogcmVzdWx0WzBdWyd0b3BfbWF0Y2hpbmdfdXNlcnMnXVsxXVsncGVhcnNvbl9jb3JyZWxhdGlvbiddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hpbmdfbW92aWVzOiByZXN1bHRbMF1bJ3JlY29tbWVuZGVkX21vdmllcyddWzFdWydwZWFyc29uX2NvcnJlbGF0aW9uJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVzZXJDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgc2V0VGFyZ2V0KHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2ltQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICAgIHNldFNpbShwYXJzZUludChlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hVc2VycygpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB0YXJnZXQgIT0gMCA/IGZldGNoU3RhdHModGFyZ2V0KSA6IG51bGw7XHJcbiAgICB9LCBbdGFyZ2V0XSlcclxuXHJcbiAgICBsZXQgc2ltTGlzdCA9IFt7IHZhbHVlOiAxLCBkZXNjcmlwdGlvbjogJ0V1Y2xpZGVhbicgfSwgeyB2YWx1ZTogMiwgZGVzY3JpcHRpb246ICdQZWFyc29uIENvbGxlcmF0aW9uJyB9XTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChbJ2NvbnRhaW5lciddLCBbJ20tNSddKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChbJ3JvdyddLCBbJ21iLTMnXSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFsnY29sLXNtJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImN1c3RvbS1zZWxlY3RcIiBvbkNoYW5nZT17aGFuZGxlVXNlckNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VycyAmJiB1c2Vycy5tYXAoKHU6IGFueSwgaTogbnVtYmVyKSA9PiA8b3B0aW9uIHZhbHVlPXt1LmlkfSBrZXk9e2l9Pnt1LmlkfToge3UubmFtZX08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goWydjb2wtc20nXSl9IG9uQ2hhbmdlPXtoYW5kbGVTaW1DaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2ltTGlzdCAmJiBzaW1MaXN0Lm1hcCgoc2ltOiBhbnksIGk6IG51bWJlcikgPT4gPG9wdGlvbiB2YWx1ZT17aX0ga2V5PXtpfT57c2ltLmRlc2NyaXB0aW9ufTwvb3B0aW9uPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChbJ3JvdyddKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goWydjb2wtc20nXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2N4KFsnbXQtMyddLCBbJ21iLTMnXSl9Pk1vdmllIFJlY29tbWVuZGF0aW9ucyAoe3NpbSA9PSAwID8gXCJFdWNsaWRlYW5cIiA6IFwiUGVhcnNvbiBDb2xsZXJhdGlvblwifSk8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e2N4KFsndGFibGUnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlRpdGxlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlNjb3JlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRXVjbGlkZWFuICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbSA9PSAwICYmIGV1Y2xpZGVhbiAmJiBldWNsaWRlYW4ubWFwKChldWM6IGFueSwgaTogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldWNbJ21hdGNoaW5nX21vdmllcyddLm1hcCgobW92aWVzOiBhbnksIGo6IG51bWJlcikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ciBrZXk9e2p9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT17J3Jvdyd9Pnttb3ZpZXNbJ2lkJ119PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21vdmllc1sndGl0bGUnXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bW92aWVzWydzY29yZSddLnRvRml4ZWQoNCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQZWFyc29uICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbSA9PSAxICYmIHBlYXJzb24gJiYgcGVhcnNvbi5tYXAoKGV1YzogYW55LCBpOiBudW1iZXIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV1Y1snbWF0Y2hpbmdfbW92aWVzJ10ubWFwKChtb3ZpZXM6IGFueSwgajogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRyIGtleT17an0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPXsncm93J30+e21vdmllc1snaWQnXX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bW92aWVzWyd0aXRsZSddfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttb3ZpZXNbJ3Njb3JlJ10udG9GaXhlZCg0KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjeChbJ210LTMnXSwgWydtYi0zJ10pfT5Ub3AgTWF0Y2hpbmcgVXNlcnMgKHtzaW0gPT0gMCA/IFwiRXVjbGlkZWFuXCIgOiBcIlBlYXJzb24gQ29sbGVyYXRpb25cIn0pPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Vc2VyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlNjb3JlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRXVjbGlkZWFuICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbSA9PSAwICYmIGV1Y2xpZGVhbiAmJiBldWNsaWRlYW4ubWFwKChldWM6IGFueSwgaTogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldWNbJ21hdGNoaW5nX3VzZXJzJ10ubWFwKChtb3ZpZXM6IGFueSwgajogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRyIGtleT17an0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPXsncm93J30+e21vdmllc1snaWQnXX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bW92aWVzWyd1c2VyX25hbWUnXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bW92aWVzWydldWNsaWRlYW5TY29yZSddLnRvRml4ZWQoNCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQZWFyc29uICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbSA9PSAxICYmIHBlYXJzb24gJiYgcGVhcnNvbi5tYXAoKGV1YzogYW55LCBpOiBudW1iZXIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV1Y1snbWF0Y2hpbmdfdXNlcnMnXS5tYXAoKG1vdmllczogYW55LCBqOiBudW1iZXIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dHIga2V5PXtqfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9eydyb3cnfT57bW92aWVzWydpZCddfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttb3ZpZXNbJ3VzZXJfbmFtZSddfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttb3ZpZXNbJ3BlYXJzb25TY29yZSddLnRvRml4ZWQoNCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==