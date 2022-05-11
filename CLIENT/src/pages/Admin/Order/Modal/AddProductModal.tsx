import React from "react";
import * as Modal from "../../../../components/Modal";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { EModalActionTypes } from "../../../../redux/actionTypes/ModalActionTypes";
import { ILangs } from "../../../../interfaces/lang";
import { EProductType, IProduct } from "../../../../models/Product";
import { IOptionsLang } from "../../../../configs/options";
import { createProduct } from "../../../../redux/actionCreators/ProductCreators";
import Button from "../../../../components/Button";
import ButtonLoading from "../../../../components/Loading/ButtonLoading";
import utils from "../../../../utils";

interface AddProductModalProps {
  langs: ILangs;
  options: IOptionsLang;
}

const AddProductModal: React.FunctionComponent<AddProductModalProps> = (
  props
) => {
  const { langs, options } = props;

  const { isAddProduct } = useSelector(
    (state: ReducerState) => state.ModalReducer
  );
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const [isReset, setIsReset] = React.useState<boolean>(false);
  const [category, setCategory] = React.useState<string>("");
  const [producer, setProducer] = React.useState<string>("");
  const [product, setProduct] = React.useState<IProduct>({
    name: "",
    price: 0,
  });

  const dispatch = useDispatch();

  const getProducerByCategory = () => {
    switch (category) {
      case EProductType.cpu: {
        return options?.cpuProducer;
      }
      case EProductType.mainboard: {
        return options?.mainboardProducer;
      }
      case EProductType.ram: {
        return options?.ramProducer;
      }
      case EProductType.hdd: {
        return options?.hddProducer;
      }
      case EProductType.ssd: {
        return options?.ssdProducer;
      }
      case EProductType.vga: {
        return options?.vgaProducer;
      }
      case EProductType.psu: {
        return options?.psuProducer;
      }
      case EProductType.monitor: {
        return options?.monitorProducer;
      }
      case EProductType.printer: {
        return options?.printerProducer;
      }
      case EProductType.fax: {
        return options?.faxProducer;
      }
      case EProductType.laptop: {
        return options?.laptopProducer;
      }
    }
  };

  const handleHideModal = () => {
    dispatch({
      type: EModalActionTypes.CLOSE_ADD_PRODUCT_MODAL,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const data = new FormData();
    data.append("name", product.name || "");
    data.append("price", product.price?.toString() || "");
    data.append("categoryId", category);
    data.append("producerId", producer);

    if (isReset) {
      setIsReset(false);
    }

    dispatch(
      createProduct(
        data,
        langs?.toastMessages.success.create,
        langs?.toastMessages.error.create
      )
    );

    setTimeout(() => {
      setIsReset(true);
      setProduct({
        name: "",
        price: 0,
      });
      handleHideModal();
    }, 1000);
  };

  return (
    <Modal.Wrapper
      isShowing={isAddProduct}
      onHide={handleHideModal}
      className="add-product-modal"
    >
      <Modal.Header
        title={langs?.admin.order.modal.title_2}
        onHide={handleHideModal}
      />

      <Modal.Body className="add-product-modal__body">
        <Card.Wrapper className="body__card">
          <FormControl.InputCustom
            name="name"
            placeholder=" "
            value={product.name}
            label={langs?.form.productName}
            groupClassName="card__control"
            onChange={(e) => handleChange(e)}
          />
          <FormControl.InputCustom
            name="price"
            type="number"
            placeholder=" "
            value={product.price}
            label={langs?.form.price}
            groupClassName="card__control"
            onKeyPress={(e) =>
              utils.checkKeyNumberType(e, langs?.toastMessages.error.onlyNumber)
            }
            onChange={(e) => handleChange(e)}
          />
          <FormControl.SelectCustom
            id="value"
            name="label"
            placeholder=" "
            isReset={isReset}
            label={langs?.form.category}
            value={options?.productCategory.find((i) => i.value === category)}
            option={options?.productCategory}
            groupClassName="card__control"
            onChange={(value: any) => {
              setCategory(value);
            }}
          />
          <FormControl.SelectCustom
            id="value"
            name="label"
            placeholder=" "
            isReset={isReset}
            label={langs?.form.producer}
            value={getProducerByCategory()?.find((i) => i.value === producer)}
            option={getProducerByCategory()}
            groupClassName="card__control"
            onChange={(value: any) => {
              setProducer(value);
            }}
          />
        </Card.Wrapper>
      </Modal.Body>

      <Modal.Footer className="add-product-modal__body">
        <Button
          type="button"
          className={`button--submit ${
            buttonLoading ? "button--disabled" : ""
          }`}
          onClick={handleSubmit}
        >
          <ButtonLoading />
          <span>{langs?.button.save}</span>
        </Button>
      </Modal.Footer>
    </Modal.Wrapper>
  );
};

export default AddProductModal;
