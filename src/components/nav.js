import React, { Component } from 'react'

class Nav extends Component {

    render() {
        return (
            <header>
            <h2 style={{opacity:"1", color:"#333"}}>Paul's Portfolio</h2>
            <nav>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </nav>
          </header>
        )
    }
}

export default Nav;