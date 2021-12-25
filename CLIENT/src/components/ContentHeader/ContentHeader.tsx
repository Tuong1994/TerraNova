import React from "react";
import pageTitleList from "../../configs/pageTitleList";

interface ContentHeaderProps {
  name: string;
  right?(): React.ReactNode | React.ReactNode[];
}

const ContentHeader: React.FunctionComponent<ContentHeaderProps> = (props) => {
  const { name, right } = props;

  const renderTitle = (title: string) => {
    switch (title) {
      case pageTitleList.dashBoard: {
        title = pageTitleList.dashBoard;
        break;
      }
      case pageTitleList.order: {
        title = pageTitleList.order;
        break;
      }
      case pageTitleList.customer: {
        title = pageTitleList.customer;
        break;
      }
      case pageTitleList.product: {
        title = pageTitleList.product;
        break;
      }
      case pageTitleList.addProduct: {
        title = pageTitleList.addProduct;
        break;
      }
      case pageTitleList.updateProduct: {
        title = pageTitleList.updateProduct;
        break;
      }
      case pageTitleList.course: {
        title = pageTitleList.course;
        break;
      }
      case pageTitleList.addCourse: {
        title = pageTitleList.addCourse;
        break;
      }
      case pageTitleList.updateCourse: {
        title = pageTitleList.updateCourse;
        break;
      }
    }
    return title;
  };

  return (
    <div className="content-header">
      <h1 className="content-header__title">{renderTitle(name)}</h1>
      {(() => {
        if (right) {
          return <>{right()}</>;
        }
        return null;
      })()}
    </div>
  );
};

export default ContentHeader;
