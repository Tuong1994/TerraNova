import React from "react";
import Carts from "../Carts";
import Translate from "../Translate";

interface HeaderFeaturesProps {}

const HeaderFeatures: React.FunctionComponent<HeaderFeaturesProps> = props => {
    return <div className="features__others">
        <Carts className="others__item" />
        <Translate className="others__item" childClass="item__inner" />
    </div>
}

export default HeaderFeatures;