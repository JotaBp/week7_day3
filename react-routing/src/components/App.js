import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import { projects as Projects } from './pages/projects/Projects'
import ProjectDetails from './pages/projects/ProjectDetails'
import Profile from './pages/profile/Profile'

import Navigation from './ui/navbar/Navbar'

import { Switch, Route, Redirect } from 'react-router-dom'

function App() {

  // const loggedInUser = undefined
  const loggedInUser = {
    name: 'Germán',
    avatar: 'whatever.png'
  }

  return (
    <>
      <Navigation />

      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/projects" exact render={() => <Projects />} />
        <Route path="/projects/:id" render={props => <ProjectDetails {...props} />} />
        <Route path="/profile" render={() => loggedInUser ? <Profile {...loggedInUser} /> : <Redirect to="/" />} />
      </Switch>
    </>
  );
}

export default App;
