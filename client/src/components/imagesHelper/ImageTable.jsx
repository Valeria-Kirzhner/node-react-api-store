import React from "react";
import { useState, useEffect } from "react";
import imageService from "../../services/imageService";
import Image from "./Image";

const ImageTable = ({}) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getMyImages();
  }, []);

  const getMyImages = async () => {
    let { data } = await imageService.getMyImages();
    data = data.data;
    setImages(data);
  };

  const deleteImage = async (imageId) => {
    let filteredImages = [...images];
    filteredImages = filteredImages.filter((image) => image.id !== imageId); // it will return all users cards exept of the card with the cardId.
    setImages(filteredImages);
    await imageService.deleteImage(imageId);
  };

  return (
    <table className="table align-middle mb-0 bg-white table-hover">
      {images.length > 0 && (
        <thead className="bg-light">
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Description</th>
            <th scope="col">path</th>
            <th scope="col">show</th>
            <th scope="col">delete</th>
            <th scope="col">Visited</th>
          </tr>
        </thead>
      )}
      <tbody>
        {images.length > 0 &&
          images.map((image) => {
            return (
              <Image
                images={images}
                image={image}
                key={image.id}
                deleteImage={deleteImage}
              />
            );
          })}
      </tbody>
    </table>
  );
};
export default ImageTable;
