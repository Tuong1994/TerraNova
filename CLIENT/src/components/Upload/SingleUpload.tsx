import React from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { ILangs } from "../../interfaces/lang";
import { ReducerState } from "../../redux/store";
import Button from "../Button";
import ButtonLoading from "../Loading/ButtonLoading";

interface SingleUploadProps {
  langs: ILangs;
  defaultImg?: string;
  imgFile: any;
  previewImg: any;
  setPreviewImg: React.Dispatch<React.SetStateAction<any>>;
  setImgFile: React.Dispatch<React.SetStateAction<any>>;
  onSubmit?: (file: any) => void;
}

const SingleUpload: React.FunctionComponent<SingleUploadProps> = (props) => {
  const {
    langs,
    defaultImg,
    imgFile,
    previewImg,
    setPreviewImg,
    setImgFile,
    onSubmit,
  } = props;

  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const [isUploading, setIsUploading] = React.useState<boolean>(false);

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
    const acceptImgType = ["image/png", "image/jpeg"];

    if (file && file.type.substr(0, 5) === "image") {
      if (file && acceptImgType.includes(file["type"])) {
        setImgFile(file);
      } else {
        setImgFile("");
      }
    } else {
      toast.error(langs?.toastMessages.error.file);
    }
  };

  return (
    <React.Fragment>
      <div className="upload__single">
        {/* Loading */}
        {isUploading && (
          <div className="single__loading">
            <div className="loading__spinner"></div>
          </div>
        )}

        {/* Image Area */}
        <div className="single__preview">
          <div className="preview__img">
            <img
              className="img__avatar"
              src={previewImg ? previewImg : defaultImg || "../img/avatar.png"}
              alt="avatar"
            />
          </div>

          {previewImg && (
            <div
              className="preview__close"
              onClick={() => {
                setPreviewImg("");
              }}
            >
              <i className="fa fa-times"></i>
            </div>
          )}
        </div>

        {/* Input controls */}
        <form className="single__control">
          <label htmlFor="single" className="control__label">
            <i className="fa fa-camera-retro"></i>
          </label>
          <input
            type="file"
            id="single"
            className="control__input"
            accept="image/png, image/jpeg"
            onChange={handleChange}
          />
        </form>
      </div>

      <div className="upload__text">
        <p>{langs?.form.fileType}</p>
      </div>

      {/* Submit button */}
      {previewImg && (
        <div className="upload__button">
          <Button
            type="button"
            className={`button--submit ${
              buttonLoading ? "button--disabled" : ""
            }`}
            onClick={() => {
              onSubmit && onSubmit(imgFile);
              setTimeout(() => {
                setPreviewImg("");
              }, 1000);
            }}
          >
            <ButtonLoading />
            <span>{langs?.button.save}</span>
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};

export default SingleUpload;
