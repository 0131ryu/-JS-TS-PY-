import React, { useContext } from "react";
import { TableContext } from "./MineSearch";
import Td from "./Td";

//Table로 부터 rowIndex 받음
const Tr = ({ rowIndex }) => {
  const { tableData } = useContext(TableContext);
  return (
    <tr>
      {tableData[0] &&
        Array(tableData[0].length)
          .fill()
          .map((td, i) => <Td rowIndex={rowIndex} cellIndex={i} />)}
    </tr>
  );
};

export default Tr;
