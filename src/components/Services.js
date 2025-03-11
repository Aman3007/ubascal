import React from 'react'
import styled from 'styled-components'
import { TbTruckDelivery,TbTruckReturn } from "react-icons/tb";
import { GrSecure } from "react-icons/gr";

import { MdSecurity } from "react-icons/md";

const Services = () => {
  return (
   <Wrapper>
    <div className='container'>
        <div className='grid grid-three-column'>
            <div className='services-1'>
                <div>
                    <TbTruckDelivery className="icon"></TbTruckDelivery>
                    <h3>super fast delivery</h3>
                </div>
            </div>
            <div className='services-2'>
            <div className='services-column-2'>
            <MdSecurity className="icon"></MdSecurity>
            <h3>100% secure and safe</h3> 
            </div>
            <div className='services-column-2'>
            <TbTruckReturn className="icon" /> 
            <h3>easy and hassel free return</h3></div>
                 
                   </div>



                 <div className='services-3'>
                <div>
                <GrSecure className="icon"/>
                    <h3>secure payment system</h3>
                </div>
            </div>

        </div>
    </div>
   </Wrapper>
  )
}


const Wrapper = styled.section`
padding:1rem 0;
.grid{
    gap:4.8rem;
}

.services-1,.services-2,.services-3{
    width:auto;
    height:30rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-content:center;
    background:${({theme})=>theme.colors.bg};
    text-align:center;border-radius:2rem;

 box-shadow:rgba(0,0,0,0.05)0px 1px 2px 0px;
}
.services-2{
    gap:4rem;
    background-color:transparent;
    bax-shadow:none;

    
   .services-column-2 {
   padding-top:2rem;
    background:${({theme})=>theme.colors.bg};
    display:flex;
    flex-direction:row;
    flex:1;
    justify-content:center;
      align-item:center;
        border-radius:2rem;
        box-shadow:rgba(0,0,0,0.05)0px 1px 2px 0px;
div{
   
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-item:center;
    gap:1rem;
}
}
}


h3{margin-top:3rem;
font-size:2rem}

.icon{
    width:8rem;
    height:8rem;
padding:2rem;
border-radius:50%;
background-color:#fff;
color:#5138ee; 



}
`
export default Services
