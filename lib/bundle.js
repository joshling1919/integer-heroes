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
	      this.ctx.font = "40px Georgia";
	      this.ctx.fillText("Points:", 1800, 950);
	      var points = new _integer2.default(this.value, this.ctx);
	      points.draw(1900, 950);
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
	      var requestID = window.requestAnimFrame(this.shrinkAndGrow.bind(this, this.ctx));
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
	      this.ctx.clearRect(this.xPos - 50, this.yPos - 85, 100, 110);
	      this.draw(this.xPos, this.yPos, "white", size);
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
	
	var _ironman = __webpack_require__(13);
	
	var _ironman2 = _interopRequireDefault(_ironman);
	
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
	    var firstNum = void 0,
	        secondNum = void 0;
	    while (firstNum >= 0 && secondNum >= 0 || firstNum === undefined) {
	      firstNum = this.getRandomInt();
	      secondNum = this.getRandomInt();
	    }
	    this.mathProblem = new _math_problem2.default(ctx, firstNum, secondNum);
	    this.container1 = new _container2.default(this.points, firstNum, ctx, true, 1);
	    this.container2 = new _container2.default(this.points, secondNum, ctx, false, 2);
	    this.ironmanStart = new _ironman2.default(1, ctx, 0, 0, this.container1, this.container2);
	    this.ironmanStart.draw();
	    // this.goblinStart = new Goblin(-1, ctx, 895, 0,
	    //   this.container1, this.container2);
	    this.instructions = "Choose the correct number of characters to represent the first number";
	    this.stage = 1;
	    this.ironmanStart.bindClickListener();
	  }
	
	  _createClass(Round, [{
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
	      //first stage
	      //drawHorizontal(1)
	      //what is the condition to end the first stage?
	      //when the correct amount of sprites have been clicked to represent
	      //the first number
	      //something to make things a little bit more clear could be to put sections
	      //underneath the numbers
	      //during this first stage, i can make the characters float up and down
	      //right now, if the student presses submit, I need to be able to evaluate
	      //whether it's the correct amount of superheroes or correct amount of villains.
	      //If I use values, they could put superheroes and villains together.
	      this.firstStage();
	    }
	  }, {
	    key: 'firstStage',
	    value: function firstStage() {
	      var instructions = document.getElementById('instructions');
	      instructions.innerHTML = this.instructions;
	      this.container1.draw();
	      this.container2.draw();
	      this.mathProblem.drawHorizontal(1);
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
	        this.ctx.clearRect(0, 720, 2000, 150);
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
	      ctx.closePath();
	
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
	      this.num1.draw(870, 120, "white", "100", "Georgia", 3);
	      if (section === 1) {
	        this.num1.shrinkAndGrow();
	      }
	      this.operator.draw(960, 120, "white", "100", "Georgia", 3);
	      this.num2.draw(1065, 120, "white", "100", "Georgia", 3);
	      if (section === 2) {
	        this.num2.shrinkAndGrow();
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
	
	var _ironman = __webpack_require__(13);
	
	var _ironman2 = _interopRequireDefault(_ironman);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Container = function () {
	  function Container(points, value, ctx, selected, containerNumber) {
	    _classCallCheck(this, Container);
	
	    this.points = points;
	    this.selected = selected;
	    this.containerNumber = containerNumber;
	    this.ctx = ctx;
	    this.characters = [];
	    if (this.selected) {
	      this.handleButtons();
	    }
	    this.value = value;
	  }
	
	  _createClass(Container, [{
	    key: 'handleButtons',
	    value: function handleButtons() {
	      var clear = document.getElementById('clear');
	      clear.addEventListener('click', this.clearCharacters.bind(this));
	      var submit = document.getElementById('submit');
	      submit.addEventListener('click', this.submitAnswer.bind(this));
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.ctx.strokeStyle = "white";
	      this.ctx.lineWidth = 1;
	      if (this.selected === true) {
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
	          this.characters[index].draw();
	          console.log("draw the character!");
	        }
	      } else {
	        this.ctx.beginPath();
	        this.ctx.rect(1250, 200, 600, 500);
	        this.ctx.stroke();
	        this.ctx.closePath();
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
	      }
	      return newCharacter;
	    }
	  }, {
	    key: 'clearCharacters',
	    value: function clearCharacters() {
	      var charactersLength = this.characters.length;
	      this.characters.splice(0, charactersLength);
	      if (this.containerNumber === 1) {
	        this.ctx.clearRect(152, 202, 596, 496);
	      } else if (this.containerNumber === 2) {
	        this.ctx.clearRect(1252, 202, 596, 496);
	      }
	    }
	  }, {
	    key: 'submitAnswer',
	    value: function submitAnswer() {
	      var _this = this;
	
	      var sameSign = true;
	      var sum = 0;
	      this.characters.forEach(function (character, index) {
	        if (index === 0) {
	          sum += character.value;
	          return;
	        }
	        if (character.value !== _this.characters[index - 1].value) {
	          sameSign = false;
	        }
	        sum += character.value;
	      });
	      var correct = sameSign && sum === this.value;
	      // this.ctx.clearRect(1750, 950, 200, 100);
	      this.ctx.clearRect(1650, 900, 400, 100);
	      var instructions = document.getElementById('instructions');
	      if (correct) {
	        this.points.value += 5;
	        instructions.innerHTML = "Nice job!";
	        this.points.draw();
	      } else {
	        this.points.value -= 5;
	        instructions.innerHTML = "Hm, not quite! Remember, positive = superheroes; negative = villain.";
	        this.points.draw();
	      }
	    }
	  }]);
	
	  return Container;
	}();
	
	exports.default = Container;

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ironman = __webpack_require__(13);
	
	var _ironman2 = _interopRequireDefault(_ironman);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	      var iron = _ironman2.default;
	      var rect = event.currentTarget.getBoundingClientRect();
	      var cursorX = this.getCursorXPos(event, rect);
	      var cursorY = this.getCursorYPos(event, rect);
	      if (cursorX > this.xPos && cursorX < this.xPos + this.width && cursorY > this.yPos && cursorY < this.yPos + this.height) {
	        if (!this.index) {
	          this.ctx.clearRect(150, 200, 600, 500);
	          if (this.container1.selected) {
	            this.container1.addCharacter(this);
	            this.container1.draw();
	          } else if (this.container2.selected) {
	            this.container2.addCharacter(this);
	            this.container2.draw();
	          }
	        }
	      }
	    }
	
	    // newCharacter() {
	    //   let newCharacter;
	    //   if (this.constructor.name === "Ironman") {
	    //     newCharacter = new Ironman(1, this.ctx, undefined, undefined,
	    //     this.container1, this.container2);
	    //   }
	    //   // else if (this.constructor.name === "Goblin") {
	    //   //   newCharacter = new Goblin(-1, this.ctx, undefined, undefined,
	    //   //   this.container1, this.container2);
	    //   //
	    //   // }
	    //   return newCharacter;
	    // }
	
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
/* 10 */,
/* 11 */,
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

/***/ },
/* 13 */
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
	
	      var iron = _ironmanJSON.IRONMAN0.frame;
	      this.image.onload = function () {
	        _this2.ctx.drawImage(_this2.image, iron.x, iron.y, iron.w, iron.h, _this2.xPos, _this2.yPos, _this2.width, _this2.height);
	      };
	      this.image.src = "./lib/images/ironman_right.png";
	    }
	  }]);
	
	  return Ironman;
	}(_character2.default);
	
	exports.default = Ironman;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map