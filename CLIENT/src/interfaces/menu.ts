
interface ICategoryMenu {
  categoryId?: string,
  name?: string,
}

interface ISubMenu {
  subMenuId?: string;
  path: string;
  name: string;
  active?: boolean;
  categoryMenu?: ICategoryMenu[];
}
export interface IMenu {
  menuId?: string,
  path: string;
  name: string;
  icon?: string;
  active?: boolean;
  subMenu?: ISubMenu[];
}

export enum EMenuName {
  home = "Home",
  product = "Product",
  course = "Course",
  aboutUs = "About Us",
  contact = "Contact"
}