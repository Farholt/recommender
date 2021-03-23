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
              return euc['matching_movies'].map(function (movies) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                    scope: 'row',
                    children: euc['matching_movies'][i]['id']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                    children: euc['matching_movies'][i]['title']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                    children: euc['matching_movies'][i]['score']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 41
                  }, _this)]
                }, i, true, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 37
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4IiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsInVzZXJzIiwic2V0VXNlcnMiLCJ0YXJnZXQiLCJzZXRUYXJnZXQiLCJzaW0iLCJzZXRTaW0iLCJldWNsaWRlYW4iLCJzZXRFdWNsaWRlYW4iLCJwZWFyc29uIiwic2V0UGVhcnNvbiIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwiZmV0Y2hVc2VycyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJpZCIsImZldGNoU3RhdHMiLCJtYXRjaGluZ191c2VycyIsIm1hdGNoaW5nX21vdmllcyIsImhhbmRsZVVzZXJDaGFuZ2UiLCJlIiwicGFyc2VJbnQiLCJ2YWx1ZSIsImhhbmRsZVNpbUNoYW5nZSIsInVzZUVmZmVjdCIsInNpbUxpc3QiLCJkZXNjcmlwdGlvbiIsImN4IiwibWFwIiwidSIsImkiLCJuYW1lIiwiZXVjIiwibW92aWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxJQUFELENBRGxCO0FBQUEsTUFDVEMsS0FEUztBQUFBLE1BQ0ZDLFFBREU7O0FBQUEsbUJBRWdCRixzREFBUSxDQUFDLEtBQUQsQ0FGeEI7QUFBQSxNQUVURyxRQUZTO0FBQUEsTUFFQ0MsV0FGRDs7QUFBQSxtQkFJVUosc0RBQVEsQ0FBQyxFQUFELENBSmxCO0FBQUEsTUFJVEssS0FKUztBQUFBLE1BSUZDLFFBSkUsa0JBSXdCOzs7QUFKeEIsbUJBS1lOLHNEQUFRLENBQUMsQ0FBRCxDQUxwQjtBQUFBLE1BS1RPLE1BTFM7QUFBQSxNQUtEQyxTQUxDLGtCQUt5Qjs7O0FBTHpCLG1CQU1NUixz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SixHQUF2QixDQUEyQixVQUFBSyxNQUFNO0FBQUEsb0NBQ2pDO0FBQUEsMENBQ0k7QUFBSSx5QkFBSyxFQUFFLEtBQVg7QUFBQSw4QkFBbUJELEdBQUcsQ0FBQyxpQkFBRCxDQUFILENBQXVCRixDQUF2QixFQUEwQixJQUExQjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBRUk7QUFBQSw4QkFBS0UsR0FBRyxDQUFDLGlCQUFELENBQUgsQ0FBdUJGLENBQXZCLEVBQTBCLE9BQTFCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGSixlQUdJO0FBQUEsOEJBQUtFLEdBQUcsQ0FBQyxpQkFBRCxDQUFILENBQXVCRixDQUF2QixFQUEwQixPQUExQjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSEo7QUFBQSxtQkFBU0EsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURpQztBQUFBLGVBQWpDLENBRG1DO0FBQUEsYUFBZCxDQUhqQyxFQWFRN0IsR0FBRyxJQUFJLENBQVAsSUFBWSxTQWJwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTZDSCxDQWxIRDs7R0FBTVYsSzs7S0FBQUEsSztBQW9IU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjhjZGJmYTJiZDU1MzJhZjg0OTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIExpYiAqL1xyXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTsgLy8gZ2V0IHVzZXJzXHJcbiAgICBjb25zdCBbdGFyZ2V0LCBzZXRUYXJnZXRdID0gdXNlU3RhdGUoMCk7IC8vIHRhcmdldCB1c2VyXHJcbiAgICBjb25zdCBbc2ltLCBzZXRTaW1dID0gdXNlU3RhdGUoMCk7IC8vIGNob3NlbiBzaW1pbGFyaXR5XHJcblxyXG4gICAgY29uc3QgW2V1Y2xpZGVhbiwgc2V0RXVjbGlkZWFuXSA9IHVzZVN0YXRlKFtdKSAvLyByZWNvbW1lbmRhdGlvbnNcclxuICAgIGNvbnN0IFtwZWFyc29uLCBzZXRQZWFyc29uXSA9IHVzZVN0YXRlKFtdKSAvLyByZWNvbW1lbmRhdGlvbnNcclxuXHJcbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZSgwKSAvLyBkaXNwbGF5IGVpdGhlciBwZW9wbGUgb3IgbW92aWVzXHJcblxyXG4gICAgY29uc3QgZmV0Y2hVc2VycyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBmZXRjaCgnL2FwaS91c2VycycpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VycyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRhcmdldChyZXN1bHRbMF0uaWQpOyAvLyBmaXJzdCB1c2VyIGFzIGRlZmF1bHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZldGNoU3RhdHMgPSBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGF3YWl0IGZldGNoKGAvYXBpL3NpbS8ke2lkfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFdWNsaWRlYW4oW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGluZ191c2VyczogcmVzdWx0WzBdWyd0b3BfbWF0Y2hpbmdfdXNlcnMnXVswXVsnZXVjbGlkZWFuJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGluZ19tb3ZpZXM6IHJlc3VsdFswXVsncmVjb21tZW5kZWRfbW92aWVzJ11bMF1bJ2V1Y2xpZGVhbiddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRQZWFyc29uKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hpbmdfdXNlcnM6IHJlc3VsdFswXVsndG9wX21hdGNoaW5nX3VzZXJzJ11bMV1bJ3BlYXJzb25fY29ycmVsYXRpb24nXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nX21vdmllczogcmVzdWx0WzBdWydyZWNvbW1lbmRlZF9tb3ZpZXMnXVsxXVsncGVhcnNvbl9jb3JyZWxhdGlvbiddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVVc2VyQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICAgIHNldFRhcmdldChwYXJzZUludChlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNpbUNoYW5nZSA9IChlOiBhbnkpID0+IHtcclxuICAgICAgICBzZXRTaW0ocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoVXNlcnMoKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0ICE9IDAgPyBmZXRjaFN0YXRzKHRhcmdldCkgOiBudWxsO1xyXG4gICAgfSwgW3RhcmdldF0pXHJcblxyXG4gICAgbGV0IHNpbUxpc3QgPSBbeyB2YWx1ZTogMSwgZGVzY3JpcHRpb246ICdFdWNsaWRlYW4nIH0sIHsgdmFsdWU6IDIsIGRlc2NyaXB0aW9uOiAnUGVhcnNvbiBDb2xsZXJhdGlvbicgfV07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goWydjb250YWluZXInXSwgWydtLTUnXSl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goWydyb3cnXSwgWydtYi0zJ10pfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChbJ2NvbC1zbSddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJjdXN0b20tc2VsZWN0XCIgb25DaGFuZ2U9e2hhbmRsZVVzZXJDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlcnMgJiYgdXNlcnMubWFwKCh1OiBhbnksIGk6IG51bWJlcikgPT4gPG9wdGlvbiB2YWx1ZT17dS5pZH0ga2V5PXtpfT57dS5pZH06IHt1Lm5hbWV9PC9vcHRpb24+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFsnY29sLXNtJ10pfSBvbkNoYW5nZT17aGFuZGxlU2ltQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImN1c3RvbS1zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NpbUxpc3QgJiYgc2ltTGlzdC5tYXAoKHNpbTogYW55LCBpOiBudW1iZXIpID0+IDxvcHRpb24gdmFsdWU9e2l9IGtleT17aX0+e3NpbS5kZXNjcmlwdGlvbn08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goWydyb3cnXSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFsnY29sLXNtJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtjeChbJ3RhYmxlJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5UaXRsZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TY29yZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtldWNsaWRlYW5bMF1bJ21hdGNoaW5nX21vdmllcyddICYmIGV1Y2xpZGVhblswXVsnbWF0Y2hpbmdfbW92aWVzJ10ubWFwKChldWMsIGkpID0+IDx0ciBrZXk9e2l9Pjx0aCBzY29wZT17J3Jvdyd9PntldWNbJ2lkJ119PC90aD48dGQ+e2V1Y1sndGl0bGUnXX08L3RkPjx0ZD57ZXVjWydzY29yZSddfTwvdGQ+PC90cj4pfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW0gPT0gMCAmJiBldWNsaWRlYW4gJiYgZXVjbGlkZWFuLm1hcCgoZXVjLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldWNbJ21hdGNoaW5nX21vdmllcyddLm1hcChtb3ZpZXMgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9eydyb3cnfT57ZXVjWydtYXRjaGluZ19tb3ZpZXMnXVtpXVsnaWQnXX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntldWNbJ21hdGNoaW5nX21vdmllcyddW2ldWyd0aXRsZSddfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2V1Y1snbWF0Y2hpbmdfbW92aWVzJ11baV1bJ3Njb3JlJ119PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbSA9PSAxICYmIFwiUGVhcnNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9