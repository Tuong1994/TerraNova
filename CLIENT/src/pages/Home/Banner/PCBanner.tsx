
import React from "react";
import * as customHook from "../../../hooks/index";

const PCBanner: React.FunctionComponent<{}> = (props) => {
  const [reveal, setReveal] = React.useState<boolean>(false);
  const bannerRef = React.useRef<any>(null);
  customHook.useReveal(bannerRef, setReveal)

  return (
    <div className="home__pc-banner" ref={bannerRef}>
      <ul className="pc-banner__list">
        <li className={reveal ? "list list--active-1" : "list"}>
          Processor Unit (CPU)
        </li>
        <li className={reveal ? "list list--active-2" : "list"}>Mainboard</li>
        <li className={reveal ? "list list--active-3" : "list"}>
          Random Access Memory (RAM)
        </li>
        <li className={reveal ? "list list--active-3" : "list"}>
          Hard disk drive (HDD, SSD)
        </li>
        <li className={reveal ? "list list--active-4" : "list"}>
          Graphics Card (VGA)
        </li>
        <li className={reveal ? "list list--active-5" : "list"}>
          Power Supply Units (PSU)
        </li>
        <li className={reveal ? "list list--active-6" : "list"}>Monitor</li>
      </ul>
      <div
        className={
          reveal
            ? "pc-banner__content pc-banner__content--reveal"
            : "pc-banner__content"
        }
      >
        <p>PC ACCESSORIES</p>
        <p>Build your own PC</p>
      </div>
    </div>
  );
};

export default PCBanner;
