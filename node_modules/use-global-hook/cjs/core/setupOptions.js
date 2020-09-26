'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../plugins/immer/index.js');

var setupOptions = function setupOptions(store) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  //Backward compatibility with 0.1.2
  if (options instanceof Function) {
    options(store);
    return;
  }

  var Immer = options.Immer,
      initializer = options.initializer;
  Immer && index.immerPlugin(Immer, store);
  initializer && initializer(store);
};

exports.setupOptions = setupOptions;
