import "./style.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>
        <Link to={"/"}>
          The Brewdog <p>Back Catalogue</p>
        </Link>
      </h1>
    </header>
  );
};
