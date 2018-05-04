import React, { Component } from 'react'
import projects from "../../projects.json"
import Image from "../Image"
import "./Projects.css"


class Projects extends Component {
    state = {
        projects
    }

  render() {
    return (
      <div className="content-container" >
        <div className="imageList">
                {console.log(projects)}
                {projects.map((project)=> {
                    return  <Image 
                    name={project.name}
                    image={project.image}
                    key={project.id}
                    link={project.link}
                    id={project.id}
                    description= {project.description}
                    />
                })}
            </div>
      </div>
    )
  }
}
export default Projects

  