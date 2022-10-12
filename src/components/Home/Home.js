import React from 'react';
import './Home.css'
import Header from './../Header/Header';
import Topics from '../Topics/Topics';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Topic from './../Topic/Topic';

const Home = () => {
    const {data} = useLoaderData();     
    const topics = data.slice(0, 3);
    const my_navigate = useNavigate();    

    const showAllTopics= () => {                
        my_navigate('/topics');
    }
    
    return (
        <div>
            <Header></Header>
            {/* <Topics></Topics> */}

            <br/><br/>
            <div className="topics">
                {
                    topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </div>

            <br/> 
            <button onClick={showAllTopics} className='btn-explore-more'> Explore More</button>
            <br/><br/>

        </div>
    );
};

export default Home;