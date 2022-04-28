import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import SingleUpload from "./SingleUpload";
import MultipleUpload from "./MultipleUpload";
import utils from "../../utils";

interface UploadProps {
  defaultImg?: string;
  multiple?: boolean;
  onSubmit?: (file: any) => void;
}

const Upload: React.FunctionComponent<UploadProps> = (props) => {
  const { defaultImg, multiple, onSubmit } = props;

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
          previewImgArr={previewImgArr}
          imgFileArr={imgFileArr}
          setPreviewImgArr={setPreviewImgArr}
          setImgFileArr={setImgFileArr}
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
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
};

export default Upload;
