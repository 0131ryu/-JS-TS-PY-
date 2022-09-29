import React from "react";
import Td from "./Td";

const Tr = ({ rowData, rowIndex, dispatch }) => {
  console.log("tr rendered");
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td
            cellIndex={i}
            rowIndex={rowIndex}
            cellData={rowData[i]}
            dispatch={dispatch}
          >
            {""}
          </Td>
        ))}
    </tr>
  );
};

export default Tr;
