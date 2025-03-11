import styled from "styled-components";


const Contact = () => {
  return <Wrapper>
    <h2>Feel free to contact</h2>
    
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6996.276883886202!2d77.19620658967891!3d28.745283259130264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfe268d4eef9d%3A0x7461a39a7ae9a897!2sSant%20Nagar%2C%20Burari%2C%20Delhi%2C%20110084!5e0!3m2!1sen!2sin!4v1737479467822!5m2!1sen!2sin" 
    width="1000rem" height="450rem" style={{border:0}} allowFullScreen="" 
    loading="lazy" referrerPolicy="no-referrer-when-downgrade">
    </iframe>
    <div className="container">
    <div className="contact-form">
      <form action="https://formspree.io/f/mjkknzan" method="POST" className="contact-inputs">
        <input type="text" placeholder="username" name="username" required autoComplete="off"></input>
        <input type="email" placeholder="Email" name="Email" required autoComplete="off"></input>
     <textarea name="query" cols="40" rows="5" required autoComplete="off" placeholder="Enter your query"></textarea>
     <input type="submit" value="send"></input>
      </form>
    </div>

    </div>
   
  </Wrapper>;
};

const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
text-align: center;

.container {
  margin-top: 6rem;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;

export default Contact;
