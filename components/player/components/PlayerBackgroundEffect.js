import styled from "styled-components";

const PlayerBackgroundEffectWrapper = styled.div`
width: 100%;
height: 100%;
background: url( ${({ cover }) => cover} );
background-position:center;
position: absolute;
bottom:0;
left:0,
z-Index:4;
filter:blur(30px) brightness(50%);
transition : all .3s ease-in;
`;

const PlayerBackdrobFilterWrapper = styled.div`
width: 100%;
height: 100%;
position: absolute ;
bottom:0;
left:0,
z-Index:5;
backdrop-filter:blur(25px);
background: rgba(0,0,0,.8);
overflow:hidden;
transition : all .3s ease-in;
`;


export default function PlayerBackgroundEffect(props){
    return (
      <PlayerBackdrobFilterWrapper>
        <PlayerBackgroundEffectWrapper cover={props.cover} />
      </PlayerBackdrobFilterWrapper>
    );
  };
