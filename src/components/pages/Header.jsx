import React from "react";
import { Link } from "react-router-dom";

export const Header = ({ title }) => {
  return (
    <navbar>
      <Link to="/main"> Main </Link>
      <Link to="/main/second"> second</Link>
      <h1>{title}</h1>
    </navbar>
  );
};
