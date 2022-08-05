import "./style.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <ul>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/catalogue"}>Catalogue</NavLink>
      </li>

      <li>
        {" "}
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </ul>
  );
};
