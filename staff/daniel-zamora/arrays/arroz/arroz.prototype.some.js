"use strict";

Object.defineProperty(Arroz.prototype, "some", {
  value: function (expression) {
    if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');

    for (var i = 0; i < this.length; i++) {
     if(expression(this[i],i,this)) 
     return true;
    }
    return false;
    
  },
  enumerable: false,
  writable: true,
});
