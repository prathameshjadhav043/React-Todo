import React from 'react'
import { Todos } from './Todos'


export const Nav = ({ setChange }) => {

    return (
        <>
            <nav className="nav">
                <ul>
                    <li onClick={() => { setChange(true) }}>Todos</li>
                    <li onClick={() => { setChange(false) }} >Complete</li>
                </ul>
            </nav>
        </>
    )
}
