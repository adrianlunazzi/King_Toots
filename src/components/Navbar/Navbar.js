import React from "react";
import Brand from "../Brand";
import Buttons from "../Buttons";

const Navbar2 = () => {
  return (
    <div>
      <nav className="nabvar navbar-expand-lg navbar-dark bg-dark">
        <div className="conteiner"></div>
        <div className="row py-2">
          <div className="col-9 col-lg-3">
            <Brand />
          </div>
          <div className="col-3 col-lg-9">
            <button
              className="navbar-toggler my-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon me-auto" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <Buttons />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
