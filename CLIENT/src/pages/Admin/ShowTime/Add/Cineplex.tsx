import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { ICineplex } from "../../../../models/Cineplex";
import { ICinema } from "../../../../models/Cinema";
import { ITheater } from "../../../../models/Theater";

interface CineplexFieldsProps {
  langs: ILangs;
  cineplexes: ICineplex[];
  cinemas: ICinema[];
  theaters: ITheater[];
  isReset: boolean;
  setCinexplexId: React.Dispatch<React.SetStateAction<string>>;
}

const CineplexFields: React.FunctionComponent<CineplexFieldsProps> = (
  props
) => {
  const {
    langs,
    cineplexes,
    cinemas,
    theaters,
    isReset,
    setCinexplexId,
  } = props;

  const optionCineplex = cineplexes.map((c) => {
    return { label: c.name, value: c.id, icon: `/img/logo/${c.logo}` };
  });

  return (
    <Card.Wrapper className="item__inner item__cineplex">
      <h3 className="inner__title">{langs?.admin.showTime.subTitle_1}</h3>
      <Field
        name="cineplexId"
        component={FormControl.Select}
        label={langs?.form.cineplex}
        option={optionCineplex}
        isReset={isReset}
        groupClassName="inner__control"
        onChange={(value: any) => {
          setCinexplexId(value);
        }}
      />
      <Field
        name="cinemaId"
        component={FormControl.Select}
        label={langs?.form.cinema}
        data={cinemas}
        dataLabel="name"
        dataValue="id"
        groupClassName="inner__control"
        isReset={isReset}
        isPaging
        total={cinemas?.length}
        limits={10}
      />
      <Field
        name="theaterId"
        component={FormControl.Select}
        label={langs?.form.theater}
        data={theaters}
        dataLabel="name"
        dataValue="id"
        groupClassName="inner__control"
        isReset={isReset}
        isPaging
        total={theaters?.length}
        limits={10}
      />
    </Card.Wrapper>
  );
};

export default CineplexFields;
