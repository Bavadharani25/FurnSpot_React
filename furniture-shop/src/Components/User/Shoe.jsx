// PetFurniture.jsx
import React, { useContext } from "react";
import "./Shoe.css"; // Create a CSS file for styling
import { Link } from "react-router-dom";
import { MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from "mdb-react-ui-kit";
import UserContext from "./UserContext";

export default function Shoe() {
  const { products } = useContext(UserContext);

  const filteredProducts = products.filter(
    (product) => product.category === "Shoe"
  );

  return (
    <div className="Shoe-Products">
      <div>
        <h1>Shoe Cabinets</h1>
      </div>
      <div className="Shoe-ProductsList">
        {filteredProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="linkWithoutDecoration"
          >
            <div className="Shoe-cardproduct">
              <MDBCardImage
                className="Shoe-ProductsImg"
                src={product.image}
                position="top"
                alt=""
              />
              <MDBCardBody>
                <MDBCardTitle className="Shoe-ProductsTitle">
                  {product.title}
                </MDBCardTitle>
                <MDBCardText className="Shoe-ProductsPrice">
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
