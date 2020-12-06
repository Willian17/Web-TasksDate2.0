import React from 'react'
import { useHistory } from 'react-router-dom';
import CheckIcon from '../../assets/icons/success-check-icon.svg'

import {
    SuccessPage,
    SuccessBackground,
    Title,
    Message,
    Button
  } from './styles'

const SignUpSuccess: React.FC = () => {
  const router = useHistory()
  return (
    <SuccessPage>
      <SuccessBackground>
        <img src={CheckIcon} alt="Ícone de check" />
        <Title>Cadastro concluído</Title>
        <Message>
          Agora você faz parte da plataforma da TasksDate. <br/> 
          Tenha uma ótima experiência.
        </Message>
        <Button onClick={()=> router.push('/') }>Fazer login</Button>
      </SuccessBackground>
    </SuccessPage>
  );
}

export default SignUpSuccess