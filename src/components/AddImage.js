import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setImage } from "../features/Resume/resumeSlice";
const AddImage = () => {
    const dispatch = useDispatch();
    const image = useSelector((state) => state.resume.image);
    const [raw, setRaw] = useState("");
    useEffect(() => {
      if (raw) {
        const reader = new FileReader();
        reader.readAsDataURL(raw);
        reader.onloadend = () => {
          dispatch(setImage(reader.result));
        };
      }
    }, [raw]);
    console.log('Add Image');
  return (
    <div className="profile-container">
      <img src={image} className="profile-edit" alt='' />
      <input
        type="file"
        name=""
        id=""
        accept="image/*"
        className="custom-file-input"
        onChange={(e)=> setRaw(e.target.files[0])}
      />
    </div>
  );
}

export default AddImage;