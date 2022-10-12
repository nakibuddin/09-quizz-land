import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {
    const {data} = useLoaderData();     
    const topics = data;

    return (
        <div>               
            <Header></Header>            
            <br />  <br />
            <div className="topics">
                {
                    topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </div>

        </div>
    );
};

export default Topics;