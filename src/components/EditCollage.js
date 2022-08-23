import { useDispatch, useSelector } from "react-redux";
import {changeCollageName,changeCourse,changeDate,changeData } from "../features/Resume/resumeSlice";
import EducationSingleContainer from "./styled/EducationSingleContainer";
import EducationParaEdit from './styled/EducationParaEdit';
// Styled Components
import EducationInput from "./styled/EducationDetails/EducationInput";
import CollageName from "./styled/EducationDetails/CollageName";
import Container from "./styled/Container";

const EditCollage = () => {
  const collage = useSelector((state) => state.resume.collage
  );
  const dispatch = useDispatch();
  console.log("EditCollage");
  return (
    <EducationSingleContainer>
      <EducationInput
        value={collage.course}
        onChange={(e) => dispatch(changeCourse(e.target.value))}
        placeholder="Enter Your Course"
      />
      <Container>
        <CollageName
          value={collage.name}
          onChange={(e) => dispatch(changeCollageName(e.target.value))}
          placeholder=" Enter your Collage Name"
        />
        <CollageName
          value={collage.date}
          onChange={(e) => dispatch(changeDate(e.target.value))}
          placeholder=" Enter Your Graducation Date"
        />
      </Container>
      <EducationParaEdit
        value={collage.details}
        maxLength={240}
        onChange={(e) => dispatch(changeData(e.target.value))} placeholder='Enter Details...'
      />
    </EducationSingleContainer>
  );
};

export default EditCollage;
