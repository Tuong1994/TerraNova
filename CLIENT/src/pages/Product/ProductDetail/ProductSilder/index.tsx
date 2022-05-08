import React from "react";
import Carousel from "react-gallery-carousel";
import { IProduct } from "../../../../models/Product";
import "react-gallery-carousel/dist/index.css";

interface ProductSliderProps {
  product: IProduct;
}

const ProductSlider: React.FunctionComponent<ProductSliderProps> = (props) => {
  const { product } = props;

  const imageList = [
    {
      id: 1,
      src: "../img/logo/aorus_logo.jpg",
    },
    {
      id: 2,
      src: "../img/logo/rog-strix_logo.jpg",
    },
    {
      id: 3,
      src: "../img/logo/phantom_logo.jpg",
    },
  ];

  const [images, setImages] = React.useState<any>([]);

  React.useEffect(() => {
    if (product && product.image) {
      if (Array.isArray(product.image)) {
        const imgs = product.image.map((i, index) => {
          return { id: index + 1, src: i };
        });
        setImages(imgs);
      }
    } else {
      setImages(imageList);
    }
  }, [product]);

  const setting = {
    thumbnailHeight: "20%",
    hasThumbnailsAtMax: false,
    canAutoPlay: true,
    isAutoPlaying: true,
    autoPlayInterval: 2000,
    leftIcon: false,
    rightIcon: false,
    playIcon: false,
    pauseIcon: false,
    maxIcon: false,
    hasIndexBoard: false,
  };
  return (
    <div className="content__slider">
      <Carousel images={images} className="slider__wrapper" {...setting} />
    </div>
  );
};

export default ProductSlider;
