import React from 'react'
import styled from "styled-components";
import designUrls from "../utils/designUrls";

const designs = designUrls;


const PicDisplay = styled.div`
  height: 100px;
`;

const ThumbDisplay = ({garment, setGarment}) => {
  return (
    <PicDisplay>
      {designs.map((design)=> (
        <img src={design.thumb} alt={design.name} onClick={()=>setGarment({...garment, artwork: design.hiRes})}/>
      ))}

    </PicDisplay>
  )
}

export default ThumbDisplay
