import React from "react";
import { Link } from "react-router-dom";

interface CourseMenuProps {
  menu: any;
  isShow: boolean;
  onHide(): void;
  onHideMenu(): void;
}

const CourseMenu: React.FunctionComponent<CourseMenuProps> = (props) => {
  const { menu, isShow, onHide, onHideMenu } = props;

  return (
    <div className={`menu__course ${isShow ? "menu__course--active" : ""}`}>
      <div className="course__icon" onClick={onHide}>
        <i className="fa-solid fa-angle-left"></i>
      </div>
      <div className="course__list">
        {menu?.map((item: any, index: number) => {
          return (
            <React.Fragment key={index}>
              {item?.subMenu
                ?.filter(
                  (i: any) =>
                    i.subMenuId !== "computer" &&
                    i.subMenuId !== "electronics" &&
                    i.subMenuId !== "accessories"
                )
                .map((i: any, index: number) => {
                  return (
                    <Link to={`/courseByCategory/${i.subMenuId}`} className="list__link" key={index} onClick={() => {
                        onHideMenu()
                    }}>
                      {i.name}
                    </Link>
                  );
                })}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default CourseMenu;
