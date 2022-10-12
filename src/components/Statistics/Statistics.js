import React from 'react';
import './Statistics.css'
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const {data} = useLoaderData();         
    // console.log(data);

    return (
        <div className='statistics'>
            <h4>Comparison of total number of question in every topic</h4>
            <br /> <br /> <br />

            <BarChart width={500} height={300} data={data}>
                <Bar dataKey="total" fill="#5D5FEF"></Bar>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="total"></YAxis>            
                <Tooltip></Tooltip>
                {/* <CartesianGrid strokeDasharray="3 3"></CartesianGrid> */}
            </BarChart>            

            {/* <ResponsiveContainer width="100%" height="100%">                
            </ResponsiveContainer> */}

        </div>
    );
};

export default Statistics;