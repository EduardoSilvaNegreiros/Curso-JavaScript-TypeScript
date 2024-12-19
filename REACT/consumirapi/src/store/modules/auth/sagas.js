// takeLatest serve para pegar o ultimo clique do usuário
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

function* exampleRequest() {}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
