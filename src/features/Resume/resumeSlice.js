import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  image: '',
  fullName: "",
  born: "",
  email: "",
  school: { course: "", name: "", date: "", details: "" },
  collage: { course: "", name: "", date: "", details: "" },
  about:
    "",
};
const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
    changeAbout: (state, action) => {
      state.about = action.payload;
    },
    changeName: (state, action) => {
      state.fullName = action.payload;
    },
    changeDob: (state, action) => {
      state.born = action.payload;
    },
    changeCollageName: (state,action) => {
        state.collage.name = action.payload;
    },
    changeCourse: (state,action) => {
        state.collage.course = action.payload;
    },
    changeDate: (state,action) => {
        state.collage.date = action.payload;
    },
    changeData: (state,action) => {
        state.collage.details = action.payload;
    },
    changeSchoolName: (state,action) => {
      state.school.name = action.payload;
    },
    changeSchoolCourse: (state,action) => {
      state.school.course = action.payload;
    },
    changeSchoolDate: (state,action) => {
      state.school.date = action.payload;
    },
    changeSchoolData: (state,action) => {
      state.school.details = action.payload;
    }
  },
});
export const {setImage,changeAbout,changeName,changeDob,changeCollageName,changeCourse,changeData,changeDate,changeSchoolName,changeSchoolCourse,changeSchoolData,changeSchoolDate} = resumeSlice.actions;
export default resumeSlice.reducer;