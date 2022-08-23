import { useDispatch,useSelector } from 'react-redux';
import { changeDob } from "../features/Resume/resumeSlice";
import SingleItemContainer from "./styled/SingleItemContainer";
import Single from "./styled/Single";
import Input from "./styled/Input";

const Editdob = () => {
  const dob = useSelector((state)=> state.resume.born);
  const dispatch = useDispatch();
  console.log('Dob');
  return (
    <SingleItemContainer>
      <Single>DOB</Single>
      <Input
        value={dob}
        onChange={(e) => dispatch(changeDob(e.target.value))} placeholder="Enter your Date Of Birth"
      />
    </SingleItemContainer>
  );
}

export default Editdob;