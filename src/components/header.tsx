import React from "react";

const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        border: "1px solid blue",
      }}
    >
      <div
        style={{
          border: "1px solid green",
          width: "18%",
          display: "flex",
          marginLeft: "3%",
          justifyContent: "space-between",
        }}
      >
        <div>Todos</div>
        <div>Autos</div>
        <div>Salud</div>
        <div>Hogar</div>
      </div>
    </div>
  );
};

export default Header;
