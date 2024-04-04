import React, { useState } from 'react'
import './task.css'

const Task = ({ task, deletedTask, updateTask }) => {
  const [completed, setCompleted] = useState(false)
  const [editable, setEditable] = useState(false)
  const [editedTask, setEditedTask] = useState(task.task)

  const handleEdit = () => {
    setEditable(true)
  }

  const handleSave = () => {
    if (editedTask.trim() === '') {
      alert('Debes escribir algo')
      return
    }
    updateTask(task.id, editedTask)
    setEditable(false)
  }

  return (
    <div className={completed ? 'containerTask containerTaskCompleted' : 'containerTask'}>
      {editable ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          onBlur={handleSave}
          autoFocus
        />
      ) : (
        <h2 className={completed ? 'completed' : 'npCompleted'}>{task.task}</h2>
      )}
      <button id='complete' onClick={() => setCompleted(!completed)}>
        {completed ? 'No completada' : 'Completada'}
      </button>
      <button onClick={handleEdit} id='edit'>Editar</button>
      <button onClick={() => deletedTask(task.id)} id='delete'>Eliminar</button>
    </div>
  )
}

export default Task
