import React from "react";
import i18n from "../../i18n";

const Cocopeat = () => {
  const cocopeatId = [
    {
      title: "Spesifikasi",
      header1: "Electrical Conductivity",
      desc1: "0 – 0.5 mS/cm (Low EC), > 1 (High EC), Polybag 30-60%",
      header2: "Tingkat Kelembaban",
      desc2a: "Karung 70-80%",
      desc2b: "Block < 20%",
      header3: "pH",
      desc3a: "5,8 – 7",
      header4: "Tingkat kehalusan",
      desc4: "3 dan 5 mm",
      header5: "Berat per Kemasan",
      desc5a: "28 kg per kemasan polybag",
      desc5b: "10 kg per kemasan karung",
      desc5c: "5 kg per block",
      header6: "Ukuran kemasan",
      desc6a: "Polybag 30 cm x 40 cm x 70 cm",
      desc6b: "Karung beras 45 x 75 cm",
      header7: "Muatan dalam 40ft HC Container ",
      desc7: "750 polybag",
      header8: "Muatan dalam truk engkel ",
      desc8: "160 karung",
    },
  ];

  const cocopeatEn = [
    {
      title: "Specifications",
      header1: "Electrical Conductivity",
      desc1: "0 – 0.5 mS/cm (Low EC), > 1 (High EC), Polybag 30-60%",
      header2: "Humidity Level",
      desc2a: "Bag 70-80%",
      desc2b: "Block < 20%",
      header3: "pH",
      desc3a: "5.8 – 7",
      header4: "Fineness Level",
      desc4: "3 and 5 mm",
      header5: "Weight per Packaging",
      desc5a: "28 kg per polybag",
      desc5b: "10 kg per bag",
      desc5c: "5 kg per block",
      header6: "Packaging Size",
      desc6a: "Polybag 30 cm x 40 cm x 70 cm",
      desc6b: "Rice bag 45 x 75 cm",
      header7: "Load in 40ft HC Container",
      desc7: "750 polybags",
      header8: "Load in Small Truck",
      desc8: "160 bags",
    },
  ];

  const cocopeatData = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "en" ? cocopeatEn[0] : cocopeatId[0];
  };

  return (
    <div className="table-container" id="order-table">
      <div className="table-product">
        <table className="uk-table uk-table-divider">
          <thead>
            <tr>
              <th className="uk-table-small table-spec">
                {cocopeatData().title}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{cocopeatData().header1}</td>
              <td>{cocopeatData().desc1}</td>
            </tr>
            <tr>
              <td>{cocopeatData().header2}</td>
              <td>
                {cocopeatData().desc2a}
                <br />
                {cocopeatData().desc2b}
              </td>
            </tr>
            <tr>
              <td>{cocopeatData().header3}</td>
              <td>{cocopeatData().desc3a}</td>
            </tr>
            <tr>
              <td>{cocopeatData().header4}</td>
              <td>{cocopeatData().desc4}</td>
            </tr>
            <tr>
              <td>{cocopeatData().header5}</td>
              <td>
                {cocopeatData().desc5a} <br />
                {cocopeatData().desc5b} <br />
                {cocopeatData().desc5c} <br />
              </td>
            </tr>
            <tr>
              <td>{cocopeatData().header6}</td>
              <td>
                {cocopeatData().desc6a} <br />
                {cocopeatData().desc6b} <br />
              </td>
            </tr>
            <tr>
              <td>{cocopeatData().header7}</td>
              <td>
                {cocopeatData().desc7} <br />
              </td>
            </tr>
            <tr>
              <td>{cocopeatData().header8}</td>
              <td>
                {cocopeatData().desc8} <br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cocopeat;
