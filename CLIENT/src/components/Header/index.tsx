import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import Logo from "../Logo";
import HeaderMenu from "./HeaderMenu";
import HeaderLogin from "./HeaderLogin";
import HeaderButton from "./HeaderButton";
import HeaderFeatures from "./HeaderFeatures";
import RHeaderMenu from "../../responsive/RHeader";

const Header: React.FunctionComponent<{}> = (props) => {
  const { movieId } = useSelector((state: ReducerState) => state.MovieReducer);

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

  const styled = () => {
    if (document.location.pathname === "/") {
      return { backgroundColor: "#4272d8" };
    } else if (
      document.location.pathname !== "/" &&
      document.location.pathname !== "/movie" &&
      document.location.pathname !== `/movieDetail/${movieId}`
    ) {
      return { backgroundColor: "rgba(66, 114, 216, 0.9)" };
    } else {
      return {};
    }
  };

  return (
    <div
      className={headerActive ? "header header--active" : "header"}
      style={styled()}
    >
      <Logo className="header__logo" />
      <HeaderMenu />
      <div className="header__features">
        <HeaderLogin />
        <HeaderFeatures movieId={movieId} />
      </div>
      <HeaderButton setShowMenu={setShowMenu} />
      <RHeaderMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Header;
