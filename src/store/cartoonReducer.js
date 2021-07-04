import { createSlice, combineReducers, configureStore } from "@reduxjs/toolkit";
import image1 from "../assets/images/greet.jpg"
import image2 from "../assets/images/stand.jpg"
import image3 from "../assets/images/shy.jpg"
import image4 from "../assets/images/projectIntro.jpg"
import image5 from "../assets/images/break.jpg"
import image6 from "../assets/images/solution.jpg"
import image7 from "../assets/images/goal.jpg"

const initialState = [
  {
    id: 1,
    pic: image1,
    displayImage: true,
    content: `만나서 반갑습니다!+ 저의 포트폴리오에 관심을 가져주셔서 감사합니다.` 
    
  },
  {
    id: 2,
    pic: image2,
    displayImage: false,
    content: "저는 잘 정리된 코드를 좋아하며, 흐름에 뒤쳐지지않는 개발자가 되기위해 노력하는 프론트엔드 개발자입니다.",
  },
  {
    id: 3,
    pic: image3,
    displayImage: false,
    content: "3번째 project페이지를 보시면 1년간의 저의 학습과정을 아래서부터 단계별로 보여드리고자 의도하였습니다.",
  },
  {
    id: 4,
    pic: image4,
    displayImage: false,
    content: "가장 최근에 진행한 빵덕은 첫 팀프로젝트이자 기획초기단계부터 개발까지 모두 참여 할수 있었던 가장 소중한 프로젝트예요.",
  },
  {
    id: 5,
    pic: image5,
    displayImage: false,
    content: "빵덕을 시작하기까지 여러 커뮤니티의 도움을 받아 팀원을 찾아다녔고, 코로나로 인하여 참여도를 끌어올리지 못해 팀이 해체되기도 했었죠...",
  },
  {
    id: 6,
    pic: image6,
    displayImage: false,
    content: "하지만 다시 수소문하여 현재의 소중한 팀원들을 만났고, 같은 문제가 발생하지 않게하기위해 리더선정과 정기미팅을 정하고 문서화는 최소화하여 서로의 부담을 줄이도록 노력하였어요.",
  },
  {
    id: 7,
    pic: image7,
    displayImage: false,
    content: "현재 프로젝트는 진행중이지만, 하나의 서비스가 출시되기까지 다양한직군 팀원들의 의지와 노력 그리고 초기기획과 개발자의 기획이해능력의 중요성을 느끼고 있습니다.",
  },
  {
    id: 8,
    pic: image3,
    displayImage: false,
    content: "개발자로서 진행한 첫 협업이기에 빵덕 얘기밖에 없었던것 같네요.",
  },
  {
    id: 9,
    pic: image2,
    displayImage: false,
    content: "프론트엔드 개발은 디자인과 기능구현이 전부가 아니라고 생각해요. ",
  },
  {
    id: 10,
    pic: image2,
    displayImage: false,
    content: "반복되는 로직을 최대한 줄이고 비효율적인 프로세스를 개선하면서 팀워크 또한 끌어올려야하지요. 많은 고민을 하며 후배에게 도움을 줄수있는 개발자가 되는것이 저의 목표입니다.",
  },
  {
    id: 11,
    pic: image1,
    displayImage: false,
    content: "제 이야기를 들어주셔서 감사해요.+ 함께 일하게 될 날을 기다리고 있겠습니다!",
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
