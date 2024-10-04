import React from "react";

type Summary = Array<
  | {
      key: string;
      title: string;
      value: string;
    }
  | string
>;

const PaymentSummary = ({ summary }: { summary: Summary }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className=" px-2 py-2 bg-[#F9F8F8] border-[1px] rounded-xl"
    >
      <p style={{ paddingLeft: 10, fontWeight: 500 }}>Payment Summary</p>
      {summary.map((item, index) => {
        if (typeof item === "string") {
          return (
            <div
              key={index}
              style={{
                width: "100%",
                height: 0.5,
                backgroundColor: "#757575",
                marginTop: 5,
                marginBottom: 5,
              }}
            />
          );
        }
        let color = "#757575";
        let valueColor = "#333333";
        if (item.key === "items_discount") {
          color = "#EA6F54";
          valueColor = "#EA6F54";
        }
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            <p style={{ fontSize: 14, color: color }}>{item.title}</p>
            <p style={{ fontSize: 14, color: valueColor }}>{item.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PaymentSummary;
