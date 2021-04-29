import * as Styled from "./Nav.style";
import Link from "next/link";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

type NavProps = {
  href: string;
  icon: SvgIconProps;
};

const Nav: React.FC<NavProps> = ({ children, href, icon }) => {
  return (
    <Link href={href}>
      <Styled.Links>
        <Styled.IconBox>
          <Styled.Icon icon={icon} />
        </Styled.IconBox>
        <Styled.Pocket>{children}</Styled.Pocket>
      </Styled.Links>
    </Link>
  );
};

export default Nav;
