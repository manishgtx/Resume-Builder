import EditName from "./EditName";
import Category from "./styled/Category";
import Editdob from "./Editdob";
const ProfileContainer = () => {
  return (
    <>
      <Category>Profile</Category>
      <EditName />
      <Editdob />
    </>
  );
};

export default ProfileContainer;
