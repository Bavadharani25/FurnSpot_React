// PetFurniture.jsx
import React, { useContext } from "react";
import "./Office.css"; // Create a CSS file for styling
import { Link } from "react-router-dom";
import { MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from "mdb-react-ui-kit";
import UserContext from "./UserContext";

export default function Office() {
  const { products } = useContext(UserContext);

  const filteredProducts = products.filter(
    (product) => product.category === "Office"
  );

  return (
    <div className="Office-Products">
      <div>
        <h1>Office Furniture</h1>
      </div>
      <div className="Office-ProductsList">
        {filteredProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="linkWithoutDecoration"
          >
            <div className="Office-cardproduct">
              <MDBCardImage
                className="Office-ProductsImg"
                src={product.image}
                position="top"
                alt=""
              />
              <MDBCardBody>
                <MDBCardTitle className="Office-ProductsTitle">
                  {product.title}
                </MDBCardTitle>
                <MDBCardText className="Office-ProductsPrice">
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
