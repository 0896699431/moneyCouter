'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var wrapActions = require('./wrapActions.js');

var immerPlugin = function immerPlugin(Immer, store) {
  var _setState = store.setState;

  store.setState = function (input) {
    if (input instanceof Function) {
      store.state = Immer(store.state, input);
      store.runListeners();
    } else {
      _setState(input);
    }
  };

  wrapActions.wrapActions(store, store.actions);
};

exports.immerPlugin = immerPlugin;
