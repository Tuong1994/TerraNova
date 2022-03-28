import React from "react";
import { IAccessories } from "../../../../models/Product";

interface SpecsItemProps {
  product: IAccessories;
}

const SpecsItem: React.FunctionComponent<SpecsItemProps> = (props) => {
  const { product } = props;

  return (
    <React.Fragment>
      {product?.totalCores && (
        <div className="specs__item">
          <img
            className="item__icon"
            src="../img/icon/cpu.png"
            alt="icon"
          />
          <div className="item__content">{product?.totalCores} Core</div>
        </div>
      )}
      {product?.totalThreads && (
        <div className="specs__item">
          <img
            className="item__icon"
            src="../img/icon/cpu.png"
            alt="icon"
          />
          <div className="item__content">{product?.totalThreads} Thread</div>
        </div>
      )}
      {product?.baseFrequency && (
        <div className="specs__item">
          <img
            className="item__icon"
            src="../img/icon/extension.png"
            alt="icon"
          />
          <div className="item__content">{product?.baseFrequency}</div>
        </div>
      )}
      {product?.cache && (
        <div className="specs__item">
          <img
            className="item__icon"
            src="../img/icon/ram.png"
            alt="icon"
          />
          <div className="item__content">{product?.cache}</div>
        </div>
      )}
      {product?.busSpeed && (
        <div className="specs__item">
          <img
            className="item__icon"
            src="../img/icon/extension.png"
            alt="icon"
          />
          <div className="item__content">{product?.busSpeed}</div>
        </div>
      )}
      {product?.tdp && (
        <div className="specs__item">
          <img
            className="item__icon"
            src="../img/icon/power.png"
            alt="icon"
          />
          <div className="item__content">{product?.tdp}</div>
        </div>
      )}
      {product?.socket && (
        <div className="specs__item">
          <img
            className="item__icon"
            src="../img/icon/mainboard.png"
            alt="icon"
          />
          <div className="item__content">{product?.socket}</div>
        </div>
      )}
      {product?.chipset && (
        <div className="specs__item">
          <img
            className="item__icon"
            src="../img/icon/mainboard.png"
            alt="icon"
          />
          <div className="item__content">{product?.chipset}</div>
        </div>
      )}
      {product?.ram && (
        <div className="specs__item">
          <img
            className="item__icon"
            src="../img/icon/ram.png"
            alt="icon"
          />
          <div className="item__content">{product?.ram}</div>
        </div>
      )}
      {product?.capacity && (
        <div className="specs__item">
          <img
            className="item__icon"
            src="../img/icon/ram.png"
            alt="icon"
          />
          <div className="item__content">{product?.capacity}</div>
        </div>
      )}
      {product?.ramBus && (
        <div className="specs__item">
          <img
            className="item__icon"
            src="../img/icon/extension.png"
            alt="icon"
          />
          <div className="item__content">Bus {product?.ramBus}</div>
        </div>
      )}
      {product?.type && (
        <div className="specs__item">
          <img
            className="item__icon"
            src="../img/icon/cpu.png"
            alt="icon"
          />
          <div className="item__content">{product?.type}</div>
        </div>
      )}
      {product?.size && (
        <div className="specs__item">
          <img
            className="item__icon"
            src="../img/icon/harddisk.png"
            alt="icon"
          />
          <div className="item__content">{product?.size}</div>
        </div>
      )}
      {product?.model && (
        <div className="specs__item">
          <img
            className="item__icon"
            src="../img/icon/cpu.png"
            alt="icon"
          />
          <div className="item__content">{product?.model}</div>
        </div>
      )}
      {product?.outputCapacity && (
        <div className="specs__item">
          <img
            className="item__icon"
            src="../img/icon/power.png"
            alt="icon"
          />
          <div className="item__content">{product?.outputCapacity}</div>
        </div>
      )}
      {product?.efficiency && (
        <div className="specs__item">
          <img
            className="item__icon"
            src="../img/icon/fan.png"
            alt="icon"
          />
          <div className="item__content">{product?.efficiency}</div>
        </div>
      )}
      {product?.graphicEngine && (
        <div className="specs__item">
          <img
            className="item__icon"
            src="../img/icon/mainboard.png"
            alt="icon"
          />
          <div className="item__content">{product?.graphicEngine}</div>
        </div>
      )}
      {product?.videoMemory && (
        <div className="specs__item">
          <img className="item__icon" src="../img/icon/ram.png" alt="icon" />
          <div className="item__content">{product?.videoMemory}</div>
        </div>
      )}
      {product?.cudaCore && (
        <div className="specs__item">
          <img className="item__icon" src="../img/icon/cpu.png" alt="icon" />
          <div className="item__content">{product?.cudaCore} CUDA</div>
        </div>
      )}
      {product?.memoryInterface && (
        <div className="specs__item">
          <img
            className="item__icon"
            src="../img/icon/extension.png"
            alt="icon"
          />
          <div className="item__content">{product?.memoryInterface}</div>
        </div>
      )}
    </React.Fragment>
  );
};

export default SpecsItem;
