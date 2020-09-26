'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');

function setState(store, newState, afterUpdateCallback) {
  store.state = _rollupPluginBabelHelpers.extends({}, store.state, newState);
  store.runListeners();
  afterUpdateCallback && afterUpdateCallback();
}

exports.setState = setState;
