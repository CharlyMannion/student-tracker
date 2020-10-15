import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import styled from 'styled-components';
const { indicateResits } = require("../utils");

const ResitIndicator = styled.h2`
color: red;
`

class Fundamentals extends React.Component {
    state = {
        students: [],
        isLoading: true
    };

    componentDidMount() {
        axios.get('https://nc-student-tracker.herokuapp.com/api/students?block=fun')
        .then((res) => {
            console.log(res.data.students);

            const studentsArr = res.data.students.map(student => {
                return axios.get(`https://nc-student-tracker.herokuapp.com/api/students/${student._id}`);
            });

            Promise.all(studentsArr)
            .then((studentData) => {
                console.log(studentData, "studentData")
                const studentsWithResit = studentData.map(student => {
                    console.log(student, "Student");
                    const resitNumber = indicateResits(student.data.student.blockHistory);
                    return student.data.student.resitNumber = resitNumber;
                })
                console.log(studentsWithResit, "studentsWithResit");
                this.setState({
                    students: studentsWithResit,
                    isLoading: false,
                });
            })
        });
    };

    render() {
        if (this.state.isLoading) return <p>Students loading...</p>
        return (
            <div>
                <h1>These are all the students</h1>
                <ul>
                    {this.state.students.map((student) => {
                        // console.log(student)
                        return (
                            
                            <li>
                                <Link to={`/students/${student._id}`}>
                                    <ResitIndicator>{student.name}</ResitIndicator>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}


export default Fundamentals;

// /students?graduated=[true/false]&block=[block_slug]&cohort=[startingCohort]&sort_by=[name/startingCohort]&order=[asc/desc]
