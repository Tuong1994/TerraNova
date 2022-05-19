import React from "react";
import * as Card from "../../components/Card";
import { ILangs } from "../../interfaces/lang";
import { ICineplex } from "../../models/Cineplex";
import Cinema from "./Cinema";
import Cineplex from "./Cineplex";

interface RMovieCinemaProps {
  lang: string;
  langs: ILangs;
  cineplex: ICineplex;
  cineplexes: ICineplex[];
  setCineplexId: React.Dispatch<React.SetStateAction<string>>;
}

const RMovieCinema: React.FunctionComponent<RMovieCinemaProps> = (props) => {
  const { lang, langs, cineplex, cineplexes, setCineplexId } = props;

  const [tabActive, setTabActive] = React.useState<any>({
    active: false,
    index: -1
  });

  return (
    <div className="movie-cinema__responsive">
      <Card.Wrapper className="responsive__card">
        {cineplexes.map((v, index) => {
          return (
            <Cineplex
              key={v.id}
              i={v}
              index={index}
              lang={lang}
              langs={langs}
              tabActive={tabActive}
              cineplex={cineplex}
              setTabActive={setTabActive}
              setCineplexId={setCineplexId}
            />
          );
        })}
      </Card.Wrapper>
    </div>
  );
};

export default RMovieCinema;
