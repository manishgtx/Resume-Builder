import { useDispatch,useSelector } from 'react-redux';
import { changeName } from "../features/Resume/resumeSlice";
import SingleItemContainer from "./styled/SingleItemContainer";
import Single from "./styled/Single";
import Input from "./styled/Input";
const EditName = () => {
  const fullName = useSelector((state)=> state.resume.fullName);
  const dispatch = useDispatch();
  return (
    <SingleItemContainer>
      <Single>Full Name</Single>
      <Input
        value={fullName}
        onChange={(e) => dispatch(changeName(e.target.value))} placeholder="Enter Your Name"
      />
    </SingleItemContainer>
  );
};

export default EditName;
