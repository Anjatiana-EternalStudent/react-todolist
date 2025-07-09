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
    setToDo([...toDo,newTask]);
  }

  function deleteAllTask() {
    localStorage.setItem("toDo", JSON.stringify([]));
    setToDo([]);
  }
  return (
    <>
      <AddForm add={addNewTask} deleteAll={deleteAllTask}/>
      <TaskList todo={toDo}/>
    </>
  )
}

export default App
