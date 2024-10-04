"use client";
import React from "react";
import Image from "next/image";
import RadioButton from "@/components/RadioButton";
import { UserAddress } from "@/serializers/shop";
import FloatingSection from "./FloatingSection";
import AddressForm from "./AddressForm";
import edit from "../../../public/edit.svg";

interface AddressCellProps {
  disableEdit?: boolean;
  item: OrderAddress;
  checked: boolean;
  onCheck?: () => void;
}

export default function AddressCell({
  disableEdit,
  item,
  checked,
  onCheck,
}: AddressCellProps) {
  const address = new UserAddress(item);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 8,
        borderRadius: 8,
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          border: `0.1px solid #000000`,
          borderRadius: 4,
          padding: 10,
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{ display: "flex", flexDirection: "row", flexGrow: 1 }}
            onClick={onCheck}
          >
            <RadioButton
              radius={7}
              borderColor="#EA6F54"
              fillColor="#EA6F54"
              isSelected={checked}
            />

            <div style={{ width: "70%" }}>
              <p
                style={{
                  fontWeight: 1000,
                  color: "#333333",
                  fontSize: 14,
                }}
              >
                <b>{address.title}</b>
              </p>
              <p style={{ color: "#757575", fontSize: 13 }}>
                {address.full_address}
              </p>
            </div>
          </div>
          {!disableEdit && (
            <FloatingSection data={<AddressForm address={item} />}>
              <div
                style={{
                  flexGrow: 3,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image src={edit} alt="edit" height={20} />
              </div>
            </FloatingSection>
          )}
        </div>
      </div>
    </div>
  );
}
