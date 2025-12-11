// import React from 'react'
import { Logo, NavbarContainer, NavbarLinks, Resume } from "./navbar.style"

import resume from "../../../public/icons/resume.svg"
import HoverAnimLink from "../../hooks/linkTextAnimation"

const Navbar = () => {
  return (
    <NavbarContainer>
        <Logo>Code by Abdurahmon</Logo>
        <NavbarLinks>
            <HoverAnimLink to="/home">Home</HoverAnimLink>
            <HoverAnimLink to="/about">About</HoverAnimLink>
            <HoverAnimLink to="/skills">Skills</HoverAnimLink>
            <HoverAnimLink to="/projects">Projects</HoverAnimLink>
        </NavbarLinks>
        <Resume className="resume">
            <p>RESUME</p>
            <img src={resume} alt="icon" />
        </Resume>
    </NavbarContainer>
  )
}

export default Navbar
