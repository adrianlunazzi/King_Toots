import React, { Component } from "react";
import Brand from "../Brand";
import Buttons from "../Buttons";

const Navbar2 = () => {
  return (
    <div>
      <nav className="nabvar navbar-dark bg-dark">
        <div className="row py-2">
          <div className="col-3 ">
            <Brand />
          </div>
          <div className="col-6">
            <Buttons />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
