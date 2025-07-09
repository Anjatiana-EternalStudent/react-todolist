import { useState } from "react";

export default function AddForm({add, deleteAll}) {
    const [newTask, setNewTask] = useState("");
    function handleChange(e) {
        setNewTask(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        add(newTask);
        setNewTask("");
    }
    

    return (
    <form onSubmit={handleSubmit}>
        <fieldset>
            <h1>Todo</h1>
            <input type="text" className="bg-red-100" value={newTask} onChange={handleChange}/>
            <button type="submit" disabled={()=>value===""?false:true}>Entrer</button>
        </fieldset>
        <fieldset>
            <button type="button" onClick={deleteAll}>Supprimer toutes les taches</button>
        </fieldset>
    </form>
);
}
