import { immerPlugin } from '../plugins/immer/index.js';

const setupOptions = (store, options = {}) => {
  //Backward compatibility with 0.1.2
  if (options instanceof Function) {
    options(store);
    return;
  }

  const {
    Immer,
    initializer
  } = options;
  Immer && immerPlugin(Immer, store);
  initializer && initializer(store);
};

export { setupOptions };
