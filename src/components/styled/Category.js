import styled from "styled-components";

const Category = styled.h1`
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  font-size: 40px;
  border-left: 8px solid #09aeac;
  margin-left: 106px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 60px;
  color: #000523;
  position: relative;
  &::before {
    content: "";
    width: 40px;
    height: 2px;
    background-color: #09aeac;
    position: absolute;
    bottom: 50%;
    left: 0;
    transform: translateY(50%);
  }
  &::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #09aeac;
    position: absolute;
    top: 50%;
    left: 40px;
    transform: translateY(-50%);
  }
`;
export default Category;
