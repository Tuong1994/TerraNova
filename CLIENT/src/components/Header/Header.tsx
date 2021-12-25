import React from "react";
import Logo from "../Logo/Logo";
import HeaderMenu from "./HeaderMenu";
import HeaderLogin from "./HeaderLogin";
import HeaderButton from "./HeaderButton";
import RHeaderMenu from "../../responsive/RHeader/RHeaderMenu";

const Header: React.FunctionComponent<{}> = (props) => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [headerActive, setHeaderActive] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props]);

  return (
    <div
      className={headerActive ? "header header--active" : "header"}
    >
      <Logo className="header__logo" />
      <HeaderMenu />
      <HeaderLogin />
      <HeaderButton setShowMenu={setShowMenu} />
      <RHeaderMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Header;
