import React, { Component } from 'react'
import weather from "../images/WeatherApp.png"
import veronikas from "../images/veronikas.png"
import withall from "../images/withall.png"
import todo from "../images/todo.png"

class Projects extends Component {
    

    render() {
        return (
            <section class="projects">
                <h2 class="projectsTitle">Here are some projects I've built.</h2>
                <hr/>
                <ul class="grid">
                    <li>
                       <a href="https://veronikas.herokuapp.com/#/home" target="_blank"><img src={veronikas}></img>Veronikas</a> 
                    </li>
                    <li>
                       <a href="https://paulsweatherapp.herokuapp.com" target="_blank"><img src={weather}></img>What's the Weather?</a> 
                    </li>
                    <li>
                       <a target="_blank" href="https://what-to-say-group.herokuapp.com/#/home"><img src={withall}></img>What to Say Now</a> 
                    </li>
                    <li>
                       <a target="_blank" href="https://pauls-weekend-to-do-list.herokuapp.com/"><img src={todo}></img>Weekend Todo List</a> 
                    </li>
                    
                    
        
                   
                </ul>
            </section>
        )
    }
}

export default Projects