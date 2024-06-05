import React from 'react';
import Header from './Components/Header/Header';
import TopContainer from './Components/TopContainer/TopContainer';
import SkillContainer from './Components/SkillContainer/SkillContainer';
import ProjectContainer from './Components/ProjectContainer/ProjectContainer';
import "./App.css";
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';

function App() {
  return (
    <div> 
    <Header/>
    <TopContainer/>
    <SkillContainer/>
    <ProjectContainer/>
    <Experience/>
    <Education/>
    <Contact/>
    </div>
  );
}

export default App;
