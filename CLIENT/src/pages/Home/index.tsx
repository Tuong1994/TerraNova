import React from "react";
import * as customHook from "../../hooks";
import Carousel from "./Carousel";
import Categories from "./Categories";
import PCBanner from "./Banner/PCBanner";
import Partners from "./Partners";
import CourseBanner from "./Banner/CourseBanner";
import Achievement from "./Achievement";
import MovieBanner from "./Banner/MovieBanner";
import Consultation from "../../components/Consultation/ConsultationForm";
import ConsultModal from "../../components/Consultation/ConsultModal";
import RHomePartners from "../../responsive/RHomePartners";

const Home: React.FunctionComponent<{}> = (props) => {
  customHook.useLoading();

  return (
    <div className="home">
      <Carousel />
      <Categories />
      <PCBanner />
      <Partners />
      <RHomePartners />
      <CourseBanner />
      <Achievement />
      <MovieBanner />
      <Consultation />

      {/* Modal */}
      <ConsultModal />
    </div>
  );
};

export default Home;
