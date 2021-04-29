import * as Styled from "./StoryImage.style";

type StoryImageType = {
  image: string;
  displayImage: boolean;
};

const StoryImage: React.FC<StoryImageType> = ({ image, displayImage }) => {
  return (
    <Styled.PicContainer displayImage={displayImage}>
      <Styled.Image src={image} />
    </Styled.PicContainer>
  );
};

export default StoryImage;
