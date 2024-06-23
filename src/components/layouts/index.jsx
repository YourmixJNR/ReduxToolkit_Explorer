import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full relative p-8">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
