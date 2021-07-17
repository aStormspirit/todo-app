import React, {useState} from 'react'

function Form(props) {
        const [input,setInput] = useState('')
        

        const statusHandler = (e) => {
          props.onChange(e)
        }

        const handleChange = (e) => {
            setInput(e.target.value)
        }

        const handleSubmit = (e) => {
            e.preventDefault()

            props.onSubmit({
                completed: false,
                id: Math.floor(Math.random()*10000),
                text: input
            });
            

            setInput('');
        }


        return (
        <form>
            <input 
            type="text"
            placeholder='add a Todo'
            className="todo-input"
            value={input}
            name='text'
            onChange={handleChange} />
            <button className="todo-button" type="submit" onClick={handleSubmit}>
            <i className="fas fa-plus-square"></i>
            </button>
        <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        </form>
    )
}

export default Form