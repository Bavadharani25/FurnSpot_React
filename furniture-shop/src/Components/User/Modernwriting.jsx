// PetFurniture.jsx
import React, { useContext } from "react";
import "./Modernwriting.css"; // Create a CSS file for styling
import { Link } from "react-router-dom";
import { MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from "mdb-react-ui-kit";
import UserContext from "./UserContext";

export default function Modernwriting() {
  const { products } = useContext(UserContext);

  const filteredProducts = products.filter(
    (product) => product.category === "Modernwriting"
  );

  return (
    <div className="Modernwriting-Products">
      <div>
        <h1>Modern writing Tables</h1>
      </div>
      <div className="Modernwriting-ProductsList">
        {filteredProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="linkWithoutDecoration"
          >
            <div className="Modernwriting-cardproduct">
              <MDBCardImage
                className="Modernwriting-ProductsImg"
                src={product.image}
                position="top"
                alt=""
              />
              <MDBCardBody>
                <MDBCardTitle className="Modernwriting-ProductsTitle">
                  {product.title}
                </MDBCardTitle>
                <MDBCardText className="Modernwriting-ProductsPrice">
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
