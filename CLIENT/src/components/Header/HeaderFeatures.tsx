import React from "react";
import Carts from "../Carts";
import Translate from "../Translate";

interface HeaderFeaturesProps {}

const HeaderFeatures: React.FunctionComponent<HeaderFeaturesProps> = props => {
    return <div className="features__others">
        <Carts />
        <Translate />
    </div>
}

export default HeaderFeatures;