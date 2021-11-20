import {useContext} from 'react'
import styled from "styled-components";
import Slider from "@material-ui/core/Slider";
import { AudioPlayerContext } from '../../../state/context/AudioPlayerContext'; 
import moment from 'moment';
import { StageSpinner } from "react-spinners-kit";


const PlayerProgressInfoWrapper = styled.div`
height: 35%;
width: 100%;
display: flex;
`;

const PlayerTimeStampWrapper = styled.div`
height: 100%;
min-width: 50px;
display: flex;
justify-content: center;
align-items: center;
font-size: 12px;
`;

const PlayerProgressSliderWrapper = styled.div`
height: 100%;
flex: 1;
justify-content: center;
position:relative
`;


export default function PlayerProgressPack(){
const {handleTrackTimeUpdateFromSlider, trackProgress, isLoading} =  useContext(AudioPlayerContext);
const currTime = moment.utc(trackProgress.time*1000).format('mm:ss');
const duration = moment.utc(trackProgress.duration*1000).format('mm:ss');

 return (

  <PlayerProgressInfoWrapper>
  <PlayerTimeStampWrapper> {currTime} </PlayerTimeStampWrapper>

  <PlayerProgressSliderWrapper>
      

          <Slider
              value={trackProgress.percentage}
              onChange={handleTrackTimeUpdateFromSlider}
              color = 'secondary'
              aria-labelledby="progress-slider"
              style={{ 
                       transform: "scale(.9) translateY(3px)",
                       opacity: isLoading ? .2 : 1,
                       pointerEvents : isLoading ? 'none' : 'all'
                      }}
            />

            <div style = {{
                            width:'100%',
                            display: isLoading ? 'flex' : 'none',
                            justifyContent:'center',
                            position:'absolute',
                            top:-10,
                            left:0,
                            right:0,
                            margin:'auto',
                          }}>
                <StageSpinner color="#fff"  />
            </div>

  </PlayerProgressSliderWrapper>

  <PlayerTimeStampWrapper> {duration} </PlayerTimeStampWrapper>
</PlayerProgressInfoWrapper>

 )
}



