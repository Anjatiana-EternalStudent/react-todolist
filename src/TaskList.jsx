export default function TaskList({todo, toggleDone}) {
    return(
        <ul>
            {todo.map((element, index) => 
                <li key={index}>
                    <input type="checkbox" checked={element.done} onChange={()=>toggleDone(index)}/>{`Task ${index}: ${element.label}`}
                </li>)}
        </ul>
    );
}