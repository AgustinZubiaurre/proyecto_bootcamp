import React from "react"

const Video_detail = ( { video }) =>{

  //check before we render video into Video_detail
  if(!video){
    return ( <div> </div> )
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
         <iframe className = "embed-responsive-item" src={url}></iframe>
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default Video_detail;
