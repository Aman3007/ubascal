import React from 'react'
import styled from 'styled-components'
import { IoLogoBehance } from "react-icons/io5";
import { IoLogoSlack,IoLogoXbox,IoLogoSkype , IoLogoJavascript } from "react-icons/io";

const Trusted = () => {
  return (
    <Wrapper className='brand-section'>
    <div className='container'>
      <h3>Trusted by 100+ Brands</h3>
      <div className='brand-section-slider'>
        <div className='slide'>
        <IoLogoJavascript className='img'/>
        </div>
        <div className='slide'>
          <IoLogoBehance className='img'></IoLogoBehance>
          </div>
          <div className='slide'>
          <IoLogoSlack className='img'></IoLogoSlack>
          </div>
          <div className='slide'>
          <IoLogoXbox className='img'></IoLogoXbox>
          </div>
          <div className='slide'>
          <IoLogoSkype className='img'></IoLogoSkype>
          </div>
      </div>
    </div>

    </Wrapper>
  )
}
const Wrapper=styled.section`
padding:9rem 0;



.brand-section{
  padding:12rem 0 0 0;

}

h3{
  text-align:center;
  text-transform:capitalize;
  color:${({theme})=>theme.media.text}
  font-size:2rem;
  font-weight:bold;
}

.img{
  min-width:7rem;
  height:7rem;
}

.brand-section-slider{
  margin-top:3.2rem;
  padding-top:1rem;
  padding-bottom:1rem;
  display:flex;
  justify-content:space-between;
  align-item:center;
  flex-direction:row;
  background-color:rgba(0,0,0,0.2);
  border-radius:5rem;
  }




@media(max-width:${({theme})=>theme.media.mobile}){
  .brand-section-slider{
    margin-top:3.2rem;
    display:grid;
    grid-template-column:1fr 1fr;
    text-align:center;
    justify-content:center;
  }
}
`;

export default Trusted
