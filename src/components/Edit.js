
// Main Components
import EditBio from './EditBio';
import ProfileContainer from './ProfileContainer';
import EditCollage from './EditCollage';
import EditSchool from './EditSchool';
// Styled Components
import Category from './styled/Category';

import End from './End';

import { Link } from 'react-router-dom';
import { BsDisplay } from "react-icons/bs";
// import {useSelector} from 'react-redux';

const Edit = () => {
  // const name = useSelector((state)=> state.resume.name);
  console.log('Edit');

  return (
    <div className="main-container">
      <EditBio/>
        <ProfileContainer/>
      <Category>Education</Category>
      <EditCollage/>
      <EditSchool/>
      <End />
      <Link to="/show" className="link-container">
        <BsDisplay className="link" />
        <h4>Show</h4>
      </Link>
    </div>
  );
}

export default Edit;