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
	
	var _lesson = __webpack_require__(1);
	
	var _lesson2 = _interopRequireDefault(_lesson);
	
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
	
	  var lesson = new _lesson2.default(ctx);
	  lesson.start();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _points = __webpack_require__(2);
	
	var _points2 = _interopRequireDefault(_points);
	
	var _round = __webpack_require__(4);
	
	var _round2 = _interopRequireDefault(_round);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Lesson = function () {
	  function Lesson(ctx) {
	    _classCallCheck(this, Lesson);
	
	    this.ctx = ctx;
	    this.points = new _points2.default(0, ctx);
	  }
	
	  _createClass(Lesson, [{
	    key: 'start',
	    value: function start() {
	      var round = new _round2.default(this.ctx, this.points);
	      round.start();
	    }
	  }]);
	
	  return Lesson;
	}();
	
	exports.default = Lesson;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _integer = __webpack_require__(3);
	
	var _integer2 = _interopRequireDefault(_integer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Points = function () {
	  function Points(value, ctx) {
	    _classCallCheck(this, Points);
	
	    this.ctx = ctx;
	    this.value = value;
	  }
	
	  _createClass(Points, [{
	    key: "draw",
	    value: function draw() {
	      this.ctx.fillStyle = "white";
	      this.ctx.font = "70px Georgia";
	      this.ctx.fillText("Points:", 1740, 950);
	      var points = new _integer2.default(this.value, this.ctx);
	      points.draw(1900, 950, "white", 70);
	    }
	  }]);
	
	  return Points;
	}();
	
	exports.default = Points;

/***/ },
/* 3 */
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
	    this.grow = false;
	  }
	
	  _createClass(Integer, [{
	    key: "draw",
	    value: function draw(xPos, yPos, color, size, font, dimension) {
	      this.xPos = xPos;
	      this.yPos = yPos;
	      this.size = size;
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
	    key: "shrinkAndGrow",
	    value: function shrinkAndGrow() {
	      this.requestID = window.requestAnimFrame(this.shrinkAndGrow.bind(this, this.ctx));
	      var size = parseInt(this.size);
	
	      if (size === 120) {
	        this.grow = false;
	      } else if (size === 90) {
	        this.grow = true;
	      }
	      if (this.grow) {
	        size++;
	      } else {
	        size--;
	      }
	      this.ctx.clearRect(this.xPos - 50, this.yPos - 90, 100, 110);
	      this.draw(this.xPos, this.yPos, "white", size);
	    }
	  }, {
	    key: "stopAnimation",
	    value: function stopAnimation() {
	      window.cancelAnimationFrame(this.requestID);
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _number_line = __webpack_require__(5);
	
	var _number_line2 = _interopRequireDefault(_number_line);
	
	var _math_problem = __webpack_require__(6);
	
	var _math_problem2 = _interopRequireDefault(_math_problem);
	
	var _container = __webpack_require__(7);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _ironman = __webpack_require__(8);
	
	var _ironman2 = _interopRequireDefault(_ironman);
	
	var _goblin = __webpack_require__(10);
	
	var _goblin2 = _interopRequireDefault(_goblin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Round = function () {
	  function Round(ctx, points) {
	    _classCallCheck(this, Round);
	
	    this.ctx = ctx;
	    this.numberLine = new _number_line2.default(ctx);
	    this.points = points;
	    this.numberLine.draw(ctx);
	    this.points.draw();
	    //potentially turning off positive plus positive:
	    // while ((firstNum >= 0 && secondNum >= 0) || firstNum === undefined) {
	    // }
	    this.firstNum = this.getRandomInt();
	    this.secondNum = this.getRandomInt();
	    this.mathProblem = new _math_problem2.default(ctx, this.firstNum, this.secondNum);
	    this.container1 = new _container2.default(this.firstNum, ctx, true, 1);
	    this.container2 = new _container2.default(this.secondNum, ctx, false, 2);
	    this.ironmanStart = new _ironman2.default(1, ctx, 0, 0, this.container1, this.container2);
	    this.ironmanStart.draw();
	    this.goblinStart = new _goblin2.default(-1, ctx, 1895, 0, this.container1, this.container2);
	    this.goblinStart.draw();
	    this.instructions = document.getElementById('instructions');
	    this.firstButton = document.getElementById('first-button');
	    this.secondButton = document.getElementById('second-button');
	    this.instructions.style.background = "#575757";
	    this.instructions.innerHTML = "Choose the correct number of characters to represent the first number";
	    this.stage = 1;
	    //*note to self* multiple click listeners could cause potential problems
	    this.ironmanStart.bindClickListener();
	    this.goblinStart.bindClickListener();
	    this.handleButtons();
	  }
	
	  _createClass(Round, [{
	    key: 'handleButtons',
	    value: function handleButtons() {
	      var _this = this;
	
	      this.secondButton.addEventListener('click', this.clearCharacters.bind(this));
	      document.addEventListener('keydown', function (event) {
	        if (event.keyCode === 13) {
	          _this.submitAnswer.bind(_this)();
	        }
	      });
	      this.firstButton.addEventListener('click', this.submitAnswer.bind(this));
	    }
	  }, {
	    key: 'clearCharacters',
	    value: function clearCharacters() {
	      if (this.secondButton.innerHTML === "FIGHT") {
	        this.changeInstructionsColor();
	        this.checkForFighting();
	      } else {
	        if (this.container1.selected) {
	          this.container1.clearCharacters();
	          this.ctx.clearRect(152, 202, 596, 496);
	        } else if (this.container2.selected) {
	          this.container2.clearCharacters();
	          this.ctx.clearRect(1252, 202, 596, 496);
	        }
	      }
	    }
	  }, {
	    key: 'submitAnswer',
	    value: function submitAnswer() {
	      this.changeInstructionsColor();
	      if (this.firstButton.innerHTML === 'JOIN FORCES') {
	        this.checkForJoining();
	      } else {
	        if (this.container1.selected) {
	          this.checkAnswer(this.container1);
	        } else if (this.container2.selected) {
	          this.checkAnswer(this.container2);
	        } else if (this.numberLine.active) {
	          this.checkNumberLine();
	        }
	      }
	    }
	  }, {
	    key: 'changeInstructionsColor',
	    value: function changeInstructionsColor() {
	      var newColor = void 0,
	          fontColor = void 0;
	      if (this.instructions.style.background === "rgb(87, 87, 87)") {
	        newColor = "black";
	        fontColor = "white";
	      } else {
	        newColor = "#575757";
	        fontColor = "white";
	      }
	      this.instructions.style.background = newColor;
	      this.instructions.style.color = fontColor;
	    }
	  }, {
	    key: 'checkNumberLine',
	    value: function checkNumberLine() {
	      if (this.container1.value === this.numberLine.selected) {
	        this.points.value += 5;
	        this.thirdStage();
	      } else {
	        this.points.value -= 5;
	        this.instructions.innerHTML = "Hm, not quite, try again! Move the number line to represent the first number.";
	      }
	      this.changePoints();
	    }
	  }, {
	    key: 'checkAnswer',
	    value: function checkAnswer(container) {
	      var sameSign = true;
	      var sum = 0;
	      container.characters.forEach(function (character, index) {
	        if (index === 0) {
	          sum += character.value;
	          return;
	        }
	        if (character.value !== container.characters[index - 1].value) {
	          sameSign = false;
	        }
	        sum += character.value;
	      });
	      var correct = sameSign && sum === container.value;
	      // this.ctx.clearRect(1750, 950, 200, 100);
	      if (correct) {
	        this.points.value += 5;
	        if (this.container1.selected) {
	          this.secondStage();
	        } else if (this.container2.selected) {
	          this.fourthStage();
	        }
	      } else {
	        this.points.value -= 5;
	        this.clearCharacters();
	        this.instructions.innerHTML = "Hm, not quite! Remember, positive = superheroes; negative = villain.";
	      }
	      this.changePoints();
	    }
	  }, {
	    key: 'changePoints',
	    value: function changePoints() {
	      this.ctx.clearRect(1650, 900, 400, 100);
	      this.points.draw();
	    }
	  }, {
	    key: 'getRandomInt',
	    value: function getRandomInt() {
	      var min = -8;
	      var max = 8;
	      var random = Math.round(Math.random() * (max - min) + min);
	      while (random === 0) {
	        random = Math.round(Math.random() * (max - min) + min);
	      }
	      return random;
	    }
	  }, {
	    key: 'start',
	    value: function start() {
	      this.firstStage();
	    }
	  }, {
	    key: 'firstStage',
	    value: function firstStage() {
	      this.container1.draw();
	      this.container2.draw();
	      this.mathProblem.drawHorizontal(1);
	    }
	  }, {
	    key: 'secondStage',
	    value: function secondStage() {
	      this.instructions.innerHTML = "Nice job! Now, use the arrow keys to move the numberline to represent the first number, and then press 'Submit'!";
	      this.container1.selected = false;
	      this.container1.clearFirstContainer();
	      this.container1.draw();
	      this.numberLine.start();
	    }
	  }, {
	    key: 'thirdStage',
	    value: function thirdStage() {
	      this.instructions.innerHTML = "Nice job! Next, choose the correct characters to represent the second number!";
	      this.mathProblem.drawHorizontal(2);
	      this.numberLine.end();
	      this.container2.selected = true;
	      this.container2.draw();
	    }
	  }, {
	    key: 'fourthStage',
	    value: function fourthStage() {
	      this.instructions.innerHTML = "Sweet! Will the two sides fight or join forces?";
	      this.firstButton.innerHTML = "JOIN FORCES";
	      this.secondButton.innerHTML = "FIGHT";
	      this.container2.selected = false;
	      this.container2.clearSecondContainer();
	      this.container2.draw();
	      this.mathProblem.drawHorizontal();
	    }
	  }, {
	    key: 'checkForFighting',
	    value: function checkForFighting() {
	      if (this.firstNum * this.secondNum < 0) {
	        this.points.value += 5;
	        this.fightingStage();
	      } else {
	        this.points.value -= 5;
	        this.instructions.innerHTML = "Try again! If the two number's signs are the same, they should join forces!";
	      }
	      this.changePoints();
	    }
	  }, {
	    key: 'checkForJoining',
	    value: function checkForJoining() {
	      if (this.firstNum * this.secondNum > 0) {
	        this.points.value += 5;
	        // this.joiningStage();
	      } else {
	        this.points.value -= 5;
	        this.instructions.innerHTML = "Try again! If the two number's signs are opposite, they should fight!";
	      }
	      this.changePoints();
	    }
	  }, {
	    key: 'fightingStage',
	    value: function fightingStage() {
	      this.container1.clearFirstContainer();
	      this.container2.clearSecondContainer();
	      var isFighting = true;
	      this.container1.draw(isFighting);
	      this.container2.draw(isFighting);
	    }
	  }]);
	
	  return Round;
	}();
	
	exports.default = Round;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _integer = __webpack_require__(3);
	
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
	      // document.addEventListener("keyup", (event) => {
	      //   if (event.keyCode === 37) {
	      //     numberLine.selected -= 1;
	      //     numberLine.animate(numberLine.ctx, 1);
	      //   } else if (event.keyCode === 39) {
	      //     numberLine.selected += 1;
	      //     numberLine.animate(numberLine.ctx, -1);
	      //   }
	      // });
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
	    key: "unbindKeyHandlers",
	    value: function unbindKeyHandlers() {
	      var numberLine = this;
	
	      key.unbind("right");
	
	      key.unbind("left");
	    }
	  }, {
	    key: "start",
	    value: function start() {
	      this.drawCenterBox(this.ctx);
	      this.bindKeyHandlers();
	      this.active = true;
	      // this.draw(this.ctx);
	    }
	  }, {
	    key: "end",
	    value: function end() {
	      this.unbindKeyHandlers();
	      this.active = false;
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
	        this.ctx.clearRect(0, 720, 2000, 150);
	        var speed = 10;
	        this.incrementer += sign * speed;
	        this.draw(this.ctx);
	        this.ctx.closePath();
	      }
	      this.drawCenterBox(this.ctx);
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
	      ctx.closePath();
	
	      this.drawNumberLineMarkers(ctx);
	      this.drawLabels(ctx);
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
	        ctx.closePath();
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _integer = __webpack_require__(3);
	
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
	    value: function drawHorizontal(section) {
	      this.clearHorizontal();
	      this.num1.draw(870, 120, "white", "100", "Georgia", 3);
	      this.operator.draw(960, 120, "white", "100", "Georgia", 3);
	      this.num2.draw(1065, 120, "white", "100", "Georgia", 3);
	      if (section === 1) {
	        this.num1.shrinkAndGrow();
	      } else if (section === 2) {
	        this.num1.stopAnimation();
	        this.num2.shrinkAndGrow();
	      } else {
	        this.num2.stopAnimation();
	      }
	      this.equalSign.draw(1165, 130, "white", "100", "Georgia", 3);
	    }
	  }, {
	    key: "drawVertical",
	    value: function drawVertical() {
	      this.num1.draw(1100, 80, "white", "100", "Georgia", 3);
	      this.operator.draw(910, 180, "white", "100", "Georgia", 3);
	      this.num2.draw(1100, 180, "white", "100", "Georgia", 3);
	      this.ctx.beginPath();
	      this.ctx.strokeStyle = "white";
	      this.ctx.moveTo(860, 220);
	      this.ctx.lineTo(1130, 220);
	      this.ctx.stroke();
	    }
	  }, {
	    key: "clearHorizontal",
	    value: function clearHorizontal() {
	      this.ctx.clearRect(800, 20, 445, 200);
	    }
	  }]);
	
	  return MathProblem;
	}();
	
	exports.default = MathProblem;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ironman = __webpack_require__(8);
	
	var _ironman2 = _interopRequireDefault(_ironman);
	
	var _goblin = __webpack_require__(10);
	
	var _goblin2 = _interopRequireDefault(_goblin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Container = function () {
	  function Container(value, ctx, selected, containerNumber) {
	    _classCallCheck(this, Container);
	
	    this.selected = selected;
	    this.containerNumber = containerNumber;
	    this.ctx = ctx;
	    this.characters = [];
	    this.value = value;
	  }
	
	  _createClass(Container, [{
	    key: 'draw',
	    value: function draw(isFighting) {
	      if (isFighting) {
	        this.drawFightingScene();
	      } else {
	        this.ctx.strokeStyle = "white";
	        this.ctx.lineWidth = 1;
	        if (this.selected === true) {
	          this.ctx.strokeStyle = "#31CBE3";
	          this.ctx.lineWidth = 6;
	        }
	        if (this.containerNumber === 1) {
	          this.ctx.beginPath();
	          this.ctx.rect(150, 200, 600, 500);
	          this.ctx.stroke();
	          this.ctx.closePath();
	          for (var index = 0; index < this.characters.length; index++) {
	            if (index > 9) {
	              break;
	            }
	            this.characters[index].xPos = 160 + index * 115;
	            this.characters[index].yPos = 210;
	            if (index > 4) {
	              this.characters[index].xPos = 160 + index % 5 * 115;
	              this.characters[index].yPos = 210 + 200;
	            }
	            this.characters[index].index = index;
	            this.characters[index].drawInContainer(this);
	          }
	        } else {
	          this.ctx.beginPath();
	          this.ctx.rect(1250, 200, 600, 500);
	          this.ctx.stroke();
	          this.ctx.closePath();
	          for (var _index = 0; _index < this.characters.length; _index++) {
	            if (_index > 9) {
	              break;
	            }
	            this.characters[_index].xPos = 1260 + _index * 115;
	            this.characters[_index].yPos = 210;
	            if (_index > 4) {
	              this.characters[_index].xPos = 1260 + _index % 5 * 115;
	              this.characters[_index].yPos = 210 + 200;
	            }
	            this.characters[_index].index = _index;
	            this.characters[_index].drawInContainer(this);
	          }
	        }
	      }
	    }
	  }, {
	    key: 'drawFightingScene',
	    value: function drawFightingScene() {
	      var _this = this;
	
	      if (this.containerNumber === 1) {
	        this.characters.forEach(function (character, index) {
	          character.xPos = 800 - index * 110;
	          character.yPos = 300;
	          character.drawFightingStance(_this);
	        });
	      } else {
	        this.characters.forEach(function (character, index) {
	          character.xPos = 1000 + index * 110;
	          character.yPos = 300;
	          character.drawFightingStance(_this);
	        });
	      }
	    }
	  }, {
	    key: 'addCharacter',
	    value: function addCharacter(characterType) {
	      var character = this.newCharacter(characterType);
	      this.characters.push(character);
	    }
	  }, {
	    key: 'newCharacter',
	    value: function newCharacter(characterType) {
	      var newCharacter = void 0;
	      if (characterType.constructor.name === "Ironman") {
	        newCharacter = new _ironman2.default(1, this.ctx, undefined, undefined, this.container1, this.container2);
	      } else if (characterType.constructor.name === "Goblin") {
	        newCharacter = new _goblin2.default(-1, this.ctx, undefined, undefined, this.container1, this.container2);
	      }
	      return newCharacter;
	    }
	  }, {
	    key: 'clearFirstContainer',
	    value: function clearFirstContainer() {
	      this.ctx.clearRect(145, 195, 610, 510);
	    }
	  }, {
	    key: 'clearSecondContainer',
	    value: function clearSecondContainer() {
	      this.ctx.clearRect(1240, 195, 620, 510);
	    }
	  }, {
	    key: 'clearCharacters',
	    value: function clearCharacters() {
	      var charactersLength = this.characters.length;
	      this.characters.splice(0, charactersLength);
	    }
	  }]);
	
	  return Container;
	}();
	
	exports.default = Container;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _character = __webpack_require__(9);
	
	var _character2 = _interopRequireDefault(_character);
	
	var _ironmanJSON = __webpack_require__(12);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Ironman = function (_Character) {
	  _inherits(Ironman, _Character);
	
	  function Ironman(value, ctx, xPos, yPos, container1, container2) {
	    var _ref;
	
	    _classCallCheck(this, Ironman);
	
	    var _this = _possibleConstructorReturn(this, (_ref = Ironman.__proto__ || Object.getPrototypeOf(Ironman)).call.apply(_ref, [this].concat([xPos, yPos, container1, container2])));
	
	    _this.ctx = ctx;
	    _this.image = new Image();
	    _this.width = 105;
	    _this.height = 185;
	    _this.value = value;
	    return _this;
	  }
	
	  _createClass(Ironman, [{
	    key: 'draw',
	    value: function draw() {
	      var _this2 = this;
	
	      var iron0 = _ironmanJSON.IRONMAN0.frame;
	      this.image.onload = function () {
	        _this2.ctx.drawImage(_this2.image, iron0.x, iron0.y, iron0.w, iron0.h, _this2.xPos, _this2.yPos, _this2.width, _this2.height);
	      };
	      this.image.src = "./lib/images/ironman_right.png";
	    }
	  }, {
	    key: 'drawInContainer',
	    value: function drawInContainer(container) {
	      var _this3 = this;
	
	      if (container.containerNumber === 1) {
	        this.draw();
	      } else {
	        (function () {
	          var iron8 = _ironmanJSON.IRONMAN8.frame;
	          _this3.image.onload = function () {
	            _this3.ctx.drawImage(_this3.image, iron8.x, iron8.y, iron8.w, iron8.h, _this3.xPos, _this3.yPos, _this3.width, _this3.height);
	          };
	          _this3.image.src = "./lib/images/ironman_left.png";
	        })();
	      }
	    }
	  }, {
	    key: 'drawFightingStance',
	    value: function drawFightingStance(container) {
	      var _this4 = this;
	
	      if (container.containerNumber === 1) {
	        (function () {
	          var iron1 = _ironmanJSON.IRONMAN1.frame;
	          _this4.image.onload = function () {
	            _this4.ctx.drawImage(_this4.image, iron1.x, iron1.y, iron1.w, iron1.h, _this4.xPos, _this4.yPos, _this4.width, _this4.height);
	          };
	          _this4.image.src = "./lib/images/ironman_right.png";
	        })();
	      } else {
	        (function () {
	          var iron6 = _ironmanJSON.IRONMAN6.frame;
	          _this4.image.onload = function () {
	            _this4.ctx.drawImage(_this4.image, iron6.x, iron6.y, iron6.w, iron6.h, _this4.xPos, _this4.yPos, _this4.width, _this4.height);
	          };
	          _this4.image.src = "./lib/images/ironman_left.png";
	        })();
	      }
	    }
	  }]);
	
	  return Ironman;
	}(_character2.default);
	
	exports.default = Ironman;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Character = function () {
	  function Character(xPos, yPos, container1, container2) {
	    _classCallCheck(this, Character);
	
	    this.xPos = xPos;
	    this.yPos = yPos;
	    this.container1 = container1;
	    this.container2 = container2;
	  }
	
	  _createClass(Character, [{
	    key: 'bindClickListener',
	    value: function bindClickListener() {
	      var canvas = document.getElementById('canvas');
	      canvas.addEventListener('click', this.handleClick.bind(this));
	    }
	
	    //let's change things up and just have one clear all button.
	
	  }, {
	    key: 'handleClick',
	    value: function handleClick(event) {
	      var rect = event.currentTarget.getBoundingClientRect();
	      var cursorX = this.getCursorXPos(event, rect);
	      var cursorY = this.getCursorYPos(event, rect);
	      if (cursorX > this.xPos && cursorX < this.xPos + this.width && cursorY > this.yPos && cursorY < this.yPos + this.height) {
	        if (!this.index) {
	          if (this.container1.selected) {
	            this.container1.clearFirstContainer();
	            this.container1.addCharacter(this);
	            this.container1.draw();
	          } else if (this.container2.selected) {
	            this.container2.clearSecondContainer();
	            this.container2.addCharacter(this);
	            this.container2.draw();
	          }
	        }
	      }
	    }
	  }, {
	    key: 'getCursorXPos',
	    value: function getCursorXPos(event, rect) {
	      var x = (event.clientX - rect.left) / (rect.right - rect.left) * event.currentTarget.width;
	      return x;
	    }
	  }, {
	    key: 'getCursorYPos',
	    value: function getCursorYPos(event, rect) {
	      var y = (event.clientY - rect.top) / (rect.bottom - rect.top) * event.currentTarget.height;
	      return y;
	    }
	  }]);
	
	  return Character;
	}();
	
	exports.default = Character;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _character = __webpack_require__(9);
	
	var _character2 = _interopRequireDefault(_character);
	
	var _goblinJSON = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Goblin = function (_Character) {
	  _inherits(Goblin, _Character);
	
	  function Goblin(value, ctx, xPos, yPos, container1, container2) {
	    var _ref;
	
	    _classCallCheck(this, Goblin);
	
	    var _this = _possibleConstructorReturn(this, (_ref = Goblin.__proto__ || Object.getPrototypeOf(Goblin)).call.apply(_ref, [this].concat([xPos, yPos, container1, container2])));
	
	    _this.ctx = ctx;
	    _this.image = new Image();
	    _this.width = 105;
	    _this.height = 185;
	    _this.value = value;
	    return _this;
	  }
	
	  _createClass(Goblin, [{
	    key: 'draw',
	    value: function draw() {
	      var _this2 = this;
	
	      var goblin6 = _goblinJSON.GOBLIN6.frame;
	      this.image.onload = function () {
	        _this2.ctx.drawImage(_this2.image, goblin6.x, goblin6.y, goblin6.w, goblin6.h, _this2.xPos, _this2.yPos, _this2.width, _this2.height);
	      };
	      this.image.src = "./lib/images/goblin_left.png";
	    }
	  }, {
	    key: 'drawInContainer',
	    value: function drawInContainer(container) {
	      var _this3 = this;
	
	      if (container.containerNumber === 1) {
	        (function () {
	          var goblin0 = _goblinJSON.GOBLIN0.frame;
	          _this3.image.onload = function () {
	            _this3.ctx.drawImage(_this3.image, goblin0.x, goblin0.y, goblin0.w, goblin0.h, _this3.xPos, _this3.yPos, _this3.width, _this3.height);
	          };
	          _this3.image.src = "./lib/images/goblin_right.png";
	        })();
	      } else {
	        this.draw();
	      }
	    }
	  }, {
	    key: 'drawFightingStance',
	    value: function drawFightingStance(container) {
	      var _this4 = this;
	
	      if (container.containerNumber === 1) {
	        (function () {
	          var goblin1 = _goblinJSON.GOBLIN1.frame;
	          _this4.image.onload = function () {
	            _this4.ctx.drawImage(_this4.image, goblin1.x, goblin1.y, goblin1.w, goblin1.h, _this4.xPos, _this4.yPos, _this4.width, _this4.height);
	          };
	          _this4.image.src = "./lib/images/goblin_right.png";
	        })();
	      } else {
	        (function () {
	          var goblin7 = _goblinJSON.GOBLIN7.frame;
	          _this4.image.onload = function () {
	            _this4.ctx.drawImage(_this4.image, goblin7.x, goblin7.y, goblin7.w, goblin7.h, _this4.xPos, _this4.yPos, _this4.width, _this4.height);
	          };
	          _this4.image.src = "./lib/images/goblin_left.png";
	        })();
	      }
	    }
	  }]);
	
	  return Goblin;
	}(_character2.default);
	
	exports.default = Goblin;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
				value: true
	});
	var GOBLIN0 = {
				"frame": { "x": 1, "y": 273, "w": 220, "h": 270 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 220, "h": 270 },
				"sourceSize": { "w": 220, "h": 270 },
				"pivot": { "x": 0.5, "y": 0.5 },
				"vertices": [[220, 270], [0, 270], [0, 0], [220, 0]],
				"verticesUV": [[221, 543], [1, 543], [1, 273], [221, 273]],
				"triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var GOBLIN1 = {
				"frame": { "x": 223, "y": 1, "w": 220, "h": 270 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 220, "h": 270 },
				"sourceSize": { "w": 220, "h": 270 },
				"pivot": { "x": 0.5, "y": 0.5 },
				"vertices": [[220, 270], [0, 270], [0, 0], [220, 0]],
				"verticesUV": [[443, 271], [223, 271], [223, 1], [443, 1]],
				"triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var GOBLIN2 = {
				"frame": { "x": 1, "y": 1, "w": 220, "h": 270 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 220, "h": 270 },
				"sourceSize": { "w": 220, "h": 270 },
				"pivot": { "x": 0.5, "y": 0.5 },
				"vertices": [[220, 270], [0, 270], [0, 0], [220, 0]],
				"verticesUV": [[221, 271], [1, 271], [1, 1], [221, 1]],
				"triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var GOBLIN3 = {
				"frame": { "x": 1, "y": 545, "w": 220, "h": 270 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 220, "h": 270 },
				"sourceSize": { "w": 220, "h": 270 },
				"pivot": { "x": 0.5, "y": 0.5 },
				"vertices": [[220, 270], [0, 270], [0, 0], [220, 0]],
				"verticesUV": [[221, 815], [1, 815], [1, 545], [221, 545]],
				"triangles": [[1, 2, 3], [0, 1, 3]]
	};
	
	var GOBLIN4 = {
				"frame": { "x": 223, "y": 545, "w": 220, "h": 270 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 220, "h": 270 },
				"sourceSize": { "w": 220, "h": 270 },
				"pivot": { "x": 0.5, "y": 0.5 },
				"vertices": [[220, 270], [0, 270], [0, 0], [220, 0]],
				"verticesUV": [[443, 815], [223, 815], [223, 545], [443, 545]],
				"triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var GOBLIN5 = {
				"frame": { "x": 223, "y": 273, "w": 220, "h": 270 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 220, "h": 270 },
				"sourceSize": { "w": 220, "h": 270 },
				"pivot": { "x": 0.5, "y": 0.5 },
				"vertices": [[220, 270], [0, 270], [0, 0], [220, 0]],
				"verticesUV": [[443, 543], [223, 543], [223, 273], [443, 273]],
				"triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var GOBLIN6 = {
				"frame": { "x": 1, "y": 1, "w": 220, "h": 270 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 220, "h": 270 },
				"sourceSize": { "w": 220, "h": 270 },
				"pivot": { "x": 0.5, "y": 0.5 },
				"vertices": [[220, 270], [0, 270], [0, 0], [220, 0]],
				"verticesUV": [[221, 271], [1, 271], [1, 1], [221, 1]],
				"triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var GOBLIN7 = {
				"frame": { "x": 1, "y": 545, "w": 220, "h": 270 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 220, "h": 270 },
				"sourceSize": { "w": 220, "h": 270 },
				"pivot": { "x": 0.5, "y": 0.5 },
				"vertices": [[220, 270], [0, 270], [0, 0], [220, 0]],
				"verticesUV": [[221, 815], [1, 815], [1, 545], [221, 545]],
				"triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var GOBLIN8 = {
				"frame": { "x": 223, "y": 545, "w": 220, "h": 270 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 220, "h": 270 },
				"sourceSize": { "w": 220, "h": 270 },
				"pivot": { "x": 0.5, "y": 0.5 },
				"vertices": [[220, 270], [0, 270], [0, 0], [220, 0]],
				"verticesUV": [[443, 815], [223, 815], [223, 545], [443, 545]],
				"triangles": [[1, 2, 3], [0, 1, 3]]
	};
	
	var GOBLIN9 = {
				"frame": { "x": 223, "y": 273, "w": 220, "h": 270 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 220, "h": 270 },
				"sourceSize": { "w": 220, "h": 270 },
				"pivot": { "x": 0.5, "y": 0.5 },
				"vertices": [[220, 270], [0, 270], [0, 0], [220, 0]],
				"verticesUV": [[443, 543], [223, 543], [223, 273], [443, 273]],
				"triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var GOBLIN10 = {
				"frame": { "x": 1, "y": 273, "w": 220, "h": 270 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 220, "h": 270 },
				"sourceSize": { "w": 220, "h": 270 },
				"pivot": { "x": 0.5, "y": 0.5 },
				"vertices": [[220, 270], [0, 270], [0, 0], [220, 0]],
				"verticesUV": [[221, 543], [1, 543], [1, 273], [221, 273]],
				"triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var GOBLIN11 = {
				"frame": { "x": 223, "y": 1, "w": 220, "h": 270 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 220, "h": 270 },
				"sourceSize": { "w": 220, "h": 270 },
				"pivot": { "x": 0.5, "y": 0.5 },
				"vertices": [[220, 270], [0, 270], [0, 0], [220, 0]],
				"verticesUV": [[443, 271], [223, 271], [223, 1], [443, 1]],
				"triangles": [[1, 2, 3], [0, 1, 3]]
	};
	
	exports.GOBLIN0 = GOBLIN0;
	exports.GOBLIN1 = GOBLIN1;
	exports.GOBLIN2 = GOBLIN2;
	exports.GOBLIN3 = GOBLIN3;
	exports.GOBLIN4 = GOBLIN4;
	exports.GOBLIN5 = GOBLIN5;
	exports.GOBLIN6 = GOBLIN6;
	exports.GOBLIN7 = GOBLIN7;
	exports.GOBLIN8 = GOBLIN8;
	exports.GOBLIN9 = GOBLIN9;
	exports.GOBLIN10 = GOBLIN10;
	exports.GOBLIN11 = GOBLIN11;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var IRONMAN0 = {
		"frame": { "x": 1, "y": 283, "w": 160, "h": 280 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 160, "h": 280 },
		"sourceSize": { "w": 160, "h": 280 },
		"pivot": { "x": 0.5, "y": 0.5 }
	};
	var IRONMAN1 = {
		"frame": { "x": 1, "y": 565, "w": 160, "h": 280 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 160, "h": 280 },
		"sourceSize": { "w": 160, "h": 280 },
		"pivot": { "x": 0.5, "y": 0.5 }
	};
	var IRONMAN2 = {
		"frame": { "x": 163, "y": 283, "w": 160, "h": 280 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 160, "h": 280 },
		"sourceSize": { "w": 160, "h": 280 },
		"pivot": { "x": 0.5, "y": 0.5 }
	};
	var IRONMAN3 = {
		"frame": { "x": 273, "y": 1, "w": 160, "h": 280 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 160, "h": 280 },
		"sourceSize": { "w": 160, "h": 280 },
		"pivot": { "x": 0.5, "y": 0.5 }
	};
	
	var IRONMAN4 = {
		"frame": { "x": 163, "y": 565, "w": 160, "h": 280 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 160, "h": 280 },
		"sourceSize": { "w": 160, "h": 280 },
		"pivot": { "x": 0.5, "y": 0.5 }
	};
	var IRONMAN5 = {
		"frame": { "x": 1, "y": 1, "w": 270, "h": 280 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 270, "h": 280 },
		"sourceSize": { "w": 270, "h": 280 },
		"pivot": { "x": 0.5, "y": 0.5 }
	};
	var IRONMAN6 = {
		"frame": { "x": 1, "y": 565, "w": 160, "h": 280 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 160, "h": 280 },
		"sourceSize": { "w": 160, "h": 280 },
		"pivot": { "x": 0.5, "y": 0.5 },
		"vertices": [[160, 280], [0, 280], [0, 0], [160, 0]],
		"verticesUV": [[161, 845], [1, 845], [1, 565], [161, 565]],
		"triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var IRONMAN7 = {
		"frame": { "x": 163, "y": 283, "w": 160, "h": 280 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 160, "h": 280 },
		"sourceSize": { "w": 160, "h": 280 },
		"pivot": { "x": 0.5, "y": 0.5 },
		"vertices": [[160, 280], [0, 280], [0, 0], [160, 0]],
		"verticesUV": [[323, 563], [163, 563], [163, 283], [323, 283]],
		"triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var IRONMAN8 = {
		"frame": { "x": 163, "y": 565, "w": 160, "h": 280 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 160, "h": 280 },
		"sourceSize": { "w": 160, "h": 280 },
		"pivot": { "x": 0.5, "y": 0.5 },
		"vertices": [[160, 280], [0, 280], [0, 0], [160, 0]],
		"verticesUV": [[323, 845], [163, 845], [163, 565], [323, 565]],
		"triangles": [[1, 2, 3], [0, 1, 3]]
	};
	
	var IRONMAN9 = {
		"frame": { "x": 1, "y": 283, "w": 160, "h": 280 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 160, "h": 280 },
		"sourceSize": { "w": 160, "h": 280 },
		"pivot": { "x": 0.5, "y": 0.5 },
		"vertices": [[160, 280], [0, 280], [0, 0], [160, 0]],
		"verticesUV": [[161, 563], [1, 563], [1, 283], [161, 283]],
		"triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var IRONMAN10 = {
		"frame": { "x": 1, "y": 1, "w": 270, "h": 280 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 270, "h": 280 },
		"sourceSize": { "w": 270, "h": 280 },
		"pivot": { "x": 0.5, "y": 0.5 },
		"vertices": [[270, 280], [0, 280], [0, 0], [270, 0]],
		"verticesUV": [[271, 281], [1, 281], [1, 1], [271, 1]],
		"triangles": [[1, 2, 3], [0, 1, 3]]
	};
	
	exports.IRONMAN0 = IRONMAN0;
	exports.IRONMAN1 = IRONMAN1;
	exports.IRONMAN2 = IRONMAN2;
	exports.IRONMAN3 = IRONMAN3;
	exports.IRONMAN4 = IRONMAN4;
	exports.IRONMAN5 = IRONMAN5;
	exports.IRONMAN6 = IRONMAN6;
	exports.IRONMAN7 = IRONMAN7;
	exports.IRONMAN8 = IRONMAN8;
	exports.IRONMAN9 = IRONMAN9;
	exports.IRONMAN10 = IRONMAN10;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map