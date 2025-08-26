import React from "react";

import "./StylesExamples.css"


const StylesExamples = () => {
  const inLineStyle = {
    color: "red",
    fontSize: "20px",
  };

  return (
    <div>
      <h2 style={inLineStyle}>Estilos inLine</h2>

      <p className="text">Meu CSS</p>

    </div>
  );
};

export default StylesExamples;
