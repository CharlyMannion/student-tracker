import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

class Graduates extends React.Component {
    state = {
        students: [],
        isLoading: true
    };

    componentDidMount() {
        axios.get('https://nc-student-tracker.herokuapp.com/api/students?graduated=true')
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
                <h1>These are all the graduates</h1>
                <ul>
                    {this.state.students.map((student) => {
                        console.log(student)
                        return (
                            
                            <li>
                                <Link to={`/students/${student._id}`}>
                                    <h2>{student.name}</h2>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Graduates;