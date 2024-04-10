import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d9933.275897309677!2d-0.1641135!3d51.5073638!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x4876054929181a85%3A0xd1af6c4f49b4bd0c!2sHyde%20Park%2C%20London!3m2!1d51.5073638!2d-0.1641135!5e0!3m2!1sen!2suk!4v1712777855822!5m2!1sen!2suk"
        width="100%"
        height="500"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
