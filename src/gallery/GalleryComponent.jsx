import React, { useState } from "react";
import api from "../api.json";
import "./gallery.css";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const GalleryComponent = () => {
  const [modal, setModal] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [indexOfImage, setIndexOfImage] = useState(0);

  const openModal = (index, imageData) => {
    setModal(true);
    setImgSrc(imageData.url);
    setIndexOfImage(index);
  };

  const closeAndResetModal = () => {
    setModal(false);
    setImgSrc("");
    setIndexOfImage(0);
  };

  const navigateImage = (direction) => {
    const newIndex = indexOfImage + direction;
    if (newIndex >= 0 && newIndex < api.length) {
      setIndexOfImage(newIndex);
      setImgSrc(api[newIndex].url);
    }
  };

  return (
    <>
      <div className={modal ? "modal open" : "modal"}>
        <ClearIcon className="close-icon" onClick={closeAndResetModal} />
        <ArrowBackIosNewIcon className="left-icon" onClick={() => navigateImage(-1)} />
        <ArrowForwardIosIcon className="right-icon" onClick={() => navigateImage(1)} />
        <img src={imgSrc} alt="error" />
      </div>

      <div className="gallery">
        {api.map((imageData, index) => (
          <div key={index} className="pics" onClick={() => openModal(index, imageData)}>
            <img src={imageData.url} alt="error" style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default GalleryComponent;
