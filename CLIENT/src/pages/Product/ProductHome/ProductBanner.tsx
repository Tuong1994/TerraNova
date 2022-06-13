import React from "react";
import { ILangs } from "../../../interfaces/lang";
import TypingText from "../../../components/TypingText";

interface ProductBannerProps {
  langs: ILangs;
}

const ProductBanner: React.FunctionComponent<ProductBannerProps> = (props) => {
  const { langs } = props;

  const textList = [
    "Processor Unit (CPU)",
    "Mainboard",
    "Random Access Memory (RAM)",
    "Hard Disk Drive (HDD, SSD)",
    "Graphics Card (VGA)",
    "Power Supply Units (PSU)",
    "Monitor",
    "Fax machine",
    "Printer",
    "PC Gaming",
    "Laptop",
  ];

  return (
    <div className="product-home__banner">
      <h3 className="banner__intro">{langs?.product.home.banner.title}</h3>
      <TypingText
        textList={textList}
        textClassName="banner__text-dynamic"
        lineClassName="text-dynamic__blink-line"
      />
    </div>
  );
};

export default ProductBanner;
