import { legacy_createStore as createStore } from 'redux';

const initialState = {
  botaoClicado: false,
};

const reducer = (action, state = initialState) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      return newState;
    }

    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export default store;
