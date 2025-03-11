
import HeroSection from './components/HeroSection';

import styled from "styled-components";

import ProductList from "./components/ProductList";
import Sort from "./components/Sort";
// import { useFilterContext } from "./context/filter_context";


const About=()=>{
const myName="AMAN STORE"


    return(<>
     <HeroSection text={myName}></HeroSection>
     <Wrapper>
     <h2 style={{
      marginLeft:"8rem",
      color:"violet",
      textDecoration:"underline"
      
     }}>Check Our Latest Collection's</h2>
      <div className="container grid">
     <section className="product-view--sort">
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
 
    </>);
}

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;



export default About;