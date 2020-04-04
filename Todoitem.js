import React from "react"

function Todoitem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.goat.completed}/>
        <p>{props.goat.text}</p>
        </div>
    )
}

export default Todoitem