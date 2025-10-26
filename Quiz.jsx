import React, { useState } from 'react'
import './Quiz.css'
import { data } from '.../src/assets/data.js';

const Quiz = () => {

  let [index,setIndex] = useState(0);
  let [question,setQuestion] = useState(data[index]);

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr/>
      <h2>Which device is required for the Internet connection?</h2>
      <ul>
        <li>Modem</li>
        <li>Router</li>
        <li>LAN Cabel</li>
        <li>Pen Drive</li>
      </ul>
      <button>Next</button>
      <div className='index'>1 of 5 question</div>
    </div>
  )
}

export default Quiz
