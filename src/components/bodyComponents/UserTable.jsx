import { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import DataContext from "../../contexts/DataContext";
import "../../styles/body.css";

export default function UserTable() {
  const {
    filteredData,
    keysToRender,
    capitalizeFirstLetter,
    checkedItems,
    handleCheckboxChange,
    handleSelectAllChange,
    selectAllChecked,
  } = useContext(DataContext);

  if (filteredData.length === 0) {
    return <p>Loading...</p>;
  }

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    handleSelectAllChange(checked);
  };

  return (
    <Container fluid className="bg-body-primary br-3 p-3">
      <Table>
        <thead>
          <tr>
            <th
              className="table-header"
              style={{ backgroundColor: "#b4a7fe", alignItems: "center" }}
            >
              <input
                type="checkbox"
                checked={selectAllChecked}
                onChange={handleSelectAll}
              />
            </th>
            <th
              className="table-header"
              style={{ backgroundColor: "#b4a7fe", alignItems: "center" }}
            >
              S/N
            </th>
            {keysToRender.map((key) => (
              <th
                key={key}
                className="table-header"
                style={{ backgroundColor: "#b4a7fe" }}
              >
                {capitalizeFirstLetter(key)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((product, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={checkedItems[product.SKU] || false}
                  onChange={() => handleCheckboxChange(product.SKU)}
                />
              </td>
              <td>{index + 1}</td>
              {keysToRender.map((key, i) => (
                <td key={i}>
                  {key === "Image_1" ? (
                    <LazyLoadImage
                      src={product[key]}
                      alt={product["Name"]}
                      width={50}
                      height={50}
                      effect="blur"
                    />
                  ) : (
                    product[key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
