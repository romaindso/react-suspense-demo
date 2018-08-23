import React from "react";
import Image from "./Image";

const ImageList = ({ images }) => {
  return (
    <div>
      {images.map(image => {
        return (
          <Image
            style={{ height: 200 }}
            key={image.id}
            src={image.images.original.url}
          />
        );
      })}
    </div>
  );
};

export default ImageList;
