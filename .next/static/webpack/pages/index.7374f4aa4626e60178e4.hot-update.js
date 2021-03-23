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

                console.log(result);
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
              lineNumber: 80,
              columnNumber: 68
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
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
              lineNumber: 85,
              columnNumber: 74
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
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
                lineNumber: 94,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                scope: "col",
                children: "Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                scope: "col",
                children: "Score"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
            children: [sim == 0 && euclidean && euclidean.map(function (euc, i) {
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
            }), sim == 1 && "Pearson"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4IiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsInVzZXJzIiwic2V0VXNlcnMiLCJ0YXJnZXQiLCJzZXRUYXJnZXQiLCJzaW0iLCJzZXRTaW0iLCJldWNsaWRlYW4iLCJzZXRFdWNsaWRlYW4iLCJwZWFyc29uIiwic2V0UGVhcnNvbiIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwiZmV0Y2hVc2VycyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaFN0YXRzIiwibWF0Y2hpbmdfdXNlcnMiLCJtYXRjaGluZ19tb3ZpZXMiLCJoYW5kbGVVc2VyQ2hhbmdlIiwiZSIsInBhcnNlSW50IiwidmFsdWUiLCJoYW5kbGVTaW1DaGFuZ2UiLCJ1c2VFZmZlY3QiLCJzaW1MaXN0IiwiZGVzY3JpcHRpb24iLCJjeCIsIm1hcCIsInUiLCJpIiwibmFtZSIsImV1YyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsSUFBRCxDQURsQjtBQUFBLE1BQ1RDLEtBRFM7QUFBQSxNQUNGQyxRQURFOztBQUFBLG1CQUVnQkYsc0RBQVEsQ0FBQyxLQUFELENBRnhCO0FBQUEsTUFFVEcsUUFGUztBQUFBLE1BRUNDLFdBRkQ7O0FBQUEsbUJBSVVKLHNEQUFRLENBQUMsRUFBRCxDQUpsQjtBQUFBLE1BSVRLLEtBSlM7QUFBQSxNQUlGQyxRQUpFLGtCQUl3Qjs7O0FBSnhCLG1CQUtZTixzREFBUSxDQUFDLENBQUQsQ0FMcEI7QUFBQSxNQUtUTyxNQUxTO0FBQUEsTUFLREMsU0FMQyxrQkFLeUI7OztBQUx6Qixt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QU1GLENBQU47QUFBQSxrQ0FDbkM7QUFBQSx3Q0FDSTtBQUFJLHVCQUFLLEVBQUUsS0FBWDtBQUFBLDRCQUFtQkUsR0FBRyxDQUFDLGlCQUFELENBQUgsQ0FBdUJGLENBQXZCLEVBQTBCLElBQTFCO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSTtBQUFBLDRCQUFLRSxHQUFHLENBQUMsaUJBQUQsQ0FBSCxDQUF1QkYsQ0FBdkIsRUFBMEIsT0FBMUI7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKLGVBR0k7QUFBQSw0QkFBS0UsR0FBRyxDQUFDLGlCQUFELENBQUgsQ0FBdUJGLENBQXZCLEVBQTBCLE9BQTFCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFISjtBQUFBLGlCQUFTQSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRG1DO0FBQUEsYUFBZCxDQUhqQyxFQVlRL0IsR0FBRyxJQUFJLENBQVAsSUFBWSxTQVpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTRDSCxDQWxIRDs7R0FBTVYsSzs7S0FBQUEsSztBQW9IU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzM3NGY0YWE0NjI2ZTYwMTc4ZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIExpYiAqL1xyXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTsgLy8gZ2V0IHVzZXJzXHJcbiAgICBjb25zdCBbdGFyZ2V0LCBzZXRUYXJnZXRdID0gdXNlU3RhdGUoMCk7IC8vIHRhcmdldCB1c2VyXHJcbiAgICBjb25zdCBbc2ltLCBzZXRTaW1dID0gdXNlU3RhdGUoMCk7IC8vIGNob3NlbiBzaW1pbGFyaXR5XHJcblxyXG4gICAgY29uc3QgW2V1Y2xpZGVhbiwgc2V0RXVjbGlkZWFuXSA9IHVzZVN0YXRlKFtdKSAvLyByZWNvbW1lbmRhdGlvbnNcclxuICAgIGNvbnN0IFtwZWFyc29uLCBzZXRQZWFyc29uXSA9IHVzZVN0YXRlKFtdKSAvLyByZWNvbW1lbmRhdGlvbnNcclxuXHJcbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZSgwKSAvLyBkaXNwbGF5IGVpdGhlciBwZW9wbGUgb3IgbW92aWVzXHJcblxyXG4gICAgY29uc3QgZmV0Y2hVc2VycyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBmZXRjaCgnL2FwaS91c2VycycpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VycyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRhcmdldChyZXN1bHRbMF0uaWQpOyAvLyBmaXJzdCB1c2VyIGFzIGRlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmV0Y2hTdGF0cyA9IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYC9hcGkvc2ltLyR7aWR9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEV1Y2xpZGVhbihbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nX3VzZXJzOiByZXN1bHRbMF1bJ3RvcF9tYXRjaGluZ191c2VycyddWzBdWydldWNsaWRlYW4nXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nX21vdmllczogcmVzdWx0WzBdWydyZWNvbW1lbmRlZF9tb3ZpZXMnXVswXVsnZXVjbGlkZWFuJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFBlYXJzb24oW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGluZ191c2VyczogcmVzdWx0WzBdWyd0b3BfbWF0Y2hpbmdfdXNlcnMnXVsxXVsncGVhcnNvbl9jb3JyZWxhdGlvbiddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hpbmdfbW92aWVzOiByZXN1bHRbMF1bJ3JlY29tbWVuZGVkX21vdmllcyddWzFdWydwZWFyc29uX2NvcnJlbGF0aW9uJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVzZXJDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgc2V0VGFyZ2V0KHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2ltQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICAgIHNldFNpbShwYXJzZUludChlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hVc2VycygpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB0YXJnZXQgIT0gMCA/IGZldGNoU3RhdHModGFyZ2V0KSA6IG51bGw7XHJcbiAgICB9LCBbdGFyZ2V0XSlcclxuXHJcbiAgICBsZXQgc2ltTGlzdCA9IFt7IHZhbHVlOiAxLCBkZXNjcmlwdGlvbjogJ0V1Y2xpZGVhbicgfSwgeyB2YWx1ZTogMiwgZGVzY3JpcHRpb246ICdQZWFyc29uIENvbGxlcmF0aW9uJyB9XTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChbJ2NvbnRhaW5lciddLCBbJ20tNSddKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChbJ3JvdyddLCBbJ21iLTMnXSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFsnY29sLXNtJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImN1c3RvbS1zZWxlY3RcIiBvbkNoYW5nZT17aGFuZGxlVXNlckNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VycyAmJiB1c2Vycy5tYXAoKHU6IGFueSwgaTogbnVtYmVyKSA9PiA8b3B0aW9uIHZhbHVlPXt1LmlkfSBrZXk9e2l9Pnt1LmlkfToge3UubmFtZX08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goWydjb2wtc20nXSl9IG9uQ2hhbmdlPXtoYW5kbGVTaW1DaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2ltTGlzdCAmJiBzaW1MaXN0Lm1hcCgoc2ltOiBhbnksIGk6IG51bWJlcikgPT4gPG9wdGlvbiB2YWx1ZT17aX0ga2V5PXtpfT57c2ltLmRlc2NyaXB0aW9ufTwvb3B0aW9uPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChbJ3JvdyddKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goWydjb2wtc20nXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e2N4KFsndGFibGUnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlRpdGxlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlNjb3JlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2V1Y2xpZGVhblswXVsnbWF0Y2hpbmdfbW92aWVzJ10gJiYgZXVjbGlkZWFuWzBdWydtYXRjaGluZ19tb3ZpZXMnXS5tYXAoKGV1YywgaSkgPT4gPHRyIGtleT17aX0+PHRoIHNjb3BlPXsncm93J30+e2V1Y1snaWQnXX08L3RoPjx0ZD57ZXVjWyd0aXRsZSddfTwvdGQ+PHRkPntldWNbJ3Njb3JlJ119PC90ZD48L3RyPil9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbSA9PSAwICYmIGV1Y2xpZGVhbiAmJiBldWNsaWRlYW4ubWFwKChldWMsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPXsncm93J30+e2V1Y1snbWF0Y2hpbmdfbW92aWVzJ11baV1bJ2lkJ119PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZXVjWydtYXRjaGluZ19tb3ZpZXMnXVtpXVsndGl0bGUnXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntldWNbJ21hdGNoaW5nX21vdmllcyddW2ldWydzY29yZSddfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbSA9PSAxICYmIFwiUGVhcnNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9