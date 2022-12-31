import {useState, useEffect} from 'react'
import axios from 'axios';
//Api key
const API_KEY=process.env.REACT_APP_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGIF(tag) {
  const [gif, setGif]=useState('');

  const fetchGif=async(tag)=>{
    const {data}=await axios.get(tag? `${url}&tag=${tag}`:url);
    
    const imgSrc=data.data.images.downsized_large.url;

    setGif(imgSrc);
  }
     
   useEffect(()=>{
        fetchGif(tag);
   },[tag]);

  
   return {gif, fetchGif}
}

export default useGIF