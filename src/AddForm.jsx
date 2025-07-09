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
            <button type="submit" disabled={newTask.trim() === ""} className="bg-blue-600 m-2 text-white hover:bg-blue-700">Entrer</button>
        </fieldset>
        <fieldset>
            <button type="button" onClick={deleteAll} className="
                bg-red-600 
                text-white 
                m-2
                px-3 
                py-1 
                rounded 
                hover:bg-red-700">Supprimer toutes les taches</button>
        </fieldset>
    </form>
);
}
