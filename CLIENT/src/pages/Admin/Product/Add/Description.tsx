import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { ILangs } from "../../../../interfaces/lang";
import { IDescription } from "../../../../models/Product";
import Button from "../../../../components/Button";

interface DescriptionFieldsProps {
  langs: ILangs;
  descArr: IDescription[];
  setDescArr: React.Dispatch<React.SetStateAction<IDescription[]>>;
}

const DescriptionFields: React.FunctionComponent<DescriptionFieldsProps> = (
  props
) => {
  const { langs, descArr, setDescArr } = props;
  
  const [name, setName] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");

  const handleAdd = () => {
    const newDesc = {
      id: Math.floor(Math.random() * 100000),
      name: name,
      content: content,
    };
    let tempArr = [...descArr];
    tempArr.push(newDesc);
    setDescArr(tempArr);
    setName("");
    setContent("");
  };

  const handleRemove = (id: any) => {
    let tempArr = [...descArr];
    setDescArr(tempArr.filter((i) => i.id !== id));
  };

  return (
    <Card.Wrapper className="item__inner item__description">
      <h3 className="inner__title">
        {langs?.admin.product.addProduct.subTitle_3}
      </h3>
      <FormControl.InputCustom
        placeholder=" "
        value={name}
        label={langs?.form.title}
        groupClassName="inner__control"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <FormControl.TextAreaCustom
        placeholder=" "
        value={content}
        label={langs?.form.content}
        groupClassName="inner__control"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />

      <div className="description__button">
        <Button type="button" className="button--submit" onClick={handleAdd}>
          <i className="fa-solid fa-plus"></i>
          <span>{langs?.button.add}</span>
        </Button>
      </div>

      {descArr.length > 0 && (
        <div className="description__list">
          <h4 className="list__title">
            {langs?.admin.product.addProduct.descList}
          </h4>
          <ul>
            {(() => {
              if (descArr && descArr.length > 0) {
                return descArr.map((desc) => {
                  return (
                    <li key={desc.id} className="list__item">
                      <div className="item__content">
                        <p>
                          {langs?.form.title} : {desc.name}
                        </p>
                        <p>
                          {langs?.form.content} : {desc.content}
                        </p>
                      </div>
                      <div
                        className="item__icon"
                        onClick={() => handleRemove(desc.id)}
                      >
                        <i className="fa fa-times"></i>
                      </div>
                    </li>
                  );
                });
              }
            })()}
          </ul>
        </div>
      )}
    </Card.Wrapper>
  );
};

export default DescriptionFields;
