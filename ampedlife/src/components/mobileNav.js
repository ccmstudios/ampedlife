import React from "react";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import {useState} from "react";

const MobileNav = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav id="mobilenav">
      <GiHamburgerMenu
        id="hamburger"
        size="40px"
        color="white"
        onClick={() => setOpen(!open)}
        />
        {!open && <NavLinks /> }
    </nav>
  );
};

export default MobileNav;
