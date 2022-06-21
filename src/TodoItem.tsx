import { useState } from "react"

import store from "./store"

//import './TodoItem.css' 

const TodoItem = (props: any) => {

    const { id, name, done } = props.todo

    const [checked, setChecked] = useState(false) 

    const updateChecked = ()=>{
        setChecked(!checked)
        store.checkTodo(id, checked);
    }

    return (
        <div className="todo-item">
            <p className={`${checked?'line-through':''}`}>{ name } </p>
            <input type="checkbox" onChange={updateChecked}/>
            <button onClick={()=>store.deleteTodo(id)}>Del</button>
        </div>
    )

}


export default TodoItem