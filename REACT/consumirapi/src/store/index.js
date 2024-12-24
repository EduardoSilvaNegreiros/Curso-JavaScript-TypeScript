// 1️⃣ Importação de Dependências
import { persistStore } from 'redux-persist';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// 2️⃣ Importação de Módulos
import persistedReducers from './modules/reduxPersist';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// 3️⃣ Criação do Middleware do Redux-Saga
const sagaMiddleware = createSagaMiddleware();

// 4️⃣ Criação da Store com Persistência
const store = createStore(
  persistedReducers(rootReducer),
  applyMiddleware(sagaMiddleware)
);

// 5️⃣ Execução do Redux-Saga
sagaMiddleware.run(rootSaga);

// 6️⃣ Configuração da Persistência do Redux
export const persistor = persistStore(store);
export default store;
