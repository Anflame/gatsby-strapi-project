import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <section style={{ backgroundColor: "lightgray", padding: "1rem 2rem" }}>Пет проект Cидоров Денис {year}</section>
  );
};

export default Footer;
