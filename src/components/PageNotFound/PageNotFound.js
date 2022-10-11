import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css'

const PageNotFound = () => {
    // let height = screen.height;

    const my_navigate = useNavigate();    

    const showTopicDetails = () => {                
        my_navigate('/');
    }

    return (
        <div className='page-not-found'>
            <div>
                <h2>Page not found: 404</h2>
                <button onClick={showTopicDetails}>Go to Home Page</button>
            </div>
        </div>
    );
};

export default PageNotFound;