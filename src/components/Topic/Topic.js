import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Topic.css'

const Topic = ({topic}) => {
    const my_navigate = useNavigate();    

    const showTopicDetails = () => {                
        my_navigate(`/topic/${topic.id}`);
    }
    
    return (
        <div className='topic'>
            <img src={topic.logo} alt="imaage not found" />
            <h2>{topic.name}</h2>
            <h4>Total question: {topic.total}</h4>
            <button onClick={showTopicDetails}>Start Practice</button>            
        </div>
    );
};

export default Topic;