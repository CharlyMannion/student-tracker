import React from 'react';
import './App.css';
import { Router } from '@reach/router'
import Header from './components/Header'
import Footer from './components/Footer'
import AllStudents from './pages/AllStudents'
import Blocks from './pages/Blocks'
import CurrentStudents from './pages/CurrentStudents'
import Graduates from './pages/Graduates'
import Home from './pages/Home'
import IndividualStudent from './pages/IndividualStudent'
import Fundamentals from './pages/Fundamentals'
import BackEnd from './pages/BackEnd'
import FrontEnd from './pages/FrontEnd'
import ProjectPhase from './pages/ProjectPhase'


function App() {
        return (
            <div className="App">
               <Header />
               <Router>
                   <Home path="/"/>
                   <AllStudents path="/students/all"/>
                   <Blocks path="/blocks"/>
                   <CurrentStudents path="/students/current"/>
                   <Graduates path="/students/graduates"/>
                   <Fundamentals path="/students/fundamentals"/>
                   <BackEnd path="/students/backend"/>
                   <FrontEnd path="/students/frontend"/>
                   <ProjectPhase path="/students/projectphase"/>
                   <IndividualStudent path="/students/:student_id"/>
               </Router>
               <Footer />
            </div>
        );
};

export default App;