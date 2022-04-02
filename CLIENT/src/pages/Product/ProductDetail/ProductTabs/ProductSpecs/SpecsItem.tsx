import React from "react";
import { IAccessories } from "../../../../../models/Product";

interface SpecsItemProps {
  product: IAccessories;
}

const SpecsItem: React.FunctionComponent<SpecsItemProps> = (props) => {
  const { product } = props;

  return (
    <React.Fragment>
      {product?.totalCores && (
        <tr className="table__row">
          <td className="table__col">Total cores</td>
          <td className="table__col">{product?.totalCores} Core</td>
        </tr>
      )}
      {product?.totalThreads && (
        <tr className="table__row">
          <td className="table__col">Total threads</td>
          <td className="table__col">{product?.totalThreads} Thread</td>
        </tr>
      )}
      {product?.baseFrequency && (
        <tr className="table__row">
          <td className="table__col">Base frequency</td>
          <td className="table__col">{product?.baseFrequency}</td>
        </tr>
      )}
      {product?.cache && (
        <tr className="table__row">
          <td className="table__col">Cache</td>
          <td className="table__col">{product?.cache}</td>
        </tr>
      )}
      {product?.busSpeed && (
        <tr className="table__row">
          <td className="table__col">Bus speed</td>
          <td className="table__col">{product?.busSpeed}</td>
        </tr>
      )}
      {product?.tdp && (
        <tr className="table__row">
          <td className="table__col">TDP</td>
          <td className="table__col">{product?.tdp}</td>
        </tr>
      )}
      {product?.socket && (
        <tr className="table__row">
          <td className="table__col">Socket</td>
          <td className="table__col">{product?.socket}</td>
        </tr>
      )}
      {product?.chipset && (
        <tr className="table__row">
          <td className="table__col">Chipset</td>
          <td className="table__col">{product?.chipset}</td>
        </tr>
      )}
      {product?.ram && (
        <tr className="table__row">
          <td className="table__col">Ram</td>
          <td className="table__col">{product?.ram}</td>
        </tr>
      )}
      {product?.capacity && (
        <tr className="table__row">
          <td className="table__col">Capacity</td>
          <td className="table__col">{product?.capacity}</td>
        </tr>
      )}
      {product?.ramBus && (
        <tr className="table__row">
          <td className="table__col">Ram bus</td>
          <td className="table__col">Bus {product?.ramBus}</td>
        </tr>
      )}
      {product?.type && (
        <tr className="table__row">
          <td className="table__col">Type</td>
          <td className="table__col">{product?.type}</td>
        </tr>
      )}
      {product?.size && (
        <tr className="table__row">
          <td className="table__col">Size</td>
          <td className="table__col">{product?.size}</td>
        </tr>
      )}
      {product?.model && (
        <tr className="table__row">
          <td className="table__col">Model</td>
          <td className="table__col">{product?.model}</td>
        </tr>
      )}
      {product?.outputCapacity && (
        <tr className="table__row">
          <td className="table__col">Output capacity</td>
          <td className="table__col">{product?.outputCapacity}</td>
        </tr>
      )}
      {product?.efficiency && (
        <tr className="table__row">
          <td className="table__col">Effciency</td>
          <td className="table__col">{product?.efficiency}</td>
        </tr>
      )}
      {product?.graphicEngine && (
        <tr className="table__row">
          <td className="table__col">Graphic engine</td>
          <td className="table__col">{product?.graphicEngine}</td>
        </tr>
      )}
      {product?.videoMemory && (
        <tr className="table__row">
          <td className="table__col">Video memory</td>
          <td className="table__col">{product?.videoMemory}</td>
        </tr>
      )}
      {product?.cudaCore && (
        <tr className="table__row">
          <td className="table__col">CUDA Core</td>
          <td className="table__col">{product?.cudaCore} CUDA</td>
        </tr>
      )}
      {product?.memoryInterface && (
        <tr className="table__row">
          <td className="table__col">Memory interface</td>
          <td className="table__col">{product?.memoryInterface}</td>
        </tr>
      )}
    </React.Fragment>
  );
};

export default SpecsItem;
