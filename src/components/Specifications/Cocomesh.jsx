import React from "react";
import i18n from "../../i18n";

const Cocomesh = () => {
  const cocoMeshId = [
    {
      title: "Spesifikasi",
      header1: "Bahan",
      desc1: "Serat sabut kelapa",
      header2: "Ukuran jaring",
      desc2: "2x2 cm",
      desc3: "3x3 cm",
      desc4: "4x4 cm",
      desc5: "atau sesuai permintaan",
      header3: "Kemasan",
      desc6: "Roll",
      header4: "Panjang per roll",
      desc7: "25 meter",
      desc8: "atau sesuai dengan permintaan",
    },
  ];

  const cocoMeshEn = [
    {
      title: "Specifications",
      header1: "Material",
      desc1: "Coconut fiber",
      header2: "Mesh size",
      desc2: "2x2 cm",
      desc3: "3x3 cm",
      desc4: "4x4 cm",
      desc5: "or as requested",
      header3: "Packaging",
      desc6: "Roll",
      header4: "Length per roll",
      desc7: "25 meters",
      desc8: "or as per request",
    },
  ];

  const cocoMeshData = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "en" ? cocoMeshEn[0] : cocoMeshId[0];
  };

  const keys = Object.keys(cocoMeshData()).slice(1);

  return (
    <div className="table-container" id="order-table">
      <div className="table-product">
        <table className="uk-table uk-table-divider">
          <thead>
            <tr>
              <th className="uk-table-small table-spec">
                {cocoMeshData().title}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{cocoMeshData().header1}</td>
              <td>{cocoMeshData().desc1}</td>
            </tr>
            <tr>
              <td>{cocoMeshData().header2}</td>
              <td>
                {cocoMeshData().desc2}
                <br />
                {cocoMeshData().desc3}
                <br />
                {cocoMeshData().desc4} <br />
                {cocoMeshData().desc5}
              </td>
            </tr>
            <tr>
              <td>{cocoMeshData().header3}</td>
              <td>{cocoMeshData().desc6}</td>
            </tr>
            <tr>
              <td>{cocoMeshData().header4}</td>
              <td>
                {cocoMeshData().desc7}
                <br />
                {cocoMeshData().desc8}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cocomesh;
