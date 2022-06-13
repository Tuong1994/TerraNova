import React from "react";
import { Link } from "react-router-dom";
import { ILangs } from "../../../interfaces/lang";

interface ProductLaptopProps {
  langs: ILangs;
}

const ProductLaptop: React.FunctionComponent<ProductLaptopProps> = (props) => {
  const { langs } = props;

  const list = [
    {
      id: 1,
      src: "/img/product/asus.png",
      title: "ASUS",
    },
    {
      id: 2,
      src: "/img/product/gigabyte.jpg",
      title: "GIGEBYTE",
    },
    {
      id: 3,
      src: "/img/product/msi.jpg",
      title: "MSI",
    },
    {
      id: 4,
      src: "/img/product/dell.jpg",
      title: "DELL",
    },
    {
      id: 5,
      src: "/img/product/hp.jpg",
      title: "HP",
    },
    {
      id: 6,
      src: "/img/product/acer.jpg",
      title: "ACER",
    },
  ];

  return (
    <div className="product-home__laptop">
      <h3 className="laptop__title">{langs?.product.home.laptop.title}</h3>
      <div className="laptop__list">
        {list.map((l) => {
          return (
            <div key={l.id} className="list__item">
              <div className="item__image">
                <img src={l.src} alt={l.title} />
                <p>{l.title}</p>
              </div>
              <div className="item__action">
                <Link to="/product" className="button--fill-white action__link">
                  {langs?.button.buy}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductLaptop;
