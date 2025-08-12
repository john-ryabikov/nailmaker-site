  "use client"

  import { useState, useEffect } from 'react'

  import ReactPlayer from "react-player"

  export default function VideoBlock() {

    const [hasWindow, setHasWindow] = useState(false);

    useEffect(() => {
      if (typeof window !== "undefined") {
        setHasWindow(true)
      }
    }, []);

    return (
      <>
        {hasWindow && 
          <div className='video-block'>
              <ReactPlayer
                url={"/img/Section-1/video-tabel.mp4"}
                width={"100%"}
                height={"100%"}
                playIcon={<img className='video-block__btn-play' src="/img/Section-1/button_video_icon.svg"/>}
                playing
                light={"/img/Section-1/video-tabel-prew.png"}
                controls
              />
          </div> 
        }
      </>
    )  
  }  

