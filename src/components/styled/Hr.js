import styled from "styled-components";
const Hr = styled.hr`
  border: 1px solid ${(props) => props.color ? props.color : `#ccc`};
  margin-bottom: 10px;
`;

export default Hr;