import styled from "styled-components";
import Single from "./styled/Single";
import Para from "./styled/Para";
import { IoSchool } from "react-icons/io5";
import { HiFlag } from 'react-icons/hi';
const EducationSingleContainer = styled.div`
  font-family: "Poppins", sans-serif;
  margin-left: 106px;
  border-left: 8px solid #09aeac;
  padding-left: 60px;
  padding-bottom: 120px;
  position: relative;
  &::before {
    content: "";
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: -62px;
    transform: translateY(calc(50% - 15px));
    border: 7px solid #09aeac;
  }
  &::after {
    content: "FINISH";
    position: absolute;
    bottom: -25px;
    font-size: 20px;
    font-weight: 700;
    left: -36px;
    color: #09aeac;
  }
`;
const IconContainer = styled.span`
  color: #09aeac;
  position: absolute;
  top: 60px;
  left: -28px;
  font-size: 50px;
`;
const End = () => {
  return (
    <EducationSingleContainer>
      <IconContainer>
        <HiFlag />
      </IconContainer>
    </EducationSingleContainer>
  );
};

export default End;
