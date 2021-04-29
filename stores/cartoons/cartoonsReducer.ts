import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type cartoonsType = {
  id: number;
  pic: string;
  displayImage: boolean;
  content: string;
};

const initialState: cartoonsType[] = [
  {
    id: 1,
    pic: "/images/me.jpg",
    displayImage: true,
    content: "아직 미완성 포트폴리오입니다. 스크롤을 내리면 화면이 전환됩니다.",
  },
  {
    id: 2,
    pic: "/images/pic2.jpg",
    displayImage: false,
    content: "아직 미완성 포트폴리오입니다. 스크롤을 내리면 화면이 전환됩니다.",
  },
  {
    id: 3,
    pic: "/images/pic3.jpg",
    displayImage: false,
    content: "아직 미완성 포트폴리오입니다. 스크롤을 내리면 화면이 전환됩니다.",
  },
];

export const cartoonsReducer = createSlice({
  name: "cartoons",
  initialState,
  reducers: {
    slider: (state, { payload }: PayloadAction<{ id: number }>) =>
      state.map((item) =>
        item.id === payload.id
          ? { ...item, displayImage: true }
          : { ...item, displayImage: false }
      ),
  },
});

export const { slider } = cartoonsReducer.actions;
export default cartoonsReducer.reducer;
