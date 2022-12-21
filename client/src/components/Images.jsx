import React from "react";
import ImageTable from "./imagesHelper/ImageTable";
import AddImageButton from "./imagesHelper/AddImageButton";

const Images = () => {
  return (
    <div className="container h-100 mt-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="row justify-content-center">
            {" "}
            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Images
              </p>
              <AddImageButton />
              <ImageTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Images;
