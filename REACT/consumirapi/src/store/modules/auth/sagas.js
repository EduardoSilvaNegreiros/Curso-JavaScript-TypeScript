// takeLatest serve para pegar o ultimo clique do usuário
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
  try {
    
  } catch (error) {
    toast.error('Usuário ou senha inválidos');
  }
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
