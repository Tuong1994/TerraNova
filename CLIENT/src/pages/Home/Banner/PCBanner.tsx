import React from "react";
import * as customHook from "../../../hooks/index";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import utils from "../../../utils";

const PCBanner: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  
  const [reveal, setReveal] = React.useState<boolean>(false);

  const bannerRef = React.useRef<any>(null);

  const langs = utils.changeLang(lang);

  customHook.useReveal(bannerRef, setReveal);

  return (
    <div className="home__pc-banner" ref={bannerRef}>
      <ul className="pc-banner__list">
        <li className={reveal ? "list list--active-1" : "list"}>
          {langs?.home.banner.cpu}
        </li>
        <li className={reveal ? "list list--active-2" : "list"}>
          {langs?.home.banner.mainboard}
        </li>
        <li className={reveal ? "list list--active-3" : "list"}>
          {langs?.home.banner.ram}
        </li>
        <li className={reveal ? "list list--active-3" : "list"}>
          {langs?.home.banner.hdd}
        </li>
        <li className={reveal ? "list list--active-4" : "list"}>
          {langs?.home.banner.vga}
        </li>
        <li className={reveal ? "list list--active-5" : "list"}>
          {langs?.home.banner.psu}
        </li>
        <li className={reveal ? "list list--active-6" : "list"}>
          {langs?.home.banner.monitor}
        </li>
      </ul>
      <div
        className={
          reveal
            ? "pc-banner__content pc-banner__content--reveal"
            : "pc-banner__content"
        }
      >
        <p>{langs?.home.banner.title_1}</p>
        <p>{langs?.home.banner.content_1}</p>
      </div>
    </div>
  );
};

export default PCBanner;
