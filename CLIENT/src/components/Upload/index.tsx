import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import SingleUpload from "./SingleUpload";
import MultipleUpload from "./MultipleUpload";
import utils from "../../utils";

interface UploadProps {
  defaultImg?: any;
  multiple?: boolean;
  isReset?: boolean;
  isSave?: boolean;
  onChange?: (files: any) => void;
  onRemove?: (files: any) => void;
  onSubmit?: (files: any) => void;
}

const Upload: React.FunctionComponent<UploadProps> = (props) => {
  const { defaultImg, isSave, isReset, multiple, onChange, onRemove, onSubmit } = props;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [previewImg, setPreviewImg] = React.useState<any>();
  const [previewImgArr, setPreviewImgArr] = React.useState<any>([]);
  const [imgFile, setImgFile] = React.useState<any>();
  const [imgFileArr, setImgFileArr] = React.useState<any>([]);

  const langs = utils.changeLang(lang);

  return (
    <div className="upload">
      {multiple ? (
        <MultipleUpload
          langs={langs}
          isSave={isSave}
          isReset={isReset}
          defaultImgArr={defaultImg}
          previewImgArr={previewImgArr}
          imgFileArr={imgFileArr}
          setPreviewImgArr={setPreviewImgArr}
          setImgFileArr={setImgFileArr}
          onChange={onChange}
          onRemove={onRemove}
          onSubmit={onSubmit}
        />
      ) : (
        <SingleUpload
          langs={langs}
          defaultImg={defaultImg}
          previewImg={previewImg}
          imgFile={imgFile}
          setPreviewImg={setPreviewImg}
          setImgFile={setImgFile}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
};

export default Upload;
