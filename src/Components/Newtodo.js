import React from 'react'


export const Newtodo = ({ todo, onDel, addnewTodo }) => {

    return (
        <>
            <div className="todo flex">
                <p className="title">{todo.title}</p>
                <p className="desc">{todo.desc}</p>
                <button className="btn-del" onClick={() => { onDel(todo) }}>Delete</button>
                <button className="btn-edith" onClick={() => { addnewTodo(todo) }}>Complete</button>
            </div>
            <hr />
        </>
    )
}
