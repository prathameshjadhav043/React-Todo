import React, { useState } from 'react'

export const Form = (props) => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert('Fill is Empty');
        }
        else{
            props.addTodo(title, desc);
            setTitle('');
            setDesc('');
        }
    }
    return (
        <div className="main">
            <label className="label-title"></label>
            <form onSubmit={submit}>
                <label className="form-label">Title</label><br />
                <input type="text" placeholder="Enter title" aria-autocomplete="inline" value={title} onChange={(e) => { setTitle(e.target.value) }} /><br />
                <label className="form-label">Description</label><br />
                <input type="text" placeholder="Enter Description" aria-autocomplete="both" value={desc} onChange={(e) => { setDesc(e.target.value) }} /><br />
                <button className="btn form-btn">Add Todo</button>
            </form>
        </div>
    )
}
