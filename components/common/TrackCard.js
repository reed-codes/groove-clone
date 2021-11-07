import {useState} from 'react'
import styled from "styled-components";
import Link from 'next/link'
import Box from '@mui/material/Box';
import MediaPlayBtn from './MediaPlayBtn';


const Card = styled.div`
background: #181818;
border-radius: 4px;
flex: 1;
padding: 20px 15px;
position: relative;
width: 100%;
transition: all .2s linear;
box-shadow: 0 8px 24px rgb(0 0 0 / 10%);
&:hover{
      background: #383838;
      color:#fff
}
`;


const CardCoverImageWrapper = styled.div`
  margin-bottom: 16px;
  position: relative;
`;

const CardCoverImage = styled.img`
 background-color: #333;
  border-radius: 2px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  min-height:130px;
  box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
`;
const CardContentWrapper = styled.div`
  min-height: 62px;
`;
const CardHeader = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 24px;
  text-transform: none;
`;

const CardBody = styled.div`
  color: rgb(179, 179, 179);
  display: -webkit-box;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 16px;
  text-transform: none;
`;

const MediaCardOnHoverBtnWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content:flex-end
`;

const MediaCard = ({track}) => {
  const [showPlayBtn, setShowPlayBtn] = useState(false)
  const artistName = track.artist.name;
  const artistId = track.artist.id;
  const artistAvatar = track.artist.picture_small;
  const title = track.title;
  const id = track.album.id;
  const cover = track.album.cover_medium
  
  return (
    <Link href = {`/album?q=${id}`}>
        <a>
      <Box  className = "media-card-wrapper" >

    <Card className="media-card"
          onMouseEnter={() => {setShowPlayBtn(true)}}
          onMouseLeave = {()=>{setShowPlayBtn(false)}}
        >
      <Box sx = {{
          height: '100%',
          position: 'relative',
          zIndex: 1,
          cursor:'pointer'
      }}>
        <CardCoverImageWrapper>
          <CardCoverImage src={cover} alt={title} />

          <MediaCardOnHoverBtnWrapper className="media-card-on-hover-btn-wrapper">
          { showPlayBtn && <MediaPlayBtn/> }
          </MediaCardOnHoverBtnWrapper>
        </CardCoverImageWrapper>

        <CardContentWrapper>
          <CardHeader>{title}</CardHeader>

          <CardBody> {artistName} </CardBody>
        </CardContentWrapper>
      </Box>
    </Card>
        </Box>
        </a>
        </Link>
  );
};


export default MediaCard