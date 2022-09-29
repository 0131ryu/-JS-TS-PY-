import React from "react";
import Tr from "./Tr";

const Table = ({ tableData, dispatch }) => {
  return (
    //i가 몇 번째 줄인지 나타냄
    <table>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr dispatch={dispatch} rowIndex={i} rowData={tableData[i]} />
        ))}
    </table>
  );
};

export default Table;
