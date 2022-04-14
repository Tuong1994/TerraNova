import React from "react";
import { ILangs } from "../../interfaces/lang";

interface VisionProps {
  langs: ILangs;
}

const Vision: React.FunctionComponent<VisionProps> = (props) => {
  const { langs } = props;

  return (
    <div className="content__vision">
      <h3 className="vision__title">{langs?.aboutUs.vision.title}</h3>
      <div className="vision__content">
        <div className="content__img">
          <img src="../img/vision.png" alt="vision" />
        </div>
        <div className="content__inner">
          <p>{langs?.aboutUs.vision.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
