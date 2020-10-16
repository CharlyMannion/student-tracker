import React, { Component } from 'react';
import axios from 'axios';

class StudentAdder extends Component {
	state = {
			"name": "",
			"startingCohort": '',
			}

	handleChange = (event) => {
		const {name, value} = event.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const {name, startingCohort} = this.state;
		axios.post("https://nc-student-tracker.herokuapp.com/api/students", {name, startingCohort})
		.then((res) => {
			this.setState({
				name: '',
				startingCohort: ''
			});
			this.props.addStudent(res.data.student)
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h3>Create new student</h3>
				<label htmlFor="name">Student name:
					<input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}></input>
				</label>
				<label htmlFor="startingCohort">Starting cohort:
					<input type="number" name="startingCohort" id="startingCohort" value={this.state.startingCohort} onChange={this.handleChange}></input>
				</label>
				<button type="submit">Submit</button>
			</form>
		)
	}
}

export default StudentAdder;