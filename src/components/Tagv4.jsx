import React,{useState} from 'react'
import useGif from '../useGIF';

function Tagv4() {
    const [tag, setTag]=useState('dogs');
    const {gif, fetchGif}=useGif(tag);



return (
<div className='container'>
    <h1>Random {tag} gif</h1>
    <img src={gif} alt="Random gif" width="500"/>
    <input value={tag} onChange={(e)=>{setTag(e.target.value)}} />
    <button onClick={()=>fetchGif(tag)}>click for new</button>
</div>
)
}

export default Tagv4