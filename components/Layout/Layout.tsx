import * as Styled from "./Layout.style";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Styled.Container>{children}</Styled.Container>
    </>
  );
};

export default Layout;
