import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { abbreviateNumber } from 'js-abbreviation-number'

import { fetchDataFromApi } from '../utils/api'
import { Context} from "../context/contextapi"
import SuggestionVideoCard from "./SuggestionVideoCard"

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos ] = useState();
  const {id} = useParams();
  const {setLoading} = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h")
    fetchVideoDetails();
    fetchRelatedVideos ();
  },[id])
  const fetchVideoDetails = () =>{
    setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
      setLoading(false);
    });
  };
  const fetchRelatedVideos = () =>{
    setLoading(true);
    fetchDataFromApi(`video/related-content/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideos(res);
      setLoading(false);
    });
  };
  
  return (
    <div className='flex justify-center flex-row h-[calc(100%-56px)] bg-black'>
      <div className="w-full max-w-[1280px flex flex-col lg:flex-row]">
        <div className="flex flex-col lg:w-[calc(100%-350px)]  xl:w-[calc(100%-400px) px-4 py-3] lg:py-6 overflow-y-auto">
          </div> 
        </div>
    </div>
  )
}

export default VideoDetails