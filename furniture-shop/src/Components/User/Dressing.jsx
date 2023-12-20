// PetFurniture.jsx
import React, { useContext } from "react";
import "./Dressing.css"; // Create a CSS file for styling
import { Link } from "react-router-dom";
import { MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from "mdb-react-ui-kit";
import UserContext from "./UserContext";

export default function Dressing() {
  const { products } = useContext(UserContext);

  const filteredProducts = products.filter(
    (product) => product.category === "Dressing"
  );

  return (
    <div className="Office-Products">
      <div>
        <h1>Dressing Tables</h1>
      </div>
      <div className="Dressing-ProductsList">
        {filteredProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="linkWithoutDecoration"
          >
            <div className="Dressing-cardproduct">
              <MDBCardImage
                className="Dressing-ProductsImg"
                src={product.image}
                position="top"
                alt=""
              />
              <MDBCardBody>
                <MDBCardTitle className="Dressing-ProductsTitle">
                  {product.title}
                </MDBCardTitle>
                <MDBCardText className="Dressing-ProductsPrice">
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
