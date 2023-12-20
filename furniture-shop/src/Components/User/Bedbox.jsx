// PetFurniture.jsx
import React, { useContext } from "react";
import "./Bedbox.css"; // Create a CSS file for styling
import { Link } from "react-router-dom";
import { MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from "mdb-react-ui-kit";
import UserContext from "./UserContext";

export default function Bedbox() {
  const { products } = useContext(UserContext);

  const filteredProducts = products.filter(
    (product) => product.category === "Bedbox"
  );

  return (
    <div className="Bedbox-Products">
      <div>
        <h1>Beds with box storage</h1>
      </div>
      <div className="Bedbox-ProductsList">
        {filteredProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="linkWithoutDecoration"
          >
            <div className="Bedbox-cardproduct">
              <MDBCardImage
                className="Bedbox-ProductsImg"
                src={product.image}
                position="top"
                alt=""
              />
              <MDBCardBody>
                <MDBCardTitle className="Bedbox-ProductsTitle">
                  {product.title}
                </MDBCardTitle>
                <MDBCardText className="Bedbox-ProductsPrice">
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
