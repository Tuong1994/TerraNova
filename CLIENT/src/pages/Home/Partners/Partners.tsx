import React from "react";
import Card from "../../../components/Card/Card";

const Partners: React.FunctionComponent = (props) => {
  return (
    <div className="home__partners">
      <Card className="partners__card partners__card-one">
        <div className="card__inner">
          <div className="inner__front">
            <div className="front__content">
              <img
                className="content__img"
                src="../img/rog-strix_logo.jpg"
                alt="rog"
              />
              <div className="content__inner">
                <h1 className="inner__title">ASUS</h1>
              </div>
            </div>
          </div>
          <div className="inner__back">
            <h4 className="back__title">ASUS</h4>
            <p>
              ASUSTek Computer Inc. Chinese: 華碩電腦股份有限公司; pinyin:
              Huáshuò Diànnǎo Gǔfèn Yǒuxiàn Gōngsī; stylised as ASUSTeK or ASUS)
              is a Taiwanese multinational computer and phone hardware and
              electronics company headquartered in Beitou District, Taipei,
              Taiwan. Its products include desktop computers, laptops, netbooks,
              mobile phones, networking equipment, monitors, wi-fi routers,
              projectors, motherboards, graphics cards, optical storage,
              multimedia products, peripherals, wearables, servers,
              workstations, and tablet PCs. The company is also an original
              equipment manufacturer (OEM).
            </p>
          </div>
        </div>
      </Card>

      <Card className="partners__card partners__card-two">
        <div className="card__inner">
          <div className="inner__front">
            <div className="front__content">
              <img
                className="content__img"
                src="../img/aorus_logo.jpg"
                alt="aorus"
              />
              <div className="content__inner">
                <h1 className="inner__title">GIGABYTE</h1>
              </div>
            </div>
          </div>
          <div className="inner__back">
            <h4 className="back__title">GIGABYTE</h4>
            <p>
              Gigabyte Technology (branded as GIGABYTE or sometimes GIGA-BYTE;
              formally GIGA-BYTE Technology Co., Ltd.) is a Taiwanese
              manufacturer and distributor of computer hardware. Gigabyte's
              principal business is motherboards. It shipped 4.8 million
              motherboards in the first quarter of 2015, which allowed it to
              become the leading motherboard vendor. Gigabyte also manufactures
              custom graphics cards and laptop computers (including thin and
              light laptops under its Aero sub-brand). In 2010, Gigabyte was
              ranked 17th in "Taiwan's Top 20 Global Brands" by the Taiwan
              External Trade Development Council.
            </p>
          </div>
        </div>
      </Card>

      <Card className="partners__card partners__card-three">
        <div className="card__inner">
          <div className="inner__front">
            <div className="front__content">
              <img
                className="content__img"
                src="../img/msi-gaming_logo.jpg"
                alt="rog"
              />
              <div className="content__inner">
                <h1 className="inner__title">MSI</h1>
              </div>
            </div>
          </div>
          <div className="inner__back">
            <h4 className="back__title">MSI</h4>
            <p>
              Micro-Star International Co., Ltd (MSI; Chinese:
              微星科技股份有限公司) is a Taiwanese multinational information
              technology corporation headquartered in New Taipei City, Taiwan.
              It designs, develops and provides computer hardware, related
              products and services, including laptops, desktops, motherboards,
              graphics cards, All-in-One PCs, servers, industrial computers, PC
              peripherals, car infotainment products, etc.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Partners;
