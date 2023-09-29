import {
  DigiMediaImage,
  DigiNavigationSidebarButton,
} from "@digi/arbetsformedlingen-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/logo-02.svg";
import { Navigation } from "./Navigation";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <header className="nav">
      <div className="headerFlex">
        <DigiMediaImage
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
          afUnlazy
          afHeight="100"
          afWidth="100"
          afSrc={logo}
          afAlt="Yrkesvägledarens logo"
        ></DigiMediaImage>
        <div className="navigation">
          <Link to="/">Hem</Link>
          <Link to="/sok-yrke">Sök yrke</Link>
          <Link to="/sok-utbildning">Sök utbildning</Link>
          <Link to="/om">Om</Link>
        </div>
        <DigiNavigationSidebarButton
          onAfOnToggle={toggleMenu}
          afText="Meny"
          className="burger-menu"
        ></DigiNavigationSidebarButton>
        {menuIsOpen ? <Navigation closeMenu={closeMenu}></Navigation> : ""}
      </div>
    </header>
  );
}
