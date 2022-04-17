import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IQueryList } from "../../interfaces/query";
import { getCourseByCategory } from "../../redux/actionCreators/CourseCreators";

interface CourseMenuProps {
  menu: any;
  isShow: boolean;
  onHide(): void;
  onHideMenu(): void;
}

const CourseMenu: React.FunctionComponent<CourseMenuProps> = (props) => {
  const { menu, isShow, onHide, onHideMenu } = props;

  const dispatch = useDispatch();

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
                    <Link
                      to={`/courseByCategory/${i.subMenuId}`}
                      className="list__link"
                      key={index}
                      onClick={() => {
                        onHideMenu();
                        const query: IQueryList = {
                          categoryId: i.subMenuId,
                          page: 1,
                          limits: 10,
                        };
                        dispatch(getCourseByCategory(query));
                      }}
                    >
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
