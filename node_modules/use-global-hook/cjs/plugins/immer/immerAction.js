'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var immerAction = function immerAction(store, originalFunction) {
  return function () {
    var result = originalFunction.apply(void 0, arguments);
    if (typeof result === "function") store.setState(result);
  };
};

exports.immerAction = immerAction;
