// PetFurniture.jsx
import React, { useContext } from "react";
import "./StudyTable.css"; // Create a CSS file for styling
import { Link } from "react-router-dom";
import { MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from "mdb-react-ui-kit";
import UserContext from "./UserContext";

export default function StudyTable() {
  const { products } = useContext(UserContext);

  const filteredProducts = products.filter(
    (product) => product.category === "StudyTable"
  );

  return (
    <div className="StudyTable-Products">
      <div>
        <h1>Study Tables</h1>
      </div>
      <div className="StudyTable-ProductsList">
        {filteredProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="linkWithoutDecoration"
          >
            <div className="StudyTable-cardproduct">
              <MDBCardImage
                className="StudyTable-ProductsImg"
                src={product.image}
                position="top"
                alt=""
              />
              <MDBCardBody>
                <MDBCardTitle className="StudyTable-ProductsTitle">
                  {product.title}
                </MDBCardTitle>
                <MDBCardText className="StudyTable-ProductsPrice">
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
