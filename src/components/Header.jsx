import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

export const Header = () => {

  const headerStyle = {
    margin: '0 50px', 
    fontWeight: 'bold', 
    fontSize: '20px', 
    textDecoration: 'none',
    color: '#fff'
  }

  return (
    <div className="navbar">
      <ul>
        <Link style={ headerStyle } to="/">Home</Link>
        <Link style={ headerStyle } to="/about">About</Link>
        <Link style={ headerStyle } to="/create">Create</Link>
    </ul>
    </div >
  )
}
