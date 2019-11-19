import React from "react";
import './componentsStyles/hire.css'

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className="form-message invalid">&nbsp;</div>;
  }
  if (message) {
    return <div className="error">{message}</div>;
  }
  return <div className="valid">Analyzed</div>;
};

export default Error;