// PetFurniture.jsx
import React, { useContext } from "react";
import "./Egchair.css"; // Create a CSS file for styling
import { Link } from "react-router-dom";
import { MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from "mdb-react-ui-kit";
import UserContext from "./UserContext";

export default function Egchair() {
  const { products } = useContext(UserContext);

  const filteredProducts = products.filter(
    (product) => product.category === "Egchair"
  );

  return (
    <div className="Egchair-Products">
      <div>
        <h1>Ergonomic Chairs</h1>
      </div>
      <div className="Egchair-ProductsList">
        {filteredProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="linkWithoutDecoration"
          >
            <div className="Egchair-cardproduct">
              <MDBCardImage
                className="Egchair-ProductsImg"
                src={product.image}
                position="top"
                alt=""
              />
              <MDBCardBody>
                <MDBCardTitle className="Egchair-ProductsTitle">
                  {product.title}
                </MDBCardTitle>
                <MDBCardText className="Egchair-ProductsPrice">
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
