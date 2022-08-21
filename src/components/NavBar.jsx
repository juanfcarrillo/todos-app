import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className="container nav-bar flex p-r">
      <AiOutlineHeart fill="#f0eff5" className="icon" />
      <ul className="rigth v-center">
        <li>
          <Link to="/" className="nav-elem">
            TODOS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
