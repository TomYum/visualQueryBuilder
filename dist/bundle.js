(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App(a, b) {
        _classCallCheck(this, App);

        this.firstName = a;
        this.lastName = b;
    }

    _createClass(App, [{
        key: 'fullName',
        get: function get() {
            return this.firstName + ' ' + this.lastName;
        }
    }]);

    return App;
}();

var app = new App('Вася', "Пупкин");
alert(app.fullName);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzeFxcYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7SUFDTSxHO0FBQ0YsaUJBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0I7QUFBQTs7QUFDWixhQUFLLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxhQUFLLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDSDs7Ozs0QkFDYTtBQUNWLG1CQUFVLEtBQUssU0FBZixTQUE0QixLQUFLLFFBQWpDO0FBQ0g7Ozs7OztBQUdMLElBQUksTUFBTSxJQUFJLEdBQUosQ0FBUSxNQUFSLEVBQWUsUUFBZixDQUFWO0FBQ0EsTUFBTSxJQUFJLFFBQVYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuY2xhc3MgQXBwe1xuICAgIGNvbnN0cnVjdG9yKGEsYil7XG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gYTtcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGI7XG4gICAgfVxuICAgIGdldCBmdWxsTmFtZSgpe1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5maXJzdE5hbWV9ICR7dGhpcy5sYXN0TmFtZX1gO1xuICAgIH1cbn1cblxubGV0IGFwcCA9IG5ldyBBcHAoJ9CS0LDRgdGPJyxcItCf0YPQv9C60LjQvVwiKTtcbmFsZXJ0KGFwcC5mdWxsTmFtZSk7Il19
