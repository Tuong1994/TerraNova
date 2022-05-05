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
  isSave?: boolean;
  isReset?: boolean;
  setPreviewImg: React.Dispatch<React.SetStateAction<any>>;
  setImgFile: React.Dispatch<React.SetStateAction<any>>;
  onChange?: (file: any) => void;
  onSubmit?: (file: any) => void;
}

const SingleUpload: React.FunctionComponent<SingleUploadProps> = (props) => {
  const {
    langs,
    defaultImg,
    imgFile,
    previewImg,
    isSave,
    isReset,
    setPreviewImg,
    setImgFile,
    onChange,
    onSubmit,
  } = props;

  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const [isUploading, setIsUploading] = React.useState<boolean>(false);

  // Set preview image empty if isReset === true
  React.useEffect(() => {
    if (isReset) {
      setPreviewImg("");
    }
  }, [isReset]);

  // Set default image for preview
  React.useEffect(() => {
    if (defaultImg) {
      setPreviewImg(defaultImg);
    }
  }, [defaultImg]);

  // Set preview image when img was selected
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
        if (defaultImg) {
          setPreviewImg(defaultImg);
        } else {
          setPreviewImg("");
        }
      }
      setIsUploading(false);
    }, 1000);
  }, [imgFile, defaultImg]);

  // Trigger onChange function when img was selected
  React.useEffect(() => {
    onChange && onChange(imgFile);
  }, [imgFile]);

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    const acceptImgType = ["image/png", "image/jpeg", "image/jpg"];

    if (file && file.type.substr(0, 5) === "image") {
      if (file && acceptImgType.includes(file["type"])) {
        setImgFile(file);
      } else {
        toast.error(langs?.toastMessages.error.file);
      }
    } else {
      setImgFile("");
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
              src={previewImg ? previewImg : "/img/avatar.png"}
              alt="avatar"
            />
          </div>

          {previewImg && (
            <div
              className="preview__close"
              onClick={() => {
                setPreviewImg("");
                setImgFile("");
              }}
            >
              <i className="fa fa-times"></i>
            </div>
          )}
        </div>

        {/* Input controls */}
        <div className="single__control">
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
        </div>
      </div>

      <div className="upload__text">
        <p>{langs?.form.fileType}</p>
      </div>

      {/* Submit button */}
      {(() => {
        if (previewImg) {
          if (isSave) {
            return (
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
            );
          }
        }
      })()}
    </React.Fragment>
  );
};

export default SingleUpload;
