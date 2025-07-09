import { useState, useEffect } from "react";

import './App.css';
import TaskList from './TaskList';
import AddForm from './AddForm';


function App() {
  const [toDo, setToDo] = useState(()=>{
  const saved = localStorage.getItem("toDo");
    return saved?JSON.parse(saved):[];
  });
  useEffect(
    ()=>{
      localStorage.setItem("toDo", JSON.stringify(toDo));
    }
    ,[toDo]  
  );
  
  function addNewTask(newTask) {
    const taskObject = {label: newTask, done: false};
    setToDo([...toDo,taskObject]);
  }

  function deleteAllTask() {
    localStorage.setItem("toDo", JSON.stringify([]));
    setToDo([]);
  }

  function toggleTaskDone(index) {
    const updateTask = [...toDo];
    updateTask[index].done=!updateTask[index].done;
    setToDo(updateTask);
  }
  return (
    <>
      <AddForm add={addNewTask} deleteAll={deleteAllTask}/>
      <TaskList todo={toDo} toggleDone={toggleTaskDone}/>
    </>
  )
}

export default App
