export default function TaskList({todo}) {
    return(
        <ul>
            {todo.map((element, index) => <li key={index}>{`Task ${index}: ${element}`}</li>)}
        </ul>
    );
}