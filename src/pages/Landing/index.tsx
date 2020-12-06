import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import SignOutIcon from '../../assets/icons/sign-out.svg'
import TaskListIcon from '../../assets/icons/list-task.svg'
import TaskFormIcon from '../../assets/icons/task-form.png'
import LandingImg from '../../assets/landing.svg'
import LogoImg from '../../assets/logo.svg'

import  { PageLanding } from './styles';

const Landing: React.FC = () => {
  const {signOut, user} = useAuth()
  const router = useHistory()

  async function HandleSignOut(){
      await signOut()
      router.push('/')
  }

  return (
    <PageLanding id="page-landing">
      <header>
        <div className="user-container">
          <div className="user-avatar">

            <img 
              src={
                user.avatar || 
                'https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png'
              } 
                alt="Logo-Usuário" 
            />
            <h2>{`${user.name} ${user.surname}`}</h2>
          </div>
        </div>
        <div className="logout-container">
          <button className="logout-button" onClick={HandleSignOut}>
            <div className="logout">
              <img src={SignOutIcon} alt="Icon back" />
            </div>
          </button>
        </div>
      </header>
      <main id="page-landing-content" className="content-container">
        <div className="logo-container">
          <img src={LogoImg} alt="Proffy" />
          <h2>Sua plataforma de organização de estudos online.</h2>
        </div>

        <img
          src={LandingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />
      </main>
      <footer>
        <div className="footer-wrapper">
          <div className="welcome-container">
            <div className="title">
              <h1>Seja bem-vindo.</h1>
              <h3>O que deseja fazer?</h3>
            </div>
          </div>

          <div className="buttons-container">
            <Link to="/task-list" className="study">
                <img src={TaskListIcon} alt="Listar tasks" />
                Ver tasks
            </Link>

            <Link to="/task-form" className="give-classes" >
                <img src={TaskFormIcon} alt="Dar aulas" />
                Criar tasks
            </Link>
          </div>
        </div>
      </footer>
    </PageLanding>
  );
};

export default Landing;