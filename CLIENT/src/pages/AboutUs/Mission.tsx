import React from "react";
import * as customHooks from "../../hooks";
import { ILangs } from "../../interfaces/lang";

interface MissionProps {
  langs: ILangs;
}

const Mission: React.FunctionComponent<MissionProps> = (props) => {
  const { langs } = props;

  const [reveal, setReveal] = React.useState<boolean>(false);

  const contentRef = React.useRef<any>(null);

  customHooks.useReveal(contentRef, setReveal);

  return (
    <div
      className={`content__mission ${reveal ? "content__mission--reveal" : ""}`}
      ref={contentRef}
    >
      <h3 className="mission__title">{langs?.aboutUs.mission.title}</h3>
      <div className="mission__content">
        <div className="content__inner">
          <p>{langs?.aboutUs.mission.content}</p>
        </div>
        <div className="content__img">
          <img src="../img/mission.svg" alt="mission" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
