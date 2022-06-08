import React from "react";
import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import ContentHeader from "../../../../components/ContentHeader";
import Button from "../../../../components/Button";
import ButtonLoading from "../../../../components/Loading/ButtonLoading";
import InfoFields from "./Info";
import DescFields from "./Desc";
import StatusFields from "./Status";
import SourceFields from "./Source";
import TrailerFields from "./Trailer";
import utils from "../../../../utils";

const AddMovie: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const [isReset, setIsReset] = React.useState<boolean>(false);
  const [imgUpload, setImgUpload] = React.useState<any>(null);

  const langs = utils.changeLang(lang);
  const options = utils.getOptionByLang(lang);

  const handleSelectedImg = (file: any) => {
    setImgUpload(file);
  };

  const initialValues = {
    nameVN: "",
    nameENG: "",
    nameCH: "",
    descVN: "",
    descENG: "",
    descCH: "",
    duration: "",
    trailer: "",
    releaseDay: "",
    actors: "",
    director: "",
    status: 0,
    type: 0,
    country: 0,
  };

  const handleSubmit = (values: any, action: any) => {
    console.log(values);
  };

  return (
    <div className="add-movie">
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          return (
            <Form autoComplete="off">
              <ContentHeader
                name={langs?.admin.pageTitle.addMovie || ""}
                right={() => {
                  return (
                    <Button
                      type="submit"
                      className={`button--submit ${
                        buttonLoading ? "button--disabled" : ""
                      }`}
                    >
                      <ButtonLoading />
                      <span>{langs?.button.save}</span>
                    </Button>
                  );
                }}
              />
              <div className="add-movie__wrapper">
                <div className="wrapper__item">
                  <InfoFields
                    langs={langs}
                    isReset={isReset}
                    onSelectImg={handleSelectedImg}
                  />
                  <DescFields langs={langs} />
                  <TrailerFields langs={langs} />
                </div>
                <div className="wrapper__item">
                  <StatusFields
                    langs={langs}
                    isReset={isReset}
                    options={options}
                  />
                  <SourceFields
                    langs={langs}
                    isReset={isReset}
                    options={options}
                  />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddMovie;
