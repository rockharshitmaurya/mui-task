import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-font/css/videojs-icons.css";
import Forward10Icon from "@mui/icons-material/Forward10";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import { Button } from "@mui/material";
import { videoUrls } from '../videoData';

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: "https://vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4",
    },
  ],
  poster:"https://vjs.zencdn.net/v/oceans.png"
};

const VideoPlayer = () => {
  const [player, setPlayer] = useState(null);
  const videoNode = useRef(null);
  let index=0;

  useEffect(() => {
    if (videoNode.current) {
      const newPlayer = videojs(videoNode.current, videoJsOptions, () => {
        console.log("player is ready");
      });
      setPlayer(newPlayer);
    }

    return () => {
      if (player !== null) {
        player.dispose();
      }
    };
  }, []);

  const handleSkip = () => {
    if (player !== null) {
      player.currentTime(player.currentTime() + 10);
    }
  };

  const handleNext = () => {
    if (player !== null) {
      if(index<videoUrls.length){
        player.src(videoUrls[index++]);
        player.load();
        player.play();
      }
  
    }
  };

  const handlePrev = () => {
    if (player !== null) {
      if(index>-1){
        --index;
        player.src(videoUrls[index]);
        player.load();
        player.play(); 
      }
  
    }
  };
  

  return (
    <div className="test">
      <div data-vjs-player>
        <video
          ref={videoNode}
          className="video-container video-js vjs-big-play-centered"
        />
      </div>

      <div className="btn-options">
      <Button
        variant="outlined"
        endIcon={<Forward10Icon />}
        onClick={handleSkip}
        sx={{margin:"10px"}}
      >
        Forward
      </Button>
      <Button
        variant="outlined"
        endIcon={<SkipPreviousOutlinedIcon />}
        onClick={handlePrev}
        sx={{margin:"10px"}}
      >
        Previous
      </Button>
      <Button
        variant="outlined"
        endIcon={<SkipNextOutlinedIcon/>}
        onClick={handleNext}
        sx={{margin:"10px"}}
      >
        Next
      </Button>
      </div>
    </div>
  );
};

export default VideoPlayer;
