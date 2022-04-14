import React from "react";
import { ILangs } from "../../interfaces/lang";
import Logo from "../../components/Logo";

interface BannerProps {
  langs: ILangs;
}

const Banner: React.FunctionComponent<BannerProps> = (props) => {
  const { langs } = props;

  return (
    <div className="about-us__banner">
      <p>{langs?.aboutUs.banner.title}</p>
      <Logo className="banner__logo" />
    </div>
  );
};

export default Banner;
