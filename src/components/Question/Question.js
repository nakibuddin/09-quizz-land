import React, { useEffect, useState } from 'react';
import './Question.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = (props) => {
    const {options, id, question, correctAnswer} = props.questionData;
    const [selectedValue, setSelectedValue] = useState();    

    // console.log(correctAnswer);

    useEffect( () => {
        if( (selectedValue !== undefined) && (selectedValue === correctAnswer) ) {
            console.log('answer is correct');
            toast('Correct answer', {position: toast.POSITION.TOP_CENTER}); 
            
        }
        else if (selectedValue !== undefined)  {
            console.log(`wrong answer, you said ${selectedValue}`);
            toast('Wrong answer', {position: toast.POSITION.TOP_CENTER}); 
        }
    },[selectedValue])  

    const checkOption = () => {
        // console.log(selectedValue);
        // if(selectedValue === correctAnswer) {
        //     console.log('answer is correct');
        // }
        // else {
        //     console.log('worng answer');
        // }
    }

    return (
        <div className='question-container'>
            <h4>Question 1: {question}</h4>
            
            <div className='option-container'>
                <div>
                    <input onClick={checkOption} type="radio"  name={id} value={options[0]} onChange={e => setSelectedValue(e.target.value)} />                    
                    <small>{options[0]}</small>	                                        
                </div>                

                <div>
                <input onClick={checkOption} type="radio"  name={id} value={options[1]} onChange={e => setSelectedValue(e.target.value)} />
                    <small>{options[1]}</small>	
                </div>

                <div>
                <input onClick={checkOption} type="radio"  name={id} value={options[2]} onChange={e => setSelectedValue(e.target.value)} />
                    <small>{options[2]}</small>	
                </div>

                <div>
                <input onClick={checkOption} type="radio"  name={id} value={options[3]} onChange={e => setSelectedValue(e.target.value)} />
                    <small>{options[3]}</small>	
                </div>                                                                
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Question;



/* 
                <div><small>{options[1]}</small></div>
                <div><small>{options[2]}</small></div>
                <div><small>{options[3]}</small></div>                 */