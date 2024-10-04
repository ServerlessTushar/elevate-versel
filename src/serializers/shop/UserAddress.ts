import { getUpper } from "@/lib/utils";

class UserAddress {
  address: OrderAddress;
  keys = ["address_line1", "address_line2", "city", "pincode"] as const;

  static DEFAULT_ADDRESS = {
    address_line1: "",
    address_line2: "",
    city: "",
    pincode: "",
    address_type: "",
    default_address: false,
  } as OrderAddress;

  constructor(item?: OrderAddress) {
    const address = item || {
      ...UserAddress.DEFAULT_ADDRESS,
      address_type: "",
    };
    this.address = address;
  }

  validate() {
    return {
      pincode: this.address.pincode,
      shipping_address: this.full_address,
      id: this.address.id,
    };
  }

  get title() {
    return this.address.address_type
      ? getUpper(this.address.address_type)
      : this.address.pincode;
  }

  get shipping_address() {
    return this.full_address + "-" + this.address.pincode;
  }

  get full_address() {
    return this.keys.reduce((acc, key, index) => {
      const isLast = index === this.keys.length - 1;
      const address = this.address[key] || "";
      const prefix = isLast || !address ? "" : ", ";
      return acc + address + prefix;
    }, "");
  }

  get sub_title() {
    return (
      this.full_address || "You can place your order once you add your address"
    );
  }
}

export default UserAddress;
