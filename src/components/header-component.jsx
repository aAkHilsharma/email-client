import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center py-4 space-x-4">
      <div>Filter By:</div>
      <Link to="/" className="cursor-pointer">
        Inbox
      </Link>
      <Link to="/favorites" className="cursor-pointer">
        Favorites
      </Link>
    </header>
  );
};

export default Header;
