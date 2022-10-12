import React, { useEffect, useState } from 'react';
import './Question.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = (props) => {
    const qnNo = props.qnNo;
    const {options, id, question, correctAnswer} = props.questionData;
    const [selectedValue, setSelectedValue] = useState();        

    useEffect( () => {
        if( (selectedValue !== undefined) && (selectedValue === correctAnswer) ) {            
            toast('Correct answer', {position: toast.POSITION.TOP_CENTER});             
        }
        else if (selectedValue !== undefined)  {            
            toast('Wrong answer', {position: toast.POSITION.TOP_CENTER}); 
        }
    },[selectedValue])  

    const showAnswer = () => {                
        toast(`Answer: ${correctAnswer}`, {position: toast.POSITION.TOP_CENTER}); 
    }

    return (
        <div className='question-container'>
            
            <div className="question-header-container">
                <h4>Question {qnNo}: {question}</h4>            
                <EyeIcon onClick={showAnswer} className="eye-icon" title='Show the correct answer'/>
            </div>
            
            <div className='option-container'>
                <div>
                    <input type="radio"  name={id} value={options[0]} onChange={e => setSelectedValue(e.target.value)} />                    
                    <small>{options[0]}</small>	                                        
                </div>                

                <div>
                    <input type="radio"  name={id} value={options[1]} onChange={e => setSelectedValue(e.target.value)} />
                    <small>{options[1]}</small>	
                </div>

                <div>
                    <input type="radio"  name={id} value={options[2]} onChange={e => setSelectedValue(e.target.value)} />
                    <small>{options[2]}</small>	
                </div>

                <div>
                    <input type="radio"  name={id} value={options[3]} onChange={e => setSelectedValue(e.target.value)} />
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