'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');

function associateActions(store, actions) {
  var associatedActions = {};
  Object.keys(actions).forEach(function (key) {
    if (typeof actions[key] === "function") {
      associatedActions[key] = actions[key].bind(null, store);
    }

    if (_rollupPluginBabelHelpers.typeof(actions[key]) === "object") {
      associatedActions[key] = associateActions(store, actions[key]);
    }
  });
  return associatedActions;
}

exports.associateActions = associateActions;
