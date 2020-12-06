import React from 'react'
import { Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SignUpSuccess from '../pages/SignUpSuccess';
import Route from './Route';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/cadastro/aluno" exact component={SignUp} />
        <Route path="/cadastro/aluno/sucesso"  component={SignUpSuccess} />
        <Route path="/inicio" component={Landing} isPrivate />
    </Switch>
)

export default Routes