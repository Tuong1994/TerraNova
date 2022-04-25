import React from "react";
import * as Modal from "../../../../components/Modal";
import * as Card from "../../../../components/Card";
import { history } from "../../../../App";
import { useDispatch, useSelector } from "react-redux";
import { EModalActionTypes } from "../../../../redux/actionTypes/ModalActionTypes";
import { ReducerState } from "../../../../redux/store";
import { ELangs, ILangs } from "../../../../interfaces/lang";
import { ICourse } from "../../../../models/Course";
import { Link } from "react-router-dom";
import moment from "moment";

interface RegisterModalProps {
  lang: string;
  langs: ILangs;
  courseDetail: ICourse;
}

const RegisterModal: React.FunctionComponent<RegisterModalProps> = (props) => {
  const { lang, langs, courseDetail } = props;

  const { isRegister } = useSelector(
    (state: ReducerState) => state.ModalReducer
  );
  const { courseOrder } = useSelector(
    (state: ReducerState) => state.CourseOrderReducer
  );

  const dispatch = useDispatch();

  const handleHideModal = () => {
    dispatch({
      type: EModalActionTypes.CLOSE_REGISTER_MODAL,
    });
    history.push("/course");
  };

  const renderCourseName = () => {
    if (lang === ELangs.ENG) {
      return courseDetail.nameENG;
    } else if (lang === ELangs.VN) {
      return courseDetail.nameVN;
    } else if (lang === ELangs.CH) {
      return courseDetail.nameCH;
    }
  };

  const renderAddress = (i: any) => {
    if (i === 1) {
      return langs?.course.detail.register.form.address_1;
    } else if (i === 2) {
      return langs?.course.detail.register.form.address_2;
    }
  };

  const renderSchedule = (i: any) => {
    if (i === 1) {
      return `${langs?.course.detail.register.schedule.mon} + ${langs?.course.detail.register.schedule.wed} + ${langs?.course.detail.register.schedule.fri}`;
    } else if (i === 2) {
      return `${langs?.course.detail.register.schedule.tue} + ${langs?.course.detail.register.schedule.thur} + ${langs?.course.detail.register.schedule.sat}`;
    } else if (i === 3) {
      return `${langs?.course.detail.register.schedule.sat} + ${langs?.course.detail.register.schedule.sun}`;
    }
  };

  return (
    <Modal.Wrapper
      isShowing={isRegister}
      onHide={handleHideModal}
      className="course-detail__modal"
    >
      <Modal.Header
        title={langs?.course.detail.register.modal.title}
        onHide={handleHideModal}
      />
      <Modal.Body className="modal__content">
        <Card.Wrapper className="content__card">
          <h3 className="card__title">
            {langs?.course.detail.register.modal.contentTitle_1}
          </h3>
          <ul className="card__list">
            <li>
              <div className="list__content">
                <p>{langs?.form.name} : </p>
                <p>{courseOrder.register?.name}</p>
              </div>
            </li>
            <li>
              <div className="list__content">
                <p>{langs?.form.email} : </p>
                <p>{courseOrder.register?.email}</p>
              </div>
            </li>
            <li>
              <div className="list__content">
                <p>{langs?.form.phone} : </p>
                <p>{courseOrder.register?.phone}</p>
              </div>
            </li>
          </ul>
        </Card.Wrapper>

        <Card.Wrapper className="content__card">
          <h3 className="card__title">
            {langs?.course.detail.register.modal.contentTitle_2}
          </h3>
          <ul className="card__list">
            <li>
              <div className="list__content">
                <p>{langs?.course.detail.register.modal.courseName} : </p>
                <p>{renderCourseName()}</p>
              </div>
            </li>
            <li>
              <div className="list__content">
                <p>{langs?.course.detail.register.modal.address} : </p>
                <p>{renderAddress(Number(courseOrder.register?.branch))}</p>
              </div>
            </li>
            <li>
              <div className="list__content">
                <p>{langs?.course.detail.register.modal.schedule} : </p>
                <p>{renderSchedule(Number(courseOrder.register?.dateType))}</p>
              </div>
            </li>
            <li>
              <div className="list__content">
                <p>{langs?.course.detail.register.modal.openingDate} : </p>
                <p>{moment(new Date()).format("DD/MM/YYYY")}</p>
              </div>
            </li>
          </ul>
        </Card.Wrapper>
      </Modal.Body>
      <Modal.Footer className="modal__button">
        <p>{langs?.course.detail.register.modal.note}</p>
        <Link to="/course" className="button--round" onClick={handleHideModal}>
          {langs?.button.returnCoursePage}
        </Link>
      </Modal.Footer>
    </Modal.Wrapper>
  );
};

export default RegisterModal;
