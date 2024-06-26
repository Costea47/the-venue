import React from "react";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="bck_red" style={{ background: "#3d010e" }}>
      <Fade triggerOnce>
        <div className="font_righteous footer_logo_venue">The venue</div>
        <div className="footer_copyright">
          The venuew 2024 all right reserved
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
