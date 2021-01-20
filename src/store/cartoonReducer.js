import { createSlice, combineReducers, configureStore } from "@reduxjs/toolkit";
import image1 from "../images/pic1.jpg";
import image2 from "../images/pic2.jpg";
import image3 from "../images/pic3.jpg";

const initialState = [
  {
    id: 1,
    pic: image1,
    displayImage: true,
    content:
      "하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루",
  },
  {
    id: 2,
    pic: image2,
    displayImage: false,
    content:
      "하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루",
  },
  {
    id: 3,
    pic: image3,
    displayImage: false,
    content:
      "하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루",
  },
];

const cartoonReduce = createSlice({
  name: "cartoonSlider",
  initialState,
  reducers: {
    slider: (state, { payload }) =>
      state.map((list) =>
        list.id === payload.id ? { ...list, displayImage: true } : { ...list }
      ),
  },
});

export const { slider } = cartoonReduce.actions;

const cartoonReducer = cartoonReduce.reducer;

const reducer = combineReducers({ cartoonReducer });

export const store = configureStore({ reducer });
