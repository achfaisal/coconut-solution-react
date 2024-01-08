import React from "react";
import i18n from "../../i18n";

const Cocopot = () => {
  const cocopotId = [
    {
      title: "Spesifikasi",
      header1: "Bahan",
      desc1: "Campuran sabut kelapa",
    },
  ];

  const cocopotEn = [
    {
      title: "Specification",
      header1: "Bahan",
      desc1: "Campuran sabut kelapa",
    },
  ];

  const cocopotData = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "en" ? cocopotEn[0] : cocopotId[0];
  };

  return (
    <div className="table-container" id="order-table">
      Coming Soon
    </div>
  );
};

export default Cocopot;
