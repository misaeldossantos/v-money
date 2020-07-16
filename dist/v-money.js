(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VMoney"] = factory();
	else
		root["VMoney"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = ".";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  prefix: '',
  suffix: '',
  thousands: ',',
  decimal: '.',
  precision: 2
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9vcHRpb25zLmpzIl0sIm5hbWVzIjpbInByZWZpeCIsInN1ZmZpeCIsInRob3VzYW5kcyIsImRlY2ltYWwiLCJwcmVjaXNpb24iXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7QUFDYkEsVUFBUSxFQURLO0FBRWJDLFVBQVEsRUFGSztBQUdiQyxhQUFXLEdBSEU7QUFJYkMsV0FBUyxHQUpJO0FBS2JDLGFBQVc7QUFMRSxDQUFmIiwiZmlsZSI6Im9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWlzYWVsL0RvY3VtZW50b3MvcHJvamV0b3MvcGFja2FnZXMvdi1tb25leSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgcHJlZml4OiAnJyxcbiAgc3VmZml4OiAnJyxcbiAgdGhvdXNhbmRzOiAnLCcsXG4gIGRlY2ltYWw6ICcuJyxcbiAgcHJlY2lzaW9uOiAyXG59XG4iXX0=

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__options__ = __webpack_require__(0);




/* harmony default export */ __webpack_exports__["a"] = (function (el, binding) {
  if (!binding.value) return;
  var opt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__assign__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__options__["a" /* default */], binding.value);

  // v-money used on a component that's not a input
  if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
    var els = el.getElementsByTagName('input');
    if (els.length !== 1) {
      // throw new Error("v-money requires 1 input, found " + els.length)
    } else {
      el = els[0];
    }
  }

  el.oninput = function () {
    var positionFromEnd = el.value.length - el.selectionEnd;
    el.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* format */])(el.value, opt);
    positionFromEnd = Math.max(positionFromEnd, opt.suffix.length); // right
    positionFromEnd = el.value.length - positionFromEnd;
    positionFromEnd = Math.max(positionFromEnd, opt.prefix.length + 1); // left
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* setCursor */])(el, positionFromEnd);
    el.dispatchEvent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* event */])('change')); // v-model.lazy
  };

  el.onfocus = function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* setCursor */])(el, el.value.length - opt.suffix.length);
  };

  el.oninput();
  el.dispatchEvent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* event */])('input')); // force format after initialization
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kaXJlY3RpdmUuanMiXSwibmFtZXMiOlsiZm9ybWF0Iiwic2V0Q3Vyc29yIiwiZXZlbnQiLCJhc3NpZ24iLCJkZWZhdWx0cyIsImVsIiwiYmluZGluZyIsInZhbHVlIiwib3B0IiwidGFnTmFtZSIsInRvTG9jYWxlVXBwZXJDYXNlIiwiZWxzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJvbmlucHV0IiwicG9zaXRpb25Gcm9tRW5kIiwic2VsZWN0aW9uRW5kIiwiTWF0aCIsIm1heCIsInN1ZmZpeCIsInByZWZpeCIsImRpc3BhdGNoRXZlbnQiLCJvbmZvY3VzIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFRQSxNQUFSLEVBQWdCQyxTQUFoQixFQUEyQkMsS0FBM0IsUUFBdUMsU0FBdkM7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFVBQW5CO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixXQUFyQjs7QUFFQSxlQUFlLFVBQVVDLEVBQVYsRUFBY0MsT0FBZCxFQUF1QjtBQUNwQyxNQUFJLENBQUNBLFFBQVFDLEtBQWIsRUFBb0I7QUFDcEIsTUFBSUMsTUFBTUwsT0FBT0MsUUFBUCxFQUFpQkUsUUFBUUMsS0FBekIsQ0FBVjs7QUFFQTtBQUNBLE1BQUlGLEdBQUdJLE9BQUgsQ0FBV0MsaUJBQVgsT0FBbUMsT0FBdkMsRUFBZ0Q7QUFDOUMsUUFBSUMsTUFBTU4sR0FBR08sb0JBQUgsQ0FBd0IsT0FBeEIsQ0FBVjtBQUNBLFFBQUlELElBQUlFLE1BQUosS0FBZSxDQUFuQixFQUFzQjtBQUNwQjtBQUNELEtBRkQsTUFFTztBQUNMUixXQUFLTSxJQUFJLENBQUosQ0FBTDtBQUNEO0FBQ0Y7O0FBRUROLEtBQUdTLE9BQUgsR0FBYSxZQUFZO0FBQ3ZCLFFBQUlDLGtCQUFrQlYsR0FBR0UsS0FBSCxDQUFTTSxNQUFULEdBQWtCUixHQUFHVyxZQUEzQztBQUNBWCxPQUFHRSxLQUFILEdBQVdQLE9BQU9LLEdBQUdFLEtBQVYsRUFBaUJDLEdBQWpCLENBQVg7QUFDQU8sc0JBQWtCRSxLQUFLQyxHQUFMLENBQVNILGVBQVQsRUFBMEJQLElBQUlXLE1BQUosQ0FBV04sTUFBckMsQ0FBbEIsQ0FIdUIsQ0FHd0M7QUFDL0RFLHNCQUFrQlYsR0FBR0UsS0FBSCxDQUFTTSxNQUFULEdBQWtCRSxlQUFwQztBQUNBQSxzQkFBa0JFLEtBQUtDLEdBQUwsQ0FBU0gsZUFBVCxFQUEwQlAsSUFBSVksTUFBSixDQUFXUCxNQUFYLEdBQW9CLENBQTlDLENBQWxCLENBTHVCLENBSzRDO0FBQ25FWixjQUFVSSxFQUFWLEVBQWNVLGVBQWQ7QUFDQVYsT0FBR2dCLGFBQUgsQ0FBaUJuQixNQUFNLFFBQU4sQ0FBakIsRUFQdUIsQ0FPVztBQUNuQyxHQVJEOztBQVVBRyxLQUFHaUIsT0FBSCxHQUFhLFlBQVk7QUFDdkJyQixjQUFVSSxFQUFWLEVBQWNBLEdBQUdFLEtBQUgsQ0FBU00sTUFBVCxHQUFrQkwsSUFBSVcsTUFBSixDQUFXTixNQUEzQztBQUNELEdBRkQ7O0FBSUFSLEtBQUdTLE9BQUg7QUFDQVQsS0FBR2dCLGFBQUgsQ0FBaUJuQixNQUFNLE9BQU4sQ0FBakIsRUE3Qm9DLENBNkJIO0FBQ2xDIiwiZmlsZSI6ImRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9taXNhZWwvRG9jdW1lbnRvcy9wcm9qZXRvcy9wYWNrYWdlcy92LW1vbmV5Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmb3JtYXQsIHNldEN1cnNvciwgZXZlbnR9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgYXNzaWduIGZyb20gJy4vYXNzaWduJ1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4vb3B0aW9ucydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGVsLCBiaW5kaW5nKSB7XG4gIGlmICghYmluZGluZy52YWx1ZSkgcmV0dXJuXG4gIHZhciBvcHQgPSBhc3NpZ24oZGVmYXVsdHMsIGJpbmRpbmcudmFsdWUpXG5cbiAgLy8gdi1tb25leSB1c2VkIG9uIGEgY29tcG9uZW50IHRoYXQncyBub3QgYSBpbnB1dFxuICBpZiAoZWwudGFnTmFtZS50b0xvY2FsZVVwcGVyQ2FzZSgpICE9PSAnSU5QVVQnKSB7XG4gICAgdmFyIGVscyA9IGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpXG4gICAgaWYgKGVscy5sZW5ndGggIT09IDEpIHtcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcInYtbW9uZXkgcmVxdWlyZXMgMSBpbnB1dCwgZm91bmQgXCIgKyBlbHMubGVuZ3RoKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbCA9IGVsc1swXVxuICAgIH1cbiAgfVxuXG4gIGVsLm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBvc2l0aW9uRnJvbUVuZCA9IGVsLnZhbHVlLmxlbmd0aCAtIGVsLnNlbGVjdGlvbkVuZFxuICAgIGVsLnZhbHVlID0gZm9ybWF0KGVsLnZhbHVlLCBvcHQpXG4gICAgcG9zaXRpb25Gcm9tRW5kID0gTWF0aC5tYXgocG9zaXRpb25Gcm9tRW5kLCBvcHQuc3VmZml4Lmxlbmd0aCkgLy8gcmlnaHRcbiAgICBwb3NpdGlvbkZyb21FbmQgPSBlbC52YWx1ZS5sZW5ndGggLSBwb3NpdGlvbkZyb21FbmRcbiAgICBwb3NpdGlvbkZyb21FbmQgPSBNYXRoLm1heChwb3NpdGlvbkZyb21FbmQsIG9wdC5wcmVmaXgubGVuZ3RoICsgMSkgLy8gbGVmdFxuICAgIHNldEN1cnNvcihlbCwgcG9zaXRpb25Gcm9tRW5kKVxuICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQoJ2NoYW5nZScpKSAvLyB2LW1vZGVsLmxhenlcbiAgfVxuXG4gIGVsLm9uZm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2V0Q3Vyc29yKGVsLCBlbC52YWx1ZS5sZW5ndGggLSBvcHQuc3VmZml4Lmxlbmd0aClcbiAgfVxuXG4gIGVsLm9uaW5wdXQoKVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KCdpbnB1dCcpKSAvLyBmb3JjZSBmb3JtYXQgYWZ0ZXIgaW5pdGlhbGl6YXRpb25cbn1cbiJdfQ==

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return unformat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return event; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__options__ = __webpack_require__(0);


function format(input) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_0__options__["a" /* default */];

  if (typeof input === 'number') {
    input = input.toFixed(fixed(opt.precision));
  }
  var negative = input.indexOf('-') >= 0 ? '-' : '';

  var numbers = onlyNumbers(input);
  var currency = numbersToCurrency(numbers, opt.precision);
  var parts = toStr(currency).split('.');
  var integer = parts[0];
  var decimal = parts[1];
  integer = addThousandSeparator(integer, opt.thousands);
  return opt.prefix + negative + joinIntegerAndDecimal(integer, decimal, opt.decimal) + opt.suffix;
}

function unformat(input, precision) {
  var negative = input.indexOf('-') >= 0 ? -1 : 1;
  var numbers = onlyNumbers(input);
  var currency = numbersToCurrency(numbers, precision);
  return parseFloat(currency) * negative;
}

function onlyNumbers(input) {
  return toStr(input).replace(/\D+/g, '') || '0';
}

// Uncaught RangeError: toFixed() digits argument must be between 0 and 20 at Number.toFixed
function fixed(precision) {
  return between(0, precision, 20);
}

function between(min, n, max) {
  return Math.max(min, Math.min(n, max));
}

function numbersToCurrency(numbers, precision) {
  var exp = Math.pow(10, precision);
  var float = parseFloat(numbers) / exp;
  return float.toFixed(fixed(precision));
}

function addThousandSeparator(integer, separator) {
  return integer.replace(/(\d)(?=(?:\d{3})+\b)/gm, '$1' + separator);
}

function currencyToIntegerAndDecimal(float) {
  return toStr(float).split('.');
}

function joinIntegerAndDecimal(integer, decimal, separator) {
  return decimal ? integer + separator + decimal : integer;
}

function toStr(value) {
  return value ? value.toString() : '';
}

function setCursor(el, position) {
  var setSelectionRange = function setSelectionRange() {
    el.setSelectionRange(position, position);
  };
  if (el === document.activeElement) {
    setSelectionRange();
    setTimeout(setSelectionRange, 1); // Android Fix
  }
}

// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events#The_old-fashioned_way
function event(name) {
  var evt = document.createEvent('Event');
  evt.initEvent(name, true, true);
  return evt;
}


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0cyIsImZvcm1hdCIsImlucHV0Iiwib3B0IiwidG9GaXhlZCIsImZpeGVkIiwicHJlY2lzaW9uIiwibmVnYXRpdmUiLCJpbmRleE9mIiwibnVtYmVycyIsIm9ubHlOdW1iZXJzIiwiY3VycmVuY3kiLCJudW1iZXJzVG9DdXJyZW5jeSIsInBhcnRzIiwidG9TdHIiLCJzcGxpdCIsImludGVnZXIiLCJkZWNpbWFsIiwiYWRkVGhvdXNhbmRTZXBhcmF0b3IiLCJ0aG91c2FuZHMiLCJwcmVmaXgiLCJqb2luSW50ZWdlckFuZERlY2ltYWwiLCJzdWZmaXgiLCJ1bmZvcm1hdCIsInBhcnNlRmxvYXQiLCJyZXBsYWNlIiwiYmV0d2VlbiIsIm1pbiIsIm4iLCJtYXgiLCJNYXRoIiwiZXhwIiwicG93IiwiZmxvYXQiLCJzZXBhcmF0b3IiLCJjdXJyZW5jeVRvSW50ZWdlckFuZERlY2ltYWwiLCJ2YWx1ZSIsInRvU3RyaW5nIiwic2V0Q3Vyc29yIiwiZWwiLCJwb3NpdGlvbiIsInNldFNlbGVjdGlvblJhbmdlIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50Iiwic2V0VGltZW91dCIsImV2ZW50IiwibmFtZSIsImV2dCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxRQUFQLE1BQXFCLFdBQXJCOztBQUVBLFNBQVNDLE1BQVQsQ0FBaUJDLEtBQWpCLEVBQXdDO0FBQUEsTUFBaEJDLEdBQWdCLHVFQUFWSCxRQUFVOztBQUN0QyxNQUFJLE9BQU9FLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0JBLFlBQVFBLE1BQU1FLE9BQU4sQ0FBY0MsTUFBTUYsSUFBSUcsU0FBVixDQUFkLENBQVI7QUFDRDtBQUNELE1BQUlDLFdBQVdMLE1BQU1NLE9BQU4sQ0FBYyxHQUFkLEtBQXNCLENBQXRCLEdBQTBCLEdBQTFCLEdBQWdDLEVBQS9DOztBQUVBLE1BQUlDLFVBQVVDLFlBQVlS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QUFYLEVBQThCLENBQTlCLEVBRmlDLENBRUE7QUFDbEM7QUFDRjs7QUFFRDtBQUNBLFNBQVNJLEtBQVQsQ0FBZ0JDLElBQWhCLEVBQXNCO0FBQ3BCLE1BQUlDLE1BQU1MLFNBQVNNLFdBQVQsQ0FBcUIsT0FBckIsQ0FBVjtBQUNBRCxNQUFJRSxTQUFKLENBQWNILElBQWQsRUFBb0IsSUFBcEIsRUFBMEIsSUFBMUI7QUFDQSxTQUFPQyxHQUFQO0FBQ0Q7O0FBRUQsU0FDRTlDLE1BREYsRUFFRXNCLFFBRkYsRUFHRWUsU0FIRixFQUlFTyxLQUpGIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21pc2FlbC9Eb2N1bWVudG9zL3Byb2pldG9zL3BhY2thZ2VzL3YtbW9uZXkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9vcHRpb25zJ1xuXG5mdW5jdGlvbiBmb3JtYXQgKGlucHV0LCBvcHQgPSBkZWZhdWx0cykge1xuICBpZiAodHlwZW9mIGlucHV0ID09PSAnbnVtYmVyJykge1xuICAgIGlucHV0ID0gaW5wdXQudG9GaXhlZChmaXhlZChvcHQucHJlY2lzaW9uKSlcbiAgfVxuICB2YXIgbmVnYXRpdmUgPSBpbnB1dC5pbmRleE9mKCctJykgPj0gMCA/ICctJyA6ICcnXG5cbiAgdmFyIG51bWJlcnMgPSBvbmx5TnVtYmVycyhpbnB1dClcbiAgdmFyIGN1cnJlbmN5ID0gbnVtYmVyc1RvQ3VycmVuY3kobnVtYmVycywgb3B0LnByZWNpc2lvbilcbiAgdmFyIHBhcnRzID0gdG9TdHIoY3VycmVuY3kpLnNwbGl0KCcuJylcbiAgdmFyIGludGVnZXIgPSBwYXJ0c1swXVxuICB2YXIgZGVjaW1hbCA9IHBhcnRzWzFdXG4gIGludGVnZXIgPSBhZGRUaG91c2FuZFNlcGFyYXRvcihpbnRlZ2VyLCBvcHQudGhvdXNhbmRzKVxuICByZXR1cm4gb3B0LnByZWZpeCArIG5lZ2F0aXZlICsgam9pbkludGVnZXJBbmREZWNpbWFsKGludGVnZXIsIGRlY2ltYWwsIG9wdC5kZWNpbWFsKSArIG9wdC5zdWZmaXhcbn1cblxuZnVuY3Rpb24gdW5mb3JtYXQgKGlucHV0LCBwcmVjaXNpb24pIHtcbiAgdmFyIG5lZ2F0aXZlID0gaW5wdXQuaW5kZXhPZignLScpID49IDAgPyAtMSA6IDFcbiAgdmFyIG51bWJlcnMgPSBvbmx5TnVtYmVycyhpbnB1dClcbiAgdmFyIGN1cnJlbmN5ID0gbnVtYmVyc1RvQ3VycmVuY3kobnVtYmVycywgcHJlY2lzaW9uKVxuICByZXR1cm4gcGFyc2VGbG9hdChjdXJyZW5jeSkgKiBuZWdhdGl2ZVxufVxuXG5mdW5jdGlvbiBvbmx5TnVtYmVycyAoaW5wdXQpIHtcbiAgcmV0dXJuIHRvU3RyKGlucHV0KS5yZXBsYWNlKC9cXEQrL2csICcnKSB8fCAnMCdcbn1cblxuLy8gVW5jYXVnaHQgUmFuZ2VFcnJvcjogdG9GaXhlZCgpIGRpZ2l0cyBhcmd1bWVudCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjAgYXQgTnVtYmVyLnRvRml4ZWRcbmZ1bmN0aW9uIGZpeGVkIChwcmVjaXNpb24pIHtcbiAgcmV0dXJuIGJldHdlZW4oMCwgcHJlY2lzaW9uLCAyMClcbn1cblxuZnVuY3Rpb24gYmV0d2VlbiAobWluLCBuLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obiwgbWF4KSlcbn1cblxuZnVuY3Rpb24gbnVtYmVyc1RvQ3VycmVuY3kgKG51bWJlcnMsIHByZWNpc2lvbikge1xuICB2YXIgZXhwID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbilcbiAgdmFyIGZsb2F0ID0gcGFyc2VGbG9hdChudW1iZXJzKSAvIGV4cFxuICByZXR1cm4gZmxvYXQudG9GaXhlZChmaXhlZChwcmVjaXNpb24pKVxufVxuXG5mdW5jdGlvbiBhZGRUaG91c2FuZFNlcGFyYXRvciAoaW50ZWdlciwgc2VwYXJhdG9yKSB7XG4gIHJldHVybiBpbnRlZ2VyLnJlcGxhY2UoLyhcXGQpKD89KD86XFxkezN9KStcXGIpL2dtLCBgJDEke3NlcGFyYXRvcn1gKVxufVxuXG5mdW5jdGlvbiBjdXJyZW5jeVRvSW50ZWdlckFuZERlY2ltYWwgKGZsb2F0KSB7XG4gIHJldHVybiB0b1N0cihmbG9hdCkuc3BsaXQoJy4nKVxufVxuXG5mdW5jdGlvbiBqb2luSW50ZWdlckFuZERlY2ltYWwgKGludGVnZXIsIGRlY2ltYWwsIHNlcGFyYXRvcikge1xuICByZXR1cm4gZGVjaW1hbCA/IGludGVnZXIgKyBzZXBhcmF0b3IgKyBkZWNpbWFsIDogaW50ZWdlclxufVxuXG5mdW5jdGlvbiB0b1N0ciAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gdmFsdWUudG9TdHJpbmcoKSA6ICcnXG59XG5cbmZ1bmN0aW9uIHNldEN1cnNvciAoZWwsIHBvc2l0aW9uKSB7XG4gIHZhciBzZXRTZWxlY3Rpb25SYW5nZSA9IGZ1bmN0aW9uICgpIHsgZWwuc2V0U2VsZWN0aW9uUmFuZ2UocG9zaXRpb24sIHBvc2l0aW9uKSB9XG4gIGlmIChlbCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgIHNldFNlbGVjdGlvblJhbmdlKClcbiAgICBzZXRUaW1lb3V0KHNldFNlbGVjdGlvblJhbmdlLCAxKSAvLyBBbmRyb2lkIEZpeFxuICB9XG59XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0d1aWRlL0V2ZW50cy9DcmVhdGluZ19hbmRfdHJpZ2dlcmluZ19ldmVudHMjVGhlX29sZC1mYXNoaW9uZWRfd2F5XG5mdW5jdGlvbiBldmVudCAobmFtZSkge1xuICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50JylcbiAgZXZ0LmluaXRFdmVudChuYW1lLCB0cnVlLCB0cnVlKVxuICByZXR1cm4gZXZ0XG59XG5cbmV4cG9ydCB7XG4gIGZvcm1hdCxcbiAgdW5mb3JtYXQsXG4gIHNldEN1cnNvcixcbiAgZXZlbnRcbn1cbiJdfQ==

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directive__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__options__ = __webpack_require__(0);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Money", function() { return __WEBPACK_IMPORTED_MODULE_0__component___default.a; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VMoney", function() { return __WEBPACK_IMPORTED_MODULE_1__directive__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return __WEBPACK_IMPORTED_MODULE_2__options__["a"]; });



var VERSION = "0.8.1";



function install(Vue, globalOptions) {
  if (globalOptions) {
    Object.keys(globalOptions).map(function (key) {
      __WEBPACK_IMPORTED_MODULE_2__options__["a" /* default */][key] = globalOptions[key];
    });
  }
  Vue.directive('money', __WEBPACK_IMPORTED_MODULE_1__directive__["a" /* default */]);
  Vue.component('money', __WEBPACK_IMPORTED_MODULE_0__component___default.a);
}

/* harmony default export */ __webpack_exports__["default"] = (install);

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJNb25leSIsIlZNb25leSIsIm9wdGlvbnMiLCJWRVJTSU9OIiwicHJvY2Nlc3MiLCJlbnYiLCJpbnN0YWxsIiwiVnVlIiwiZ2xvYmFsT3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJkaXJlY3RpdmUiLCJjb21wb25lbnQiLCJ3aW5kb3ciLCJ1c2UiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsYUFBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGFBQW5CO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixXQUFwQjtBQUNBLElBQU1DLFVBQVVDLFNBQVNDLEdBQVQsQ0FBYUYsT0FBN0I7O0FBRUEsU0FDRUgsS0FERixFQUVFQyxNQUZGLEVBR0VDLE9BSEYsRUFJRUMsT0FKRjs7QUFPQSxTQUFTRyxPQUFULENBQWtCQyxHQUFsQixFQUF1QkMsYUFBdkIsRUFBc0M7QUFDcEMsTUFBSUEsYUFBSixFQUFtQjtBQUNqQkMsV0FBT0MsSUFBUCxDQUFZRixhQUFaLEVBQTJCRyxHQUEzQixDQUErQixVQUFTQyxHQUFULEVBQWE7QUFDMUNWLGNBQVFVLEdBQVIsSUFBZUosY0FBY0ksR0FBZCxDQUFmO0FBQ0QsS0FGRDtBQUdEO0FBQ0RMLE1BQUlNLFNBQUosQ0FBYyxPQUFkLEVBQXVCWixNQUF2QjtBQUNBTSxNQUFJTyxTQUFKLENBQWMsT0FBZCxFQUF1QmQsS0FBdkI7QUFDRDs7QUFFRCxlQUFlTSxPQUFmOztBQUVBO0FBQ0EsSUFBSSxPQUFPUyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxPQUFPUixHQUE1QyxFQUFpRDtBQUMvQ1EsU0FBT1IsR0FBUCxDQUFXUyxHQUFYLENBQWVWLE9BQWY7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9taXNhZWwvRG9jdW1lbnRvcy9wcm9qZXRvcy9wYWNrYWdlcy92LW1vbmV5Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vbmV5IGZyb20gJy4vY29tcG9uZW50J1xuaW1wb3J0IFZNb25leSBmcm9tICcuL2RpcmVjdGl2ZSdcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucydcbmNvbnN0IFZFUlNJT04gPSBwcm9jY2Vzcy5lbnYuVkVSU0lPTlxuXG5leHBvcnQge1xuICBNb25leSxcbiAgVk1vbmV5LFxuICBvcHRpb25zLFxuICBWRVJTSU9OXG59XG5cbmZ1bmN0aW9uIGluc3RhbGwgKFZ1ZSwgZ2xvYmFsT3B0aW9ucykge1xuICBpZiAoZ2xvYmFsT3B0aW9ucykge1xuICAgIE9iamVjdC5rZXlzKGdsb2JhbE9wdGlvbnMpLm1hcChmdW5jdGlvbihrZXkpe1xuICAgICAgb3B0aW9uc1trZXldID0gZ2xvYmFsT3B0aW9uc1trZXldXG4gICAgfSlcbiAgfVxuICBWdWUuZGlyZWN0aXZlKCdtb25leScsIFZNb25leSlcbiAgVnVlLmNvbXBvbmVudCgnbW9uZXknLCBNb25leSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFsbFxuXG4vLyBJbnN0YWxsIGJ5IGRlZmF1bHQgaWYgaW5jbHVkZWQgZnJvbSBzY3JpcHQgdGFnXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xuICB3aW5kb3cuVnVlLnVzZShpbnN0YWxsKVxufVxuIl19

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Money",
  props: {
    value: {
      required: true,
      type: [Number, String],
      default: 0
    },
    masked: {
      type: Boolean,
      default: false
    },
    precision: {
      type: Number,
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].precision;
      }
    },
    decimal: {
      type: String,
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].decimal;
      }
    },
    thousands: {
      type: String,
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].thousands;
      }
    },
    prefix: {
      type: String,
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].prefix;
      }
    },
    suffix: {
      type: String,
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].suffix;
      }
    }
  },

  directives: { money: __WEBPACK_IMPORTED_MODULE_0__directive__["a" /* default */] },

  data: function data() {
    return {
      formattedValue: ""
    };
  },


  watch: {
    value: {
      immediate: true,
      handler: function handler(newValue, oldValue) {
        var formatted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* format */])(newValue, this.$props);
        if (formatted !== this.formattedValue) {
          this.formattedValue = formatted;
        }
      }
    }
  },

  methods: {
    change: function change(evt) {
      this.$emit("input", this.masked ? evt.target.value : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* unformat */])(evt.target.value, this.precision));
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnQudnVlIl0sIm5hbWVzIjpbIm1vbmV5IiwiZGVmYXVsdHMiLCJmb3JtYXQiLCJ1bmZvcm1hdCIsIm5hbWUiLCJwcm9wcyIsInZhbHVlIiwicmVxdWlyZWQiLCJ0eXBlIiwiTnVtYmVyIiwiU3RyaW5nIiwiZGVmYXVsdCIsIm1hc2tlZCIsIkJvb2xlYW4iLCJwcmVjaXNpb24iLCJkZWNpbWFsIiwidGhvdXNhbmRzIiwicHJlZml4Iiwic3VmZml4IiwiZGlyZWN0aXZlcyIsImRhdGEiLCJmb3JtYXR0ZWRWYWx1ZSIsIndhdGNoIiwiaW1tZWRpYXRlIiwiaGFuZGxlciIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJmb3JtYXR0ZWQiLCIkcHJvcHMiLCJtZXRob2RzIiwiY2hhbmdlIiwiZXZ0IiwiJGVtaXQiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPQSxLQUFQLE1BQWtCLGFBQWxCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixXQUFyQjtBQUNBLFNBQVNDLE1BQVQsRUFBaUJDLFFBQWpCLFFBQWlDLFNBQWpDOztBQUVBLGVBQWU7QUFDYkMsUUFBTSxPQURPO0FBRWJDLFNBQU87QUFDTEMsV0FBTztBQUNMQyxnQkFBVSxJQURMO0FBRUxDLFlBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULENBRkQ7QUFHTEMsZUFBUztBQUhKLEtBREY7QUFNTEMsWUFBUTtBQUNOSixZQUFNSyxPQURBO0FBRU5GLGVBQVM7QUFGSCxLQU5IO0FBVUxHLGVBQVc7QUFDVE4sWUFBTUMsTUFERztBQUVURSxlQUFTO0FBQUEsZUFBTVYsU0FBU2EsU0FBZjtBQUFBO0FBRkEsS0FWTjtBQWNMQyxhQUFTO0FBQ1BQLFlBQU1FLE1BREM7QUFFUEMsZUFBUztBQUFBLGVBQU1WLFNBQVNjLE9BQWY7QUFBQTtBQUZGLEtBZEo7QUFrQkxDLGVBQVc7QUFDVFIsWUFBTUUsTUFERztBQUVUQyxlQUFTO0FBQUEsZUFBTVYsU0FBU2UsU0FBZjtBQUFBO0FBRkEsS0FsQk47QUFzQkxDLFlBQVE7QUFDTlQsWUFBTUUsTUFEQTtBQUVOQyxlQUFTO0FBQUEsZUFBTVYsU0FBU2dCLE1BQWY7QUFBQTtBQUZILEtBdEJIO0FBMEJMQyxZQUFRO0FBQ05WLFlBQU1FLE1BREE7QUFFTkMsZUFBUztBQUFBLGVBQU1WLFNBQVNpQixNQUFmO0FBQUE7QUFGSDtBQTFCSCxHQUZNOztBQWtDYkMsY0FBWSxFQUFFbkIsWUFBRixFQWxDQzs7QUFvQ2JvQixNQXBDYSxrQkFvQ047QUFDTCxXQUFPO0FBQ0xDLHNCQUFnQjtBQURYLEtBQVA7QUFHRCxHQXhDWTs7O0FBMENiQyxTQUFPO0FBQ0xoQixXQUFPO0FBQ0xpQixpQkFBVyxJQUROO0FBRUxDLGFBRkssbUJBRUdDLFFBRkgsRUFFYUMsUUFGYixFQUV1QjtBQUMxQixZQUFJQyxZQUFZekIsT0FBT3VCLFFBQVAsRUFBaUIsS0FBS0csTUFBdEIsQ0FBaEI7QUFDQSxZQUFJRCxjQUFjLEtBQUtOLGNBQXZCLEVBQXVDO0FBQ3JDLGVBQUtBLGNBQUwsR0FBc0JNLFNBQXRCO0FBQ0Q7QUFDRjtBQVBJO0FBREYsR0ExQ007O0FBc0RiRSxXQUFTO0FBQ1BDLFVBRE8sa0JBQ0FDLEdBREEsRUFDSztBQUNWLFdBQUtDLEtBQUwsQ0FDRSxPQURGLEVBRUUsS0FBS3BCLE1BQUwsR0FDSW1CLElBQUlFLE1BQUosQ0FBVzNCLEtBRGYsR0FFSUgsU0FBUzRCLElBQUlFLE1BQUosQ0FBVzNCLEtBQXBCLEVBQTJCLEtBQUtRLFNBQWhDLENBSk47QUFNRDtBQVJNO0FBdERJLENBQWYiLCJmaWxlIjoiY29tcG9uZW50LnZ1ZSIsInNvdXJjZVJvb3QiOiIvaG9tZS9taXNhZWwvRG9jdW1lbnRvcy9wcm9qZXRvcy9wYWNrYWdlcy92LW1vbmV5Iiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG5pbXBvcnQgbW9uZXkgZnJvbSBcIi4vZGlyZWN0aXZlXCI7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSBcIi4vb3B0aW9uc1wiO1xuaW1wb3J0IHsgZm9ybWF0LCB1bmZvcm1hdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJNb25leVwiLFxuICBwcm9wczoge1xuICAgIHZhbHVlOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBtYXNrZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgcHJlY2lzaW9uOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAoKSA9PiBkZWZhdWx0cy5wcmVjaXNpb25cbiAgICB9LFxuICAgIGRlY2ltYWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IGRlZmF1bHRzLmRlY2ltYWxcbiAgICB9LFxuICAgIHRob3VzYW5kczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogKCkgPT4gZGVmYXVsdHMudGhvdXNhbmRzXG4gICAgfSxcbiAgICBwcmVmaXg6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IGRlZmF1bHRzLnByZWZpeFxuICAgIH0sXG4gICAgc3VmZml4OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAoKSA9PiBkZWZhdWx0cy5zdWZmaXhcbiAgICB9XG4gIH0sXG5cbiAgZGlyZWN0aXZlczogeyBtb25leSB9LFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvcm1hdHRlZFZhbHVlOiBcIlwiXG4gICAgfTtcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIHZhbHVlOiB7XG4gICAgICBpbW1lZGlhdGU6IHRydWUsXG4gICAgICBoYW5kbGVyKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB2YXIgZm9ybWF0dGVkID0gZm9ybWF0KG5ld1ZhbHVlLCB0aGlzLiRwcm9wcyk7XG4gICAgICAgIGlmIChmb3JtYXR0ZWQgIT09IHRoaXMuZm9ybWF0dGVkVmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmZvcm1hdHRlZFZhbHVlID0gZm9ybWF0dGVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjaGFuZ2UoZXZ0KSB7XG4gICAgICB0aGlzLiRlbWl0KFxuICAgICAgICBcImlucHV0XCIsXG4gICAgICAgIHRoaXMubWFza2VkXG4gICAgICAgICAgPyBldnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgOiB1bmZvcm1hdChldnQudGFyZ2V0LnZhbHVlLCB0aGlzLnByZWNpc2lvbilcbiAgICAgICk7XG4gICAgfVxuICB9XG59O1xuIl19

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (defaults, extras) {
  defaults = defaults || {};
  extras = extras || {};
  return Object.keys(defaults).concat(Object.keys(extras)).reduce(function (acc, val) {
    acc[val] = extras[val] === undefined ? defaults[val] : extras[val];
    return acc;
  }, {});
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NpZ24uanMiXSwibmFtZXMiOlsiZGVmYXVsdHMiLCJleHRyYXMiLCJPYmplY3QiLCJrZXlzIiwiY29uY2F0IiwicmVkdWNlIiwiYWNjIiwidmFsIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLFVBQVVBLFFBQVYsRUFBb0JDLE1BQXBCLEVBQTRCO0FBQ3pDRCxhQUFXQSxZQUFZLEVBQXZCO0FBQ0FDLFdBQVNBLFVBQVUsRUFBbkI7QUFDQSxTQUFPQyxPQUFPQyxJQUFQLENBQVlILFFBQVosRUFBc0JJLE1BQXRCLENBQTZCRixPQUFPQyxJQUFQLENBQVlGLE1BQVosQ0FBN0IsRUFBa0RJLE1BQWxELENBQTBELFVBQVVDLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUNuRkQsUUFBSUMsR0FBSixJQUFXTixPQUFPTSxHQUFQLE1BQWdCQyxTQUFoQixHQUE0QlIsU0FBU08sR0FBVCxDQUE1QixHQUE0Q04sT0FBT00sR0FBUCxDQUF2RDtBQUNBLFdBQU9ELEdBQVA7QUFDRCxHQUhNLEVBR0osRUFISSxDQUFQO0FBSUQiLCJmaWxlIjoiYXNzaWduLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21pc2FlbC9Eb2N1bWVudG9zL3Byb2pldG9zL3BhY2thZ2VzL3YtbW9uZXkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZGVmYXVsdHMsIGV4dHJhcykge1xuICBkZWZhdWx0cyA9IGRlZmF1bHRzIHx8IHt9XG4gIGV4dHJhcyA9IGV4dHJhcyB8fCB7fVxuICByZXR1cm4gT2JqZWN0LmtleXMoZGVmYXVsdHMpLmNvbmNhdChPYmplY3Qua2V5cyhleHRyYXMpKS5yZWR1Y2UoIGZ1bmN0aW9uIChhY2MsIHZhbCkge1xuICAgIGFjY1t2YWxdID0gZXh0cmFzW3ZhbF0gPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRzW3ZhbF0gOiBleHRyYXNbdmFsXVxuICAgIHJldHVybiBhY2NcbiAgfSwge30pXG59XG4iXX0=

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(8),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._t("default", null, {
    "type": "tel",
    "value": _vm.formattedValue
  })
},staticRenderFns: []}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);
});