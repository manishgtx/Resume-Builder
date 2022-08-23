import styled from "styled-components";

const EducationParaEdit = styled.textarea`
  font-family: "Poppins", sans-serif;
  color: #555555;
  font-size: 16px;
  width: 856px;
  height: 68px;
  overflow: hidden;
  resize: none;
  border: none;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export default EducationParaEdit;