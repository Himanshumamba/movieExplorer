import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

interface HeaderProps {
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showBackButton = false }) => {
  const navigate = useNavigate();
  const [wishlistCount, setWishlistCount] = useState(0);

  // Load wishlist count from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlistCount(saved.length);
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo-link">
          <h1 className="logo">MovieExplorer</h1>
        </Link>
      </div>

      <div className="header-right">
        {showBackButton ? (
          <button className="back-btn" onClick={() => navigate(-1)}>
            &larr; Back
          </button>
        ) : (
          <Link to="/wishlist" className="wishlist-btn">
            &#10084; {wishlistCount}
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
