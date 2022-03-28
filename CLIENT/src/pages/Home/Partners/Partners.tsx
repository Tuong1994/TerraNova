import React from "react";
import Card from "../../../components/Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partners: React.FunctionComponent = (props) => {
  const cardData = [
    {
      id: 1,
      name: "ASUS",
      imgSrc: "../img/logo/rog-strix_logo.jpg",
      desc: `ASUSTek Computer Inc. Chinese: 華碩電腦股份有限公司; pinyin:
      Huáshuò Diànnǎo Gǔfèn Yǒuxiàn Gōngsī; stylised as ASUSTeK or
      ASUS) is a Taiwanese multinational computer and phone hardware
      and electronics company headquartered in Beitou District,
      Taipei, Taiwan. Its products include desktop computers,
      laptops, netbooks, mobile phones, networking equipment,
      monitors, wi-fi routers, projectors, motherboards, graphics
      cards, optical storage, multimedia products, peripherals,
      wearables, servers, workstations, and tablet PCs. The company
      is also an original equipment manufacturer (OEM).`,
    },
    {
      id: 2,
      name: "GIGABYTE",
      imgSrc: "../img/logo/aorus_logo.jpg",
      desc: `Gigabyte Technology (branded as GIGABYTE or sometimes
        GIGA-BYTE; formally GIGA-BYTE Technology Co., Ltd.) is a
        Taiwanese manufacturer and distributor of computer hardware.
        Gigabyte's principal business is motherboards. It shipped 4.8
        million motherboards in the first quarter of 2015, which
        allowed it to become the leading motherboard vendor. Gigabyte
        also manufactures custom graphics cards and laptop computers
        (including thin and light laptops under its Aero sub-brand).
        In 2010, Gigabyte was ranked 17th in "Taiwan's Top 20 Global
        Brands" by the Taiwan External Trade Development Council.`,
    },
    {
      id: 3,
      name: "MSI",
      imgSrc: "../img/logo/msi-gaming_logo.jpg",
      desc: `Micro-Star International Co., Ltd (MSI; Chinese:
        微星科技股份有限公司) is a Taiwanese multinational information
        technology corporation headquartered in New Taipei City,
        Taiwan. It designs, develops and provides computer hardware,
        related products and services, including laptops, desktops,
        motherboards, graphics cards, All-in-One PCs, servers,
        industrial computers, PC peripherals, car infotainment
        products, etc.`,
    },
    {
      id: 4,
      name: "ASROCK",
      imgSrc: "../img/logo/phantom_logo.jpg",
      desc: `ASRock Inc. (Chinese: 華擎科技股份有限公司; pinyin: Huáqíng Kējì Gǔfèn Yǒuxiàn Gōngsī) is a Taiwanese manufacturer of motherboards, industrial PCs and home theater PCs (HTPC). Led by Ted Hsu, it was founded in 2002 and is currently owned by Taiwanese electronics company Pegatron.`,
    },
    {
      id: 5,
      name: "KINGSTON",
      imgSrc: "../img/logo/hyperx_logo.jpg",
      desc: `Kingston Technology Corporation is an American multinational computer technology corporation that develops, manufactures, sells and supports flash memory products and other computer-related memory products, as well as the HyperX gaming division (now owned by HP).[2] Headquartered in Fountain Valley, California, United States, Kingston Technology employs more than 3,000 employees worldwide as of Q1 2016. The company has manufacturing and logistics facilities in the United States, United Kingdom, Ireland, Taiwan, and China.`,
    },
    {
      id: 6,
      name: "WESTERN",
      imgSrc: "../img/logo/wd_logo.jpg",
      desc: `Western Digital Corporation (WDC, commonly known as Western Digital or WD) is an American computer hard disk drive manufacturer and data storage company, headquartered in San Jose, California. It designs, manufactures and sells data technology products, including storage devices, data center systems and cloud storage services.
      Western Digital has a long history in the electronics industry as an integrated circuit maker and a storage products company. It is one of the largest computer hard disk drive manufacturers, along with producing SSDs and flash memory devices. Its competitors include the data management and storage companies Seagate Technology and Micron Technology`,
    },
    {
      id: 7,
      name: "VIEWSONIC",
      imgSrc: "../img/logo/viewsonic-gaming_logo.jpg",
      desc: `ViewSonic Corporation is a privately held multinational electronics company with headquarters in Brea, California, United States and a research & development center in New Taipei City, Taiwan.
      ViewSonic specializes in visual display hardware—including liquid-crystal displays, projectors, and interactive whiteboards—as well as digital whiteboarding software. The company trades in three key markets: education, enterprise, and entertainment.
      ViewSonic is a nationally certified minority-owned business by the Southern California Minority Supplier Development Council`,
    },
    {
      id: 8,
      name: "LG",
      imgSrc: "../img/logo/lg-gaming_logo.jpg",
      desc: `LG Corporation (or LG Group) (Korean: 엘지), formerly Lucky-Goldstar from 1983 to 1995 (Korean: Leokki Geumseong; Korean: 럭키금성; Hanja: 樂喜金星), is a South Korean multinational conglomerate corporation founded by Koo In-hwoi and managed by successive generations of his family. It is the fourth-largest chaebol in South Korea. Its headquarters are in the LG Twin Towers building in Yeouido-dong, Yeongdeungpo District, Seoul.[3] LG makes electronics, chemicals, and telecommunications products and operates subsidiaries such as LG Electronics, Zenith, LG Display, LG Uplus, LG Innotek, LG Chem, and LG Energy Solution in over 80 countries`,
    },
    {
      id: 9,
      name: "SAMSUNG",
      imgSrc: "../img/logo/samsung-galaxy_logo.jpg",
      desc: `The Samsung Group[3] (or simply Samsung) (Korean: 삼성) is a South Korean multinational manufacturing conglomerate headquartered in Samsung Town, Seoul, South Korea.[1] It comprises numerous affiliated businesses,[1] most of them united under the Samsung brand, and is the largest South Korean chaebol (business conglomerate). As of 2020, Samsung has the 8th highest global brand value.
      Samsung was founded by Lee Byung-chul in 1938 as a trading company. Over the next three decades, the group diversified into areas including food processing, textiles, insurance, securities, and retail. Samsung entered the electronics industry in the late 1960s and the construction and shipbuilding industries in the mid-1970s; these areas would drive its subsequent growth. Following Lee's death in 1987, Samsung was separated into five business groups: Samsung Group, Shinsegae Group, CJ Group and Hansol Group, and Joongang Group.`,
    },
  ];
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    className: "partners__slider",
  };
  return (
    <div className="home__partners">
      <div className="partners__title">
        <h3>Our partners</h3>
      </div>
      <Slider {...settings}>
        <div className="slider__item">
          {cardData.slice(0,3).map((card) => {
            return (
              <Card className="item__card" key={card.id}>
                <div className="card__inner">
                  <div className="inner__front">
                    <div className="front__content">
                      <img
                        className="content__img"
                        src={card.imgSrc}
                        alt={card.name}
                      />
                      <div className="content__inner">
                        <h1 className="inner__title">{card.name}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="inner__back">
                    <h4 className="back__title">{card.name}</h4>
                    <p>{card.desc}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="slider__item">
          {cardData.slice(3,6).map((card) => {
            return (
              <Card className="item__card" key={card.id}>
                <div className="card__inner">
                  <div className="inner__front">
                    <div className="front__content">
                      <img
                        className="content__img"
                        src={card.imgSrc}
                        alt={card.name}
                      />
                      <div className="content__inner">
                        <h1 className="inner__title">{card.name}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="inner__back">
                    <h4 className="back__title">{card.name}</h4>
                    <p>{card.desc}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="slider__item">
          {cardData.slice(6,9).map((card) => {
            return (
              <Card className="item__card" key={card.id}>
                <div className="card__inner">
                  <div className="inner__front">
                    <div className="front__content">
                      <img
                        className="content__img"
                        src={card.imgSrc}
                        alt={card.name}
                      />
                      <div className="content__inner">
                        <h1 className="inner__title">{card.name}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="inner__back">
                    <h4 className="back__title">{card.name}</h4>
                    <p>{card.desc}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Slider>
    </div>
  );
};

export default Partners;
