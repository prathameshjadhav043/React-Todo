import React from 'react'

export const CompTodo = ({ newtodo, onDel2 }) => {
    return (
        <div>
            <>
                <div className="todo flex">
                    <div className="title">{newtodo.title}</div>
                    <div className="desc">{newtodo.desc}</div>
                    <button className="btn-del" onClick={() => { onDel2(newtodo) }}>Remove</button>
                </div>
                <hr />
            </>
        </div>
    )
}
