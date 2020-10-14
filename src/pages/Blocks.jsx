import React from 'react';
import axios from 'axios';

class Blocks extends React.Component {
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

    render() {
        if (this.state.isLoading) return <p>Students loading...</p>
        return (
            <div>
                <h1>These are all the students</h1>
                <p>Student 1</p>
                <p>Student 2</p>
            </div>
        );
    }
}


export default Blocks;