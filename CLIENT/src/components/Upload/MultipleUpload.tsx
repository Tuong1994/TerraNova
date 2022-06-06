import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ILangs } from "../../interfaces/lang";
import { ReducerState } from "../../redux/store";
import Button from "../Button";
import ButtonLoading from "../Loading/ButtonLoading";

interface MultipleUploadProps {
  langs: ILangs;
  isReset?: boolean;
  isSave?: boolean;
  defaultImgArr?: any;
  imgFileArr: any;
  previewImgArr: any;
  setPreviewImgArr: React.Dispatch<React.SetStateAction<any>>;
  setImgFileArr: React.Dispatch<React.SetStateAction<any>>;
  onChange?: (files: any) => void;
  onRemove?: (files: any) => void;
  onSubmit?: (files: any) => void;
}

const MultipleUpload: React.FunctionComponent<MultipleUploadProps> = (
  props
) => {
  const {
    langs,
    isSave,
    isReset,
    defaultImgArr,
    imgFileArr,
    previewImgArr,
    setImgFileArr,
    setPreviewImgArr,
    onChange,
    onRemove,
    onSubmit,
  } = props;

  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const [isUploading, setIsUploading] = React.useState<boolean>(false);

  // Set default array of image
  React.useEffect(() => {
    if (defaultImgArr) {
      setPreviewImgArr(defaultImgArr);
    } else {
      setPreviewImgArr([]);
    }
  }, [defaultImgArr]);

  // Reset preview image
  React.useEffect(() => {
    if (isReset) {
      setPreviewImgArr([]);
    }
  }, [isReset]);

  // Trigger onChange function when file was selected
  React.useEffect(() => {
    onChange && onChange(imgFileArr);
  }, [imgFileArr]);

  // Trigger onRemove function when click remove file
  React.useEffect(() => {
    onRemove && onRemove(previewImgArr);
  }, [previewImgArr]);

  // Set preview image
  React.useEffect(() => {
    setIsUploading(true);
    if (imgFileArr && imgFileArr.length > 0) {
      const fileArr = Array.from(imgFileArr).map((file: any) => {
        return URL.createObjectURL(file);
      });
      setPreviewImgArr((prevArr: any) => prevArr.concat(fileArr));
    }
    setTimeout(() => {
      setIsUploading(false);
    }, 1000);
  }, [imgFileArr]);

  const handleChange = (e: any) => {
    const files = e.target.files;
    const acceptImgType = ["image/png", "image/jpg", "image/jpeg"];

    // Validation
    if (files) {
      let isValid = false;
      Array.from(files).map((file: any) => {
        if (file && file.type.substr(0, 5) !== "image") {
          toast.error(langs?.toastMessages.error.file);
          isValid = true;
          if (!file && acceptImgType.includes(file["type"])) {
            toast.error(langs?.toastMessages.error.file);
            isValid = true;
          }
          if (file.size > 1000000) {
            toast.error(langs?.toastMessages.error.fileSize);
            isValid = true;
          }
        } else {
          isValid = false;
        }
      });

      if (!isValid) {
        setImgFileArr(files);
      } else {
        setImgFileArr([]);
      }
    }
  };

  return (
    <div className="upload__multiple">
      {/* Upload Control */}
      <div className="multiple__control">
        <label htmlFor="multiple" className="control__label">
          <i className="fa-solid fa-upload"></i>
          <span>{langs?.form.chooseFile}</span>
        </label>
        <input
          type="file"
          id="multiple"
          className="control__input"
          accept="image/png, image/jpeg"
          multiple
          onChange={handleChange}
        />

        {/* Button Save */}
        {(() => {
          if (previewImgArr && previewImgArr?.length > 0) {
            if (isSave) {
              return (
                <Button
                  type="button"
                  className={`button--submit control__button ${
                    buttonLoading ? "button--disabled" : ""
                  }`}
                  onClick={() => {
                    onSubmit && onSubmit(imgFileArr);
                  }}
                >
                  <ButtonLoading />
                  <span>{langs?.button.save}</span>
                </Button>
              );
            } else {
              return null;
            }
          }
        })()}
      </div>

      <p className="multiple__message">{langs?.form.fileType}</p>
      <p className="multiple__message">{langs?.form.fileSize}</p>

      {/* Upload text */}
      <div className="multiple__text">
        {previewImgArr.length === 0 ? (
          <p>{langs?.form.noFileSelected}</p>
        ) : (
          <p>
            {previewImgArr.length} {langs?.form.fileSelected}
          </p>
        )}
      </div>

      {/* Upload preview */}
      {previewImgArr?.length > 0 && (
        <div className="multiple__preview">
          {isUploading && (
            <div className="preview__loading">
              <div className="loading__spinner"></div>
            </div>
          )}
          {Array.isArray(previewImgArr) && previewImgArr?.map((img: any, index: number) => {
            return (
              <div className="preview__img" key={index}>
                <div
                  className="img__button"
                  onClick={() => {
                    setPreviewImgArr(
                      previewImgArr?.filter((i: any) => i !== img)
                    );
                  }}
                >
                  <i className="fa fa-times"></i>
                </div>
                <img className="img" src={img} alt="img" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MultipleUpload;
