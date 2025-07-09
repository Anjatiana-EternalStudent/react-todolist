export default function TaskList({todo, toggleDone, deleteOne}) {
    const sortedTodo = [...todo].sort((a, b) => a.done - b.done);
    return(
        <ul 
            className="
                border-2 
                border-solid 
                border-indigo-500 
                rounded-md 
                p-2 
                max-w-md 
                mx-auto">
            {sortedTodo.map((element, index) => 
                <li key={element.id} className="flex items-center m-2">
                    <label 
                        className="
                            flex 
                            items-center 
                            space-x-2 
                            flex-grow 
                            min-w-0 
                            cursor-pointer">
                        <input 
                            type="checkbox" 
                            checked={element.done} 
                            onChange={()=>toggleDone(element.id)}
                            
                        />
                        <span className={element.done ?"line-through truncate" : "truncate"}>
                            {element.label}
                        </span>
                         <small className="text-xs italic text-gray-600">{element.creationDate}</small>

                    </label>
                    <button 
                        type="button" 
                        onClick={()=>deleteOne(element.id)}  
                        className="
                        bg-red-600 
                        text-white 
                        m-2
                        px-3 
                        py-1 
                        rounded 
                        hover:bg-red-700">Delete
                    </button>
                </li>
            )}
        </ul>
    );
}