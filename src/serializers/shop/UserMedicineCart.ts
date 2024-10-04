// @ts-nocheck
import { pluralize } from "@/lib/utils";
import UserMedicineCartItem from "./UserMedicineCartItem";

type VendorItem = {
  vendor: {
    title: string;
    image: string;
  };
  data: CartItem[];
};
class UserMedicineCart {
  items: ProductItem[];
  refunded?: number;

  constructor(items: ProductItem[], refunded?: number) {
    this.items = items;
    this.refunded = refunded;
  }

  checkout(
    address: CreateOrderAddress
  ): Omit<CreateOrderParams, "prescription"> {
    const shipping_charge = this.is_free_del_applied ? 0 : this.shipping_charge;
    return {
      pincode: address.pincode,
      latest_shipping_address: address.id,
      shipping_address: "",
      order_items: this.final_items.map((item) => ({
        product_item_id: item.id,
        quantity: item.quantity_available,
        item_amount: parseFloat(item.price).toFixed(2),
        item_mrp: parseFloat(item.mrp).toFixed(2),
        fulfilled_qty: item.quantity_available,
      })),
      total_amount: this.order_total,
      coupon: this.applied_coupon_id,
      shipping_amount: shipping_charge,
      discounted_amount: parseFloat(this.summary[1]),
    };
  }

  get applied_coupon_id() {
    return typeof this.items[0]?.coupon_id === "undefined"
      ? null
      : this.items[0]?.coupon_id;
  }

  get amount_for_free_shipping() {
    return +(1000 - parseFloat(this.order_mrp_total)).toFixed(2);
  }

  get applied_coupon_code() {
    return this.items[0]?.coupon_code;
  }

  get is_free_del_applied() {
    return this.items[0]?.coupon_code === "FREEDEL";
  }

  get shipping_charge() {
    return this.items.length !== 0 &&
      parseFloat(this.order_mrp_total) < 1000 &&
      parseFloat(this.order_mrp_total) > 0
      ? 100
      : 0;
  }

  get can_scroll() {
    return typeof this.refunded === "undefined";
  }

  get cart_title() {
    const count = this.final_items.length;
    return `${count} ${pluralize("item", count)} in your cart`;
  }

  get groupProductsById() {
    const groupedProducts: {
      [key: number]: ProductItem[];
    } = {};
    this.items.forEach((product) => {
      const productId = product.product.id;
      if (!groupedProducts[productId]) {
        groupedProducts[productId] = [];
      }
      groupedProducts[productId].push(product);
    });
    return this.bringDefaultVariantToStart(Object.values(groupedProducts));
  }

  private bringDefaultVariantToStart(allVariants: ProductItem[][]) {
    allVariants.forEach((variant) => {
      variant.forEach((medicine, index) => {
        if (medicine.active === true) {
          let temp = variant[0];
          variant[0] = medicine;
          variant[index] = temp;
        }
      });
    });
    return allVariants;
  }

  payment_summary() {
    const [order, discount, total] = this.summary;
    const refunded = this.refunded ?? 0;

    const adjustedDiscount = this.is_free_del_applied ? 100 : discount;
    const summaryArray = [
      {
        key: "order_total",
        value: `₹ ${order}`,
        title: "Order Total",
      },
      {
        key: "refunded",
        title: "Refunded",
        value: `₹ - ${refunded}`,
      },
      {
        key: "shipping",
        title: "Shipping",
        value: `₹ ${this.shipping_charge}`,
      },
      "break",
      {
        key: "total",
        title: "To Pay",
        value: `₹ ${(+total - +refunded).toFixed(2)}`,
      },
    ];

    const itemsDiscount = {
      key: "items_discount",
      title: `Coupon ${this.applied_coupon_code}`,
      value: `₹ - ${adjustedDiscount}`,
    };

    if (this.is_free_del_applied) {
      summaryArray.splice(3, 0, itemsDiscount);
    } else {
      summaryArray.splice(1, 0, itemsDiscount);
    }

    return summaryArray.filter(
      (i) =>
        (i.key !== "refunded" || refunded > 0) &&
        (i.key !== "items_discount" ||
          parseFloat(discount) > 0 ||
          this.is_free_del_applied)
    );
  }

  get order_total_with_currency() {
    return `₹ ${this.order_total}`;
  }

  get order_total() {
    let total = 0;
    const shipping_charge = this.is_free_del_applied ? 0 : this.shipping_charge;
    for (const item of this.cart_items) {
      const amount = item.price;
      total += parseFloat(amount) * (item.quantity_available ?? 1);
    }
    return (total + shipping_charge).toFixed(2);
  }

  get order_mrp_total() {
    let total = 0;
    for (const item of this.cart_items) {
      const amount = item.mrp;
      total += parseFloat(amount) * (item.quantity_available ?? 1);
    }
    return total.toFixed(2);
  }

  get summary() {
    let mrp_total = 0;
    let total = 0;
    const shipping_charge = this.is_free_del_applied ? 0 : this.shipping_charge;
    for (const item of this.cart_items) {
      const medicine = new UserMedicineCartItem(item);
      const amount = +medicine.price;
      const price = +medicine.slashed_price;
      mrp_total += price * (item.quantity_available ?? 1);
      total += amount * (item.quantity_available ?? 1);
    }
    return [mrp_total, mrp_total - total, total + shipping_charge].map((v) =>
      v.toFixed(2)
    );
  }

  get is_empty() {
    return this.final_items.length === 0;
  }

  get first_item() {
    return this.items[0];
  }

  get final_items() {
    return this.cart_items.filter((item) => {
      return typeof item.quantity_available === "number"
        ? item.quantity_available > 0
        : true;
    });
  }

  private get cart_items() {
    return this.items.filter((item) => {
      const medicine = new UserMedicineCartItem(item);
      return !medicine.is_oos;
    });
  }

  get cart_quantity() {
    const totalQuantity = this.final_items.reduce(
      (sum, item) => sum + item.quantity_available,
      0
    );
    return totalQuantity;
  }
}

export default UserMedicineCart;
