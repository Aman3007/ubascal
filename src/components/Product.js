import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helper/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;

  // image is now an object { url, filename }
  const imageUrl = image?.url || "";
  const imageAlt = image?.filename || name;

  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={imageUrl} alt={imageAlt} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">
              <FormatPrice price={price} />
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
