import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
const {currentBlock, indicateResits} = require('../utils')


const Resitting = styled.li`
color:red;`

class IndividualStudent extends React.Component {
    state = {
        student: {},
        isLoading: true
    };

    componentDidMount() {
		console.log(this.props)
        axios.get(`https://nc-student-tracker.herokuapp.com/api/students/${this.props.student_id}`)
        .then((res) => {
            console.log(res.data.student);
            this.setState({
                student: res.data.student,
                isLoading: false,
            });
        });
    };
	
    render() {
        if (this.state.isLoading) return <p>Students loading...</p>
		console.log(this.state.student);
		return(
            <div>
                <h1>{this.state.student.name}</h1>
				<ul>
					<li>Starting cohort: {this.state.student.startingCohort}</li>
					<li>Current status: {currentBlock(this.state.student.blockHistory)}</li>
                    <Resitting>{indicateResits(this.state.student.blockHistory)}</Resitting>
				</ul>
                
            </div>
        );
    }
}


export default IndividualStudent;