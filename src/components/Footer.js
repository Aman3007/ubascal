import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <Wrapper>
        <div className='contact-short'>
            <div className='grid grid-two-column'>
                <div>
                  <h3>GET Started</h3>
                  <h3>Ask your queries</h3>              
                </div>
        <div><Button><NavLink to="/Contact">Get Started</NavLink></Button></div>
            </div>
         </div>

        <footer>
          
                <div className=' container grid grid-four-column'>
                    <div className='footer-about'>
                       <h3>Chauhan's store </h3>
                       <p>welcome to ubascal </p>
                    </div>


                <div className='footer-subscribe'>
                       <h3>Subscribe for latest updates</h3>
                    <form action='#'>
                       <input type='email' placeholder='your mail'></input>
                       <input type='submit' value="subscribe"></input>
                    </form>
                </div>


                    <div className='footer-social'>
                       <h3>You can follow us on...!!</h3>
                       <div className='footer-social--icons'>
                           <FaInstagram className='icons' />
                           <FaFacebook className='icons' />

                        </div>
                    </div>


                    <div className='footer-about'>
                        <h3>Best and Budget Friendly</h3>
                        <p>Doorstep dilevery guaranteed</p>
                    </div>


                </div>
           
        </footer>
    </Wrapper>
  )
}
const Wrapper= styled.section`

.isIFGq{
    margin:0;
}

.contact-short{
    max-width:60vw;
    color:white;
    margin:auto;
    padding:3rem  2rem ;
    background-color :  ${({theme})=>theme.colors.footer_bg};
    border-radius:1rem;
    box-shadow:${({theme})=>theme.colors.shadowSupport};
    transform:translateY(50%);
    .grid div:last-child{
        justify-self:end;
        align-self:center;

}}

footer{
    padding:6.5rem 0 2rem 0;
    background-color :rgba(3, 3, 3,0.85) ;
    h3{
        color:  ${({theme})=>theme.colors.hr};
        margin-bottom:2.4rem;
    }

    p{
        color:  ${({theme})=>theme.colors.white};  
    }


    div{

.footer-social{
    .footer-social--icons{
display:flex;
gap:6rem;

   
padding:1rem;
border-radius:20%;
border:2px solid ${({theme})=>theme.colors.white};
justify-items:center;
align-items:center;
    .icons{
color:  ${({theme})=>theme.colors.white};
cursor:pointer;
font-size:2rem;


}}}

    }

}

        
   

.footer-bottom--section{
    padding-top:9rem;
    hr{
        margin-bottom:2rem;
        color:${({theme})=>theme.colors.hr};
        height:0.1px;
    }
}

@media(max-width:${({theme})=>theme.media.mobile}){
.contact-short{
max-width:80vw;

    margin:4.8rem auto;
transform:translateY(0%);
tetext-align:center;
.grid div:last-child{
    justify-self:center;
}}
footer{
    padding: 9rem 0 9rem 0;
}

.footer-bottom--section{
    padding-top:4.8rem;
}}
`;
export default Footer
