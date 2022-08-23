import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import { changeAbout } from "../features/Resume/resumeSlice";
const ParaInput = styled.textarea`
  font-family: "Poppins", sans-serif;
  color: #555555;
  font-size: 16px;
  width: 750px;
  height: 121px;
  overflow: hidden;
  resize: none;
  border: none;
  &::first-letter {
    text-transform: uppercase;
  }
`;
const EditPara = () => {
  const about = useSelector((state)=> state.resume.about);
  const dispatch = useDispatch();
  return (
    <ParaInput value={about} onChange={(e)=> dispatch(changeAbout(e.target.value))} placeholder="Tell About Yourself..."/>
  );
}

export default EditPara;