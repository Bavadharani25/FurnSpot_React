import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../Components/HeaderNavbar.css";
import { BsMinecart } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import {GrUserAdmin} from "react-icons/gr"
import { useContext, useState } from "react";
import UserContext from "./User/UserContext";
import Badge from "react-bootstrap/Badge";




function HeaderNavbar({ cartItems }) {
  const { loginStatus,setLoginStatus } = useContext(UserContext);

  const [searchInput, setSearchInput] = useState("");

  const handleLogout=()=>{
    setLoginStatus("logout")
  }

  function handleSearch() {
    if (searchInput.toLowerCase().includes("sofa")) {
      return "/sofa";
    } else if (searchInput.toLowerCase().includes("chair")) {
      return "/chair";
    } else if (searchInput.toLowerCase().includes("table")) {
      return "/table";
    } 
    else if (searchInput.toLowerCase().includes("bed")) {
      return "/bed";
    } else if (searchInput.toLowerCase().includes("pet furniture")) {
      return "/pet-furniture";
    } 
    else if (searchInput.toLowerCase().includes("dining set")) {
      return "/diningset";
    } else if (searchInput.toLowerCase().includes("storage")) {
      return "/storage";
    } 
    else if (searchInput.toLowerCase().includes("study")) {
      return "/studytable";
    } else if (searchInput.toLowerCase().includes("dressing")) {
      return "/dressing";
    } 
  }

  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <div className="Nav-bar">
          <div className="left-section">
            <input
              className="input-Search"
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Link
              to={handleSearch()}
              className="Search-btn linkWithoutDecoration"
            >
              Search
            </Link>
          </div>

          <div className="center-section">
            <Link className="logo" to="/">
              FURNSPOT
            </Link>
          </div>

          <div className="right-section">
            {loginStatus === "success" ? (
              <Link className="login-logo" to="/" onClick={handleLogout}>
                <IoMdLogOut />
              </Link>
            ) : (
              <Link className="login-logo" to="/login">
                <AiOutlineUser />
              </Link>
            )}

            <Link className="wishlist-logo" to="/wishlist">
              <GiSelfLove />
            </Link>

            <Link className="cart-logo" to="/cart">
              <BsMinecart />
              <Badge pill bg="secondary" className="cart-badge">
                {cartItems.length}
              </Badge>
            </Link>
            <Link className="admin-logo" to='/adminlogin'>
             <GrUserAdmin />
            </Link>
          </div>
        </div>

        

        
      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;
