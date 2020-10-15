import React from 'react';
import {Link} from '@reach/router';

function Blocks() {
    return (
        <div className="Blocks">
            <h1>This is the homepage</h1>
            <nav id="button-nav">
                <Link to="/students/fundamentals">
                    <button>Fundamentals</button>
                </Link>
                <Link to="/students/backend">
                    <button>Back End</button>
                </Link>
                <Link to='/students/frontend'>
                    <button>Front End</button>
                </Link>
                <Link to='/students/projectphase'>
                    <button>Project Phase</button>
                </Link>
                <Link to='/students/graduates'>
                    <button>View graduates</button>
                </Link>
            </nav>

        </div>
    );
};

export default Blocks;