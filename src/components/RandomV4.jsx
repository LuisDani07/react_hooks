import React from 'react'
import useGif from '../useGIF';

function Tagv4() {
    const {gif, fetchGif}=useGif();



return (
<div className='container'>
    <h1>Random  gif</h1>
    <img src={gif} alt="Random gif" width="500"/>
    <button onClick={fetchGif}>click for new</button>
</div>
)
}

export default Tagv4