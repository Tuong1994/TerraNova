import React from "react";
import * as Card from "../../../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { ESortBy, IQueryList } from "../../../../interfaces/query";
import { getOrderList } from "../../../../redux/actionCreators/OrderCreators";
import { Link } from "react-router-dom";
import ContentHeader from "../../../../components/ContentHeader";
import Table from "../../../../components/Table";
import Filter from "../../../../components/Filter";
import OrderAdminRow from "../../../../components/TableRow/OrderAdminRow";
import DataLoading from "../../../../components/Loading/DataLoading";
import Pagination from "../../../../components/Pagination";
import utils from "../../../../utils";

const OrderList: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { page } = useSelector(
    (state: ReducerState) => state.PaginationReducer
  );
  const { orderList } = useSelector(
    (state: ReducerState) => state.OrderReducer
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

  const { total, limits } = orderList;

  React.useEffect(() => {
    const query: IQueryList = {
      page: page,
      limits: 10,
      filter: filter,
      freeText: freeText,
      sortBy: sortBy,
    };
    dispatch(getOrderList(query));
  }, [page, filter, freeText, sortBy]);

  const handleSearch = (v: string) => {
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }

    typingRef.current = setTimeout(() => {
      setFreeText(v);
    }, 500);
  };

  const renderOrderList = () => {
    if (orderList) {
      const { orders } = orderList;
      return orders.map((order, index) => {
        return (
          <OrderAdminRow
            key={order.id}
            order={order}
            langs={langs}
            index={index}
          />
        );
      });
    }
  };

  return (
    <div className="order">
      <ContentHeader
        name={langs?.admin.pageTitle.order || ""}
        right={() => {
          return (
            <Link to="/admin/order/addOrder" className="button--add">
              {langs?.button.addOrder}
            </Link>
          );
        }}
      />

      <Filter
        defaultFilterValue={filter}
        defaultSortValue={sortBy}
        filterOptions={options?.orderFilter}
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
            { title: langs?.tableHeader.orderId || "" },
            { title: langs?.tableHeader.products || "" },
            { title: langs?.tableHeader.orderStatus || "" },
            { title: langs?.tableHeader.price || "" },
            { title: langs?.tableHeader.paymentType || "" },
            { title: langs?.tableHeader.createdAt || "" },
            { title: langs?.tableHeader.updatedAt || "" },
            { title: langs?.tableHeader.features || "" },
          ]}
          isNodata={orderList.orders || 0}
          noDataTitle={langs?.noData.data || ""}
          renderNoDataLink={() => {
            return (
              <Link to="/admin/order" className="button--add">
                {langs?.button.addOrder}
              </Link>
            );
          }}
        >
          {(() => {
            if (!dataLoading) {
              return renderOrderList();
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

      <Pagination total={total} perPage={limits} isShowContent={true} />
    </div>
  );
};

export default OrderList;
