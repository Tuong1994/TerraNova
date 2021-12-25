import React from "react";
import { EModalTitle } from "../../interfaces/modalTitle";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import Carousel from "./Carousel/Carousel";
import Categories from "./Categories/Categories";
import PCBanner from "./Banner/PCBanner";
import Partners from "./Partners/Partners";
import CourseBanner from "./Banner/CourseBanner";
import Achievement from "./Achievement/Achievement";
import MovieBanner from "./Banner/MovieBanner";
import Consultation from "./Consultation/Consultation";
import ModalContainer from "../../components/Modal/ModalContainer";
import ModalHeader from "../../components/Modal/ModalHeader";
import ModalFooter from "../../components/Modal/ModalFooter";
import ModalBody from "../../components/Modal/ModalBody";

const Home: React.FunctionComponent<{}> = (props) => {
  const { isShowing } = useSelector(
    (state: ReducerState) => state.ModalReducer
  );
  const { consultationDetail } = useSelector(
    (state: ReducerState) => state.UserReducer
  );

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

      <ModalContainer isShowing={isShowing}>
        <ModalHeader title={`User ${EModalTitle.default}`} />
        <ModalBody>
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
        </ModalBody>
        <ModalFooter>
          <div className="footer__content">
            Thank you for your interest, we have received your information, we
            will contact you soon. In the meantime, please visit our website for
            more information.
          </div>
        </ModalFooter>
      </ModalContainer>
    </div>
  );
};

export default Home;
