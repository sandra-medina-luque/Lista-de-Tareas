import React, {useState} from 'react'
import './task.css'

const Task = ({task, deletedTask}) =>{
    const [completed, setCompleted] = useState (false)





    return (
        <div className={completed? 'containerTask containerTaskCompleted':'containerTask'}>
            <h2 className={completed? 'completed': 'npCompleted'}>{task.task}</h2>
            <button id='complete' onClick={()=>setCompleted(!completed)}>{completed? 'No completada':'Completada'}</button>
            <button onClick={()=>deletedTask(task.id)} id='delete'>Eliminar</button>

        </div>
    )
}
export default Task