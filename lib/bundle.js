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
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _lesson = __webpack_require__(1);
	
	var _lesson2 = _interopRequireDefault(_lesson);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var loadedImages = 0;
	var imageArray = new Array("./lib/images/ironman_right.png", "./lib/images/ironman_left.png", "./lib/images/goblin_right.png", "./lib/images/goblin_left.png", "./lib/images/explosion.png", "./lib/images/thor_right.png", "./lib/images/thor_left.png", "./lib/images/juggernaut_right.png", "./lib/images/juggernaut_left.png", "./lib/images/hulk_right.png", "./lib/images/hulk_left.png", "./lib/images/loki_right.png", "./lib/images/loki_left.png", "./lib/images/right_arrow.png", "./lib/images/left_arrow.png");
	var imageObj = {};
	
	var preloadImages = function preloadImages(event) {
	  for (var i = 0; i < imageArray.length; i++) {
	    var tempImage = new Image();
	    var imagePath = imageArray[i];
	    tempImage.addEventListener('load', trackProgress, true);
	    tempImage.src = imagePath;
	    var imageName = imagePath.substring(13, imagePath.length - 4);
	    imageObj[imageName] = tempImage;
	  }
	};
	
	var trackProgress = function trackProgress() {
	  loadedImages++;
	  if (loadedImages === imageArray.length) {
	    window.imageObj = imageObj;
	    var canvas = document.getElementById("canvas");
	    canvas.width = 2000;
	    canvas.height = 1000;
	    var ctx = canvas.getContext("2d");
	    window.requestAnimFrame = function () {
	      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	        window.setTimeout(callback, 1000 / 60);
	      };
	    }();
	    window.animIsComplete = true;
	    window.overallAnimIsComplete = true;
	    var lesson = new _lesson2.default(ctx);
	    lesson.start();
	  }
	};
	
	document.addEventListener("DOMContentLoaded", function (event) {
	  preloadImages(event);
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

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
	    }
	  }]);
	
	  return Lesson;
	}();
	
	exports.default = Lesson;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

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
	      this.ctx.clearRect(this.xPos - 55, this.yPos - 88, 110, 110);
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

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
	
	var _goblin = __webpack_require__(13);
	
	var _goblin2 = _interopRequireDefault(_goblin);
	
	var _thor = __webpack_require__(15);
	
	var _thor2 = _interopRequireDefault(_thor);
	
	var _juggernaut = __webpack_require__(17);
	
	var _juggernaut2 = _interopRequireDefault(_juggernaut);
	
	var _hulk = __webpack_require__(19);
	
	var _hulk2 = _interopRequireDefault(_hulk);
	
	var _loki = __webpack_require__(21);
	
	var _loki2 = _interopRequireDefault(_loki);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Round = function () {
	  function Round(ctx, points) {
	    _classCallCheck(this, Round);
	
	    this.ctx = ctx;
	    this.points = points;
	    this.roundNum = 0;
	    this.firstButton = document.getElementById('first-button');
	    this.secondButton = document.getElementById('second-button');
	    this.startRound();
	  }
	
	  _createClass(Round, [{
	    key: 'startRound',
	    value: function startRound() {
	      this.roundNum += 1;
	      document.removeEventListener('keydown', this.handleEnter.bind(this));
	      this.ctx.clearRect(0, 0, 2000, 1000);
	      var canvas = document.getElementById('canvas');
	      this.numberLine = new _number_line2.default(this.ctx, canvas);
	      this.numberLine.draw(this.ctx);
	      this.points.draw();
	      this.firstNum = this.getRandomInt();
	      this.secondNum = this.getRandomInt();
	      if (Math.random() < 0.8) {
	        while (this.firstNum > 0 && this.secondNum > 0) {
	          this.firstNum = this.getRandomInt();
	          this.secondNum = this.getRandomInt();
	        }
	      }
	      this.mathProblem = new _math_problem2.default(this.ctx, this.firstNum, this.secondNum);
	      this.container1 = new _container2.default(this.firstNum, this.ctx, true, 1);
	      this.container2 = new _container2.default(this.secondNum, this.ctx, false, 2);
	      this.ironmanStart = new _ironman2.default(1, this.ctx, 0, 0, this.container1, this.container2);
	      this.ironmanStart.draw();
	      this.goblinStart = new _goblin2.default(-1, this.ctx, 1895, 0, this.container1, this.container2);
	      this.goblinStart.draw();
	      this.thorStart = new _thor2.default(1, this.ctx, 150, 0, this.container1, this.container2);
	      this.thorStart.draw();
	      this.juggernautStart = new _juggernaut2.default(-1, this.ctx, 1750, 0, this.container1, this.container2);
	      this.juggernautStart.draw();
	      this.hulkStart = new _hulk2.default(1, this.ctx, 300, 25, this.container1, this.container2);
	      this.hulkStart.draw();
	      this.lokiStart = new _loki2.default(-1, this.ctx, 1600, 0, this.container1, this.container2);
	      this.lokiStart.draw();
	      this.firstButton.innerHTML = 'Submit';
	      this.firstButton.style.background = "white";
	      this.firstButton.style.color = "#575757";
	      this.secondButton.innerHTML = 'Clear';
	      this.secondButton.style.display = "inline-block";
	      this.stage = 1;
	      this.ironmanStart.bindClickListener();
	      this.goblinStart.bindClickListener();
	      this.thorStart.bindClickListener();
	      this.juggernautStart.bindClickListener();
	      this.hulkStart.bindClickListener();
	      this.lokiStart.bindClickListener();
	      this.handleButtons();
	      key.unbind('left');
	      key.unbind('right');
	      this.start();
	    }
	  }, {
	    key: 'handleButtons',
	    value: function handleButtons() {
	      this.secondButton.onclick = this.clearCharacters.bind(this);
	      document.onkeydown = this.handleEnter.bind(this);
	      this.firstButton.onclick = this.submitAnswer.bind(this);
	    }
	  }, {
	    key: 'handleEnter',
	    value: function handleEnter(event) {
	      if (event.keyCode === 13) {
	        event.stopPropagation();
	        this.submitAnswer(event);
	      }
	    }
	  }, {
	    key: 'clearCharacters',
	    value: function clearCharacters(event) {
	      event.stopPropagation();
	      if (this.secondButton.innerHTML === "FIGHT") {
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
	    value: function submitAnswer(event) {
	      event.stopPropagation();
	      if (this.firstButton.innerHTML === 'JOIN FORCES') {
	        this.checkForJoining();
	      } else {
	        if (this.container1.selected) {
	          this.checkAnswer(this.container1, event);
	        } else if (this.container2.selected) {
	          this.checkAnswer(this.container2, event);
	        } else if (this.numberLine.active) {
	          this.checkNumberLine();
	        }
	      }
	    }
	  }, {
	    key: 'checkNumberLine',
	    value: function checkNumberLine() {
	      if (this.container1.value === this.numberLine.selected) {
	        this.points.value += 5;
	        this.thirdStage();
	      } else {
	        this.points.value -= 5;
	      }
	      this.changePoints();
	    }
	  }, {
	    key: 'checkAnswer',
	    value: function checkAnswer(container, event) {
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
	      if (correct) {
	        this.points.value += 5;
	        if (this.container1.selected) {
	          this.secondStage();
	        } else if (this.container2.selected) {
	          this.fourthStage();
	        }
	      } else {
	        this.points.value -= 5;
	        this.clearCharacters(event);
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
	      if (this.roundNum % 2 === 1) {
	        this.mathProblem.drawHorizontal(1);
	      } else {
	        this.mathProblem.drawVertical(1);
	      }
	    }
	  }, {
	    key: 'secondStage',
	    value: function secondStage() {
	      this.container1.selected = false;
	      this.container1.clearFirstContainer();
	      this.container1.draw();
	      this.numberLine.start();
	    }
	  }, {
	    key: 'thirdStage',
	    value: function thirdStage() {
	      if (this.roundNum % 2 === 1) {
	        this.mathProblem.drawHorizontal(2);
	      } else {
	        this.mathProblem.drawVertical(2);
	      }
	      this.numberLine.end();
	      this.container2.selected = true;
	      this.container2.draw();
	    }
	  }, {
	    key: 'fourthStage',
	    value: function fourthStage() {
	      this.firstButton.innerHTML = "JOIN FORCES";
	      this.secondButton.innerHTML = "FIGHT";
	      this.container2.selected = false;
	      this.container2.clearSecondContainer();
	      this.container2.draw();
	      if (this.roundNum % 2 === 1) {
	        this.mathProblem.drawHorizontal();
	      } else {
	        this.mathProblem.drawVertical();
	      }
	    }
	  }, {
	    key: 'checkForFighting',
	    value: function checkForFighting() {
	      if (this.firstNum * this.secondNum < 0) {
	        this.points.value += 5;
	        this.fightingStage();
	      } else {
	        this.points.value -= 5;
	      }
	      this.changePoints();
	    }
	  }, {
	    key: 'checkForJoining',
	    value: function checkForJoining() {
	      if (this.firstNum * this.secondNum > 0) {
	        this.points.value += 5;
	        this.joiningStage();
	      } else {
	        this.points.value -= 5;
	      }
	      this.changePoints();
	    }
	  }, {
	    key: 'fightingStage',
	    value: function fightingStage() {
	      this.container1.clearFirstContainer();
	      this.container2.clearSecondContainer();
	      var isLiningUp = true;
	      var isFighting = true;
	      this.container1.draw(isLiningUp, isFighting);
	      this.container2.draw(isLiningUp, isFighting);
	      this.finalStage(isFighting);
	    }
	  }, {
	    key: 'finalStage',
	    value: function finalStage(isFighting) {
	      this.ctx.drawImage(window.imageObj['right_arrow'], 1050, 880, 200, 100);
	      this.ctx.drawImage(window.imageObj['left_arrow'], 700, 880, 200, 100);
	      this.handleKeys(isFighting);
	    }
	  }, {
	    key: 'joiningStage',
	    value: function joiningStage() {
	      this.container1.clearFirstContainer();
	      this.container2.clearSecondContainer();
	      var isLiningUp = true;
	      this.container1.draw(isLiningUp);
	      this.container2.draw(isLiningUp);
	      this.finalStage();
	    }
	  }, {
	    key: 'handleKeys',
	    value: function handleKeys(isFighting) {
	      this.isFighting = isFighting;
	      var canvas = document.getElementById('canvas');
	      this.boundedHandleClicks = this.handleArrowClicks.bind(this);
	      canvas.addEventListener('click', this.boundedHandleClicks);
	      key("right", this.handleRight.bind(this));
	      key("left", this.handleLeft.bind(this));
	    }
	  }, {
	    key: 'handleArrowClicks',
	    value: function handleArrowClicks(event) {
	      var rect = event.currentTarget.getBoundingClientRect();
	      var cursorX = this.getCursorXPos(event, rect);
	      var cursorY = this.getCursorYPos(event, rect);
	      if (cursorX > 1050 && cursorX < 1250 && cursorY > 880 && cursorY < 980) {
	        this.handleRight();
	      } else if (cursorX > 700 && cursorX < 900 && cursorY > 880 && cursorY < 980) {
	        this.handleLeft();
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
	  }, {
	    key: 'handleRight',
	    value: function handleRight() {
	      if (window.overallAnimIsComplete) {
	        this.numberLine.handleRight(this.secondNum);
	        if (this.secondNum < 0) {
	          this.wrongDirection();
	        } else {
	          window.overallAnimIsComplete = false;
	          if (this.container1.characters.length === 0) {
	            var firstNumIsEmpty = true;
	            this.container2.animateJoin(firstNumIsEmpty);
	          } else {
	            if (this.isFighting) {
	              this.container1.animateFight();
	              this.container2.animateFight();
	            } else {
	              this.container2.animateJoin();
	            }
	          }
	        }
	        this.checkForEnd();
	      }
	    }
	  }, {
	    key: 'handleLeft',
	    value: function handleLeft() {
	      if (window.overallAnimIsComplete) {
	        this.numberLine.handleLeft(this.secondNum);
	        if (this.secondNum > 0) {
	          this.wrongDirection();
	        } else {
	          window.overallAnimIsComplete = false;
	          if (this.container1.characters.length === 0) {
	            var firstNumIsEmpty = true;
	            this.container2.animateJoin(firstNumIsEmpty);
	          } else {
	            if (this.isFighting) {
	              this.container1.animateFight();
	              this.container2.animateFight();
	            } else {
	              this.container2.animateJoin();
	            }
	          }
	        }
	        this.checkForEnd();
	      }
	    }
	  }, {
	    key: 'checkForEnd',
	    value: function checkForEnd() {
	      if (this.container1.value + this.container2.value === this.numberLine.selected) {
	        this.conclusion();
	        this.closeOutRound();
	      }
	    }
	  }, {
	    key: 'conclusion',
	    value: function conclusion() {
	      this.ctx.clearRect(0, 0, 650, 250);
	      this.ctx.clearRect(1400, 0, 650, 250);
	      this.firstButton.innerHTML = "New Round!";
	      this.firstButton.style.background = "green";
	      this.firstButton.style.color = "white";
	    }
	  }, {
	    key: 'closeOutRound',
	    value: function closeOutRound() {
	      key.unbind("right");
	      key.unbind("left");
	      var canvas = document.getElementById('canvas');
	      canvas.removeEventListener('click', this.boundedHandleClicks);
	      this.firstButton.onclick = this.startRound.bind(this);
	      this.secondButton.style.display = "none";
	      this.secondButton.onclick = null;
	      document.onkeydown = null;
	      this.numberLine.end();
	    }
	  }, {
	    key: 'wrongDirection',
	    value: function wrongDirection() {
	      this.points.value -= 5;
	      this.changePoints();
	    }
	  }]);
	
	  return Round;
	}();
	
	exports.default = Round;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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
	  function NumberLine(ctx, canvas) {
	    _classCallCheck(this, NumberLine);
	
	    this.ctx = ctx;
	    this.canvas = canvas;
	    this.incrementer = -1530;
	    this.selected = 0;
	    this.numMarkers = 50;
	    this.frameCount = 0;
	    this.active = false;
	  }
	
	  _createClass(NumberLine, [{
	    key: "bindKeyHandlers",
	    value: function bindKeyHandlers(secondNum) {
	      key("right", this.handleRight.bind(this, secondNum));
	      key("left", this.handleLeft.bind(this, secondNum));
	    }
	  }, {
	    key: "handleRight",
	    value: function handleRight(secondNum) {
	      if (window.animIsComplete) {
	        if (this.incrementer > -2930) {
	          if (secondNum === undefined || secondNum > 0) {
	            window.animIsComplete = false;
	            this.selected += 1;
	            this.animate(this.ctx, -1);
	            return false;
	          }
	        }
	      }
	    }
	  }, {
	    key: "handleLeft",
	    value: function handleLeft(secondNum) {
	      if (window.animIsComplete) {
	        if (this.incrementer < -30) {
	          if (secondNum === undefined || secondNum < 0) {
	            window.animIsComplete = false;
	            this.selected -= 1;
	            this.animate(this.ctx, 1);
	            return false;
	          }
	        }
	      }
	    }
	  }, {
	    key: "unbindKeyHandlers",
	    value: function unbindKeyHandlers() {
	      key.unbind("right");
	      key.unbind("left");
	    }
	  }, {
	    key: "start",
	    value: function start(secondNum) {
	      this.drawCenterBox(this.ctx);
	      this.bindKeyHandlers(secondNum);
	      this.ctx.drawImage(window.imageObj['right_arrow'], 1050, 880, 200, 100);
	      this.ctx.drawImage(window.imageObj['left_arrow'], 700, 880, 200, 100);
	      this.bindArrowClickListener(secondNum);
	      this.active = true;
	    }
	  }, {
	    key: "end",
	    value: function end() {
	      this.unbindKeyHandlers();
	      this.ctx.clearRect(0, 870, 1500, 130);
	      this.active = false;
	      this.canvas.removeEventListener('click', this.boundedHandleClicks);
	    }
	  }, {
	    key: "bindArrowClickListener",
	    value: function bindArrowClickListener(secondNum) {
	      this.secondNum = secondNum;
	      this.boundedHandleClicks = this.handleArrowClicks.bind(this);
	      this.canvas.addEventListener('click', this.boundedHandleClicks);
	    }
	  }, {
	    key: "handleArrowClicks",
	    value: function handleArrowClicks(event) {
	      var rect = event.currentTarget.getBoundingClientRect();
	      var cursorX = this.getCursorXPos(event, rect);
	      var cursorY = this.getCursorYPos(event, rect);
	      if (cursorX > 1050 && cursorX < 1250 && cursorY > 880 && cursorY < 980) {
	        this.handleRight(this.secondNum);
	      } else if (cursorX > 700 && cursorX < 900 && cursorY > 880 && cursorY < 980) {
	        this.handleLeft(this.secondNum);
	      }
	    }
	  }, {
	    key: "getCursorXPos",
	    value: function getCursorXPos(event, rect) {
	      var x = (event.clientX - rect.left) / (rect.right - rect.left) * event.currentTarget.width;
	      return x;
	    }
	  }, {
	    key: "getCursorYPos",
	    value: function getCursorYPos(event, rect) {
	      var y = (event.clientY - rect.top) / (rect.bottom - rect.top) * event.currentTarget.height;
	      return y;
	    }
	  }, {
	    key: "animate",
	    value: function animate(ctx, sign) {
	      var requestID = window.requestAnimFrame(this.animate.bind(this, ctx, sign));
	      if (this.frameCount === 5) {
	        this.frameCount = 0;
	        window.cancelAnimationFrame(requestID);
	        window.animIsComplete = true;
	      } else {
	        this.frameCount += 1;
	        this.ctx.clearRect(0, 720, 2000, 150);
	        var speed = 20;
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

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
	      this.operator.draw(985, 120, "white", "100", "Georgia", 3);
	      this.num2.draw(1080, 120, "white", "100", "Georgia", 3);
	      this.drawBoxForHorizontal(section);
	      this.drawAnimatedNumbers(section);
	      this.equalSign.draw(1190, 130, "white", "100", "Georgia", 3);
	      this.drawHorizontalArrows(section);
	    }
	  }, {
	    key: "drawBoxForHorizontal",
	    value: function drawBoxForHorizontal(section) {
	      this.ctx.beginPath();
	      this.ctx.lineWidth = 5;
	      this.ctx.strokeStyle = "white";
	      if (section === 1) {
	        this.ctx.rect(810, 25, 130, 150);
	        this.ctx.stroke();
	      } else if (section === 2) {
	        this.ctx.rect(1020, 25, 130, 140);
	        this.ctx.stroke();
	      }
	    }
	  }, {
	    key: "drawHorizontalArrows",
	    value: function drawHorizontalArrows(section) {
	      this.ctx.strokeStyle = "#31CBE3";
	      this.ctx.lineWidth = 6;
	      this.ctx.beginPath();
	      if (section === 1) {
	        this.ctx.moveTo(870, 120);
	        this.ctx.lineTo(770, 200);
	        this.ctx.stroke();
	        this.ctx.moveTo(770, 200);
	        this.ctx.lineTo(790, 160);
	        this.ctx.stroke();
	        this.ctx.moveTo(770, 200);
	        this.ctx.lineTo(810, 195);
	        this.ctx.stroke();
	      } else if (section === 2) {
	        this.ctx.moveTo(1075, 120);
	        this.ctx.lineTo(1230, 190);
	        this.ctx.stroke();
	        this.ctx.moveTo(1230, 190);
	        this.ctx.lineTo(1210, 150);
	        this.ctx.stroke();
	        this.ctx.moveTo(1230, 190);
	        this.ctx.lineTo(1190, 195);
	        this.ctx.stroke();
	      }
	      this.ctx.closePath();
	    }
	  }, {
	    key: "drawVertical",
	    value: function drawVertical(section) {
	      this.clearHorizontal();
	      this.num1.draw(1015, 95, "white", "100", "Georgia", 3);
	      this.operator.draw(910, 215, "white", "100", "Georgia", 3);
	      this.num2.draw(1015, 215, "white", "100", "Georgia", 3);
	      this.ctx.beginPath();
	      this.ctx.strokeStyle = "white";
	      this.ctx.lineWidth = 3;
	      this.ctx.moveTo(860, 268);
	      this.ctx.lineTo(1130, 268);
	      this.ctx.stroke();
	      this.drawBoxForVertical(section);
	      this.drawAnimatedNumbers(section);
	      this.drawVerticalArrows(section);
	    }
	  }, {
	    key: "drawBoxForVertical",
	    value: function drawBoxForVertical(section) {
	      this.ctx.beginPath();
	      this.ctx.lineWidth = 5;
	      this.ctx.strokeStyle = "white";
	      if (section === 1) {
	        this.ctx.rect(955, 5, 130, 130);
	        this.ctx.stroke();
	      } else if (section === 2) {
	        this.ctx.rect(955, 125, 130, 130);
	        this.ctx.stroke();
	      }
	    }
	  }, {
	    key: "drawVerticalArrows",
	    value: function drawVerticalArrows(section) {
	      this.ctx.strokeStyle = "#31CBE3";
	      this.ctx.lineWidth = 6;
	      this.ctx.beginPath();
	      if (section === 1) {
	        this.ctx.moveTo(940, 80);
	        this.ctx.lineTo(770, 180);
	        this.ctx.stroke();
	        this.ctx.moveTo(770, 180);
	        this.ctx.lineTo(795, 145);
	        this.ctx.stroke();
	        this.ctx.moveTo(770, 180);
	        this.ctx.lineTo(800, 190);
	        this.ctx.stroke();
	      } else if (section === 2) {
	        this.ctx.moveTo(1100, 180);
	        this.ctx.lineTo(1230, 190);
	        this.ctx.stroke();
	        this.ctx.moveTo(1230, 190);
	        this.ctx.lineTo(1190, 170);
	        this.ctx.stroke();
	        this.ctx.moveTo(1230, 190);
	        this.ctx.lineTo(1185, 205);
	        this.ctx.stroke();
	      }
	      this.ctx.closePath();
	    }
	  }, {
	    key: "drawAnimatedNumbers",
	    value: function drawAnimatedNumbers(section) {
	      if (section === 1) {
	        this.num1.shrinkAndGrow();
	      } else if (section === 2) {
	        this.num1.stopAnimation();
	        this.num2.shrinkAndGrow();
	      } else {
	        this.num2.stopAnimation();
	      }
	    }
	  }, {
	    key: "clearHorizontal",
	    value: function clearHorizontal() {
	      this.ctx.clearRect(765, 0, 480, 420);
	    }
	  }]);
	
	  return MathProblem;
	}();
	
	exports.default = MathProblem;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ironman = __webpack_require__(8);
	
	var _ironman2 = _interopRequireDefault(_ironman);
	
	var _goblin = __webpack_require__(13);
	
	var _goblin2 = _interopRequireDefault(_goblin);
	
	var _thor = __webpack_require__(15);
	
	var _thor2 = _interopRequireDefault(_thor);
	
	var _juggernaut = __webpack_require__(17);
	
	var _juggernaut2 = _interopRequireDefault(_juggernaut);
	
	var _hulk = __webpack_require__(19);
	
	var _hulk2 = _interopRequireDefault(_hulk);
	
	var _loki = __webpack_require__(21);
	
	var _loki2 = _interopRequireDefault(_loki);
	
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
	    this.frameCount = 0;
	    this.indexOfCharacterToSend = 0;
	  }
	
	  _createClass(Container, [{
	    key: 'draw',
	    value: function draw(isLiningUp, isFighting) {
	      if (isLiningUp) {
	        this.drawLiningUpScene(isFighting);
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
	    key: 'drawLiningUpScene',
	    value: function drawLiningUpScene(isFighting) {
	      var _this = this;
	
	      if (this.containerNumber === 1) {
	        this.characters.forEach(function (character, index) {
	          character.xPos = 730 - index * 110;
	          character.yPos = 300;
	          if (isFighting) {
	            character.drawFightingStance(_this);
	          } else {
	            character.drawInContainer(_this);
	          }
	        });
	      } else {
	        this.characters.forEach(function (character, index) {
	          character.xPos = 1150 + index * 105;
	          character.yPos = 500;
	          if (isFighting) {
	            character.yPos = 300;
	          }
	          if (isFighting) {
	            character.drawFightingStance(_this);
	          } else {
	            character.drawInContainer(_this);
	          }
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
	      } else if (characterType.constructor.name === "Thor") {
	        newCharacter = new _thor2.default(1, this.ctx, undefined, undefined, this.container1, this.container2);
	      } else if (characterType.constructor.name === "Juggernaut") {
	        newCharacter = new _juggernaut2.default(-1, this.ctx, undefined, undefined, this.container1, this.container2);
	      } else if (characterType.constructor.name === "Hulk") {
	        newCharacter = new _hulk2.default(1, this.ctx, undefined, undefined, this.container1, this.container2);
	      } else if (characterType.constructor.name === "Loki") {
	        newCharacter = new _loki2.default(-1, this.ctx, undefined, undefined, this.container1, this.container2);
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
	  }, {
	    key: 'animateFight',
	    value: function animateFight() {
	      var _this2 = this;
	
	      var requestID = window.requestAnimFrame(this.animateFight.bind(this));
	      if (this.containerNumber === 1) {
	        if (this.frameCount === 10) {
	          this.frameCount = 0;
	          window.overallAnimIsComplete = true;
	          window.cancelAnimationFrame(requestID);
	        } else {
	          this.frameCount += 1;
	          this.characters.forEach(function (character, index) {
	            _this2.ctx.clearRect(character.xPos, character.yPos, character.width, character.height);
	            character.xPos = character.xPos + 10;
	            character.drawFightingStance(_this2);
	          });
	          if (this.frameCount === 3) {
	            this.animateMiddle();
	          }
	        }
	      } else if (this.containerNumber === 2) {
	        if (this.frameCount === 10) {
	          this.frameCount = 0;
	          window.overallAnimIsComplete = true;
	          window.cancelAnimationFrame(requestID);
	        } else {
	          this.frameCount += 1;
	          this.ctx.clearRect(1080, 300, 1000, 200);
	          this.characters.forEach(function (character, index) {
	            character.xPos = character.xPos - 10;
	            character.drawFightingStance(_this2);
	          });
	          if (this.frameCount === 3) {
	            this.animateMiddle();
	          }
	        }
	      }
	    }
	  }, {
	    key: 'animateMiddle',
	    value: function animateMiddle() {
	      var firstCharacter = this.characters.splice(0, 1)[0];
	      firstCharacter.animateFight(this);
	    }
	  }, {
	    key: 'animateJoin',
	    value: function animateJoin(firstNumIsEmpty) {
	      var _this3 = this;
	
	      var requestID = window.requestAnimFrame(this.animateJoin.bind(this, firstNumIsEmpty));
	      if (this.frameCount === 10) {
	        this.frameCount = 0;
	        this.indexOfCharacterToSend++;
	        window.overallAnimIsComplete = true;
	        window.cancelAnimationFrame(requestID);
	      } else {
	        this.frameCount += 1;
	        if (firstNumIsEmpty) {
	          this.ctx.clearRect(1200, 300, 1500, 200);
	        } else {
	          this.ctx.clearRect(1200, 500, 2000, 200);
	        }
	        this.characters.forEach(function (character, index) {
	          if (index === _this3.indexOfCharacterToSend) {
	            character.index = index;
	            _this3.sendToOtherTeam(character);
	          } else if (!character.sent) {
	            character.xPos = character.xPos - 10;
	            character.drawInContainer(_this3);
	          }
	        });
	      }
	    }
	  }, {
	    key: 'sendToOtherTeam',
	    value: function sendToOtherTeam(character) {
	      if (!character.sent) {
	        character.joinOtherTeam(this);
	      }
	      character.sent = true;
	    }
	  }]);
	
	  return Container;
	}();
	
	exports.default = Container;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

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
	    _this.imageRight = window.imageObj['ironman_right'];
	    _this.imageLeft = window.imageObj['ironman_left'];
	    _this.width = 105;
	    _this.height = 185;
	    _this.value = value;
	    return _this;
	  }
	
	  _createClass(Ironman, [{
	    key: 'draw',
	    value: function draw() {
	      var iron0 = _ironmanJSON.IRONMAN0.frame;
	      this.ctx.drawImage(this.imageRight, iron0.x, iron0.y, iron0.w, iron0.h, this.xPos, this.yPos, this.width, this.height);
	    }
	  }, {
	    key: 'drawInContainer',
	    value: function drawInContainer(container) {
	      if (container.containerNumber === 1) {
	        this.draw();
	      } else {
	        var iron11 = _ironmanJSON.IRONMAN11.frame;
	        this.ctx.drawImage(this.imageLeft, iron11.x, iron11.y, iron11.w, iron11.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawFightingStance',
	    value: function drawFightingStance(container) {
	      if (container.containerNumber === 1) {
	        var iron1 = _ironmanJSON.IRONMAN1.frame;
	        this.ctx.drawImage(this.imageRight, iron1.x, iron1.y, iron1.w, iron1.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var iron6 = _ironmanJSON.IRONMAN6.frame;
	        this.ctx.drawImage(this.imageLeft, iron6.x, iron6.y, iron6.w, iron6.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawFirstFightingPose',
	    value: function drawFirstFightingPose(container) {
	      if (container.containerNumber === 1) {
	        var iron2 = _ironmanJSON.IRONMAN2.frame;
	        this.ctx.drawImage(this.imageRight, iron2.x, iron2.y, iron2.w, iron2.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var iron7 = _ironmanJSON.IRONMAN7.frame;
	        this.ctx.drawImage(this.imageLeft, iron7.x, iron7.y, iron7.w, iron7.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawSecondFightingPose',
	    value: function drawSecondFightingPose(container) {
	      if (container.containerNumber === 1) {
	        var iron4 = _ironmanJSON.IRONMAN4.frame;
	        this.ctx.drawImage(this.imageRight, iron4.x, iron4.y, iron4.w, iron4.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var iron9 = _ironmanJSON.IRONMAN9.frame;
	        this.ctx.drawImage(this.imageLeft, iron9.x, iron9.y, iron9.w, iron9.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawThirdFightingPose',
	    value: function drawThirdFightingPose(container) {
	      if (container.containerNumber === 1) {
	        var iron5 = _ironmanJSON.IRONMAN5.frame;
	        this.ctx.drawImage(this.imageRight, iron5.x, iron5.y, iron5.w, iron5.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var iron10 = _ironmanJSON.IRONMAN10.frame;
	        this.ctx.drawImage(this.imageLeft, iron10.x, iron10.y, iron10.w, iron10.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }]);
	
	  return Ironman;
	}(_character2.default);
	
	exports.default = Ironman;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _explosion = __webpack_require__(10);
	
	var _explosion2 = _interopRequireDefault(_explosion);
	
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
	  }, {
	    key: 'animateFight',
	    value: function animateFight(container) {
	      var requestID = window.requestAnimFrame(this.animateFight.bind(this, container));
	      if (container.containerNumber === 1) {
	        if (this.xPos > 960) {
	          window.cancelAnimationFrame(requestID);
	          var explosion = new _explosion2.default(this.ctx);
	          explosion.animateExplosion();
	        } else {
	          this.ctx.clearRect(this.xPos - 10, this.yPos, this.width, this.height);
	          if (this.xPos < 810) {
	            this.drawFirstFightingPose(container);
	          } else if (this.xPos < 840) {
	            this.drawSecondFightingPose(container);
	          } else if (this.xPos < 875) {
	            this.drawThirdFightingPose(container);
	          }
	          this.xPos += 10;
	        }
	      } else {
	        if (this.xPos < 940) {
	          window.cancelAnimationFrame(requestID);
	        } else {
	          this.ctx.clearRect(this.xPos, this.yPos, this.width + 15, this.height);
	          if (this.xPos > 1010) {
	            this.drawFirstFightingPose(container);
	          } else if (this.xPos > 990) {
	            this.drawSecondFightingPose(container);
	          } else if (this.xPos > 955) {
	            this.drawThirdFightingPose(container);
	          }
	          this.xPos -= 10;
	        }
	      }
	    }
	  }, {
	    key: 'joinOtherTeam',
	    value: function joinOtherTeam(container) {
	      var requestID = window.requestAnimFrame(this.joinOtherTeam.bind(this, container));
	      var leftEdge = (8 - container.characters.length) * 100 + 10;
	      if (this.xPos <= leftEdge + this.index * 110) {
	        window.cancelAnimationFrame(requestID);
	      } else {
	        this.ctx.clearRect(this.xPos, this.yPos, this.width, this.height);
	        this.xPos -= 10;
	        this.drawInContainer(container);
	      }
	    }
	  }]);
	
	  return Character;
	}();
	
	exports.default = Character;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _explosionJSON = __webpack_require__(11);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Explosion = function () {
	  function Explosion(ctx) {
	    _classCallCheck(this, Explosion);
	
	    this.ctx = ctx;
	    this.image = window.imageObj['explosion'];
	    this.frame = 0;
	    this.width = 100;
	    this.height = 100;
	    this.xPos = 940;
	    this.yPos = 300;
	  }
	
	  _createClass(Explosion, [{
	    key: 'animateExplosion',
	    value: function animateExplosion() {
	      var requestID = window.requestAnimFrame(this.animateExplosion.bind(this));
	      if (this.frame === 50) {
	        window.cancelAnimationFrame(requestID);
	        this.ctx.clearRect(this.xPos, this.yPos, this.width, this.height);
	        this.frame = 0;
	      } else {
	        this.ctx.clearRect(this.xPos, this.yPos, this.width, this.height);
	        if (this.frame < 10) {
	          this.drawFrame1();
	        } else if (this.frame < 20) {
	          this.drawFrame2();
	        } else if (this.frame < 30) {
	          this.drawFrame3();
	        } else if (this.frame < 40) {
	          this.drawFrame4();
	        } else if (this.frame < 50) {
	          this.drawFrame5();
	        }
	        this.frame += 1;
	      }
	    }
	  }, {
	    key: 'drawFrame1',
	    value: function drawFrame1() {
	      var explosion0 = _explosionJSON.EXPLOSION0.frame;
	      this.ctx.drawImage(this.image, explosion0.x, explosion0.y, explosion0.w, explosion0.h, this.xPos, this.yPos, this.width, this.height);
	    }
	  }, {
	    key: 'drawFrame2',
	    value: function drawFrame2() {
	      var explosion1 = _explosionJSON.EXPLOSION1.frame;
	      this.ctx.drawImage(this.image, explosion1.x, explosion1.y, explosion1.w, explosion1.h, this.xPos, this.yPos, this.width, this.height);
	    }
	  }, {
	    key: 'drawFrame3',
	    value: function drawFrame3() {
	      var explosion2 = _explosionJSON.EXPLOSION2.frame;
	      this.ctx.drawImage(this.image, explosion2.x, explosion2.y, explosion2.w, explosion2.h, this.xPos, this.yPos, this.width, this.height);
	    }
	  }, {
	    key: 'drawFrame4',
	    value: function drawFrame4() {
	      var explosion3 = _explosionJSON.EXPLOSION3.frame;
	      this.ctx.drawImage(this.image, explosion3.x, explosion3.y, explosion3.w, explosion3.h, this.xPos, this.yPos, this.width, this.height);
	    }
	  }, {
	    key: 'drawFrame5',
	    value: function drawFrame5() {
	      var explosion4 = _explosionJSON.EXPLOSION4.frame;
	      this.ctx.drawImage(this.image, explosion4.x, explosion4.y, explosion4.w, explosion4.h, this.xPos, this.yPos, this.width, this.height);
	    }
	  }]);
	
	  return Explosion;
	}();
	
	exports.default = Explosion;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	var EXPLOSION0 = {
	   "frame": { "x": 253, "y": 1, "w": 250, "h": 250 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 250, "h": 250 },
	   "sourceSize": { "w": 250, "h": 250 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[250, 250], [0, 250], [0, 0], [250, 0]],
	   "verticesUV": [[503, 251], [253, 251], [253, 1], [503, 1]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var EXPLOSION1 = {
	   "frame": { "x": 1, "y": 1, "w": 250, "h": 252 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 250, "h": 252 },
	   "sourceSize": { "w": 250, "h": 252 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[250, 252], [0, 252], [0, 0], [250, 0]],
	   "verticesUV": [[251, 253], [1, 253], [1, 1], [251, 1]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var EXPLOSION2 = {
	   "frame": { "x": 505, "y": 1, "w": 244, "h": 248 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 244, "h": 248 },
	   "sourceSize": { "w": 244, "h": 248 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[244, 248], [0, 248], [0, 0], [244, 0]],
	   "verticesUV": [[749, 249], [505, 249], [505, 1], [749, 1]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var EXPLOSION3 = {
	   "frame": { "x": 1, "y": 255, "w": 248, "h": 250 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 248, "h": 250 },
	   "sourceSize": { "w": 248, "h": 250 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[248, 250], [0, 250], [0, 0], [248, 0]],
	   "verticesUV": [[249, 505], [1, 505], [1, 255], [249, 255]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	
	var EXPLOSION4 = {
	   "frame": { "x": 251, "y": 255, "w": 246, "h": 250 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 246, "h": 250 },
	   "sourceSize": { "w": 246, "h": 250 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[246, 250], [0, 250], [0, 0], [246, 0]],
	   "verticesUV": [[497, 505], [251, 505], [251, 255], [497, 255]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	
	exports.EXPLOSION0 = EXPLOSION0;
	exports.EXPLOSION1 = EXPLOSION1;
	exports.EXPLOSION2 = EXPLOSION2;
	exports.EXPLOSION3 = EXPLOSION3;
	exports.EXPLOSION4 = EXPLOSION4;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

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
		"pivot": { "x": 0.5, "y": 0.5 }
	};
	var IRONMAN7 = {
		"frame": { "x": 163, "y": 283, "w": 160, "h": 280 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 160, "h": 280 },
		"sourceSize": { "w": 160, "h": 280 },
		"pivot": { "x": 0.5, "y": 0.5 }
	};
	var IRONMAN8 = {
		"frame": { "x": 273, "y": 1, "w": 160, "h": 280 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 160, "h": 280 },
		"sourceSize": { "w": 160, "h": 280 },
		"pivot": { "x": 0.5, "y": 0.5 }
	};
	
	var IRONMAN9 = {
		"frame": { "x": 163, "y": 565, "w": 160, "h": 280 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 160, "h": 280 },
		"sourceSize": { "w": 160, "h": 280 },
		"pivot": { "x": 0.5, "y": 0.5 }
	};
	var IRONMAN10 = {
		"frame": { "x": 1, "y": 1, "w": 270, "h": 280 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 270, "h": 280 },
		"sourceSize": { "w": 270, "h": 280 },
		"pivot": { "x": 0.5, "y": 0.5 }
	};
	var IRONMAN11 = {
		"frame": { "x": 1, "y": 283, "w": 160, "h": 280 },
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": { "x": 0, "y": 0, "w": 160, "h": 280 },
		"sourceSize": { "w": 160, "h": 280 },
		"pivot": { "x": 0.5, "y": 0.5 }
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
	exports.IRONMAN11 = IRONMAN11;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _character = __webpack_require__(9);
	
	var _character2 = _interopRequireDefault(_character);
	
	var _goblinJSON = __webpack_require__(14);
	
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
	    _this.imageRight = window.imageObj['goblin_right'];
	    _this.imageLeft = window.imageObj['goblin_left'];
	    _this.width = 105;
	    _this.height = 185;
	    _this.value = value;
	    return _this;
	  }
	
	  _createClass(Goblin, [{
	    key: 'draw',
	    value: function draw() {
	      var goblin6 = _goblinJSON.GOBLIN6.frame;
	      this.ctx.drawImage(this.imageLeft, goblin6.x, goblin6.y, goblin6.w, goblin6.h, this.xPos, this.yPos, this.width, this.height);
	    }
	  }, {
	    key: 'drawInContainer',
	    value: function drawInContainer(container) {
	      if (container.containerNumber === 1) {
	        var goblin0 = _goblinJSON.GOBLIN0.frame;
	        this.ctx.drawImage(this.imageRight, goblin0.x, goblin0.y, goblin0.w, goblin0.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        this.draw();
	      }
	    }
	  }, {
	    key: 'drawFightingStance',
	    value: function drawFightingStance(container) {
	      if (container.containerNumber === 1) {
	        var goblin1 = _goblinJSON.GOBLIN1.frame;
	        this.ctx.drawImage(this.imageRight, goblin1.x, goblin1.y, goblin1.w, goblin1.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var goblin7 = _goblinJSON.GOBLIN7.frame;
	        this.ctx.drawImage(this.imageLeft, goblin7.x, goblin7.y, goblin7.w, goblin7.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawFirstFightingPose',
	    value: function drawFirstFightingPose(container) {
	      if (container.containerNumber === 1) {
	        var goblin2 = _goblinJSON.GOBLIN2.frame;
	        this.ctx.drawImage(this.imageRight, goblin2.x, goblin2.y, goblin2.w, goblin2.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var goblin8 = _goblinJSON.GOBLIN8.frame;
	        this.ctx.drawImage(this.imageLeft, goblin8.x, goblin8.y, goblin8.w, goblin8.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawSecondFightingPose',
	    value: function drawSecondFightingPose(container) {
	      if (container.containerNumber === 1) {
	        var goblin3 = _goblinJSON.GOBLIN3.frame;
	        this.ctx.drawImage(this.imageRight, goblin3.x, goblin3.y, goblin3.w, goblin3.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var goblin9 = _goblinJSON.GOBLIN9.frame;
	        this.ctx.drawImage(this.imageLeft, goblin9.x, goblin9.y, goblin9.w, goblin9.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawThirdFightingPose',
	    value: function drawThirdFightingPose(container) {
	      if (container.containerNumber === 1) {
	        var goblin4 = _goblinJSON.GOBLIN4.frame;
	        this.ctx.drawImage(this.imageRight, goblin4.x, goblin4.y, goblin4.w, goblin4.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var goblin10 = _goblinJSON.GOBLIN10.frame;
	        this.ctx.drawImage(this.imageLeft, goblin10.x, goblin10.y, goblin10.w, goblin10.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }]);
	
	  return Goblin;
	}(_character2.default);
	
	exports.default = Goblin;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

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

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _character = __webpack_require__(9);
	
	var _character2 = _interopRequireDefault(_character);
	
	var _thorJSON = __webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Thor = function (_Character) {
	  _inherits(Thor, _Character);
	
	  function Thor(value, ctx, xPos, yPos, container1, container2) {
	    var _ref;
	
	    _classCallCheck(this, Thor);
	
	    var _this = _possibleConstructorReturn(this, (_ref = Thor.__proto__ || Object.getPrototypeOf(Thor)).call.apply(_ref, [this].concat([xPos, yPos, container1, container2])));
	
	    _this.ctx = ctx;
	    _this.imageRight = window.imageObj['thor_right'];
	    _this.imageLeft = window.imageObj['thor_left'];
	    _this.width = 105;
	    _this.height = 185;
	    _this.value = value;
	    return _this;
	  }
	
	  _createClass(Thor, [{
	    key: 'draw',
	    value: function draw() {
	      var thor0 = _thorJSON.THOR0.frame;
	      this.ctx.drawImage(this.imageRight, thor0.x, thor0.y, thor0.w, thor0.h, this.xPos, this.yPos, this.width, this.height);
	    }
	  }, {
	    key: 'drawInContainer',
	    value: function drawInContainer(container) {
	      if (container.containerNumber === 1) {
	        this.draw();
	      } else {
	        var thor5 = _thorJSON.THOR5.frame;
	        this.ctx.drawImage(this.imageLeft, thor5.x, thor5.y, thor5.w, thor5.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawFightingStance',
	    value: function drawFightingStance(container) {
	      if (container.containerNumber === 1) {
	        var thor1 = _thorJSON.THOR1.frame;
	        this.ctx.drawImage(this.imageRight, thor1.x, thor1.y, thor1.w, thor1.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var thor6 = _thorJSON.THOR6.frame;
	        this.ctx.drawImage(this.imageLeft, thor6.x, thor6.y, thor6.w, thor6.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawFirstFightingPose',
	    value: function drawFirstFightingPose(container) {
	      if (container.containerNumber === 1) {
	        var thor2 = _thorJSON.THOR2.frame;
	        this.ctx.drawImage(this.imageRight, thor2.x, thor2.y, thor2.w, thor2.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var thor7 = _thorJSON.THOR7.frame;
	        this.ctx.drawImage(this.imageLeft, thor7.x, thor7.y, thor7.w, thor7.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawSecondFightingPose',
	    value: function drawSecondFightingPose(container) {
	      if (container.containerNumber === 1) {
	        var thor3 = _thorJSON.THOR3.frame;
	        this.ctx.drawImage(this.imageRight, thor3.x, thor3.y, thor3.w, thor3.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var thor8 = _thorJSON.THOR8.frame;
	        this.ctx.drawImage(this.imageLeft, thor8.x, thor8.y, thor8.w, thor8.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawThirdFightingPose',
	    value: function drawThirdFightingPose(container) {
	      if (container.containerNumber === 1) {
	        var thor4 = _thorJSON.THOR4.frame;
	        this.ctx.drawImage(this.imageRight, thor4.x, thor4.y, thor4.w, thor4.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var thor9 = _thorJSON.THOR9.frame;
	        this.ctx.drawImage(this.imageLeft, thor9.x, thor9.y, thor9.w, thor9.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }]);
	
	  return Thor;
	}(_character2.default);
	
	exports.default = Thor;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	var THOR0 = {
	   "frame": { "x": 1, "y": 1337, "w": 200, "h": 326 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 200, "h": 326 },
	   "sourceSize": { "w": 200, "h": 326 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[200, 326], [0, 326], [0, 0], [200, 0]],
	   "verticesUV": [[201, 1663], [1, 1663], [1, 1337], [201, 1337]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var THOR1 = {
	   "frame": { "x": 1, "y": 677, "w": 260, "h": 332 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 260, "h": 332 },
	   "sourceSize": { "w": 260, "h": 332 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[260, 332], [0, 332], [0, 0], [260, 0]],
	   "verticesUV": [[261, 1009], [1, 1009], [1, 677], [261, 677]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var THOR2 = {
	   "frame": { "x": 1, "y": 1011, "w": 256, "h": 324 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 256, "h": 324 },
	   "sourceSize": { "w": 256, "h": 324 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[256, 324], [0, 324], [0, 0], [256, 0]],
	   "verticesUV": [[257, 1335], [1, 1335], [1, 1011], [257, 1011]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var THOR3 = {
	   "frame": { "x": 1, "y": 357, "w": 280, "h": 318 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 280, "h": 318 },
	   "sourceSize": { "w": 280, "h": 318 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[280, 318], [0, 318], [0, 0], [280, 0]],
	   "verticesUV": [[281, 675], [1, 675], [1, 357], [281, 357]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	
	var THOR4 = {
	   "frame": { "x": 1, "y": 1, "w": 324, "h": 354 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 324, "h": 354 },
	   "sourceSize": { "w": 324, "h": 354 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[324, 354], [0, 354], [0, 0], [324, 0]],
	   "verticesUV": [[325, 355], [1, 355], [1, 1], [325, 1]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var THOR5 = {
	   "frame": { "x": 1, "y": 1337, "w": 200, "h": 326 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 200, "h": 326 },
	   "sourceSize": { "w": 200, "h": 326 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[200, 326], [0, 326], [0, 0], [200, 0]],
	   "verticesUV": [[201, 1663], [1, 1663], [1, 1337], [201, 1337]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var THOR6 = {
	   "frame": { "x": 1, "y": 677, "w": 260, "h": 332 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 260, "h": 332 },
	   "sourceSize": { "w": 260, "h": 332 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[260, 332], [0, 332], [0, 0], [260, 0]],
	   "verticesUV": [[261, 1009], [1, 1009], [1, 677], [261, 677]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var THOR7 = {
	   "frame": { "x": 1, "y": 1011, "w": 256, "h": 324 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 256, "h": 324 },
	   "sourceSize": { "w": 256, "h": 324 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[256, 324], [0, 324], [0, 0], [256, 0]],
	   "verticesUV": [[257, 1335], [1, 1335], [1, 1011], [257, 1011]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var THOR8 = {
	   "frame": { "x": 1, "y": 357, "w": 280, "h": 318 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 280, "h": 318 },
	   "sourceSize": { "w": 280, "h": 318 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[280, 318], [0, 318], [0, 0], [280, 0]],
	   "verticesUV": [[281, 675], [1, 675], [1, 357], [281, 357]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	
	var THOR9 = {
	   "frame": { "x": 1, "y": 1, "w": 324, "h": 354 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 324, "h": 354 },
	   "sourceSize": { "w": 324, "h": 354 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[324, 354], [0, 354], [0, 0], [324, 0]],
	   "verticesUV": [[325, 355], [1, 355], [1, 1], [325, 1]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	
	exports.THOR0 = THOR0;
	exports.THOR1 = THOR1;
	exports.THOR2 = THOR2;
	exports.THOR3 = THOR3;
	exports.THOR4 = THOR4;
	exports.THOR5 = THOR5;
	exports.THOR6 = THOR6;
	exports.THOR7 = THOR7;
	exports.THOR8 = THOR8;
	exports.THOR9 = THOR9;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _character = __webpack_require__(9);
	
	var _character2 = _interopRequireDefault(_character);
	
	var _juggernautJSON = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Juggernaut = function (_Character) {
	  _inherits(Juggernaut, _Character);
	
	  function Juggernaut(value, ctx, xPos, yPos, container1, container2) {
	    var _ref;
	
	    _classCallCheck(this, Juggernaut);
	
	    var _this = _possibleConstructorReturn(this, (_ref = Juggernaut.__proto__ || Object.getPrototypeOf(Juggernaut)).call.apply(_ref, [this].concat([xPos, yPos, container1, container2])));
	
	    _this.ctx = ctx;
	    _this.imageRight = window.imageObj['juggernaut_right'];
	    _this.imageLeft = window.imageObj['juggernaut_left'];
	    _this.width = 105;
	    _this.height = 185;
	    _this.value = value;
	    return _this;
	  }
	
	  _createClass(Juggernaut, [{
	    key: 'draw',
	    value: function draw() {
	      var juggernaut5 = _juggernautJSON.JUGGERNAUT5.frame;
	      this.ctx.drawImage(this.imageLeft, juggernaut5.x, juggernaut5.y, juggernaut5.w, juggernaut5.h, this.xPos, this.yPos, this.width, this.height);
	    }
	  }, {
	    key: 'drawInContainer',
	    value: function drawInContainer(container) {
	      if (container.containerNumber === 2) {
	        this.draw();
	      } else {
	        var juggernaut0 = _juggernautJSON.JUGGERNAUT0.frame;
	        this.ctx.drawImage(this.imageRight, juggernaut0.x, juggernaut0.y, juggernaut0.w, juggernaut0.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawFightingStance',
	    value: function drawFightingStance(container) {
	      if (container.containerNumber === 1) {
	        var juggernaut1 = _juggernautJSON.JUGGERNAUT1.frame;
	        this.ctx.drawImage(this.imageRight, juggernaut1.x, juggernaut1.y, juggernaut1.w, juggernaut1.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var juggernaut6 = _juggernautJSON.JUGGERNAUT6.frame;
	        this.ctx.drawImage(this.imageLeft, juggernaut6.x, juggernaut6.y, juggernaut6.w, juggernaut6.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawFirstFightingPose',
	    value: function drawFirstFightingPose(container) {
	      if (container.containerNumber === 1) {
	        var juggernaut2 = _juggernautJSON.JUGGERNAUT2.frame;
	        this.ctx.drawImage(this.imageRight, juggernaut2.x, juggernaut2.y, juggernaut2.w, juggernaut2.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var juggernaut7 = _juggernautJSON.JUGGERNAUT7.frame;
	        this.ctx.drawImage(this.imageLeft, juggernaut7.x, juggernaut7.y, juggernaut7.w, juggernaut7.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawSecondFightingPose',
	    value: function drawSecondFightingPose(container) {
	      if (container.containerNumber === 1) {
	        var juggernaut3 = _juggernautJSON.JUGGERNAUT3.frame;
	        this.ctx.drawImage(this.imageRight, juggernaut3.x, juggernaut3.y, juggernaut3.w, juggernaut3.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var juggernaut8 = _juggernautJSON.JUGGERNAUT8.frame;
	        this.ctx.drawImage(this.imageLeft, juggernaut8.x, juggernaut8.y, juggernaut8.w, juggernaut8.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawThirdFightingPose',
	    value: function drawThirdFightingPose(container) {
	      if (container.containerNumber === 1) {
	        var juggernaut4 = _juggernautJSON.JUGGERNAUT4.frame;
	        this.ctx.drawImage(this.imageRight, juggernaut4.x, juggernaut4.y, juggernaut4.w, juggernaut4.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var juggernaut9 = _juggernautJSON.JUGGERNAUT9.frame;
	        this.ctx.drawImage(this.imageLeft, juggernaut9.x, juggernaut9.y, juggernaut9.w, juggernaut9.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }]);
	
	  return Juggernaut;
	}(_character2.default);
	
	exports.default = Juggernaut;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	var JUGGERNAUT0 = {
	   "frame": { "x": 1, "y": 323, "w": 300, "h": 320 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 300, "h": 320 },
	   "sourceSize": { "w": 300, "h": 320 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[300, 320], [0, 320], [0, 0], [300, 0]],
	   "verticesUV": [[301, 643], [1, 643], [1, 323], [301, 323]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var JUGGERNAUT1 = {
	   "frame": { "x": 1, "y": 1, "w": 300, "h": 320 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 300, "h": 320 },
	   "sourceSize": { "w": 300, "h": 320 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[300, 320], [0, 320], [0, 0], [300, 0]],
	   "verticesUV": [[301, 321], [1, 321], [1, 1], [301, 1]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var JUGGERNAUT2 = {
	   "frame": { "x": 303, "y": 1, "w": 300, "h": 320 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 300, "h": 320 },
	   "sourceSize": { "w": 300, "h": 320 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[300, 320], [0, 320], [0, 0], [300, 0]],
	   "verticesUV": [[603, 321], [303, 321], [303, 1], [603, 1]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var JUGGERNAUT3 = {
	   "frame": { "x": 1, "y": 645, "w": 300, "h": 320 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 300, "h": 320 },
	   "sourceSize": { "w": 300, "h": 320 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[300, 320], [0, 320], [0, 0], [300, 0]],
	   "verticesUV": [[301, 965], [1, 965], [1, 645], [301, 645]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	
	var JUGGERNAUT4 = {
	   "frame": { "x": 303, "y": 323, "w": 300, "h": 320 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 300, "h": 320 },
	   "sourceSize": { "w": 300, "h": 320 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[300, 320], [0, 320], [0, 0], [300, 0]],
	   "verticesUV": [[603, 643], [303, 643], [303, 323], [603, 323]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var JUGGERNAUT5 = {
	   "frame": { "x": 1, "y": 323, "w": 300, "h": 320 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 300, "h": 320 },
	   "sourceSize": { "w": 300, "h": 320 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[300, 320], [0, 320], [0, 0], [300, 0]],
	   "verticesUV": [[301, 643], [1, 643], [1, 323], [301, 323]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var JUGGERNAUT6 = {
	   "frame": { "x": 1, "y": 1, "w": 300, "h": 320 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 300, "h": 320 },
	   "sourceSize": { "w": 300, "h": 320 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[300, 320], [0, 320], [0, 0], [300, 0]],
	   "verticesUV": [[301, 321], [1, 321], [1, 1], [301, 1]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var JUGGERNAUT7 = {
	   "frame": { "x": 303, "y": 1, "w": 300, "h": 320 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 300, "h": 320 },
	   "sourceSize": { "w": 300, "h": 320 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[300, 320], [0, 320], [0, 0], [300, 0]],
	   "verticesUV": [[603, 321], [303, 321], [303, 1], [603, 1]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var JUGGERNAUT8 = {
	   "frame": { "x": 1, "y": 645, "w": 300, "h": 320 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 300, "h": 320 },
	   "sourceSize": { "w": 300, "h": 320 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[300, 320], [0, 320], [0, 0], [300, 0]],
	   "verticesUV": [[301, 965], [1, 965], [1, 645], [301, 645]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	
	var JUGGERNAUT9 = {
	   "frame": { "x": 303, "y": 323, "w": 300, "h": 320 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 300, "h": 320 },
	   "sourceSize": { "w": 300, "h": 320 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[300, 320], [0, 320], [0, 0], [300, 0]],
	   "verticesUV": [[603, 643], [303, 643], [303, 323], [603, 323]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	
	exports.JUGGERNAUT0 = JUGGERNAUT0;
	exports.JUGGERNAUT1 = JUGGERNAUT1;
	exports.JUGGERNAUT2 = JUGGERNAUT2;
	exports.JUGGERNAUT3 = JUGGERNAUT3;
	exports.JUGGERNAUT4 = JUGGERNAUT4;
	exports.JUGGERNAUT5 = JUGGERNAUT5;
	exports.JUGGERNAUT6 = JUGGERNAUT6;
	exports.JUGGERNAUT7 = JUGGERNAUT7;
	exports.JUGGERNAUT8 = JUGGERNAUT8;
	exports.JUGGERNAUT9 = JUGGERNAUT9;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _character = __webpack_require__(9);
	
	var _character2 = _interopRequireDefault(_character);
	
	var _hulkJSON = __webpack_require__(20);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Hulk = function (_Character) {
	  _inherits(Hulk, _Character);
	
	  function Hulk(value, ctx, xPos, yPos, container1, container2) {
	    var _ref;
	
	    _classCallCheck(this, Hulk);
	
	    var _this = _possibleConstructorReturn(this, (_ref = Hulk.__proto__ || Object.getPrototypeOf(Hulk)).call.apply(_ref, [this].concat([xPos, yPos, container1, container2])));
	
	    _this.ctx = ctx;
	    _this.imageRight = window.imageObj['hulk_right'];
	    _this.imageLeft = window.imageObj['hulk_left'];
	    _this.width = 105;
	    _this.height = 170;
	    _this.value = value;
	    return _this;
	  }
	
	  _createClass(Hulk, [{
	    key: 'draw',
	    value: function draw() {
	      var hulk0 = _hulkJSON.HULK0.frame;
	      this.ctx.drawImage(this.imageRight, hulk0.x, hulk0.y, hulk0.w, hulk0.h, this.xPos, this.yPos, this.width, this.height);
	    }
	  }, {
	    key: 'drawInContainer',
	    value: function drawInContainer(container) {
	      if (container.containerNumber === 1) {
	        this.draw();
	      } else {
	        var hulk5 = _hulkJSON.HULK5.frame;
	        this.ctx.drawImage(this.imageLeft, hulk5.x, hulk5.y, hulk5.w, hulk5.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawFightingStance',
	    value: function drawFightingStance(container) {
	      if (container.containerNumber === 1) {
	        var hulk1 = _hulkJSON.HULK1.frame;
	        this.ctx.drawImage(this.imageRight, hulk1.x, hulk1.y, hulk1.w, hulk1.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var hulk6 = _hulkJSON.HULK6.frame;
	        this.ctx.drawImage(this.imageLeft, hulk6.x, hulk6.y, hulk6.w, hulk6.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawFirstFightingPose',
	    value: function drawFirstFightingPose(container) {
	      if (container.containerNumber === 1) {
	        var hulk2 = _hulkJSON.HULK2.frame;
	        this.ctx.drawImage(this.imageRight, hulk2.x, hulk2.y, hulk2.w, hulk2.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var hulk7 = _hulkJSON.HULK7.frame;
	        this.ctx.drawImage(this.imageLeft, hulk7.x, hulk7.y, hulk7.w, hulk7.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawSecondFightingPose',
	    value: function drawSecondFightingPose(container) {
	      if (container.containerNumber === 1) {
	        var hulk3 = _hulkJSON.HULK3.frame;
	        this.ctx.drawImage(this.imageRight, hulk3.x, hulk3.y, hulk3.w, hulk3.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var hulk8 = _hulkJSON.HULK8.frame;
	        this.ctx.drawImage(this.imageLeft, hulk8.x, hulk8.y, hulk8.w, hulk8.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawThirdFightingPose',
	    value: function drawThirdFightingPose(container) {
	      if (container.containerNumber === 1) {
	        var hulk4 = _hulkJSON.HULK4.frame;
	        this.ctx.drawImage(this.imageRight, hulk4.x, hulk4.y, hulk4.w, hulk4.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var hulk9 = _hulkJSON.HULK9.frame;
	        this.ctx.drawImage(this.imageLeft, hulk9.x, hulk9.y, hulk9.w, hulk9.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }]);
	
	  return Hulk;
	}(_character2.default);
	
	exports.default = Hulk;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	var HULK0 = {
	   "frame": { "x": 1, "y": 605, "w": 270, "h": 290 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 270, "h": 290 },
	   "sourceSize": { "w": 270, "h": 290 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[270, 290], [0, 290], [0, 0], [270, 0]],
	   "verticesUV": [[271, 895], [1, 895], [1, 605], [271, 605]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var HULK1 = {
	   "frame": { "x": 273, "y": 303, "w": 270, "h": 298 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 270, "h": 298 },
	   "sourceSize": { "w": 270, "h": 298 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[270, 298], [0, 298], [0, 0], [270, 0]],
	   "verticesUV": [[543, 601], [273, 601], [273, 303], [543, 303]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var HULK2 = {
	   "frame": { "x": 1, "y": 303, "w": 270, "h": 300 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 270, "h": 300 },
	   "sourceSize": { "w": 270, "h": 300 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[270, 300], [0, 300], [0, 0], [270, 0]],
	   "verticesUV": [[271, 603], [1, 603], [1, 303], [271, 303]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var HULK3 = {
	   "frame": { "x": 273, "y": 1, "w": 270, "h": 300 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 270, "h": 300 },
	   "sourceSize": { "w": 270, "h": 300 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[270, 300], [0, 300], [0, 0], [270, 0]],
	   "verticesUV": [[543, 301], [273, 301], [273, 1], [543, 1]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	
	var HULK4 = {
	   "frame": { "x": 1, "y": 1, "w": 270, "h": 300 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 270, "h": 300 },
	   "sourceSize": { "w": 270, "h": 300 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[270, 300], [0, 300], [0, 0], [270, 0]],
	   "verticesUV": [[271, 301], [1, 301], [1, 1], [271, 1]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var HULK5 = {
	   "frame": { "x": 1, "y": 605, "w": 270, "h": 290 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 270, "h": 290 },
	   "sourceSize": { "w": 270, "h": 290 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[270, 290], [0, 290], [0, 0], [270, 0]],
	   "verticesUV": [[271, 895], [1, 895], [1, 605], [271, 605]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var HULK6 = {
	   "frame": { "x": 273, "y": 303, "w": 270, "h": 298 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 270, "h": 298 },
	   "sourceSize": { "w": 270, "h": 298 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[270, 298], [0, 298], [0, 0], [270, 0]],
	   "verticesUV": [[543, 601], [273, 601], [273, 303], [543, 303]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var HULK7 = {
	   "frame": { "x": 1, "y": 303, "w": 270, "h": 300 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 270, "h": 300 },
	   "sourceSize": { "w": 270, "h": 300 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[270, 300], [0, 300], [0, 0], [270, 0]],
	   "verticesUV": [[271, 603], [1, 603], [1, 303], [271, 303]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	var HULK8 = {
	   "frame": { "x": 273, "y": 1, "w": 270, "h": 300 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 270, "h": 300 },
	   "sourceSize": { "w": 270, "h": 300 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[270, 300], [0, 300], [0, 0], [270, 0]],
	   "verticesUV": [[543, 301], [273, 301], [273, 1], [543, 1]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	
	var HULK9 = {
	   "frame": { "x": 1, "y": 1, "w": 270, "h": 300 },
	   "rotated": false,
	   "trimmed": false,
	   "spriteSourceSize": { "x": 0, "y": 0, "w": 270, "h": 300 },
	   "sourceSize": { "w": 270, "h": 300 },
	   "pivot": { "x": 0.5, "y": 0.5 },
	   "vertices": [[270, 300], [0, 300], [0, 0], [270, 0]],
	   "verticesUV": [[271, 301], [1, 301], [1, 1], [271, 1]],
	   "triangles": [[1, 2, 3], [0, 1, 3]]
	};
	
	exports.HULK0 = HULK0;
	exports.HULK1 = HULK1;
	exports.HULK2 = HULK2;
	exports.HULK3 = HULK3;
	exports.HULK4 = HULK4;
	exports.HULK5 = HULK5;
	exports.HULK6 = HULK6;
	exports.HULK7 = HULK7;
	exports.HULK8 = HULK8;
	exports.HULK9 = HULK9;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _character = __webpack_require__(9);
	
	var _character2 = _interopRequireDefault(_character);
	
	var _lokiJSON = __webpack_require__(22);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Loki = function (_Character) {
	  _inherits(Loki, _Character);
	
	  function Loki(value, ctx, xPos, yPos, container1, container2) {
	    var _ref;
	
	    _classCallCheck(this, Loki);
	
	    var _this = _possibleConstructorReturn(this, (_ref = Loki.__proto__ || Object.getPrototypeOf(Loki)).call.apply(_ref, [this].concat([xPos, yPos, container1, container2])));
	
	    _this.ctx = ctx;
	    _this.imageRight = window.imageObj['loki_right'];
	    _this.imageLeft = window.imageObj['loki_left'];
	    _this.width = 105;
	    _this.height = 185;
	    _this.value = value;
	    return _this;
	  }
	
	  _createClass(Loki, [{
	    key: 'draw',
	    value: function draw() {
	      var loki5 = _lokiJSON.LOKI5.frame;
	      this.ctx.drawImage(this.imageLeft, loki5.x, loki5.y, loki5.w, loki5.h, this.xPos, this.yPos, this.width, this.height);
	    }
	  }, {
	    key: 'drawInContainer',
	    value: function drawInContainer(container) {
	      if (container.containerNumber === 2) {
	        this.draw();
	      } else {
	        var loki0 = _lokiJSON.LOKI0.frame;
	        this.ctx.drawImage(this.imageRight, loki0.x, loki0.y, loki0.w, loki0.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawFightingStance',
	    value: function drawFightingStance(container) {
	      if (container.containerNumber === 1) {
	        var loki1 = _lokiJSON.LOKI1.frame;
	        this.ctx.drawImage(this.imageRight, loki1.x, loki1.y, loki1.w, loki1.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var loki6 = _lokiJSON.LOKI6.frame;
	        this.ctx.drawImage(this.imageLeft, loki6.x, loki6.y, loki6.w, loki6.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawFirstFightingPose',
	    value: function drawFirstFightingPose(container) {
	      if (container.containerNumber === 1) {
	        var loki2 = _lokiJSON.LOKI2.frame;
	        this.ctx.drawImage(this.imageRight, loki2.x, loki2.y, loki2.w, loki2.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var loki7 = _lokiJSON.LOKI7.frame;
	        this.ctx.drawImage(this.imageLeft, loki7.x, loki7.y, loki7.w, loki7.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawSecondFightingPose',
	    value: function drawSecondFightingPose(container) {
	      if (container.containerNumber === 1) {
	        var loki3 = _lokiJSON.LOKI3.frame;
	        this.ctx.drawImage(this.imageRight, loki3.x, loki3.y, loki3.w, loki3.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var loki8 = _lokiJSON.LOKI8.frame;
	        this.ctx.drawImage(this.imageLeft, loki8.x, loki8.y, loki8.w, loki8.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }, {
	    key: 'drawThirdFightingPose',
	    value: function drawThirdFightingPose(container) {
	      if (container.containerNumber === 1) {
	        var loki4 = _lokiJSON.LOKI4.frame;
	        this.ctx.drawImage(this.imageRight, loki4.x, loki4.y, loki4.w, loki4.h, this.xPos, this.yPos, this.width, this.height);
	      } else {
	        var loki9 = _lokiJSON.LOKI9.frame;
	        this.ctx.drawImage(this.imageLeft, loki9.x, loki9.y, loki9.w, loki9.h, this.xPos, this.yPos, this.width, this.height);
	      }
	    }
	  }]);
	
	  return Loki;
	}(_character2.default);
	
	exports.default = Loki;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
				value: true
	});
	var LOKI0 = {
				"frame": { "x": 1, "y": 1, "w": 272, "h": 418 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 272, "h": 418 },
				"sourceSize": { "w": 272, "h": 418 },
				"pivot": { "x": 0.5, "y": 0.5 }
	};
	var LOKI1 = {
				"frame": { "x": 499, "y": 1, "w": 150, "h": 250 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 150, "h": 250 },
				"sourceSize": { "w": 150, "h": 250 },
				"pivot": { "x": 0.5, "y": 0.5 }
	};
	var LOKI2 = {
				"frame": { "x": 275, "y": 269, "w": 184, "h": 236 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 184, "h": 236 },
				"sourceSize": { "w": 184, "h": 236 },
				"pivot": { "x": 0.5, "y": 0.5 }
	};
	var LOKI3 = {
				"frame": { "x": 461, "y": 269, "w": 176, "h": 232 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 176, "h": 232 },
				"sourceSize": { "w": 176, "h": 232 },
				"pivot": { "x": 0.5, "y": 0.5 }
	};
	
	var LOKI4 = {
				"frame": { "x": 275, "y": 1, "w": 222, "h": 266 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 222, "h": 266 },
				"sourceSize": { "w": 222, "h": 266 },
				"pivot": { "x": 0.5, "y": 0.5 }
	};
	var LOKI5 = {
				"frame": { "x": 1, "y": 1, "w": 272, "h": 418 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 272, "h": 418 },
				"sourceSize": { "w": 272, "h": 418 },
				"pivot": { "x": 0.5, "y": 0.5 }
	};
	var LOKI6 = {
				"frame": { "x": 499, "y": 1, "w": 150, "h": 250 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 150, "h": 250 },
				"sourceSize": { "w": 150, "h": 250 },
				"pivot": { "x": 0.5, "y": 0.5 }
	};
	var LOKI7 = {
				"frame": { "x": 275, "y": 269, "w": 184, "h": 236 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 184, "h": 236 },
				"sourceSize": { "w": 184, "h": 236 },
				"pivot": { "x": 0.5, "y": 0.5 }
	};
	var LOKI8 = {
				"frame": { "x": 461, "y": 269, "w": 176, "h": 232 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 176, "h": 232 },
				"sourceSize": { "w": 176, "h": 232 },
				"pivot": { "x": 0.5, "y": 0.5 }
	};
	
	var LOKI9 = {
				"frame": { "x": 275, "y": 1, "w": 222, "h": 266 },
				"rotated": false,
				"trimmed": false,
				"spriteSourceSize": { "x": 0, "y": 0, "w": 222, "h": 266 },
				"sourceSize": { "w": 222, "h": 266 },
				"pivot": { "x": 0.5, "y": 0.5 }
	};
	
	exports.LOKI0 = LOKI0;
	exports.LOKI1 = LOKI1;
	exports.LOKI2 = LOKI2;
	exports.LOKI3 = LOKI3;
	exports.LOKI4 = LOKI4;
	exports.LOKI5 = LOKI5;
	exports.LOKI6 = LOKI6;
	exports.LOKI7 = LOKI7;
	exports.LOKI8 = LOKI8;
	exports.LOKI9 = LOKI9;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map