import React, { FC, ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";
import "normalize.css";
import "./styles.css";
import type { MetaConfig } from "./types";

interface LayoutProps {
  children: ReactNode;
  meta?: MetaConfig;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ display: "grid", gridTemplateRows: "100px 1fr 100px" }}>
      <Header />
      <main style={{ padding: "2rem" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
