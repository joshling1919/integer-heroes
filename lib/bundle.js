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

	'use strict';
	
	var _round = __webpack_require__(6);
	
	var _round2 = _interopRequireDefault(_round);
	
	var _character = __webpack_require__(1);
	
	var _character2 = _interopRequireDefault(_character);
	
	var _points = __webpack_require__(10);
	
	var _points2 = _interopRequireDefault(_points);
	
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
	
	  var round = new _round2.default(ctx);
	  round.start();
	
	  var character = new _character2.default(ctx);
	  character.draw();
	
	  new _points2.default(0, ctx).draw();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ironman = __webpack_require__(9);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Character = function () {
	  function Character(ctx) {
	    _classCallCheck(this, Character);
	
	    this.ctx = ctx;
	    this.image = new Image();
	    this.image.src = "./lib/images/ironman.png";
	  }
	
	  _createClass(Character, [{
	    key: "draw",
	    value: function draw() {
	      var _this = this;
	
	      var iron = _ironman.IRONMAN1.frame;
	      this.image.onload = function () {
	        _this.ctx.drawImage(_this.image, iron.x, iron.y, iron.w, iron.h, 0, 0, iron.w / 1.2, iron.h / 1.2);
	      };
	    }
	  }]);
	
	  return Character;
	}();
	
	exports.default = Character;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _integer = __webpack_require__(4);
	
	var _integer2 = _interopRequireDefault(_integer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NumberLine = function () {
	  function NumberLine(ctx) {
	    _classCallCheck(this, NumberLine);
	
	    this.ctx = ctx;
	    this.incrementer = -1530;
	    this.selected = 0;
	    this.numMarkers = 50;
	    this.frameCount = 0;
	  }
	
	  _createClass(NumberLine, [{
	    key: "bindKeyHandlers",
	    value: function bindKeyHandlers() {
	      var _this = this;
	
	      var numberLine = this;
	      key("right", function () {
	        _this.selected += 1;
	        numberLine.animate(_this.ctx, -1);
	      });
	
	      key("left", function () {
	        _this.selected -= 1;
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
	      if (this.frameCount === 10) {
	        this.frameCount = 0;
	        window.cancelAnimationFrame(requestID);
	      } else {
	        this.frameCount += 1;
	        this.ctx.clearRect(0, 700, 2000, 150);
	        var speed = 10;
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
	
	      this.drawNumberLineMarkers(ctx);
	      this.drawLabels(ctx);
	      this.drawCenterBox(ctx);
	    }
	  }, {
	    key: "drawCenterBox",
	    value: function drawCenterBox(ctx) {
	      ctx.globalAlpha = 0.18;
	      ctx.fillRect(925, 725, 100, 100);
	      ctx.globalAlpha = 1;
	    }
	  }, {
	    key: "drawNumberLineMarkers",
	    value: function drawNumberLineMarkers(ctx) {
	      for (var i = 0; i < this.numMarkers; i++) {
	        ctx.beginPath();
	        var xCoord = this.incrementer + i * 100;
	        var yCoord = 800;
	        var radius = 5;
	        ctx.arc(xCoord, yCoord, radius, 0, 2 * Math.PI, false);
	        ctx.fillStyle = 'white';
	        ctx.fill();
	      }
	    }
	  }, {
	    key: "drawLabels",
	    value: function drawLabels(ctx) {
	      var numberLineNumbers = [];
	      for (var i = this.numMarkers - 75; i <= this.numMarkers - 25; i++) {
	        numberLineNumbers.push(new _integer2.default(i, ctx));
	      }
	
	      ctx.fillStyle = "#31CBE3";
	      ctx.font = "40px Georgia";
	
	      for (var _i = 0; _i <= this.numMarkers; _i++) {
	        var number = numberLineNumbers[_i];
	        var xPos = this.incrementer + _i * 100;
	        var yPos = 775;
	        var color = "#31CBE3";
	        var size = "40";
	        if (xPos > 875 && xPos < 975) {
	          color = "white";
	          size = "60";
	        }
	        var font = "Georgia";
	        number.draw(xPos, yPos, color, size, font);
	      }
	    }
	  }]);
	
	  return NumberLine;
	}();
	
	exports.default = NumberLine;

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Integer = function () {
	  function Integer(value, ctx) {
	    _classCallCheck(this, Integer);
	
	    this.value = value;
	    this.ctx = ctx;
	  }
	
	  _createClass(Integer, [{
	    key: "draw",
	    value: function draw(xPos, yPos, color, size, font, dimension) {
	      font = font || "Georgia";
	      color = color || "white";
	      size = size || "40";
	      this.ctx.font = size + "px " + font;
	      this.ctx.fillStyle = color;
	      this.ctx.textAlign = "center";
	
	      if (dimension === 3) {
	        this.drawTextInCanvas(this.ctx, this.value, xPos, yPos, 6, color);
	      } else {
	        this.ctx.fillText(this.value, xPos, yPos);
	      }
	    }
	  }, {
	    key: "drawTextInCanvas",
	    value: function drawTextInCanvas(ctx, text, width, height, depth, color) {
	      var count = void 0;
	      for (count = 0; count < depth; count++) {
	        ctx.fillText(text, width - count, height - count);
	      }
	      ctx.fillStyle = "" + color;
	      ctx.shadowColor = "black";
	      ctx.shadowBlur = 8;
	      ctx.shadowOffsetX = depth + 3;
	      ctx.shadowOffsetY = depth + 3;
	      ctx.fillText(text, width - count, height - count);
	    }
	  }]);
	
	  return Integer;
	}();
	
	exports.default = Integer;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _integer = __webpack_require__(4);
	
	var _integer2 = _interopRequireDefault(_integer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MathProblem = function () {
	  function MathProblem(ctx, value1, value2) {
	    _classCallCheck(this, MathProblem);
	
	    this.ctx = ctx;
	    this.num1 = new _integer2.default(value1, ctx);
	    this.operator = new _integer2.default("+", ctx);
	    this.num2 = new _integer2.default(value2, ctx);
	    this.equalSign = new _integer2.default("=", ctx);
	  }
	
	  _createClass(MathProblem, [{
	    key: "drawHorizontal",
	    value: function drawHorizontal() {
	      this.num1.draw(840, 120, "white", "100", "Georgia", 3);
	      this.operator.draw(930, 120, "white", "100", "Georgia", 3);
	      this.num2.draw(1035, 120, "white", "100", "Georgia", 3);
	      this.equalSign.draw(1135, 130, "white", "100", "Georgia", 3);
	    }
	  }, {
	    key: "drawVertical",
	    value: function drawVertical() {
	      this.num1.draw(980, 80, "white", "100", "Georgia", 3);
	      this.operator.draw(880, 180, "white", "100", "Georgia", 3);
	      this.num2.draw(980, 180, "white", "100", "Georgia", 3);
	      this.ctx.beginPath();
	      this.ctx.strokeStyle = "white";
	      this.ctx.moveTo(830, 220);
	      this.ctx.lineTo(1100, 220);
	      this.ctx.stroke();
	    }
	  }]);
	
	  return MathProblem;
	}();
	
	exports.default = MathProblem;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _number_line = __webpack_require__(2);
	
	var _number_line2 = _interopRequireDefault(_number_line);
	
	var _math_problem = __webpack_require__(5);
	
	var _math_problem2 = _interopRequireDefault(_math_problem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Round = function () {
	  function Round(ctx) {
	    _classCallCheck(this, Round);
	
	    this.numberLine = new _number_line2.default(ctx);
	    this.mathProblem = new _math_problem2.default(ctx, 4, -5);
	  }
	
	  _createClass(Round, [{
	    key: 'start',
	    value: function start() {
	      this.mathProblem.drawHorizontal();
	      this.numberLine.start();
	    }
	  }]);
	
	  return Round;
	}();
	
	exports.default = Round;

/***/ },
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var IRONMAN1 = {
		"frame": { "x": 1, "y": 1, "w": 160, "h": 280 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 160, "h": 280 },
		"sourceSize": { "w": 160, "h": 280 },
		"pivot": { "x": 0.5, "y": 0.5 }
	};
	var IRONMAN2 = {
		"frame": { "x": 163, "y": 1, "w": 160, "h": 280 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 160, "h": 280 },
		"sourceSize": { "w": 160, "h": 280 },
		"pivot": { "x": 0.5, "y": 0.5 }
	};
	var IRONMAN3 = {
		"frame": { "x": 325, "y": 1, "w": 160, "h": 280 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 160, "h": 280 },
		"sourceSize": { "w": 160, "h": 280 },
		"pivot": { "x": 0.5, "y": 0.5 }
	};
	
	var IRONMAN4 = {
		"frame": { "x": 487, "y": 1, "w": 160, "h": 280 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 160, "h": 280 },
		"sourceSize": { "w": 160, "h": 280 },
		"pivot": { "x": 0.5, "y": 0.5 }
	};
	var IRONMAN5 = {
		"frame": { "x": 649, "y": 1, "w": 262, "h": 232 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 262, "h": 232 },
		"sourceSize": { "w": 262, "h": 232 },
		"pivot": { "x": 0.5, "y": 0.5 }
	};
	
	exports.IRONMAN1 = IRONMAN1;
	exports.IRONMAN2 = IRONMAN2;
	exports.IRONMAN3 = IRONMAN3;
	exports.IRONMAN4 = IRONMAN4;
	exports.IRONMAN5 = IRONMAN5;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _integer = __webpack_require__(4);
	
	var _integer2 = _interopRequireDefault(_integer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Points = function () {
	  function Points(points, ctx) {
	    _classCallCheck(this, Points);
	
	    this.ctx = ctx;
	    this.points = points;
	  }
	
	  _createClass(Points, [{
	    key: "draw",
	    value: function draw() {
	      this.ctx.fillStyle = "white";
	      this.ctx.fillText("Points:", 1750, 950);
	      var points = new _integer2.default(this.points, this.ctx);
	      points.draw(1835, 950);
	    }
	  }]);
	
	  return Points;
	}();
	
	exports.default = Points;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map