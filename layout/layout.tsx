import React from "react";
import Footer from "../features/general/footer/footer";
import Header from "../features/general/header/header";

function Layout(props: any) {
  return (
    <div className="w-full">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
