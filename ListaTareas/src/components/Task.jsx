import React, { useState } from 'react'
import './task.css'

const Task = ({ task, deletedTask, updateTask }) => {
    const [completed, setCompleted] = useState(false);
    const [editable, setEditable] = useState(false);
    const [editedTask, setEditedTask] = useState(task.task);
  
    const handleEdit = () => {
      setEditable(true);
    };
  
    const handleSave = () => {
      if (editedTask.trim() === '') {
        alert('Debes escribir algo');
        return;
      }
      updateTask(task.id, editedTask);
      setEditable(false);
    };
  
   
  
    return (
      <div className={`task-card ${completed ? 'completed' : ''}`}>
        <div className="task-content">
          {editable ? (
            <input
              type="text"
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
              onBlur={handleSave}
              autoFocus
            />
          ) : (
            <h2>{task.task}</h2>
          )}
          <div className="task-buttons">
            <button onClick={() => setCompleted(!completed)}>
              {completed ? 'Completada' : 'No Completada'}
            </button>
            <button onClick={handleEdit}>Editar</button>
            <button onClick={() => deletedTask(task.id)}>Eliminar</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Task;
