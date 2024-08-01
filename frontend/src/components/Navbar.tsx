import React, { FC } from "react";
import { NavbarConfig } from "./types";
import { Link } from "gatsby";

export interface NavbarProps {
  config: NavbarConfig[];
  style?: React.CSSProperties;
}

const Navbar: FC<NavbarProps> = ({ config, style }) => {
  console.log({ config });
  return (
    <ul style={{ listStyleType: "none", ...style }}>
      {config.map(({ title, link }, i) => (
        <li key={i}>
          <Link to={link} style={{ width: "50px" }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
