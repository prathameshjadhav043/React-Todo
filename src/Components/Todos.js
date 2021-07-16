import React from 'react'
import { Newtodo } from './Newtodo'
import { CompTodo } from './CompTodo'
import { Nav } from './Nav'
import { useState } from 'react'


export const Todos = (props) => {

    const [Change, setChange] = useState(true);

    return (
        <>
            <Nav setChange={setChange} />
            <hr />
            {Change ? 
                <>
                    {props.todos.map((todo) => {
                        return(
                        <div className="todo-component">
                            <Newtodo todo={todo} key={todo.sno} onDel={props.onDel} addnewTodo={props.addnewTodo}/> 
                        </div>
                        )
                        })
                    }
                </> : <>

                    {props.newtodos.map((todo) => {
                        return(
                        <div className="todo-component">
                            <CompTodo newtodo={todo} key={todo.sno} onDel2={props.onDel2} />
                        </div>
                        )
                        })
                    }
                </>
            }
        </>
    )
}
