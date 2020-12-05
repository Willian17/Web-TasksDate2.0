import React,{useState} from 'react'


import InputForm from '../../components/InputForm';
import Aside from '../../components/Aside';

import {PageLogin} from './styles'
import {ToastContainer } from 'react-toastify';

import PurpleIcon from '../../assets/icons/purple-heart.svg'
import { Link } from 'react-router-dom';

const SignIn: React.FC = ()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleAuthenticate(){
            // dispatch(actions.authenticate({email, password}, 'login'))
    }

    return(
        <PageLogin>
            <Aside />
            <div className="login-form">
            <div className="title-container">
                <h2>Fazer login</h2>
            </div>
            <ToastContainer />
    
            <div className="inputs">
                <InputForm
                label="E-mail"
                name="email"
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                />
                <InputForm
                label="Senha"
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                />
            <div className="buttons-container">
    
                <div className="second-line">
                <button onClick={handleAuthenticate} className="button"
                    type="button"
                >
                    Entrar
                </button>
                </div>
            </div>
            </div>
  
            <div className="footer">
                <div className="signup-container">
                    <span>Não tem conta?</span>
                        <Link to="/cadastro/aluno" className="sign-link">
                            Cadastre-se
                        </Link>
                </div>
                <span>
                    É de graça <img alt="Coração roxo" src={PurpleIcon} />
                </span>
          </div>
        </div>
      </PageLogin>
    )
}


export default SignIn