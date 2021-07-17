import React, {useState, useEffect} from 'react'
import Form from './Form'
import Todo from './Todo'


function List(props) {
  const [todos, setTodos] = useState([])
  const [status,setStatus]= useState('all')
  const [FilterTodo,setFilterTodo] = useState([])

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const ChangeStatus = (e) => {
    setStatus(e.target.value)
  }

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilterTodo(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilterTodo(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilterTodo(todos)
        break;
    }
  }

  const addTodo = todo => {
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(todo) }

  const deleteTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    console.log(id)
    setTodos(removeArr);
  }

  const complete = id => {
    let Comp = todos.map(todo => { 
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo;
    })   
    setTodos(Comp)
  };

    return (
      <div>
        <div className="todo-container">
          <Form onSubmit={addTodo} onChange={ChangeStatus}/>
      </div>
      <div className='todo-container'>
        <div className='todo-list'>
        {FilterTodo.map((todo) => 
        
        <Todo todos = {todos} deleteTodo={deleteTodo} complete={complete} />
        )}
        </div>
      </div>
      </div>
    )
}

export default List
