import { useState, FormEvent, useRef } from "react";
import rtkApi from "@/lib/store/rtk";
import { DrawerClose } from "@/components/Drawer";
import { notoBold, notoMed } from "@/app/fonts";
import { CircularProgress } from "@mui/material";
import { useAddresses, useUserDetails } from "@/utils/hooks/shop";
import { getUpper, fetchPincodeData } from "@/lib/utils";
import { UserAddress } from "@/serializers/shop";

import "./css/address.css";

type Props = {
  address?: OrderAddress;
  onSkip?: () => void;
  isEdit?: boolean;
  openByDefault?: boolean;
  doNotExpand?: boolean;
  onValidation?: (code: string) => void;
  onComplete?: () => void;
};

const ADDRESS_TYPES = ["home", "other"];

const AddressForm = (props: Props) => {
  const isEdit = !!props.address?.id || !!props.isEdit;
  const { has_address, default_type } = useAddresses();
  const user = useUserDetails();
  const drawerBtn = useRef<HTMLButtonElement>(null);

  const [address, setAddress] = useState({
    ...UserAddress.DEFAULT_ADDRESS,
    address_type: default_type,
    ...props.address,
    pincode:
      props.address?.pincode ??
      (default_type === "other" ? "" : user.address?.pincode || ""),
  });

  const [createAddress] = rtkApi.useCreateAddressMutation({
    selectFromResult: (res) => ({ creating: res.isLoading }),
  });
  const [edtAddress] = rtkApi.useEditAddressMutation();
  const [pinCodeError, setPinCodeError] = useState(false);
  const [pincodeLoading, setPincodeLoading] = useState(false);

  const changeAddress = (key: string, value: string) => {
    if (key === "pincode") {
      if (!/^\d{0,6}$/.test(value)) {
        return;
      }
      setPinCodeError(value.length !== 6);
    }
    setAddress((prev) => ({ ...prev, [key]: value }));
  };

  const disableSubmitBtn = () => {
    return (
      !address.address_line1 ||
      !address.city ||
      !address.address_type ||
      pinCodeError
    );
  };

  const limitDigits = (e: FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target.value.length > 6) {
      target.value = target.value.slice(0, 6);
    }
  };

  const heading = isEdit ? "Edit Address" : "Add Address";
  const submit = isEdit ? "Submit" : "Add Address";
  const canChangeType = !has_address || props.isEdit;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    let isPincodeError = false;
    event.preventDefault();
    const isNumber = /^[0-9]+$/;
    if (address.pincode.length !== 6 || !isNumber.test(address.pincode)) {
      setPinCodeError(true);
      return;
    }
    setPincodeLoading(true);
    fetchPincodeData(parseInt(address.pincode))
      .then((state) => {
        address.state = state;
        if (address.id) {
          edtAddress(address).then(() => {
            setPincodeLoading(false);
          });
        } else {
          createAddress(address)
            .then(() => {
              setPincodeLoading(false);
            })
            .catch((error) => {
              console.log("error data", error);
            });
        }
      })
      .catch((error) => {
        isPincodeError = true;
        window.alert("Please enter a valid pincode");
        console.log("error data", error);
        setPincodeLoading(false);
      })
      .finally(() => {
        if (!isPincodeError && drawerBtn.current) {
          drawerBtn.current?.click();
        }
      });
  };

  return (
    <div className="w-[85%] mx-auto">
      <div className="text-center">
        <p className={`${notoBold.className}`}>
          <b>{heading}</b>
        </p>
      </div>

      <div className="z-40 min-h-[260px] pt-7 pb-3">
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <section className="flex flex-col text-[#333333BF]">
            <label htmlFor="address1">Address Line 1*</label>
            <textarea
              id="address1"
              name="address1"
              className="h-12 p-3 border-[1px] border-[#CCCCCC] rounded-lg no-scrollbar"
              onChange={(text) =>
                changeAddress("address_line1", text.target.value)
              }
              value={address.address_line1 || ""}
            />
          </section>
          <section className="flex flex-col text-[#333333BF]">
            <label htmlFor="address2">Address Line 2</label>
            <textarea
              id="address2"
              name="address2"
              className="h-12 p-3 border-[1px] border-[#CCCCCC] rounded-lg no-scrollbar"
              onChange={(text) => {
                changeAddress("address_line2", text.target.value);
              }}
              value={address.address_line2 || ""}
            />
          </section>
          <section className="flex flex-col text-[#333333BF]">
            <label htmlFor="pincode">Pin Code*</label>
            <input
              id="pincode"
              name="pincode"
              type="number"
              className="h-12 p-3 border-[1px] border-[#CCCCCC] rounded-lg"
              onChange={(text) => {
                changeAddress("pincode", text.target.value);
              }}
              onInput={limitDigits}
              value={address.pincode || ""}
            />
            {pinCodeError && (
              <p className="text-red-500 text-xs">
                Please enter a valid pincode
              </p>
            )}
          </section>
          <section className="flex flex-col text-[#333333BF]">
            <label htmlFor="city">City*</label>
            <input
              id="city"
              name="city"
              className="h-12 p-3 border-[1px] border-[#CCCCCC] rounded-lg"
              onChange={(text) => changeAddress("city", text.target.value)}
              value={address.city || ""}
            />
          </section>
          <section className="flex flex-col gap-1 text-[#333333BF] rounded-lg">
            <label>Address Type</label>
            <div className="flex gap-3">
              {ADDRESS_TYPES.map((item, index) => {
                const active = item === address.address_type;
                const bg = active ? "#EA6F54" : "transparent";

                if (!canChangeType && !active) {
                  return null;
                }

                return (
                  <div key={index}>
                    <input
                      id={`address-type-${index}`}
                      name="addresstype"
                      type="radio"
                      value={item}
                      checked={active}
                      onChange={() => changeAddress("address_type", item)}
                      disabled={!canChangeType}
                      style={{ display: "none" }}
                    />
                    <label
                      htmlFor={`address-type-${index}`}
                      className={`address-type ${
                        active ? "selected" : "unselected"
                      }`}
                      style={{
                        cursor: canChangeType ? "pointer" : "not-allowed",
                        backgroundColor: bg,
                      }}
                    >
                      {getUpper(item)}
                    </label>
                  </div>
                );
              })}
            </div>
          </section>

          <button
            className={`w-full ${
              disableSubmitBtn() ? "bg-[#757575]" : "bg-[#EA6F54]"
            } flex justify-center items-center text-white rounded-md py-[10px]`}
            disabled={disableSubmitBtn()}
            type="submit"
          >
            {/* {address.id ? "Submit" : "Add Address"} */}
            {pincodeLoading ? (
              <CircularProgress
                color="inherit"
                size={24}
                thickness={5}
                className="my-auto"
              />
            ) : (
              submit
            )}
          </button>

          <DrawerClose ref={drawerBtn} hidden />
        </form>
      </div>

      <DrawerClose className="w-full pb-3">
        <button
          className={`${notoMed.className} w-full text-[#EA6F54] underline`}
          onClick={props.onSkip}
        >
          SKIP
        </button>
      </DrawerClose>
    </div>
  );
};

export default AddressForm;
