import React from 'react';
import './Question.css'

const Question = (props) => {
    const {options, id, question, correctAnswer} = props.questionData;
    // console.log(document.getElementById('nakib').innerHTML);
    const checkOption = () => {
        console.log('clicked');
    }

    return (
        <div className='question-container'>
            <h4>Question 1: {question}</h4>
            
            <div className='option-container'>

                <div id='nakib'>
                    <input onClick={checkOption} type="radio"  name={id} />
                    <small>{options[0]}</small>	
                </div>

                <div>
                    <input type="radio"  name={id}/>
                    <small>{options[1]}</small>	
                </div>

                <div>
                    <input type="radio"  name={id}/>
                    <small>{options[2]}</small>	
                </div>

                <div>
                    <input type="radio"  name={id}/>
                    <small>{options[3]}</small>	
                </div>                
                                
                
            </div>
        </div>
    );
};

export default Question;



/* 
                <div><small>{options[1]}</small></div>
                <div><small>{options[2]}</small></div>
                <div><small>{options[3]}</small></div>                 */