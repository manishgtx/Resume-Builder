import MainHeading from "./styled/MainHeading";
import BoldText from "./styled/BoldText";
import { useSelector } from "react-redux/es/exports";
const TagLine = () => {
    console.log('TagLine');
    const fullName = useSelector((state)=> state.resume.fullName)
  return (
    <MainHeading>
      Hi, i'm <BoldText>{fullName || 'Sarah Rex'}!</BoldText>
    </MainHeading>
  );
};

export default TagLine;
