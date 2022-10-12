import React from 'react';
import './Statistics.css'
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const {data} = useLoaderData();         
    console.log(data);

    return (
        <div className='statistics'>
            <h4>Comparison of total number of question in every topic</h4>
            

        </div>
    );
};

export default Statistics;