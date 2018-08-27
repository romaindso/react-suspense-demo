import React from "react";
import Image from "./Image";

const ImageList = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => {
        return <Image key={index} src={image} />;
      })}
    </div>
  );
};

export default ImageList;
