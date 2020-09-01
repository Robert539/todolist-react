import React, {useState} from 'react';

import TaskItem from './TaskItem';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function handleAddProject() {
        setTasks([...tasks, task]);
        setTask("");
    }

//   setTasks([...tasks, `Novo Projeto ${Date.now()}`]);


  return (
    <>
      <ul>
        {tasks.map((task) => (
            <TaskItem key={task} taskTitle={task} />
        ))}
      </ul>

      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button type="button" onClick={handleAddProject}>
        Adicionar Tarefa
      </button>
    </>
  );
}
