import React from 'react';
import LogoImage from '../../assets/logo.svg'

import {
    PageAside,
    BackgroundImage,
    Logo,
    Message
} from './styles';


const Aside: React.FC = () => {
  return (
    <PageAside>
      <BackgroundImage>
        <Logo src={LogoImage} alt="proffy-logo" />
        <Message>Sua plataforma de organização de estudos online</Message>
      </BackgroundImage>
    </PageAside>
  );
};

export default Aside;