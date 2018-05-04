import React, { Component } from 'react'
import Form from "../../components/Form"
import "./Contact.css"
import github from "../../images/github.png"
import linkedin from "../../images/linkedin.png"

class Contact extends Component {
  render() {
    return (
      <div className="form-container">
        <h2  className="form-title" >Contact</h2>
        <ul className="icon-container">
            <a href="https://www.linkedin.com/in/josephmarlitt/"><img className="iconImage" src={linkedin} alt="linkedin"></img></a>
            <a href="https://github.com/joseph-marlitt"><img className="iconImage" src={github} alt="github"></img></a>
        </ul>
        <Form />
      </div>
    )
  }
}

export default Contact;