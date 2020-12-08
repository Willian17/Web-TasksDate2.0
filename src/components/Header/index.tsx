import React from 'react'
import { useHistory } from 'react-router-dom'

import {
    BackLink,
    Header,
    HeaderContent,
    HeaderText,
    Logo,
    TextDescription,
    TopBar

} from './styles'
import BackIcon from '../../assets/icons/back.svg'
import LogoImg from '../../assets/logo.svg'


interface PageHeaderProps {
    title: string
    description?: string
}

 const  PageHeader: React.FC<PageHeaderProps> = (props)=> { 
     const router = useHistory()
    return(
        <Header>
            <TopBar className="top-bar-container">
                    <BackLink onClick={()=> router.goBack()}>
                        <img src={BackIcon} alt="Voltar"/>
                    </BackLink>
                <Logo src={LogoImg} alt="Logo"/>
            </TopBar>

            <HeaderContent>
                <HeaderText>
                    {props.title}
                </HeaderText>
                    {props.description && 
                        <TextDescription>
                            {props.description}
                        </TextDescription>    
                    }
            </HeaderContent>
        </Header>
    )
}

export default PageHeader