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
                return console.log(movies);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4IiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsInVzZXJzIiwic2V0VXNlcnMiLCJ0YXJnZXQiLCJzZXRUYXJnZXQiLCJzaW0iLCJzZXRTaW0iLCJldWNsaWRlYW4iLCJzZXRFdWNsaWRlYW4iLCJwZWFyc29uIiwic2V0UGVhcnNvbiIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwiZmV0Y2hVc2VycyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJpZCIsImZldGNoU3RhdHMiLCJtYXRjaGluZ191c2VycyIsIm1hdGNoaW5nX21vdmllcyIsImhhbmRsZVVzZXJDaGFuZ2UiLCJlIiwicGFyc2VJbnQiLCJ2YWx1ZSIsImhhbmRsZVNpbUNoYW5nZSIsInVzZUVmZmVjdCIsInNpbUxpc3QiLCJkZXNjcmlwdGlvbiIsImN4IiwibWFwIiwidSIsImkiLCJuYW1lIiwiZXVjIiwibW92aWVzIiwiaiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLElBQUQsQ0FEbEI7QUFBQSxNQUNUQyxLQURTO0FBQUEsTUFDRkMsUUFERTs7QUFBQSxtQkFFZ0JGLHNEQUFRLENBQUMsS0FBRCxDQUZ4QjtBQUFBLE1BRVRHLFFBRlM7QUFBQSxNQUVDQyxXQUZEOztBQUFBLG1CQUlVSixzREFBUSxDQUFDLEVBQUQsQ0FKbEI7QUFBQSxNQUlUSyxLQUpTO0FBQUEsTUFJRkMsUUFKRSxrQkFJd0I7OztBQUp4QixtQkFLWU4sc0RBQVEsQ0FBQyxDQUFELENBTHBCO0FBQUEsTUFLVE8sTUFMUztBQUFBLE1BS0RDLFNBTEMsa0JB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QUFDLGlCQUFELENBQUgsQ0FBdUJKLEdBQXZCLENBQTJCLFVBQUNLLE1BQUQsRUFBU0MsQ0FBVDtBQUFBLHVCQUN2QkMsT0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQVosQ0FEdUI7QUFBQSxlQUEzQixDQURtQztBQUFBLGFBQWQsQ0FIakMsRUFVUWhDLEdBQUcsSUFBSSxDQUFQLElBQVksU0FWcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEwQ0gsQ0EvR0Q7O0dBQU1WLEs7O0tBQUFBLEs7QUFpSFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJhYjg4ZGFiODZlMTVlNDBjNWMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBMaWIgKi9cclxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7IC8vIGdldCB1c2Vyc1xyXG4gICAgY29uc3QgW3RhcmdldCwgc2V0VGFyZ2V0XSA9IHVzZVN0YXRlKDApOyAvLyB0YXJnZXQgdXNlclxyXG4gICAgY29uc3QgW3NpbSwgc2V0U2ltXSA9IHVzZVN0YXRlKDApOyAvLyBjaG9zZW4gc2ltaWxhcml0eVxyXG5cclxuICAgIGNvbnN0IFtldWNsaWRlYW4sIHNldEV1Y2xpZGVhbl0gPSB1c2VTdGF0ZShbXSkgLy8gcmVjb21tZW5kYXRpb25zXHJcbiAgICBjb25zdCBbcGVhcnNvbiwgc2V0UGVhcnNvbl0gPSB1c2VTdGF0ZShbXSkgLy8gcmVjb21tZW5kYXRpb25zXHJcblxyXG4gICAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoMCkgLy8gZGlzcGxheSBlaXRoZXIgcGVvcGxlIG9yIG1vdmllc1xyXG5cclxuICAgIGNvbnN0IGZldGNoVXNlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goJy9hcGkvdXNlcnMnKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcnMocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUYXJnZXQocmVzdWx0WzBdLmlkKTsgLy8gZmlyc3QgdXNlciBhcyBkZWZhdWx0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmZXRjaFN0YXRzID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcclxuICAgICAgICBhd2FpdCBmZXRjaChgL2FwaS9zaW0vJHtpZH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXVjbGlkZWFuKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hpbmdfdXNlcnM6IHJlc3VsdFswXVsndG9wX21hdGNoaW5nX3VzZXJzJ11bMF1bJ2V1Y2xpZGVhbiddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hpbmdfbW92aWVzOiByZXN1bHRbMF1bJ3JlY29tbWVuZGVkX21vdmllcyddWzBdWydldWNsaWRlYW4nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGVhcnNvbihbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nX3VzZXJzOiByZXN1bHRbMF1bJ3RvcF9tYXRjaGluZ191c2VycyddWzFdWydwZWFyc29uX2NvcnJlbGF0aW9uJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGluZ19tb3ZpZXM6IHJlc3VsdFswXVsncmVjb21tZW5kZWRfbW92aWVzJ11bMV1bJ3BlYXJzb25fY29ycmVsYXRpb24nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXNlckNoYW5nZSA9IChlOiBhbnkpID0+IHtcclxuICAgICAgICBzZXRUYXJnZXQocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaW1DaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgc2V0U2ltKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaFVzZXJzKCk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHRhcmdldCAhPSAwID8gZmV0Y2hTdGF0cyh0YXJnZXQpIDogbnVsbDtcclxuICAgIH0sIFt0YXJnZXRdKVxyXG5cclxuICAgIGxldCBzaW1MaXN0ID0gW3sgdmFsdWU6IDEsIGRlc2NyaXB0aW9uOiAnRXVjbGlkZWFuJyB9LCB7IHZhbHVlOiAyLCBkZXNjcmlwdGlvbjogJ1BlYXJzb24gQ29sbGVyYXRpb24nIH1dO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFsnY29udGFpbmVyJ10sIFsnbS01J10pfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFsncm93J10sIFsnbWItMyddKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goWydjb2wtc20nXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdFwiIG9uQ2hhbmdlPXtoYW5kbGVVc2VyQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJzICYmIHVzZXJzLm1hcCgodTogYW55LCBpOiBudW1iZXIpID0+IDxvcHRpb24gdmFsdWU9e3UuaWR9IGtleT17aX0+e3UuaWR9OiB7dS5uYW1lfTwvb3B0aW9uPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChbJ2NvbC1zbSddKX0gb25DaGFuZ2U9e2hhbmRsZVNpbUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJjdXN0b20tc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaW1MaXN0ICYmIHNpbUxpc3QubWFwKChzaW06IGFueSwgaTogbnVtYmVyKSA9PiA8b3B0aW9uIHZhbHVlPXtpfSBrZXk9e2l9PntzaW0uZGVzY3JpcHRpb259PC9vcHRpb24+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFsncm93J10pfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChbJ2NvbC1zbSddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17Y3goWyd0YWJsZSddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VGl0bGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U2NvcmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7ZXVjbGlkZWFuWzBdWydtYXRjaGluZ19tb3ZpZXMnXSAmJiBldWNsaWRlYW5bMF1bJ21hdGNoaW5nX21vdmllcyddLm1hcCgoZXVjLCBpKSA9PiA8dHIga2V5PXtpfT48dGggc2NvcGU9eydyb3cnfT57ZXVjWydpZCddfTwvdGg+PHRkPntldWNbJ3RpdGxlJ119PC90ZD48dGQ+e2V1Y1snc2NvcmUnXX08L3RkPjwvdHI+KX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltID09IDAgJiYgZXVjbGlkZWFuICYmIGV1Y2xpZGVhbi5tYXAoKGV1YywgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXVjWydtYXRjaGluZ19tb3ZpZXMnXS5tYXAoKG1vdmllcywgaikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vdmllcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW0gPT0gMSAmJiBcIlBlYXJzb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PiAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==