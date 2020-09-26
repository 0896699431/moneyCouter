'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var immerAction = require('./immerAction.js');

function wrapActions(store, actions) {
  var wrappedActions = {};
  Object.keys(actions).forEach(function (key) {
    if (typeof actions[key] === "function") {
      var originalFunction = actions[key];
      actions[key] = immerAction.immerAction(store, originalFunction);
    }

    if (_rollupPluginBabelHelpers.typeof(actions[key]) === "object") {
      wrappedActions[key] = wrapActions(store, actions[key]);
    }
  });
  return wrappedActions;
}

exports.wrapActions = wrapActions;
