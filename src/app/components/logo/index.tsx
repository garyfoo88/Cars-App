import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CarLogoImg from "../../../assets/images/car-logo.png";
import CarLogoDarkImg from "../../../assets/images/car-logo-dark.png"

interface ILogoProps {
  color?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`flex items-center`}
`;
const LogoText = styled.div`
  ${({ color }) => (color === "white" ? tw`text-white` : tw`text-black`)}
  ${tw`text-xl md:text-2xl font-bold text-black m-1`}
`;

const Image = styled.div`
  width: auto;
  ${tw`h-6 md:h-9`}
  img {
    width: auto;
    height: 100%;
  }
`;

function Logo(props: ILogoProps) {
  const { color } = props;

  return (
    <LogoContainer>
      <Image>
        <img alt="CarLogo" src={CarLogoImg} />
      </Image>
      <LogoText color={color || "dark"}>Your Car</LogoText>
    </LogoContainer>
  );
}

export default Logo;
