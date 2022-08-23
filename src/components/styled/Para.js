import styled from "styled-components";

const Para = styled.p`
  font-family: "Poppins", sans-serif;
  color: #555555;
  font-size: 16px;
  width: 750px;
  height: 125px;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export default Para;