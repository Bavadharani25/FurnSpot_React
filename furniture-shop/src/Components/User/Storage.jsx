// PetFurniture.jsx
import React, { useContext } from "react";
import "./Storage.css"; // Create a CSS file for styling
import { Link } from "react-router-dom";
import { MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from "mdb-react-ui-kit";
import UserContext from "./UserContext";

export default function Storage() {
  const { products } = useContext(UserContext);

  const filteredProducts = products.filter(
    (product) => product.category === "Storage"
  );

  return (
    <div className="Storage-Products">
      <div>
        <h1>Storage & Container</h1>
      </div>
      <div className="Storage-ProductsList">
        {filteredProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="linkWithoutDecoration"
          >
            <div className="Storage-cardproduct">
              <MDBCardImage
                className="Storage-ProductsImg"
                src={product.image}
                position="top"
                alt=""
              />
              <MDBCardBody>
                <MDBCardTitle className="Storage-ProductsTitle">
                  {product.title}
                </MDBCardTitle>
                <MDBCardText className="Storage-ProductsPrice">
                  Price: {product.price}
                </MDBCardText>
              </MDBCardBody>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
