import React, { useState } from "react";
import api from "../api.json";
import "./gallery.css";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// ... your existing imports ...

const GalleryComponent = () => {
  const [modal, setModal] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [indexOfImage, setIndexOfImage] = useState(0);
  const [loading, setLoading] = useState(false);

  const getImage = (images) => {
    const { index, imageData } = images;
    setModal(true);
    setImgSrc(imageData.url);
    setIndexOfImage(index);
  };

  const leftImageHandle = () => {
    if (indexOfImage > 0) {
      setLoading(true);
      setTimeout(() => {
        setIndexOfImage(indexOfImage - 1);
        setImgSrc(api[indexOfImage - 1].url);
        setLoading(false);
      }, 500);
    }
  };

  const rightImageHandle = () => {
    if (indexOfImage < api.length - 1) {
      setLoading(true);
      setTimeout(() => {
        setIndexOfImage(indexOfImage + 1);
        setImgSrc(api[indexOfImage + 1].url);
        setLoading(false);
      }, 500);
    }
  };

  return (
    <>
      <div className={modal ? "modal open" : "modal"}>
        <ClearIcon className="close-icon" onClick={() => setModal(false)} />
        <ArrowBackIosIcon
          className="left-icon"
          onClick={() => leftImageHandle()}
        />
        <ArrowForwardIosIcon
          className="right-icon"
          onClick={() => rightImageHandle()}
        />
        {loading && <div className="loader"></div>}
        <img src={imgSrc} alt="error" />
      </div>

      <div className="gallery">
        {api.map((imageData, index) => (
          <div
            key={index}
            className="pics"
            onClick={() => getImage({ imageData, index })}
          >
            <img src={imageData.url} alt="error" style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default GalleryComponent;
