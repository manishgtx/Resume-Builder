import styled from "styled-components";
import Single from './styled/Single';
import Name from './styled/Name';
const SingleItemContainer = styled.div`
  font-family: "Poppins", sans-serif;
  margin-left: 106px;
  border-left: 8px solid #09aeac;
  padding-left: 60px;
  padding-bottom: 30px;
  position: relative;
  &::before {
    content: "";
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    bottom: 50%;
    left: -36px;
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
    top: 18px;
    left: -16px;
  }
`;

const InputName = styled.textarea`
  width: 856px;
  height: 25px;
`;
const SingleInfo = ({type,value}) => {
  return (
    <SingleItemContainer>
        <Single>{type}</Single>
        <Name>{value}</Name>
    </SingleItemContainer>
  )
}

export default SingleInfo;