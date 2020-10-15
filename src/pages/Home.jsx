import React from 'react';
import {Link} from '@reach/router';

function Home() {
    return (
        <div className="Home">
            <h1>This is the homepage</h1>
            <nav id="button-nav">
                <Link to="/blocks">
                    <button>View blocks</button>
                </Link>
                <Link to="/students/all">
                    <button>View all students</button>
                </Link>
                <Link to='/students/current'>
                    <button>View current students</button>
                </Link>
                <Link to='/students/graduates'>
                    <button>View graduates</button>
                </Link>
            </nav>

        </div>
    );
};

export default Home;