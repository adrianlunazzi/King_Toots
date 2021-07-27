import React from "react";

const brand = () => {
  return (
    <div className="bran d-flex justify-content-center">
      <a className="navbar-brand" href="#">
        <img
          src="/images/logo.png"
          alt="King Toots Music Store"
          width={60}
          height={48}
          className="d-inline-block align-text-center"
        />
        King Toot´s - Music Store
      </a>
    </div>
  );
};

export default brand;
