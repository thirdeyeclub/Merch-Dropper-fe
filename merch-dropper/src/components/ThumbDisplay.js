import React from 'react'
import styled from "styled-components";





const PicDisplay = styled.div`
  height: 100px;
`;

const ThumbDisplay = ({logos, garment, setGarment}) => {
  return (
    <PicDisplay>
      {logos.map((logo)=> (
        <img src={logo.thumb} alt={logo.name} onClick={()=>setGarment({...garment, artwork: logo.hiRes})}/>
      ))}

    </PicDisplay>
  )
}

export default ThumbDisplay
