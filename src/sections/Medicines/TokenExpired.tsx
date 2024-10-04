import React from "react";

const TokenExpired = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "87vh",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: "200px",
      }}
    >
      <p
        style={{
          fontWeight: 800,
          fontSize: 16,
          color: "#333333",
        }}
      >
        The link has expired. Please contact us at +917011124991
      </p>
    </div>
  );
};

export default TokenExpired;
