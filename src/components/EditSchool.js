import { useDispatch, useSelector } from "react-redux";
import {changeSchoolName,changeSchoolCourse,changeSchoolDate,changeSchoolData } from "../features/Resume/resumeSlice";
import EducationSingleContainer from "./styled/EducationSingleContainer";
import EducationParaEdit from './styled/EducationParaEdit';
// Styled Components
import EducationInput from "./styled/EducationDetails/EducationInput";
import CollageName from "./styled/EducationDetails/CollageName";
import Container from "./styled/Container";

const EditSchool = () => {
  const school = useSelector((state) => state.resume.school
  );
  const dispatch = useDispatch();
  console.log("EditCollage");
  return (
    <EducationSingleContainer>
      <EducationInput
        value={school.course}
        onChange={(e) => dispatch(changeSchoolCourse(e.target.value))}
        placeholder="Enter Your Course"
      />
      <Container>
        <CollageName
          value={school.name}
          onChange={(e) => dispatch(changeSchoolName(e.target.value))}
          placeholder=" Enter your Collage Name"
        />
        <CollageName
          value={school.date}
          onChange={(e) => dispatch(changeSchoolDate(e.target.value))}
          placeholder=" Enter Your Graducation Date"
        />
      </Container>
      <EducationParaEdit
        value={school.details}
        maxLength={240}
        onChange={(e) => dispatch(changeSchoolData(e.target.value))} placeholder="Enter Details..."
      />
    </EducationSingleContainer>
  );
};

export default EditSchool;
