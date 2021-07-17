import React from 'react'
import Form from './Form'
// импорт иконок
import { CgCheckO, CgCloseO } from "react-icons/cg";

function Todo({todos , deleteTodo, complete, FilterTodo}) {
    /*const [edit,setEdit] = useState({
        id: null,
        value: ''
    })
    */


    return todos.map((todo, index) => (
        <div className='todo' key={todo.id}>
        <li className={todo.completed ? "completed" : 'todo-list'}>
                {todo.text}
        </li>
        
        <div>
            <CgCheckO onClick={() => complete(todo.id)}/>
            <CgCloseO onClick={() => deleteTodo(todo.id)} />
        </div>
        </div>
        
    ))
    
}

export default Todo
