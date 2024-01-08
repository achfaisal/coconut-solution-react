import React from "react";
import i18n from "../../i18n";

const Cocobristle = () => {
  const cocoBristleId = [
    {
      title: "Spesifikasi",
      desc1: "Alami",
      desc2: "Memiliki panjang  15 – 25 cm",
    },
  ];

  const cocoBristleEn = [
    {
      title: "Specification",
      desc1: "Alami",
      desc2: "Memiliki panjang  15 – 25 cm",
    },
  ];

  const cocoBristleData = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "en" ? cocoBristleEn[0] : cocoBristleId[0];
  };

  const keys = Object.keys(cocoBristleData()).slice(1);

  return (
    <div className="table-container" id="order-table">
      <div className="table-product">
        <table className="uk-table uk-table-divider">
          <thead>
            <tr>
              <th className="uk-table-expand table-spec">
                {cocoBristleData().title}
              </th>
            </tr>
          </thead>
          <tbody>
            {keys.map((key, index) => (
              <tr key={index}>
                <td>{cocoBristleData()[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cocobristle;
