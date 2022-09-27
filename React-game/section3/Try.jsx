import React, { Component, createRef } from "react";

const Try = ({ tryInfo }) => {
  //tryInfo자리가 props
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
};

export default Try;
