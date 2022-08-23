import Container from "./styled/Container";
import TagLine from "./TagLine";
import HeadingTwo from "./styled/HeadingTwo";
import Hr from "./styled/Hr";
import AddImage from "./AddImage";
import EditPara from "./EditPara";
const EditBio = () => {
  return (
    <Container>
      <AddImage />
      <div>
        <TagLine/>
        <Hr color="#09aeac" />
        <HeadingTwo>Web Developer</HeadingTwo>
        <EditPara />
      </div>
    </Container>
  );
};

export default EditBio;
