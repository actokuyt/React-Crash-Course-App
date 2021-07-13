import React from 'react'
import { Link } from 'react-router-dom'

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}



export default function header() {
    return (
        <div>
            <header style = { headerStyle } >
                <h1>Todo List</h1>
                <Link style = {linkStyle} to = '/'> Home </Link> | 
                <Link style = {linkStyle} to = '/About'> About </Link>
            </header>
        </div>
    )
}


const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
}