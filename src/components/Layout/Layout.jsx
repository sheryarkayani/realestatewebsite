import React, { Fragment } from "react";

// Removed the import statement for Header
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

const Layout = () => {
  return (
    <Fragment>
      {/* Removed the <Header /> component */}
      <div>
        <Routers />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
