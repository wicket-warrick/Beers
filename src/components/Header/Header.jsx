import "./Header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1 className="has-text-centered title has-background-warning is-black ">
        <Link className='navbar-item'to={"/"}>
          The Brewdog <p>Back Catalogue</p>
        </Link>
      </h1>
    </header>
  );
};
