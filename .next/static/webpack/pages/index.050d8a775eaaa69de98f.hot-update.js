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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("table", {
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(['table']),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("thead", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                scope: "col",
                children: "#"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                scope: "col",
                children: "Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                scope: "col",
                children: "Score"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
            children: [sim == 0 && euclidean && euclidean.map(function (euc, i) {
              return euc['matching_movies'].map(function (movies, j) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                    children: movies['matching_movies']['title']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                    children: movies['matching_movies']['score']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 45
                  }, _this)]
                }, i, true, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 41
                }, _this);
              });
            }), sim == 1 && "Pearson"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4IiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsInVzZXJzIiwic2V0VXNlcnMiLCJ0YXJnZXQiLCJzZXRUYXJnZXQiLCJzaW0iLCJzZXRTaW0iLCJldWNsaWRlYW4iLCJzZXRFdWNsaWRlYW4iLCJwZWFyc29uIiwic2V0UGVhcnNvbiIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwiZmV0Y2hVc2VycyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJpZCIsImZldGNoU3RhdHMiLCJtYXRjaGluZ191c2VycyIsIm1hdGNoaW5nX21vdmllcyIsImhhbmRsZVVzZXJDaGFuZ2UiLCJlIiwicGFyc2VJbnQiLCJ2YWx1ZSIsImhhbmRsZVNpbUNoYW5nZSIsInVzZUVmZmVjdCIsInNpbUxpc3QiLCJkZXNjcmlwdGlvbiIsImN4IiwibWFwIiwidSIsImkiLCJuYW1lIiwiZXVjIiwibW92aWVzIiwiaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsSUFBRCxDQURsQjtBQUFBLE1BQ1RDLEtBRFM7QUFBQSxNQUNGQyxRQURFOztBQUFBLG1CQUVnQkYsc0RBQVEsQ0FBQyxLQUFELENBRnhCO0FBQUEsTUFFVEcsUUFGUztBQUFBLE1BRUNDLFdBRkQ7O0FBQUEsbUJBSVVKLHNEQUFRLENBQUMsRUFBRCxDQUpsQjtBQUFBLE1BSVRLLEtBSlM7QUFBQSxNQUlGQyxRQUpFLGtCQUl3Qjs7O0FBSnhCLG1CQUtZTixzREFBUSxDQUFDLENBQUQsQ0FMcEI7QUFBQSxNQUtUTyxNQUxTO0FBQUEsTUFLREMsU0FMQyxrQkFLeUI7OztBQUx6QixtQkFN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QUF1QkosR0FBdkIsQ0FBMkIsVUFBQ0ssTUFBRCxFQUFTQyxDQUFUO0FBQUEsb0NBQ3ZCO0FBQUEsMENBRUk7QUFBQSw4QkFBS0QsTUFBTSxDQUFDLGlCQUFELENBQU4sQ0FBMEIsT0FBMUI7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZKLGVBR0k7QUFBQSw4QkFBS0EsTUFBTSxDQUFDLGlCQUFELENBQU4sQ0FBMEIsT0FBMUI7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUhKO0FBQUEsbUJBQVNILENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEdUI7QUFBQSxlQUEzQixDQURtQztBQUFBLGFBQWQsQ0FIakMsRUFjUTdCLEdBQUcsSUFBSSxDQUFQLElBQVksU0FkcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE4Q0gsQ0FuSEQ7O0dBQU1WLEs7O0tBQUFBLEs7QUFxSFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA1MGQ4YTc3NWVhYWE2OWRlOThmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBMaWIgKi9cclxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7IC8vIGdldCB1c2Vyc1xyXG4gICAgY29uc3QgW3RhcmdldCwgc2V0VGFyZ2V0XSA9IHVzZVN0YXRlKDApOyAvLyB0YXJnZXQgdXNlclxyXG4gICAgY29uc3QgW3NpbSwgc2V0U2ltXSA9IHVzZVN0YXRlKDApOyAvLyBjaG9zZW4gc2ltaWxhcml0eVxyXG5cclxuICAgIGNvbnN0IFtldWNsaWRlYW4sIHNldEV1Y2xpZGVhbl0gPSB1c2VTdGF0ZShbXSkgLy8gcmVjb21tZW5kYXRpb25zXHJcbiAgICBjb25zdCBbcGVhcnNvbiwgc2V0UGVhcnNvbl0gPSB1c2VTdGF0ZShbXSkgLy8gcmVjb21tZW5kYXRpb25zXHJcblxyXG4gICAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoMCkgLy8gZGlzcGxheSBlaXRoZXIgcGVvcGxlIG9yIG1vdmllc1xyXG5cclxuICAgIGNvbnN0IGZldGNoVXNlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goJy9hcGkvdXNlcnMnKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcnMocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUYXJnZXQocmVzdWx0WzBdLmlkKTsgLy8gZmlyc3QgdXNlciBhcyBkZWZhdWx0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmZXRjaFN0YXRzID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcclxuICAgICAgICBhd2FpdCBmZXRjaChgL2FwaS9zaW0vJHtpZH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXVjbGlkZWFuKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hpbmdfdXNlcnM6IHJlc3VsdFswXVsndG9wX21hdGNoaW5nX3VzZXJzJ11bMF1bJ2V1Y2xpZGVhbiddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hpbmdfbW92aWVzOiByZXN1bHRbMF1bJ3JlY29tbWVuZGVkX21vdmllcyddWzBdWydldWNsaWRlYW4nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGVhcnNvbihbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nX3VzZXJzOiByZXN1bHRbMF1bJ3RvcF9tYXRjaGluZ191c2VycyddWzFdWydwZWFyc29uX2NvcnJlbGF0aW9uJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGluZ19tb3ZpZXM6IHJlc3VsdFswXVsncmVjb21tZW5kZWRfbW92aWVzJ11bMV1bJ3BlYXJzb25fY29ycmVsYXRpb24nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXNlckNoYW5nZSA9IChlOiBhbnkpID0+IHtcclxuICAgICAgICBzZXRUYXJnZXQocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaW1DaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgc2V0U2ltKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaFVzZXJzKCk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHRhcmdldCAhPSAwID8gZmV0Y2hTdGF0cyh0YXJnZXQpIDogbnVsbDtcclxuICAgIH0sIFt0YXJnZXRdKVxyXG5cclxuICAgIGxldCBzaW1MaXN0ID0gW3sgdmFsdWU6IDEsIGRlc2NyaXB0aW9uOiAnRXVjbGlkZWFuJyB9LCB7IHZhbHVlOiAyLCBkZXNjcmlwdGlvbjogJ1BlYXJzb24gQ29sbGVyYXRpb24nIH1dO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFsnY29udGFpbmVyJ10sIFsnbS01J10pfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFsncm93J10sIFsnbWItMyddKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goWydjb2wtc20nXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdFwiIG9uQ2hhbmdlPXtoYW5kbGVVc2VyQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJzICYmIHVzZXJzLm1hcCgodTogYW55LCBpOiBudW1iZXIpID0+IDxvcHRpb24gdmFsdWU9e3UuaWR9IGtleT17aX0+e3UuaWR9OiB7dS5uYW1lfTwvb3B0aW9uPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChbJ2NvbC1zbSddKX0gb25DaGFuZ2U9e2hhbmRsZVNpbUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJjdXN0b20tc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaW1MaXN0ICYmIHNpbUxpc3QubWFwKChzaW06IGFueSwgaTogbnVtYmVyKSA9PiA8b3B0aW9uIHZhbHVlPXtpfSBrZXk9e2l9PntzaW0uZGVzY3JpcHRpb259PC9vcHRpb24+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFsncm93J10pfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChbJ2NvbC1zbSddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17Y3goWyd0YWJsZSddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VGl0bGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U2NvcmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7ZXVjbGlkZWFuWzBdWydtYXRjaGluZ19tb3ZpZXMnXSAmJiBldWNsaWRlYW5bMF1bJ21hdGNoaW5nX21vdmllcyddLm1hcCgoZXVjLCBpKSA9PiA8dHIga2V5PXtpfT48dGggc2NvcGU9eydyb3cnfT57ZXVjWydpZCddfTwvdGg+PHRkPntldWNbJ3RpdGxlJ119PC90ZD48dGQ+e2V1Y1snc2NvcmUnXX08L3RkPjwvdHI+KX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltID09IDAgJiYgZXVjbGlkZWFuICYmIGV1Y2xpZGVhbi5tYXAoKGV1YywgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXVjWydtYXRjaGluZ19tb3ZpZXMnXS5tYXAoKG1vdmllcywgaikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dGggc2NvcGU9eydyb3cnfT57bW92aWVzWydtYXRjaGluZ19tb3ZpZXMnXVsnaWQnXX08L3RoPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21vdmllc1snbWF0Y2hpbmdfbW92aWVzJ11bJ3RpdGxlJ119PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21vdmllc1snbWF0Y2hpbmdfbW92aWVzJ11bJ3Njb3JlJ119PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltID09IDEgJiYgXCJQZWFyc29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=