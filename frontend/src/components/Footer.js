import { BlueSpan, FooterContainer, FooterLeft, FooterRight } from "../styled/Footer.styled";

function Footer() {
    return (
      <FooterContainer>
        <FooterLeft>
          <h3>Company Name</h3>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </FooterLeft>
        <FooterRight>
          <p>Made with <BlueSpan>&hearts;</BlueSpan> by Lernik Yeghiazaryan</p>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact Us</a>
        </FooterRight>
      </FooterContainer>
    );
  }
  
  export default Footer;