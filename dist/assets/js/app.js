/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// console.log('file 1');\r\n\r\n// const imageBox2 = document.querySelector(\".images__box2\")\r\n// const sec24 = document.querySelector(\".section24\")\r\n\r\n// sec24.onmousemove = function (e){\r\n//   let x = e.clientX / 2\r\n//   let y = e.clientY / 2\r\n//   imageBox2.style.transform = \"perspective(\" + 250 + \"rem) rotateY(\" + x + \"deg)\"\r\n// }\r\n\r\n// a = document.querySelectorAll(\".l_f_i a\")\r\n// a.forEach(el => {\r\n//   b = 'http://localhost:3000/' + el.innerText;\r\n//   console.log(b, window.location.href)\r\n//   if (b == window.location.href){\r\n//     a.classList.add(\"active\")\r\n//   }\r\n\r\n// });\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/back.js":
/*!*******************************!*\
  !*** ./src/assets/js/back.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nfunction Animate(canvas, options) {\r\n  this.canvas = canvas;\r\n  this.options = defaults(options || {}, this.options);\r\n  this.init();\r\n}\r\n\r\nAnimate.prototype.options = {\r\n  density: 10, // Affects how many poitns are created\r\n  speed: 10, // Time in seconds to shift points\r\n  sync: false, // Should points move in sync\r\n  distance: 100, // Distance to move points\r\n  lineColor: '255, 255, 255',\r\n  circleColor: '255, 255, 255',\r\n  radius: 20,\r\n  lineWidth: 1,\r\n  lines: 3,  // Number of closest lines to draw\r\n  updateClosest : false, // Update closet points each loop\r\n  mouse: true, // Link to mouse or random\r\n\r\n};\r\n\r\n/**\r\n * Setup everything\r\n */\r\nAnimate.prototype.init = function(){\r\n  this.width = window.innerWidth;\r\n  this.height = window.innerHeight;\r\n  this.target = {\r\n    position: {\r\n      x: this.width / 2,\r\n      y: this.height / 2\r\n    }\r\n  };\r\n\r\n  // Setup canvas\r\n  this.canvas.width = this.width;\r\n  this.canvas.height = this.height;\r\n\r\n  this.ctx = canvas.getContext('2d');\r\n\r\n  window.addEventListener('resize', this.resize.bind(this));\r\n\r\n  if(this.options.mouse === true && !('ontouchstart' in window) ) {\r\n     window.addEventListener('mousemove', this.mousemove.bind(this));\r\n  }\r\n\r\n  this.points = [];\r\n  for(var x = 0; x < this.width; x = x + this.width / this.options.density) {\r\n    for(var y = 0; y < this.height; y = y + this.height/ this.options.density) {\r\n      var point = new Point({\r\n        x: x + Math.random() * this.width/ this.options.density,\r\n        y: y + Math.random() * this.height/this.options.density\r\n      }, this.ctx, this.points.length + 1, this.options);\r\n      this.points.push(point);\r\n    }\r\n  }\r\n\r\n  // Setup Circles\r\n  for(var i in this.points) {\r\n    this.points[i].circle = new Circle(this.points[i], this.ctx, this.options);\r\n  }\r\n\r\n  this.findClosest(); // Points\r\n\r\n  this.animate(); // Start the loop\r\n\r\n  this.shiftPoints(); // Start the tween loop\r\n\r\n  if(this.options.mouse === false) {\r\n    this.moveTarget(); // Start the random target loop\r\n  }\r\n\r\n};\r\n\r\n/*\r\n * Cycles through each Point and finds its neighbors\r\n */\r\nAnimate.prototype.findClosest = function() {\r\n  for(var i = 0; i < this.points.length; i++) {\r\n    // Save the point\r\n    var point = this.points[i];\r\n    // Reset\r\n    point.closest = [];\r\n    // Cycle through the others\r\n    for(var j = 0; j < this.points.length; j++) {\r\n      // Point to test\r\n      var testPoint = this.points[j];\r\n      if(point.id !== testPoint.id) {\r\n        var placed = false, k;\r\n        for (k = 0; k < this.options.lines; k ++) {\r\n          if(!placed) {\r\n            if(typeof point.closest[k] === 'undefined') {\r\n              point.closest[k] = testPoint;\r\n              placed = true;\r\n            }\r\n          }\r\n        }\r\n\r\n        for(k = 0; k < this.options.lines; k++){\r\n          if(!placed) {\r\n            if(point.distanceTo(testPoint) < point.distanceTo(point.closest[k])) {\r\n              point.closest[k] = testPoint;\r\n              placed = true;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n};\r\n\r\n/**\r\n * Animation Loop\r\n */\r\nAnimate.prototype.animate = function() {\r\n  var i;\r\n  // Should we recalucate closest?\r\n  if(this.options.updateClosest) {\r\n    this.findClosest();\r\n  }\r\n\r\n  // Calculate Opacity\r\n  for(i in this.points) {\r\n    if(this.points[i].distanceTo(this.target, true) < 5000) {\r\n       this.points[i].opacity = 0.4;\r\n       this.points[i].circle.opacity = 0.6;\r\n    } else if (this.points[i].distanceTo(this.target, true) < 10000) {\r\n       this.points[i].opacity = 0.2;\r\n       this.points[i].circle.opacity = 0.3;\r\n    } else if (this.points[i].distanceTo(this.target, true) < 30000) {\r\n       this.points[i].opacity = 0.1;\r\n       this.points[i].circle.opacity = 0.2;\r\n    } else {\r\n       this.points[i].opacity = 0.05;\r\n       this.points[i].circle.opacity = 0.05;\r\n    }\r\n  }\r\n   // Clear\r\n  this.ctx.clearRect(0, 0, this.width, this.height);\r\n  for(i in this.points) {\r\n\r\n    this.points[i].drawLines();\r\n    this.points[i].circle.draw();\r\n  }\r\n // Loop\r\n window.requestAnimationFrame(this.animate.bind(this));\r\n};\r\n\r\n/**\r\n * Starts each point in tween loop\r\n */\r\nAnimate.prototype.shiftPoints = function() {\r\n  for(var i in this.points) {\r\n    this.points[i].shift();\r\n  }\r\n};\r\n\r\n\r\n/**\r\n * Make sure the canvas is the right size\r\n */\r\nAnimate.prototype.resize = function() {\r\n  this.width = window.innerWidth;\r\n  this.height = window.innerHeight;\r\n  this.canvas.width = this.width;\r\n  this.canvas.height = \"700% !important\";\r\n};\r\n\r\n/**\r\n * Mouse Move Event - Moves the target with the mouse\r\n * @param    event   {Object}   Mouse event\r\n */\r\nAnimate.prototype.mousemove = function(event) {\r\n  if(event.pageX || event.pageY) {\r\n    this.target.position.x = event.pageX;\r\n    this.target.position.y = event.pageY;\r\n  } else if(event.clientX || event.clientY) {\r\n    this.target.position.x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;\r\n    this.target.position.y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;\r\n  }\r\n};\r\n\r\n/**\r\n * Randomly move the target\r\n */\r\nAnimate.prototype.moveTarget = function() {\r\n  var _this = this;\r\n  TweenLite.to(this.target.position, 2, {\r\n    x : (Math.random() * (this.width - 200)) + 100,\r\n    y : (Math.random() * (this.height - 200)) + 100,\r\n    ease: Expo.easeInOut,\r\n    onComplete: function() {\r\n      _this.moveTarget();\r\n    }\r\n  });\r\n};\r\n\r\n/**\r\n * Point Constructor\r\n * @param    position   {Object}     set of x and u coords\r\n * @param    ctx        {Object}     Canvas context to draw on\r\n * @param    options    {Object}     options passed from main function\r\n */\r\nfunction Point(position, ctx, id, options) {\r\n  this.options = options || {};\r\n  this.id = id;\r\n  this.ctx = ctx;\r\n  this.position = position || {x: 0, y: 0};\r\n  this.origin = {\r\n    x: this.position.x,\r\n    y: this.position.y\r\n  };\r\n  this.opacity = 0;\r\n  this.closest = [];\r\n}\r\n\r\n/**\r\n * Caluclates the distance to another point\r\n * @param    point    {Object}    Another Point\r\n * @param    abs      {Boolean}   Return the absolute value or not\r\n * @returns  {Number}\r\n */\r\nPoint.prototype.distanceTo = function(point, abs) {\r\n  abs = abs || false;\r\n  var distance = Math.pow(this.position.x - point.position.x, 2) + Math.pow(this.position.y - point.position.y, 2);\r\n  return abs ? Math.abs(distance) : distance;\r\n};\r\n\r\n/**\r\n *  Draws lines to the closet points\r\n */\r\nPoint.prototype.drawLines = function() {\r\n  for(var i in this.closest) {\r\n    if(this.opacity  > 0) {\r\n      this.ctx.beginPath();\r\n      this.ctx.moveTo(this.position.x, this.position.y);\r\n       var test = i + 1;\r\n      if(!this.closest[test]) {\r\n        test = 0;\r\n      }\r\n      this.ctx.lineCap = 'round';\r\n      this.ctx.strokeStyle = 'rgba(' + this.options.lineColor + ', ' + this.opacity + ')';\r\n       this.ctx.lineWidth = this.options.lineWidth;\r\n\r\n\r\n      this.ctx.lineTo(this.closest[i].position.x, this.closest[i].position.y);\r\n\r\n      this.ctx.stroke();\r\n    }\r\n  }\r\n};\r\n\r\n/**\r\n * Tween loop to move each point around it's origin\r\n */\r\nPoint.prototype.shift = function() {\r\n  var _this = this,\r\n       speed = this.options.speed;\r\n\r\n  // Random the time a little\r\n  if(this.options.sync !== true) {\r\n    speed -= this.options.speed * Math.random();\r\n  }\r\n  TweenLite.to(this.position, speed, {\r\n    x : (this.origin.x - (this.options.distance/2) + Math.random() * this.options.distance),\r\n    y : (this.origin.y - (this.options.distance/2) + Math.random() * this.options.distance),\r\n    ease: Expo.easeInOut,\r\n    onComplete: function() {\r\n      _this.shift();\r\n    }\r\n  });\r\n};\r\n\r\n/**\r\n * Circle Constructor\r\n * @param    point   {Object}    Point object\r\n * @param    ctx     {Object}    Context to draw on\r\n * @param    options {Object}    options passed from main function\r\n */\r\nfunction Circle(point, ctx, options) {\r\n  this.options = options || {};\r\n  this.point = point || null;\r\n  this.radius = this.options.radius || null;\r\n  this.color = this.options.color || null;\r\n  this.opacity = 0;\r\n  this.ctx = ctx;\r\n}\r\n\r\n\r\n/**\r\n * Draws Circle to context\r\n */\r\nCircle.prototype.draw = function() {\r\n  if(this.opacity > 0) {\r\n    this.ctx.beginPath();\r\n    this.ctx.arc(this.point.position.x, this.point.position.y, this.options.radius, 0, 2 * Math.PI, false);\r\n    this.ctx.fillStyle = 'rgba(' + this.options.circleColor + ', ' + this.opacity + ')';\r\n    this.ctx.fill();\r\n  }\r\n};\r\n\r\n// Get the balls rolling\r\nnew Animate(document.getElementById('canvas'));\r\n\r\n\r\n/**\r\n * Utility Function to set default options\r\n * @param    object    {object}\r\n * @param    src  {object}\r\n */\r\nfunction defaults(object, src) {\r\n  for(var i in src) {\r\n    if(typeof object[i] === 'undefined') {\r\n      object[i] = src[i];\r\n    }\r\n  }\r\n  return object;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/back.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ 0:
/*!*************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/back.js ./src/assets/js/file2.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\projects\\completed\\schoolP\\gulp4-project\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! C:\\projects\\completed\\schoolP\\gulp4-project\\src\\assets\\js\\back.js */\"./src/assets/js/back.js\");\nmodule.exports = __webpack_require__(/*! C:\\projects\\completed\\schoolP\\gulp4-project\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/back.js_./src/assets/js/file2.js?");

/***/ })

/******/ });