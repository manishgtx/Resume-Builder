import Category from "./styled/Category";
import EducationSingleInfo from "./EducationSingleInfo";
import { useSelector } from "react-redux/es/exports";
const EducationContainer = () => {
    const {collage,school} = useSelector((state)=> state.resume);
  return (
    <>
      <Category>Education</Category>
      <EducationSingleInfo {...collage}/>
      <EducationSingleInfo {...school}/>
    </>
  );
};

export default EducationContainer;
