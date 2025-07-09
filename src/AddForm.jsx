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
        <h1>Todo</h1>
        <fieldset>
            <input type="text" className="rounded-md m-2 p-2 " value={newTask} onChange={handleChange} placeholder="Enter votre tâche"/>
            <button type="submit" disabled={newTask.trim() === ""} className="m-2">Entrer</button>
        </fieldset>
        <fieldset>
            <button type="button" onClick={deleteAll} className="m-2">Supprimer toutes les taches</button>
        </fieldset>
    </form>
);
}
