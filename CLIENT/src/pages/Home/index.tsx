import React from "react";
import * as customHook from "../../hooks";
import * as Modal from "../../components/Modal";
import { EModalTitle } from "../../interfaces/modalTitle";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import Carousel from "./Carousel";
import Categories from "./Categories";
import PCBanner from "./Banner/PCBanner";
import Partners from "./Partners";
import CourseBanner from "./Banner/CourseBanner";
import Achievement from "./Achievement";
import MovieBanner from "./Banner/MovieBanner";
import Consultation from "./Consultation";

const Home: React.FunctionComponent<{}> = (props) => {
  const { isShowing } = useSelector(
    (state: ReducerState) => state.ModalReducer
  );
  const { consultationDetail } = useSelector(
    (state: ReducerState) => state.UserReducer
  );
  customHook.useLoading();
  
  return (
    <div className="home">
      <Carousel />
      <Categories />
      <PCBanner />
      <Partners />
      <CourseBanner />
      <Achievement />
      <MovieBanner />
      <Consultation />

      <Modal.ModalWrapper isShowing={isShowing}>
        <Modal.Header title={`User ${EModalTitle.default}`} />
        <Modal.Body>
          <div className="body__content">
            <span className="content">Name :</span>
            <span className="content">{consultationDetail?.name}</span>
          </div>
          <div className="body__content">
            <span className="content">Email :</span>
            <span className="content">{consultationDetail?.email}</span>
          </div>
          <div className="body__content">
            <span className="content">Phone :</span>
            <span className="content">{consultationDetail?.phone}</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="footer__content">
            Thank you for your interest, we have received your information, we
            will contact you soon. In the meantime, please visit our website for
            more information.
          </div>
        </Modal.Footer>
      </Modal.ModalWrapper>
    </div>
  );
};

export default Home;
