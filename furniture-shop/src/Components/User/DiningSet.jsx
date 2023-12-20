// PetFurniture.jsx
import React, { useContext } from "react";
import "./DiningSet.css"; // Create a CSS file for styling
import { Link } from "react-router-dom";
import { MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from "mdb-react-ui-kit";
import UserContext from "./UserContext";

export default function DiningSet() {
  const { products } = useContext(UserContext);

  const filteredProducts = products.filter(
    (product) => product.category === "Dinning Set"
  );

  return (
    <div className="DiningSet-Products">
      <div>
        <h1>Dining Set</h1>
      </div>
      <div className="DiningSet-ProductsList">
        {filteredProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="linkWithoutDecoration"
          >
            <div className="DiningSet-cardproduct">
              <MDBCardImage
                className="DiningSet-ProductsImg"
                src={product.image}
                position="top"
                alt=""
              />
              <MDBCardBody>
                <MDBCardTitle className="DiningSet-ProductsTitle">
                  {product.title}
                </MDBCardTitle>
                <MDBCardText className="DiningSet-ProductsPrice">
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
