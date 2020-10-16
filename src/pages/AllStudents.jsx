import React from 'react';
import axios from 'axios';
import { Router } from '@reach/router'
import {Link} from '@reach/router';
import StudentAdder from "../components/StudentAdder"
import ToggleView from '../components/ToggleView'
import FlashStudent from './FlashStudent';
// import IndividualStudent from './IndividualStudent';

class AllStudents extends React.Component {
    state = {
        students: [],
        isLoading: true
    };

    componentDidMount() {
        axios.get('https://nc-student-tracker.herokuapp.com/api/students')
        .then((res) => {
            console.log(res.data.students);
            this.setState({
                students: res.data.students,
                isLoading: false,
            });
        });
    };

    addStudent = (student) => {
        this.setState((prevState) => {
            const newStudents = [...prevState.students, student];
            return {
                students: newStudents
            };
        });
    };

    render() {
        if (this.state.isLoading) return <p>Students loading...</p>
        return (
            <div>
                <h1>These are all the students</h1>
                <StudentAdder addStudent={this.addStudent}/>
                <ul>
                    {this.state.students.map((student) => {
                        console.log(student)
                        return (
                            <li>
                                <Link to={`/students/${student._id}`}>
                                    <h2>{student.name}</h2>
                                </Link>
                                <Link to={`/${student._id}`}>
                                    <h2>Quick View</h2>
                                </Link>
                                <p>Starting cohort: {student.startingCohort}</p>
                            </li>
                        );
                    })}
                </ul>
                <ToggleView>
                    <Router>
                        <FlashStudent path='./students/:student_id' />
                    </Router>
                </ToggleView>
            </div>
        );
    }
}


export default AllStudents;

// /students?graduated=[true/false]&block=[block_slug]&cohort=[startingCohort]&sort_by=[name/startingCohort]&order=[asc/desc]
