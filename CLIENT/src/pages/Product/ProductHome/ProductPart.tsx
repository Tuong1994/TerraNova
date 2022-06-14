import React from "react";
import { Link } from "react-router-dom";
import { ILangs } from "../../../interfaces/lang";

interface ProductPartProps {
  langs: ILangs;
}

const ProductPart: React.FunctionComponent<ProductPartProps> = (props) => {
  const { langs } = props;

  const linkArr = [
    {
      id: "cpu",
      name: langs?.headerMenu.cpu,
    },
    {
      id: "mainboard",
      name: langs?.headerMenu.mainboard,
    },
    {
      id: "ram",
      name: langs?.headerMenu.ram,
    },
    {
      id: "hdd",
      name: langs?.headerMenu.hdd,
    },
    {
      id: "ssd",
      name: langs?.headerMenu.ssd,
    },
    {
      id: "vga",
      name: langs?.headerMenu.vga,
    },
    {
      id: "psu",
      name: langs?.headerMenu.psu,
    },
  ];

  return (
    <div className="product-home__part">
      <h3 className="part__title">{langs?.product.home.part.title}</h3>

      <div className="part__action">
        {linkArr.map((link) => {
          return (
            <Link
              to={`/productByCategory/${link.id}`}
              key={link.id}
              className="button--fill-white action__link"
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      
      <div className="part__image">
        <img src="/img/product/accessories.png" alt="part" />
      </div>
    </div>
  );
};

export default ProductPart;
