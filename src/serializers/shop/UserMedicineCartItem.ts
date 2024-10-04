//import {AppImages} from '@core-res';

import capsuleIcon from "../../../public/capsulesIcon.png";
import powderIcon from "../../../public/powderIcon.png";
import tabletIcon from "../../../public/tabletIcon.png";
import syringeIcon from "../../../public/syringeIcon.png";

class UserMedicineCartItem {
  item: ProductItem;
  constructor(item: ProductItem) {
    this.item = item;
  }

  get max_quantity() {
    return this.name === "Fiberlite Sachet" ? 60 : 60;
  }

  get image() {
    return this.item?.product?.image_url
      ? { uri: this.item?.product?.image_url }
      : this.default_image;
  }

  get is_oos() {
    return this.item.oos;
  }

  get default_image() {
    const icon = {
      tablet: tabletIcon,
      capsule: capsuleIcon,
      injection: syringeIcon,
      powder: powderIcon,
    }[this.item?.product?.medicine?.formulation];
    return icon ?? tabletIcon;
  }

  get name() {
    return this.medicine?.name;
  }

  get display_price() {
    return "₹ " + this.price;
  }

  get price() {
    return (+this.item.price).toFixed(2);
  }

  get description() {
    return this.item.product?.specifications;
  }

  get slashed_price() {
    return (
      this.item.mrp ??
      (+this.item.mrp).toFixed(2) ??
      (+this.price + 100).toFixed(2)
    );
  }

  get variation() {
    return `${this.item.variation.type} of ${this.item.variation.variation} ${this.item.variation.name}`;
  }

  private get medicine() {
    return this.item?.product?.medicine;
  }

  get quantity_available() {
    return this.item.quantity_available;
  }
}
export default UserMedicineCartItem;
