import React from "react";
import { ILangs } from "../../interfaces/lang";

interface WarrantyBannerProps {
  langs: ILangs;
}

const WarrantyBanner: React.FunctionComponent<WarrantyBannerProps> = (
  props
) => {
  const { langs } = props;

  return (
    <div className="warranty__banner">
      <div className="banner__content">
        <h3>{langs?.warranty.banner.title}</h3>
        <p>{langs?.warranty.banner.content_1}</p>
        <p>{langs?.warranty.banner.content_2}</p>
      </div>
      <div className="banner__image">
        <img src="/img/warranty/fix.png" alt="fix" />
      </div>
    </div>
  );
};

export default WarrantyBanner;
