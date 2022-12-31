import React from 'react'
import Random from './RandomV4';
import Tag from './Tagv4';
import './App.css';

function App() {
  return (
    <div>
        <h1>Random GIF Aplication</h1>
        <div className='main-container'>
               <Random/>
               <Tag/>
        </div>
    </div>
  )
}

export default App