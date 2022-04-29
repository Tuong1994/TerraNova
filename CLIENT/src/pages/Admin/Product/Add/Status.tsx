import React from "react";
import * as Card from "../../../../components/Card";

interface ProductStatusProps {}

const ProductStatus: React.FunctionComponent<ProductStatusProps> = props => {
    return <Card.Wrapper className="item__status">
        <h3 className="status__title">Status</h3>
    </Card.Wrapper>
}

export default ProductStatus