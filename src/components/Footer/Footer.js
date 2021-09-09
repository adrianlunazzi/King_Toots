import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-conteiner">
        <div className="footer-col1"></div>
        <div className="footer-col2"></div>
        <div className="footer-col3">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </footer>

      <p className="legal">
        King Toots Music Store - Todos los derechos reservados
      </p>
    </>
  );
};

export default Footer;
