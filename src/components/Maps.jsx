import React from "react";

const Maps = () => {
  return (
    <div
      style={{
        textDecoration: "none",
        overflow: "hidden",
        maxWidth: "100%",
        width: 300,
        height: 182,
        borderRadius: 10,
      }}
    >
      <div
        id="google-maps-display"
        style={{ height: "100%", width: "100%", maxWidth: "100%" }}
      >
        <iframe
          style={{ height: "100%", width: "100%" }}
          src="https://www.google.com/maps/embed/v1/place?q=Jalan+Sunset+Road+No.28,+Kuta,+Badung+Regency,+Bali,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        />
      </div>
    </div>
  );
};

export default Maps;
