import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin-top:50%;
  bottom:0;
  width:100%;
  background-color: #343a40;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  @media only screen and (max-width: 600px) {
    display:flex;
    flex-direction:column;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  p {
    font-size: 0.9rem;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  margin-right:20px;
  align-items: center;

  a {
    color: #fff;
    font-size: 0.9rem;
    margin-left: 20px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const BlueSpan = styled.span`
  color: #007bff;
`;

export const RedSpan = styled.span`
  color: #dc3545;
`;