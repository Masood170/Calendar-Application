// src/components/Shared/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white text-center py-4 mt-8">
      <p>
        Crafted with ❤️ by <strong>Akhila</strong> | &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
