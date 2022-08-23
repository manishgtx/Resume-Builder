import styled from "styled-components";
const EducationSingleContainer = styled.div`
  font-family: "Poppins", sans-serif;
  margin-left: 106px;
  border-left: 8px solid #09aeac;
  padding-left: 60px;
  padding-bottom: 30px;
  position: relative;
  &::before {
    content: "";
    width: 60px;
    height: 60px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    bottom: 50%;
    left: -41px;
    transform: translateY(calc(50% - 15px));
    border: 7px solid #09aeac;
  }
  &::after {
    content: "";
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #09aeac;
    position: absolute;
    top: 57px;
    left: -16px;
  }
`;

export default EducationSingleContainer;