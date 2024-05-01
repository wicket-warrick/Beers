import "./style.css";
import photo from "../../img/beer.png";
import { Link as NavLink } from "react-router-dom";
import { useState } from "react";
<<<<<<< HEAD


export const NavBar = () => {
  const [isActive,setIsActive]=useState(false)
  const onClickHamburger=()=>{

    if(window.innerWidth<1024){

      setIsActive(!isActive)
      console.log('ola')
    }
  }

 
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand" >
        <NavLink to={"/"}>
          <img className="navbar-item" src={photo} width="80"  aria-label="menu"></img>
        </NavLink>

        <div  className={`navbar-burger ${isActive ? 'is-active' : ''}`} onClick={onClickHamburger} aria-label="menu" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      
      
    </div>
      </div>

      <section  className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
=======

export const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const onClickHamburger = () => {
    if (window.innerWidth < 1024) {
      setIsActive(!isActive);
      console.log("ola");
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink to={"/"}>
          <img
            className="navbar-item"
            src={photo}
            width="80"
            aria-label="menu"
          ></img>
        </NavLink>

        <div
          className={`navbar-burger ${isActive ? "is-active" : ""}`}
          onClick={onClickHamburger}
          aria-label="menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <section className={`navbar-menu ${isActive ? "is-active" : ""}`}>
>>>>>>> 258bab15d0b074e1d421711400f97da538188def
        <div className="navbar-start">
          <NavLink className="navbar-item" onClick={onClickHamburger} to={"/"}>
            Home
          </NavLink>

<<<<<<< HEAD
          <NavLink className="navbar-item" onClick={onClickHamburger} to={"/catalogue"}>
            Catalogue
          </NavLink>

          <NavLink className="navbar-item" onClick={onClickHamburger}to={"/contact"}>
Contact
=======
          <NavLink
            className="navbar-item"
            onClick={onClickHamburger}
            to={"/catalogue"}
          >
            Catalogue
          </NavLink>

          <NavLink
            className="navbar-item"
            onClick={onClickHamburger}
            to={"/contact"}
          >
            Contact
>>>>>>> 258bab15d0b074e1d421711400f97da538188def
          </NavLink>
        </div>
      </section>
    </nav>
  );
};
