import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import Header from '../../components/Header';
import Input from '../../components/Input';
import api from '../../services/api';

import WarningIcon from '../../assets/icons/warning.svg';

import { TaskFormPage, Main, FieldSet, Legend, Footer, FieldSetData } from './styles';

const CreateTask: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(Date);
  const [time, setTime] = useState('');


  function handleOnSubmit(event: React.FormEvent){
    event.preventDefault()

    const dateWitchTime =  date.concat(' ' + time);

    api.post('tasks', {
      subject,
      title,
      deliverydate: dateWitchTime 
    }).then(response => {
      setSubject('')
      setTitle('')
      setDate(Date)
      setTime('')
      toast.success('Tarefa criada com sucesso')
    }).catch(error => {
      console.error(error)
    })
}
    return (
        <TaskFormPage>
            <Header 
             title="Que incrível que você quer criar uma tarefa." 
             description="O primeiro passo, é preencher esse formulário de criação de tarefa"
            />
            <Main>
              <ToastContainer />
              <form onSubmit={e => handleOnSubmit(e)}>
                <FieldSet>
                  <Legend>Sobre a tarefa</Legend>

                  <Input 
                    name="materia" 
                    label="matéria"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    placeholder="ex: Português"
                    required
                  />

                  

                  <Input 
                    name="titulo" 
                    label="Título"
                    placeholder="ex: Prova do livro"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                  />


                </FieldSet>

                <FieldSetData>
                  <Legend>Data de entrega</Legend>
                  
                  <Input
                    name="horario"
                    label="Horário"
                    type="time"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    required
                  />
                  
                  <Input
                    name="data"
                    label="Data"
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    required
                  />


                </FieldSetData>

                <Footer>
                  <p>
                    <img src={WarningIcon} alt="Aviso Importante"/>
                     Importante! <br/>
                     Preencha todos os dados 
                  </p>
                  <button type="submit" >
                    Salvar cadastro
                  </button>

                  
                </Footer>
              </form>
        </Main>
        </TaskFormPage>
    )
}

export default CreateTask;