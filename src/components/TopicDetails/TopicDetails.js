import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicDetails = () => {
    const {data} = useLoaderData();
    console.log(data.total);
    // const {questions} = data;
    // console.log(questions);
    return (
        <div>
            <h2>This is topic details page</h2>
        </div>
    );
};

export default TopicDetails;