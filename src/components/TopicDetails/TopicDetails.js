import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const TopicDetails = () => {
    const {data} = useLoaderData();
    const {questions} = data;
    // console.log(questions);
    let qnNo = 1;
    return (
        <div className='topic-details'>
            <h2>Quiz of {data.name}</h2>

            {
                questions.map(question => <Question key={question.id} questionData={question} qnNo={qnNo++}></Question>)
            }
        </div>
    );
};

export default TopicDetails;