import React from 'react'
import { Link } from 'react-router-dom'
import home from './Home'
import create from './Create'
const Navbar = () => {

    return (
        <nav className='navbar'>
            <h1>Test Blog</h1>
            <div className='links'>
                <Link to="/">HOME</Link>
                <Link to="/create">Create New Post</Link>

            </div>


        </nav>

    )
}

export default Navbar;