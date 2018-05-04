import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar'
import Portfolio from './pages/Portfolio'
import projects from "./projects.json"
import AboutMe from "./pages/AboutMe"
import Contact  from "./pages/Contact"

class App extends Component {
  state = {
    projects
  }
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Router>
          <Switch>
          <Route exact path='/' component={AboutMe}/>
          <Route path='/portfolio' component={Portfolio} projects={this.projects} />
          <Route path='/contact' component={Contact} />
          </Switch>
        </Router>
      </Wrapper>
    );
  }
}

export default App;
