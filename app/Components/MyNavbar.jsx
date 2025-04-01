"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar, Nav, Container } from "react-bootstrap";
import img from "./logo.png"; // Adjust the path if needed

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      className="py-3"
      style={{
        background: "rgba(255, 255, 255, 0.1)", // Transparent or white
        backdropFilter: "blur(10px)", // Glassmorphism effect
        borderBottom: "2px solid rgba(0, 0, 0, 0.1)", // Subtle border
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)", // Light shadow
      }}
    >
      <Container>
        {/* Logo */}
        <Link href="/" className="navbar-brand">
          <Image src={img} alt="Logo" width={100} height={50} />
        </Link>

        {/* Toggle Button (Hamburger) */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
          style={{
            border: "none", // Black background for Hamburger button
            padding: "10px",
            borderRadius: "5px",
          }}
        />

        {/* Navbar Collapse - Dropdown Menu */}
        <Navbar.Collapse id="navbar-nav" className="text-center">
          <Nav className="ms-auto">
            {["Home", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item === "Home" ? "" : item}`}
                className="nav-link"
                onClick={() => setExpanded(false)}
                style={{
                   // Black text
                  fontWeight: "500",
                  transition: "color 0.3s ease-in-out",
                }}
                onMouseOver={(e) => (e.target.style.color = "#808080")} // Gray hover
                onMouseOut={(e) => (e.target.style.color = "#000")}
              >
                {item}
              </Link>
            ))}

            {/* Contact Button */}
            <Link
              href="https://wa.me/+919758788286?text=Hi, I would like to book a demo session."
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setExpanded(false)}
              style={{
                color: "#000", // Black text
                fontWeight: "500",
                transition: "color 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.target.style.color = "#808080")}
              onMouseOut={(e) => (e.target.style.color = "#000")}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
