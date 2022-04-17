import React from "react";

interface LayerProps {
  renderContent(): React.ReactNode;
}

const Layer: React.FunctionComponent<LayerProps> = (props) => {
  const { renderContent } = props;

  return (
    <div className="layer">
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>{renderContent()}</span>
      </div>
    </div>
  );
};

export default Layer;
