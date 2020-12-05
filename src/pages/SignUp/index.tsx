import React from 'react';
import backIcon from '../../assets/icons/back.svg'

import { ToastContainer, toast } from 'react-toastify';


import useForm from '../../hooks/useForm'

import {
    SignupPage,
    TopBarContainer,
    BackLink,
    Main,
    Title,
    Subtitle, 
    Button,
    TextButtons,
    InputContainer
} from './styles'

import InputForm from '../../components/InputForm';
import Select from '../../components/Select';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

const Signup: React.FC = ()=> {
    const router = useHistory()
    const initialValues = {
        name: '',
        registration: '',
        surname: '',
        course: 'Informática',
        email: '',
        year: 1,
        password: '',
        avatar: ''
    }
    const {values,handleChangeValues,clearForm} = useForm(initialValues)

    function handleCreateStudent(event: any){
        event.preventDefault();

        api.post('/students/signup', values)
        .then(()=> {
            router.push('/signup-sucess')
        })
        .catch(err => {
            if(err.response){
                toast.error(err.response.data)
            } else {
                toast.error('Ocorreu um erro inesperado, tente novamente mais tarde!')
            }
            
        })
    }
    return(
<SignupPage>
    <TopBarContainer className="header">
            <BackLink onClick={()=> router.goBack()}>
                <img src={backIcon} alt=""/>
            </BackLink>
    </TopBarContainer>
    <Main>
        <ToastContainer />
        <Title>Cadastro</Title>
        <Subtitle>Preencha os dados abaixo <br/> para começar.</Subtitle>

            <form onSubmit={ event => handleCreateStudent(event)}>
                <InputContainer>
                    <InputForm 
                            label="Nome"
                            type="text"
                            name="name"
                            onChange={handleChangeValues}
                            value={values.name}
                            required
                        />
                        <InputForm 
                            label="Número de matrícula"
                            type="number"
                            name="registration"
                            onChange={handleChangeValues}
                            value={values.registration}
                            required
                        />
                        <InputForm 
                            label="Sobrenome"
                            type="text"
                            name="surname"
                            onChange={handleChangeValues}
                            value={values.surname}
                            required
                        />
                    
                        <Select 
                            name="course"
                            padrao="Selecione seu curso"
                            onChange={handleChangeValues}
                            value={values.course}
                            options={
                                [
                                    {label: "Informática", value: "Informática"},
                                    {label: "Secretariado", value: "Secretariado"},
                                    {label: "Química", value: "Química"},
                                    {label: "Alimentos", value: "Alimentos"}
                                ]
                            }
                        />
                    
                        <InputForm 
                            label="E-mail"
                            type="text"
                            name="email"
                            onChange={handleChangeValues}
                            value={values.email}
                            required
                        />

                            <Select 
                            name="year"
                            padrao="Selecione o ano"
                            onChange={handleChangeValues}
                            value={values.year}
                            options={
                                [
                                    {label: "1° ano", value: 1},
                                    {label: "2° ano", value: 2},
                                    {label: "3° ano", value: 3}
                                ]
                            }
                        />

                        <InputForm 
                            label="Senha"
                            type="password"
                            name="password"
                            onChange={handleChangeValues}
                            value={values.password}
                            required
                        />
                        <InputForm 
                            label="Foto de perfil (endereço da imagem)"
                            type="text"
                            name="avatar"
                            onChange={handleChangeValues}
                            value={values.avatar}
                            
                        />
                        
                </InputContainer>
                
                    <Button type="submit">
                        <TextButtons>
                            Concluir cadastro
                        </TextButtons>
                    </Button>
            </form>
    </Main>
</SignupPage>
    )
}

export default Signup