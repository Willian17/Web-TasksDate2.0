import React, { useState } from 'react';
import api from '../../services/api';

import { TaskItemContainer } from './styles'
import SelectUp from '../../assets/icons/selectUp.svg'
import SelectDown from '../../assets/icons/selectDown.svg'
import Date from '../../assets/icons/date.svg'
import Time from '../../assets/icons/time.svg'

export interface TaskItemProps {
    id?: string
    title: string
    subject: string
    date: string
    time: string
    deliverydate?:string
    done: boolean
}
const TaskItem: React.FC<TaskItemProps> = ( {id, title, subject, time, date, done} ) => {
    const [checked, setChecked] = useState(done)
    const [expand, setExpand] = useState(false)

    function handleDoneTask(value: boolean){
        api.patch(`/tasks/${id}`)
        .then(() => setChecked(value))
        .catch(error => console.error(error))
    }
    return (
       <TaskItemContainer className={expand ? 'expand' : ''}>
           <div className="checkbox">
            <input type="checkbox" checked={checked} onChange={(e)=> handleDoneTask(!checked)} name="task"/>
            <h1 className={checked ? 'checked' : ''}>{title} de {subject}</h1>
            <img 
                src={expand ? SelectUp : SelectDown} 
                alt="icon"
                onClick={()=> setExpand(!expand)}
            />
           </div>
            {expand && 
                <div className="delivery-date">
                    <p className="date">
                        <img src={Date} alt="date icon"/>
                        <span>{date}</span> 
                    </p>
                    <p className="time">
                        <img src={Time} alt="time icon"/>
                        <span>{time}</span> 
                    </p>
                </div>
            }
       </TaskItemContainer>
    )
}

export default TaskItem

