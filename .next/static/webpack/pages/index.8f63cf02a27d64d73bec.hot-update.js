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


  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      display = _useState8[0],
      setDisplay = _useState8[1]; // display either people or movies


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
              lineNumber: 79,
              columnNumber: 68
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
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
              lineNumber: 84,
              columnNumber: 74
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(['row']),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(['col-sm']),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
          children: sim == 0 && "Euclidean"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
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
                lineNumber: 96,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                scope: "col",
                children: "Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                scope: "col",
                children: "Score"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
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
                    lineNumber: 107,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                    children: movies['title']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                    children: movies['score']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 45
                  }, _this)]
                }, j, true, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 48
                }, _this);
              });
            }), sim == 1 && "Pearson"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 9
  }, _this);
};

_s(Index, "ilydrz4JxhOMmcMl5KUkkt1n+QI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4IiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsInVzZXJzIiwic2V0VXNlcnMiLCJ0YXJnZXQiLCJzZXRUYXJnZXQiLCJzaW0iLCJzZXRTaW0iLCJldWNsaWRlYW4iLCJzZXRFdWNsaWRlYW4iLCJwZWFyc29uIiwic2V0UGVhcnNvbiIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwiZmV0Y2hVc2VycyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJpZCIsImZldGNoU3RhdHMiLCJtYXRjaGluZ191c2VycyIsIm1hdGNoaW5nX21vdmllcyIsImhhbmRsZVVzZXJDaGFuZ2UiLCJlIiwicGFyc2VJbnQiLCJ2YWx1ZSIsImhhbmRsZVNpbUNoYW5nZSIsInVzZUVmZmVjdCIsInNpbUxpc3QiLCJkZXNjcmlwdGlvbiIsImN4IiwibWFwIiwidSIsImkiLCJuYW1lIiwiZXVjIiwibW92aWVzIiwiaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsSUFBRCxDQURsQjtBQUFBLE1BQ1RDLEtBRFM7QUFBQSxNQUNGQyxRQURFOztBQUFBLG1CQUVnQkYsc0RBQVEsQ0FBQyxLQUFELENBRnhCO0FBQUEsTUFFVEcsUUFGUztBQUFBLE1BRUNDLFdBRkQ7O0FBQUEsbUJBSVVKLHNEQUFRLENBQUMsRUFBRCxDQUpsQjtBQUFBLE1BSVRLLEtBSlM7QUFBQSxNQUlGQyxRQUpFLGtCQUl3Qjs7O0FBSnhCLG1CQUtZTixzREFBUSxDQUFDLENBQUQsQ0FMcEI7QUFBQSxNQUtUTyxNQUxTO0FBQUEsTUFLREMsU0FMQyxrQkFLeUI7OztBQUx6QixtQkFN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Q3lCLEdBQVYsQ0FBYyxVQUFDSSxHQUFELEVBQU1GLENBQU47QUFBQSxxQkFDbkNFLEdBQUcsQ0FBQyxpQkFBRCxDQUFILENBQXVCSixHQUF2QixDQUEyQixVQUFDSyxNQUFELEVBQVNDLENBQVQsRUFDM0I7QUFDSSxvQ0FBTztBQUFBLDBDQUNIO0FBQUkseUJBQUssRUFBRSxLQUFYO0FBQUEsOEJBQW1CRCxNQUFNLENBQUMsSUFBRDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURHLGVBRUg7QUFBQSw4QkFBS0EsTUFBTSxDQUFDLE9BQUQ7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZHLGVBR0g7QUFBQSw4QkFBS0EsTUFBTSxDQUFDLE9BQUQ7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUhHO0FBQUEsbUJBQVNDLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBUDtBQUtILGVBUEQsQ0FEbUM7QUFBQSxhQUFkLENBRmpDLEVBZVFqQyxHQUFHLElBQUksQ0FBUCxJQUFZLFNBZnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0RILENBdkhEOztHQUFNVixLOztLQUFBQSxLO0FBeUhTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZjYzY2YwMmEyN2Q2NGQ3M2JlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTGliICovXHJcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pOyAvLyBnZXQgdXNlcnNcclxuICAgIGNvbnN0IFt0YXJnZXQsIHNldFRhcmdldF0gPSB1c2VTdGF0ZSgwKTsgLy8gdGFyZ2V0IHVzZXJcclxuICAgIGNvbnN0IFtzaW0sIHNldFNpbV0gPSB1c2VTdGF0ZSgwKTsgLy8gY2hvc2VuIHNpbWlsYXJpdHlcclxuXHJcbiAgICBjb25zdCBbZXVjbGlkZWFuLCBzZXRFdWNsaWRlYW5dID0gdXNlU3RhdGUoW10pIC8vIHJlY29tbWVuZGF0aW9uc1xyXG4gICAgY29uc3QgW3BlYXJzb24sIHNldFBlYXJzb25dID0gdXNlU3RhdGUoW10pIC8vIHJlY29tbWVuZGF0aW9uc1xyXG5cclxuICAgIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKDApIC8vIGRpc3BsYXkgZWl0aGVyIHBlb3BsZSBvciBtb3ZpZXNcclxuXHJcbiAgICBjb25zdCBmZXRjaFVzZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGZldGNoKCcvYXBpL3VzZXJzJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJzKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGFyZ2V0KHJlc3VsdFswXS5pZCk7IC8vIGZpcnN0IHVzZXIgYXMgZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmV0Y2hTdGF0cyA9IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYC9hcGkvc2ltLyR7aWR9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEV1Y2xpZGVhbihbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nX3VzZXJzOiByZXN1bHRbMF1bJ3RvcF9tYXRjaGluZ191c2VycyddWzBdWydldWNsaWRlYW4nXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nX21vdmllczogcmVzdWx0WzBdWydyZWNvbW1lbmRlZF9tb3ZpZXMnXVswXVsnZXVjbGlkZWFuJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFBlYXJzb24oW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGluZ191c2VyczogcmVzdWx0WzBdWyd0b3BfbWF0Y2hpbmdfdXNlcnMnXVsxXVsncGVhcnNvbl9jb3JyZWxhdGlvbiddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hpbmdfbW92aWVzOiByZXN1bHRbMF1bJ3JlY29tbWVuZGVkX21vdmllcyddWzFdWydwZWFyc29uX2NvcnJlbGF0aW9uJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVzZXJDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgc2V0VGFyZ2V0KHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2ltQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICAgIHNldFNpbShwYXJzZUludChlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hVc2VycygpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB0YXJnZXQgIT0gMCA/IGZldGNoU3RhdHModGFyZ2V0KSA6IG51bGw7XHJcbiAgICB9LCBbdGFyZ2V0XSlcclxuXHJcbiAgICBsZXQgc2ltTGlzdCA9IFt7IHZhbHVlOiAxLCBkZXNjcmlwdGlvbjogJ0V1Y2xpZGVhbicgfSwgeyB2YWx1ZTogMiwgZGVzY3JpcHRpb246ICdQZWFyc29uIENvbGxlcmF0aW9uJyB9XTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChbJ2NvbnRhaW5lciddLCBbJ20tNSddKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChbJ3JvdyddLCBbJ21iLTMnXSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFsnY29sLXNtJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImN1c3RvbS1zZWxlY3RcIiBvbkNoYW5nZT17aGFuZGxlVXNlckNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VycyAmJiB1c2Vycy5tYXAoKHU6IGFueSwgaTogbnVtYmVyKSA9PiA8b3B0aW9uIHZhbHVlPXt1LmlkfSBrZXk9e2l9Pnt1LmlkfToge3UubmFtZX08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goWydjb2wtc20nXSl9IG9uQ2hhbmdlPXtoYW5kbGVTaW1DaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2ltTGlzdCAmJiBzaW1MaXN0Lm1hcCgoc2ltOiBhbnksIGk6IG51bWJlcikgPT4gPG9wdGlvbiB2YWx1ZT17aX0ga2V5PXtpfT57c2ltLmRlc2NyaXB0aW9ufTwvb3B0aW9uPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChbJ3JvdyddKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goWydjb2wtc20nXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NpbSA9PSAwICYmIFwiRXVjbGlkZWFuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtjeChbJ3RhYmxlJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5UaXRsZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TY29yZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbSA9PSAwICYmIGV1Y2xpZGVhbiAmJiBldWNsaWRlYW4ubWFwKChldWMsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV1Y1snbWF0Y2hpbmdfbW92aWVzJ10ubWFwKChtb3ZpZXMsIGopID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dHIga2V5PXtqfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9eydyb3cnfT57bW92aWVzWydpZCddfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttb3ZpZXNbJ3RpdGxlJ119PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21vdmllc1snc2NvcmUnXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbSA9PSAxICYmIFwiUGVhcnNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9