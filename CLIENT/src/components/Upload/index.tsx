import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import Button from "../Button";
import utils from "../../utils";

interface UploadProps {}

const Upload: React.FunctionComponent<UploadProps> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [previewImg, setPreviewImg] = React.useState<any>();
  const [imgFile, setImgFile] = React.useState<any>();
  const [isUploading, setIsUploading] = React.useState<boolean>(false);

  const langs = utils.changeLang(lang);

  React.useEffect(() => {
    setIsUploading(true);
    setTimeout(() => {
      if (imgFile) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImg(reader.result);
        };
        reader.readAsDataURL(imgFile);
      } else {
        setPreviewImg("");
      }
      setIsUploading(false);
    }, 1000);
  }, [imgFile]);

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImgFile(file);
    } else {
      setImgFile("");
    }
  };

  return (
    <div className="upload">
      <div className="upload__area">
        {isUploading && (
          <div className="area__loading">
            <div className="loading__spinner"></div>
          </div>
        )}

        <div className="area__preview">
          <div className="preview__img">
            <img
              className="img__avatar"
              src={previewImg ? previewImg : "../img/avatar.png"}
              alt="avatar"
            />
          </div>
        </div>

        <div className="area__control">
          <label htmlFor="upload" className="control__label">
            <i className="fa fa-camera-retro"></i>
          </label>
          <input
            type="file"
            id="upload"
            className="control__input"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
      </div>

      {previewImg && (
        <div className="upload__button">
          <Button className="button--submit">{langs?.button.save}</Button>
        </div>
      )}
    </div>
  );
};

export default Upload;
