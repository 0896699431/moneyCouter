'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runListeners = function runListeners(store) {
  store.listeners.forEach(function (listener) {
    listener.run(store.state);
  });
};

exports.runListeners = runListeners;
