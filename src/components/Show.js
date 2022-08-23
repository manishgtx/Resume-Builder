import EducationContainer from './EducationContainer';
// Styled Components
import Hr from "./styled/Hr";
import Para from "./styled/Para";
import Container from "./styled/Container";
import MainHeading from "./styled/MainHeading";
import BoldText from "./styled/BoldText";
import HeadingTwo from "./styled/HeadingTwo";

import End from './End';
import Category from "./styled/Category";
import SingleInfo from "./SingleInfo";
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { useSelector } from 'react-redux/es/exports';

const Show = () => {
  const { image, fullName, about, born } = useSelector((state) => state.resume);
  console.log('Show');
  return (
    <div className="main-container">
      <Container>
        <img src={image} className="profile" alt="" />
        <div className="para">
          <MainHeading>
            Hi, i'm <BoldText>{fullName}!</BoldText>
          </MainHeading>
          <Hr color="#09aeac" />
          <HeadingTwo>Web Developer</HeadingTwo>
          <Para>{about}</Para>
        </div>
      </Container>
      <Category>Profile</Category>
      <SingleInfo type="Full Name" value={fullName} />
      <SingleInfo type="DOB" value={born} />
      <EducationContainer />
      <End />
      <Link to="/" className="link-container">
        <FiEdit className="link" />
        <h4>Edit</h4>
      </Link>
    </div>
  );
}

export default Show;