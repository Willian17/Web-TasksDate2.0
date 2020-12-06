import React from 'react'
import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SignUpSuccess from '../pages/SignUpSuccess';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/cadastro/aluno" exact component={SignUp} />
        <Route path="/cadastro/aluno/sucesso" exact component={SignUpSuccess} />
    </Switch>
)

export default Routes