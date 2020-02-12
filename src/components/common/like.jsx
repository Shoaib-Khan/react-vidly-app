import React, { Component } from "react";

const Like = ({ liked, onClick }) => {
  let styleClasses = "fa fa-heart";
  if (!liked) styleClasses += "-o";
  return (
    <i
      className={styleClasses}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
      onClick={onClick}
    ></i>
  );
};

export default Like;
