import React from "react";
import Blob from "../../../components/Blob";
import { replaceTitleRegex } from "../../../configs/regex";
import { ELangs, ILangs } from "../../../interfaces/lang";
import { ICourse } from "../../../models/Course";

interface DetailIntroProps {
  lang: string;
  langs: ILangs;
  courseDetail: ICourse;
}

const DetailIntro: React.FunctionComponent<DetailIntroProps> = (props) => {
  const { lang, langs, courseDetail } = props;

  const renderTitleByLang = () => {
    if (lang === ELangs.ENG) {
      return courseDetail.nameENG;
    } else if (lang === ELangs.VN) {
      return courseDetail.nameVN;
    } else if (lang === ELangs.CH) {
      return courseDetail.nameENG;
    }
  };

  const renderContentByLang = () => {
    if (lang === ELangs.ENG) {
      return courseDetail.descENG;
    } else if (lang === ELangs.VN) {
      return courseDetail.descVN;
    } else if (lang === ELangs.CH) {
      return courseDetail.descENG;
    }
  };

  return (
    <div className="course-detail__intro">
      <div className="intro__content">
        <h3 className="content__title">{renderTitleByLang()}</h3>
        <div className="content__line"></div>
        <p className="content__text">{renderContentByLang()}</p>
        <p className="content__text">
          {langs?.course.detail.intro.content.replace(
            replaceTitleRegex,
            renderTitleByLang() || ""
          )}
        </p>
      </div>
      <div className="intro__img">
        <Blob width="400px" height="400px" background="#fff" className="img__blob" />
        <img className="img" src="../img/product_img.jpg" alt="course" />
      </div>
    </div>
  );
};

export default DetailIntro;
