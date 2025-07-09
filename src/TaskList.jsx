export default function TaskList({todo, toggleDone, deleteOne}) {
    return(
        <ul>
            {todo.map((element, index) => 
                <li key={element.id}>
                    <input type="checkbox" checked={element.done} onChange={()=>toggleDone(index)}/>{`Task ${index}: ${element.label} creation: ${element.creationDate}`}
                    <button type="button" onClick={()=>deleteOne(element.id)}>Delete</button>
                </li>)}
        </ul>
    );
}