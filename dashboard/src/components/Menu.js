
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // Fetch logged-in user details
  useEffect(() => {
    axios.get("http://localhost:3001/api/auth/me", {
      withCredentials: true
    })
    .then((res) => {
      setUsername(res.data.user.username);
      setEmail(res.data.user.email);
    })
    .catch((err) => {
      console.log("User fetch error:", err);
    });
  }, []);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3001/api/auth/logout",
        {},
        { withCredentials: true }
      );

      window.location.replace("http://localhost:3000");

    } catch (error) {
      console.log("Logout error:", error);
      alert("Logout failed. Please try again.");
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />

      <div className="menus">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link to="/orders" style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link to="/holdings" style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link to="/positions" style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link to="/funds" style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link to="/apps" style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* Profile Section */}
        <div className="profile-wrapper">
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">
              {username ? username.substring(0, 2).toUpperCase() : "ZU"}
            </div>

            <p className="username">
              {username || "Loading..."}
            </p>
          </div>

          {/* Profile Dropdown */}
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <h4>{username}</h4>
              <p>{email}</p>

              <hr />

              <button onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Menu;
