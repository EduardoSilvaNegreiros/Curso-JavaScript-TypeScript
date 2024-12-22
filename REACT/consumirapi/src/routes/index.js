// Importação de Dependências
import React from 'react';
import { Switch } from 'react-router-dom';
import MyRoute from './MyRoute';

// Importação das Páginas
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

// Definição do Componente de Rotas
export default function Routes() {
  return (
    <Switch>
      {/* 4️⃣ Definição das Rotas */}
      <MyRoute exact path="/" component={Alunos} isClosed={false} />
      <MyRoute exact path="/aluno/:id/edit" component={Aluno} isClosed />
      <MyRoute exact path="/aluno" component={Aluno} isClosed />
      <MyRoute exact path="/fotos/:id" component={Fotos} isClosed />
      <MyRoute exact path="/login" component={Login} isClosed={false} />
      <MyRoute exact path="/register" component={Register} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
