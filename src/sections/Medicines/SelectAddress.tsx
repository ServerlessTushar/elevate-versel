import { notoBold } from "@/app/fonts";
import rtkApi from "@/lib/store/rtk";
import { useAddresses } from "@/utils/hooks/shop";
import FloatingSection from "./FloatingSection";
import AddressForm from "./AddressForm";
import AddressCell from "./AddressCell";
import { DrawerClose } from "@/components/Drawer";
import { useRef } from "react";

const SelectAddress = () => {
  const [setDefault] = rtkApi.useSetDefaultAddressMutation();
  const { addresses, refetch, isLoading, can_add_address } = useAddresses();
  const selectAddressRef = useRef<HTMLButtonElement>(null);

  const renderFooter = () => {
    if (can_add_address) {
      return (
        <FloatingSection data={<AddressForm />}>
          <button className="w-full rounded-md text-[#EA6F54]">
            + Add Address
          </button>
        </FloatingSection>
      );
    } else {
      return (
        <p
          style={{
            textAlign: "center",
            fontSize: 14,
            fontWeight: 400,
            color: "#EA6F54",
          }}
        >
          You can only have 2 addresses
        </p>
      );
    }
  };

  return (
    <div className="w-[85%] mx-auto">
      <div className="text-center">
        <p className={`${notoBold.className}`}>Select Address</p>
      </div>

      <div className="z-40  pt-7 pb-3">
        {addresses?.map((item, index) => (
          <div key={index} style={{ marginBottom: 10 }}>
            <AddressCell
              item={item}
              checked={item.default_address}
              onCheck={() =>
                setDefault({
                  ...item,
                  default_address: true,
                })
                  .unwrap()
                  .finally(() => {
                    /*props.close()*/
                    selectAddressRef.current?.click();
                  })
              }
            />
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: 20,
        }}
      >
        {renderFooter()}
      </div>
      <DrawerClose ref={selectAddressRef} hidden />
    </div>
  );
};

export default SelectAddress;
