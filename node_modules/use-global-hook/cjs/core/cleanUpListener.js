'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var cleanUpListener = function cleanUpListener(store, newListener) {
  return function () {
    store.listeners = store.listeners.filter(function (listener) {
      return listener !== newListener;
    });
  };
};

exports.cleanUpListener = cleanUpListener;
