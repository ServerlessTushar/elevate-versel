import React from "react";
import { useAddresses } from "@/utils/hooks/shop";
import AddressCell from "./AddressCell";
import AddAddress from "./AddAddress";
import FloatingSection from "./FloatingSection";
import SelectAddress from "./SelectAddress";

export default function CheckoutAddress() {
  const { default_address } = useAddresses();

  return (
    <div>
      {default_address?.id ? (
        <div className="flex flex-col">
          <p className="font-semibold text-gray-800 text-base mt-4 mb-3">
            Delivery Address
          </p>

          <AddressCell
            disableEdit={true}
            item={default_address}
            checked={true}
          />

          <div className="self-end text-[#EA6F54] text-base">
            <FloatingSection data={<SelectAddress />}>
              <p>Change Address</p>
            </FloatingSection>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <p className="font-semibold text-gray-800 text-base mt-4 mb-3">
            Delivery Address
          </p>
          <AddAddress />
        </div>
      )}
    </div>
  );
}
