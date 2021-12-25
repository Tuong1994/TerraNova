import React from "react";

interface IHeaderButtonProps {
  setShowMenu: React.Dispatch<boolean>;
}

const HeaderButton: React.FunctionComponent<IHeaderButtonProps> = (props) => {
  const { setShowMenu } = props;
  return (
    <div className="header__button" onClick={() => {
      setShowMenu(true);
    }}>
      <div className="button--page">
        <i className="fa fa-bars"></i>
      </div>
    </div>
  );
};

export default HeaderButton;
