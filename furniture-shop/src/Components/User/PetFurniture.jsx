// PetFurniture.jsx
import React, { useContext } from "react";
import "./PetFurniture.css"; // Create a CSS file for styling
import { Link } from "react-router-dom";
import { MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from "mdb-react-ui-kit";
import UserContext from "./UserContext";

export default function PetFurniture() {
  const { products } = useContext(UserContext);

  const filteredProducts = products.filter(
    (product) => product.category === "Pet Furniture"
  );

  return (
    <div className="PetFurniture-Products">
      <div>
        <h1>Pet Furniture</h1>
      </div>
      <div className="PetFurniture-ProductsList">
        {filteredProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="linkWithoutDecoration"
          >
            <div className="PetFurniture-cardproduct">
              <MDBCardImage
                className="PetFurniture-ProductsImg"
                src={product.image}
                position="top"
                alt=""
              />
              <MDBCardBody>
                <MDBCardTitle className="PetFurniture-ProductsTitle">
                  {product.title}
                </MDBCardTitle>
                <MDBCardText className="PetFurniture-ProductsPrice">
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
