import React from "react";
import Navbar from "./Navbar";
import { NavbarConfig } from "./types";
import { Link } from "gatsby";

const Header = () => {
  const headerConfig: NavbarConfig[] = [
    {
      title: "Новости",
      link: "/news",
    },
    {
      title: "Статьи",
      link: "/articles",
    },
  ];

  return (
    <div
      style={{ display: "flex", backgroundColor: "lavender", justifyContent: "space-between", padding: "1rem 2rem" }}
    >
      <Link to="/">На главную</Link>
      <Navbar config={headerConfig} style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}></Navbar>
    </div>
  );
};

export default Header;
