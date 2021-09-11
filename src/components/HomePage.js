import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        < div >
            <h1>Pluralsight Administration</h1>
            <p>React, Redux and React Router crash course</p>
            <Link to="about" className="btn btn-primary">About</Link>
        </div >
    );
}

export default HomePage;