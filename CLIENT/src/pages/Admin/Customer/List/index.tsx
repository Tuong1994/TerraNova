import React from "react";
import * as Card from "../../../../components/Card";
import { Link } from "react-router-dom";
import { ESortBy, IQueryList } from "../../../../interfaces/query";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import {
  getUserList,
  removeUser,
} from "../../../../redux/actionCreators/UserCreators";
import ContentHeader from "../../../../components/ContentHeader";
import Table from "../../../../components/Table";
import CustomerAdminRow from "../../../../components/TableRow/CustomerAdminRow";
import DataLoading from "../../../../components/Loading/DataLoading";
import Pagination from "../../../../components/Pagination";
import Filter from "../../../../components/Filter";
import utils from "../../../../utils";

const CustomerList: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { userList } = useSelector((state: ReducerState) => state.UserReducer);
  const { page } = useSelector(
    (state: ReducerState) => state.PaginationReducer
  );
  const { dataLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const [filter, setFilter] = React.useState<string>("all");
  const [freeText, setFreeText] = React.useState<string>("");
  const [sortBy, setSortBy] = React.useState<number>(ESortBy.newest);

  const typingRef = React.useRef<any>(null);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);
  const options = utils.getOptionByLang(lang);

  const { total, limits } = userList;

  React.useEffect(() => {
    const query: IQueryList = {
      page: page,
      limits: 10,
      filter: filter,
      freeText: freeText,
      sortBy: sortBy,
    };
    dispatch(getUserList(query));
  }, [page, filter, freeText, sortBy]);

  const handleSearch = (v: string) => {
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }

    typingRef.current = setTimeout(() => {
      setFreeText(v);
    }, 500);
  };

  const handleRemove = (id: string) => {
    const query: IQueryList = {
      userId: id,
    };
    dispatch(
      removeUser(
        query,
        langs?.toastMessages.success.remove,
        langs?.toastMessages.error.remove
      )
    );
  };

  const renderUserList = () => {
    if (userList) {
      const { users } = userList;
      return users.map((user, index) => {
        return (
          <CustomerAdminRow
            langs={langs}
            user={user}
            index={index}
            onRemove={handleRemove}
          />
        );
      });
    }
  };

  return (
    <div className="customer">
      <ContentHeader
        name={langs?.admin.pageTitle.customer || ""}
        right={() => {
          return (
            <Link to="/admin/customer/addCustomer" className="button--add">
              {langs?.button.addUser}
            </Link>
          );
        }}
      />

      <Filter
        defaultFilterValue={filter}
        defaultSortValue={sortBy}
        filterOptions={options?.userFilter}
        onFilter={(value) => {
          setFilter(value);
        }}
        onSort={(value) => {
          setSortBy(value);
        }}
        onSearch={handleSearch}
      />

      <Card.Wrapper>
        <Table
          headers={[
            { title: langs?.tableHeader.number || "" },
            { title: langs?.tableHeader.image || "" },
            { title: langs?.tableHeader.userId || "" },
            { title: langs?.tableHeader.account || "" },
            { title: langs?.tableHeader.name || "" },
            { title: langs?.tableHeader.role || "" },
            { title: langs?.tableHeader.createdAt || "" },
            { title: langs?.tableHeader.features || "" },
          ]}
          isNodata={userList.users || 0}
          noDataTitle={langs?.noData.data || ""}
          renderNoDataLink={() => {
            return (
              <Link to="/admin/customer/addCustomer" className="button--add">
                {langs?.button.addUser}
              </Link>
            );
          }}
        >
          {(() => {
            if (!dataLoading) {
              return renderUserList();
            } else {
              return (
                <div style={{ height: "400px" }}>
                  <DataLoading />
                </div>
              );
            }
          })()}
        </Table>
      </Card.Wrapper>

      <Pagination perPage={limits} total={total} isShowContent={true} />
    </div>
  );
};

export default CustomerList;
