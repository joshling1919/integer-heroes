/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/lib/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _number_line = __webpack_require__(2);
	
	var _number_line2 = _interopRequireDefault(_number_line);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener("DOMContentLoaded", function () {
	  var canvas = document.getElementById("canvas");
	  canvas.width = 2000;
	  canvas.height = 1000;
	  var ctx = canvas.getContext("2d");
	
	  window.requestAnimFrame = function () {
	    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	      window.setTimeout(callback, 1000 / 60);
	    };
	  }();
	
	  var numberLine = new _number_line2.default(ctx);
	  numberLine.start();
	});

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NumberLine = function () {
	  function NumberLine(ctx) {
	    _classCallCheck(this, NumberLine);
	
	    this.lowerBound = -15;
	    this.ctx = ctx;
	    this.incrementer = 150;
	  }
	
	  _createClass(NumberLine, [{
	    key: "bindKeyHandlers",
	    value: function bindKeyHandlers() {
	      var _this = this;
	
	      var numberLine = this;
	      key("left", function () {
	        _this.incrementer -= 5;
	        numberLine.animate(_this.ctx, -1);
	      });
	
	      key("right", function () {
	        _this.incrementer += 5;
	        numberLine.animate(_this.ctx, 1);
	      });
	    }
	  }, {
	    key: "start",
	    value: function start() {
	      this.bindKeyHandlers();
	      this.draw(this.ctx);
	    }
	  }, {
	    key: "animate",
	    value: function animate(ctx, sign) {
	      var requestID = window.requestAnimFrame(this.animate.bind(this, ctx, sign));
	      if (this.incrementer % 150 === 0 || Math.abs(this.incrementer) > 1100) {
	        window.cancelAnimationFrame(requestID);
	      } else {
	        this.ctx.clearRect(0, 0, 2000, 1000);
	        var speed = 5;
	        console.log(this.incrementer);
	        this.incrementer += sign * speed;
	        this.draw(this.ctx);
	      }
	    }
	  }, {
	    key: "draw",
	    value: function draw(ctx) {
	      ctx.strokeStyle = "#31CBE3";
	      ctx.lineWidth = 3.0;
	      ctx.beginPath();
	      ctx.moveTo(0, 800);
	      ctx.lineTo(2000, 800);
	      ctx.stroke();
	
	      for (var i = 0; i < 31; i++) {
	        ctx.beginPath();
	        var xCoord = this.incrementer + 17 + i * 100;
	        var yCoord = 800;
	        var radius = 5;
	        ctx.arc(xCoord, yCoord, radius, 0, 2 * Math.PI, false);
	        ctx.fillStyle = 'white';
	        ctx.fill();
	      }
	
	      var labels = [];
	      for (var _i = -15; _i < 16; _i++) {
	        labels.push(_i);
	      }
	
	      ctx.fillStyle = "#31CBE3";
	      ctx.font = "40px Georgia";
	
	      for (var _i2 = 0; _i2 < 31; _i2++) {
	        ctx.fillText(labels[_i2], this.incrementer + _i2 * 100, 775);
	      }
	    }
	  }]);
	
	  return NumberLine;
	}();
	
	exports.default = NumberLine;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map