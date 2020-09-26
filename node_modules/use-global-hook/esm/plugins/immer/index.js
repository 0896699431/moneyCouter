import { wrapActions as wrapActions$1 } from './wrapActions.js';

const immerPlugin = (Immer, store) => {
  const _setState = store.setState;

  store.setState = input => {
    if (input instanceof Function) {
      store.state = Immer(store.state, input);
      store.runListeners();
    } else {
      _setState(input);
    }
  };

  wrapActions$1(store, store.actions);
};

export { immerPlugin };
