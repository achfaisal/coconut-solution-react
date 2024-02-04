import React from "react";
import i18n from "../../i18n";

const Cocofiber = () => {
  const cocoFiberId = [
    {
      title: "Spesifikasi",
      desc1: "Memiliki panjang serat minimal 5 cm",
      desc2: "Memiliki kadar air kurang dari 15%",
      desc3:
        "Memiliki kepadatan yang baik dan tidak terlalu padat atau terlalu renggang.",
      desc4: "Memiliki kotor ± 5%.",
      desc5:
        "Memiliki kepadatan yang baik dan tidak terlalu padat atau terlalu renggang.",
      desc6: "Mempunyai tingkat pH antara 5,5 hingga 6,5.",
    },
  ];

  const cocoFiberEn = [
    {
      title: "Specification",
      desc1: "Minimum fiber length of 5 cm.",
      desc2: "Moisture content of less than 15%.",
      desc3: "Good density, not too compact or too loose.",
      desc4: "± 5% impurity level.",
      desc5: "Good density, not too compact or too loose.",
      desc6: "pH level ranging from 5.5 to 6.5.",
    },
  ];

  const cocoFiberData = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "en" ? cocoFiberEn[0] : cocoFiberId[0];
  };

  const keys = Object.keys(cocoFiberData()).slice(1);

  return (
    <div className="table-container" id="order-table">
      <div className="table-product">
        <table className="uk-table uk-table-divider">
          <thead>
            <tr>
              <th className="uk-table-expand table-spec">
                {cocoFiberData().title}
              </th>
            </tr>
          </thead>
          <tbody>
            {keys.map((key, index) => (
              <tr key={index}>
                <td>{cocoFiberData()[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cocofiber;
