import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";

const FooterContainer = styled.div`
  min-height: 20em;
  background-color: #1d2124;
  ${tw`
        flex
        flex-wrap
        min-w-full
        pt-7
        pb-1
    `}
`;

const AboutContainer = styled.div`
  ${tw`
        flex
        flex-col
    `}
`;

function Footer() {
  return (
    <FooterContainer>
      <AboutContainer>
        <Logo color="white" />
      </AboutContainer>
    </FooterContainer>
  );
}

export default Footer;
