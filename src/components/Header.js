import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
  return (<>   <MainHeader>
    <NavLink to="/">
        <img className='logo11' src='./images/logo11.ico' alt='logo'></img>
    </NavLink>
    <Nav></Nav>
  </MainHeader>
  </>

  )
}
const MainHeader = styled.header` 

padding:0 4.8rem;
 height: 10rem;

 background-color:${({theme})=>theme.colors.bg};

 display:flex;

 justify-content: space-between;

 align-items: center;

 position: relative;

.logo{

 height: 5rem;

}

.logo11{
  height: 7rem;
  width:13rem;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
  }
}
@media (max-width:${({theme})=>theme.media.mobile}) { 

} 

`;

export default Header
