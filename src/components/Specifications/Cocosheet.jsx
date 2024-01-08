import React from "react";
import i18n from "../../i18n";

const Cocosheet = () => {
  const cocoSheetId = [
    {
      title: "Spesifikasi",
      header1: "Bahan",
      desc1: "Campuran sabut kelapa",
      header2: "Ketebalan",
      desc2: "1-3 cm atau lebih",
      header3: "Panjang",
      desc3: "25 - 50 meter",
      header4: "Lebar",
      desc4: "25 meter",
      header5: "Warna",
      desc5: "Emas kecoklatan",
    },
  ];

  const cocoSheetEn = [
    {
      title: "Specification",
      header1: "Bahan",
      desc1: "Campuran sabut kelapa",
      header2: "Ketebalan",
      desc2: "1-3 cm atau lebih",
      header3: "Panjang",
      desc3: "25 - 50 meter",
      header4: "Lebar",
      desc4: "25 meter",
      header5: "Warna",
      desc5: "Emas kecoklatan",
    },
  ];

  const cocoSheetData = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "en" ? cocoSheetEn[0] : cocoSheetId[0];
  };

  return (
    <div className="table-container" id="order-table">
      <div className="table-product">
        <table className="uk-table uk-table-divider">
          <thead>
            <tr>
              <th className="uk-table-small table-spec">
                {cocoSheetData().title}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{cocoSheetData().header1}</td>
              <td>{cocoSheetData().desc1}</td>
            </tr>
            <tr>
              <td>{cocoSheetData().header2}</td>
              <td>{cocoSheetData().desc2}</td>
            </tr>
            <tr>
              <td>{cocoSheetData().header3}</td>
              <td>{cocoSheetData().desc3}</td>
            </tr>
            <tr>
              <td>{cocoSheetData().header4}</td>
              <td>{cocoSheetData().desc4}</td>
            </tr>
            <tr>
              <td>{cocoSheetData().header5}</td>
              <td>{cocoSheetData().desc5}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cocosheet;
