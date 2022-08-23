import styled from "styled-components"
import Single from "./styled/Single";
import { IoSchool } from "react-icons/io5";
import EducationSingleContainer from "./styled/EducationSingleContainer";
const Para = styled.p`
  font-family: "Poppins", sans-serif;
  color: #555555;
  font-size: 16px;
  max-width: 750px;
  height: 75px;
  &::first-letter {
    text-transform: uppercase;
  }
`;
const Institution = styled.p`
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 700;
    color: #777777;
`
const InstitutionSpan = styled.span`
    font-weight: 300;
    font-style: italic;
`;
const EducationSingleInfo = ({course,name,date,details}) => {
    
  return (
    <EducationSingleContainer>
      <Single>{course}</Single>
      <Institution><IoSchool style={{fontSize:'24px'}}/>{name} - <InstitutionSpan>{date}</InstitutionSpan></Institution>
      <Para>{details}</Para>
    </EducationSingleContainer>
  );
}

export default EducationSingleInfo