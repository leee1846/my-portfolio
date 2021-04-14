import { createSlice, combineReducers, configureStore } from "@reduxjs/toolkit";
import image1 from "../images/me.jpg";
import image2 from "../images/pic2.jpg";
import image3 from "../images/pic3.jpg";

const initialState = [
  {
    id: 1,
    pic: image1,
    displayImage: true,
    content: "아직 미완성 포트폴리오입니다. 스크롤을 내리면 화면이 전환됩니다.",
  },
  {
    id: 2,
    pic: image2,
    displayImage: false,
    content: "아직 미완성 포트폴리오입니다. 스크롤을 내리면 화면이 전환됩니다.",
  },
  {
    id: 3,
    pic: image3,
    displayImage: false,
    content: "아직 미완성 포트폴리오입니다. 스크롤을 내리면 화면이 전환됩니다.",
  },
];

const cartoonReduce = createSlice({
  name: "cartoonSlider",
  initialState,
  reducers: {
    slider: (state, { payload }) =>
      state.map((list) =>
        list.id === payload.id
          ? { ...list, displayImage: true }
          : { ...list, displayImage: false }
      ),
  },
});

export const { slider } = cartoonReduce.actions;

const cartoonReducer = cartoonReduce.reducer;

const reducer = combineReducers({ cartoonReducer });

export const store = configureStore({ reducer });
