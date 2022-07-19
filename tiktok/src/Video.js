import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    /* if video is playing add pause option,
    otherwise add play option if not playing
    */
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className='video'>
        <video
          onClick={handleVideoPress} 
          className='video__player'
          loop
          ref={videoRef}
          src='https://firebasestorage.googleapis.com/v0/b/tiktok-clone-91e9c.appspot.com/o/video_2022-07-19_14-29-01.mp4?alt=media&token=c717a1bd-3e0d-406e-ad4c-5fe2f92d3a3b'
        ></video>

        <VideoFooter />
    </div>
  )
}

export default Video;