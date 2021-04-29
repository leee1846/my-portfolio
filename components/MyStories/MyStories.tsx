import * as Styled from "./MyStories.style";
import StoryContent from "../StoryContent/StoryContent";
import StoryImage from "../StoryImage/StoryImage";
import { useSelector } from "react-redux";
import { ReducerType } from "../../stores/rootReducer";
import { cartoonsType } from "../../stores/cartoons/cartoonsReducer";

const MyStories = () => {
  const cartoons = useSelector<ReducerType, cartoonsType[]>(
    (state) => state.cartoonsReducer
  );

  return (
    <>
      <Styled.Section>
        <Styled.ImageContainer>
          {cartoons.map((data) => (
            <StoryImage
              key={data.id}
              image={data.pic}
              displayImage={data.displayImage}
            />
          ))}
        </Styled.ImageContainer>
        <Styled.ContentContainer>
          {cartoons.map((data, index) => {
            return (
              <StoryContent
                key={data.id}
                content={data.content}
                index={index}
              />
            );
          })}
        </Styled.ContentContainer>
      </Styled.Section>
    </>
  );
};

export default MyStories;
