import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userMenuEng, userMenuVn } from "../../../configs/menuList";
import { ELangs } from "../../../interfaces/lang";
import { ESideBarActionTypes } from "../../../redux/actionTypes/SideBarActionTypes";
import { ReducerState } from "../../../redux/store";

interface MenuProps {
  lang: string;
}

const Menu: React.FunctionComponent<MenuProps> = (props) => {
  const { lang } = props;
  const path = document.location.pathname;
  const id = path.slice(1, path.length);

  const { menuId } = useSelector((state: ReducerState) => state.SideBarReducer);

  const [menu, setMenu] = React.useState<any>([]);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (lang === ELangs.ENG) {
      setMenu(userMenuEng);
    } else if (lang === ELangs.VN) {
      setMenu(userMenuVn);
    }
  }, [lang]);

  const handleChangeMenu = (menu: any) => {
    dispatch({
      type: ESideBarActionTypes.ADD_ID,
      payload: menu.id,
    });
  };

  const renderMenu = () => {
    return menu.map((item: any) => {
      return (
        <Link
          key={item.id}
          to={item.path}
          className={`menu__link ${
            menuId === item.id || id === item.id ? "menu__link--active" : ""
          }`}
          onClick={() => {
            handleChangeMenu(item);
          }}
        >
          {item.name}
        </Link>
      );
    });
  };

  return <div className="sidebar__menu">{renderMenu()}</div>;
};

export default Menu;
