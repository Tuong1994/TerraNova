import React from "react";
import { Link } from "react-router-dom";
import { ILangs } from "../../interfaces/lang";
import { ERole, IUser } from "../../models/User";
import TableCol from "../Table/TableCol";
import moment from "moment";

interface CustomerAdminRowProps {
  langs: ILangs;
  user: IUser;
  index: number;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
}

const CustomerAdminRow: React.FunctionComponent<CustomerAdminRowProps> = (
  props
) => {
  const { langs, user, index, setIsShow, setUserId } = props;

  const renderRole = () => {
    if (user.role === ERole.admin) {
      return langs?.user.info.admin;
    } else if (user.role === ERole.user) {
      return langs?.user.info.user;
    }
  };

  return (
    <tr className="user-admin-row">
      <TableCol>
        <p>{index + 1}</p>
      </TableCol>

      <TableCol>
        <div className="image__col">
          <img
            className="col__img"
            src={(() => {
              if (user?.avatar) {
                return user?.avatar;
              } else {
                return "/img/avatar.png";
              }
            })()}
            alt="user"
          />
        </div>
      </TableCol>

      <TableCol>
        <p>{user?.id || user?.userId}</p>
      </TableCol>

      <TableCol>
        <p>{user.account}</p>
      </TableCol>

      <TableCol>
        <p>
          {user.firstName} {user.lastName}
        </p>
      </TableCol>

      <TableCol>
        <p>{renderRole()}</p>
      </TableCol>

      <TableCol>
        <p>{moment(user.createdAt).format("DD/MM/YYYY")}</p>
      </TableCol>

      <TableCol>
        <p>{moment(user.updatedAt).format("DD/MM/YYYY")}</p>
      </TableCol>

      <TableCol>
        <Link
          to={`/admin/customer/editCustomer/${user?.id || user?.userId}`}
          className="button--edit"
        >
          <i className="far fa-edit"></i>
        </Link>
        <div
          className="button--delete"
          onClick={() => {
            setIsShow(true);
            setUserId(user?.id || user?.userId || "");
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </div>
      </TableCol>
    </tr>
  );
};

export default CustomerAdminRow;
