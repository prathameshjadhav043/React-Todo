import React, { useState, useEffect } from 'react'
import { Form } from './Components/Form'
import { Todos } from './Components/Todos'
import './App.css'

export const Home = () => {

    let initTodo;
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    }
    else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }

    let newTodo;
    if (localStorage.getItem("newtodos") === null) {
        newTodo = [];
    }
    else {
        newTodo = JSON.parse(localStorage.getItem("newtodos"));
    }

    const onDel = (todo) => {
        setTodo(todos.filter((e) => {
            return e != todo;
        }));
        localStorage.setItem("todos", JSON.stringify(todos));

    }

    const onDel2 = (newtodo) => {
        setNewTodo(newtodos.filter((e) => {
            return e != newtodo;
        }));
        localStorage.setItem("newtodos", JSON.stringify(newtodos));
    }

    const addnewTodo = (todo) => {
        const mynewList = {
            sno: todo.sno,
            title: todo.title,
            desc: todo.desc
        }
        setNewTodo([...newtodos, mynewList]);
        onDel(todo);
    }



    const addTodo = (title, desc) => {
        let sno;
        if (todos.length === 0) {
            sno = 0;
        }
        else {
            sno = todos[todos.length - 1].sno + 1;
        }
        const myList = {
            sno: sno,
            title: title,
            desc: desc
        }
        setTodo([...todos, myList]);
    }

    const [todos, setTodo] = useState(initTodo);

    const [newtodos, setNewTodo] = useState(newTodo);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    useEffect(() => {
        localStorage.setItem('newtodos', JSON.stringify(newtodos));
    }, [newtodos])


    return (
        <div className="container">
            <Form addTodo={addTodo} />
            <Todos todos={todos} newtodos={newtodos} onDel2={onDel2} onDel={onDel} addnewTodo={addnewTodo} />
        </div>
    )
}
