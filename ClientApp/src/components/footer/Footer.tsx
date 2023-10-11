import React from 'react';
import styled from 'styled-components'
  const Container = styled.footer`
    display: flex;
    color: #52e3c2;
    padding: 1.5rem 3rem;
    font-size: 14px;
    justify-content: space-between; 
    /* width: 100%; */
    flex-wrap: wrap;
    max-width: 1300px;
    margin: 0 auto;
  `;
  const Links = styled.a`
    margin: 0px 8px;
  `;

interface ComponentProps {

}

const Footer: React.FunctionComponent<ComponentProps> = () => {

  return (
    <Container>
      ©2022 Jason Cruz, Inc. Some rights reserved.
      |
      <Links>Terms of Use</Links>|
      <Links>Privacy Policy</Links>
      |
      <Links>Third Party Content and Services</Links>
      |
      <Links>Copyright Dispute Policy</Links>
      |
      <Links>Careers</Links>
      |
      <Links>Press</Links>
      |
      <Links>Security</Links>
      |
      <Links>CCPA</Links>
    </Container>
  );
}

export default Footer;