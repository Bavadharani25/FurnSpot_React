// PetFurniture.jsx
import React, { useContext } from "react";
import "./Bed.css"; // Create a CSS file for styling
import { Link } from "react-router-dom";
import { MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from "mdb-react-ui-kit";
import UserContext from "./UserContext";

export default function Bed() {
  const { products } = useContext(UserContext);

  const filteredProducts = products.filter(
    (product) => product.category === "Bed"
  );

  return (
    <div className="Bed-Products">
      <div>
        <h1>Bed Products</h1>
      </div>
      <div className="Bed-ProductsList">
        {filteredProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="linkWithoutDecoration"
          >
            <div className="Bed-cardproduct">
              <MDBCardImage
                className="Bed-ProductsImg"
                src={product.image}
                position="top"
                alt=""
              />
              <MDBCardBody>
                <MDBCardTitle className="Bed-ProductsTitle">
                  {product.title}
                </MDBCardTitle>
                <MDBCardText className="Bed-ProductsPrice">
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
