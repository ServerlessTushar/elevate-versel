import UserCouponItem from "./UserCouponItem";

class UserCoupons {
  items: Coupon[];

  constructor(items: Coupon[]) {
    this.items = items;
  }

  get all_coupons() {
    return this.items.map((item) => {
      const coupon = new UserCouponItem(item);
      return coupon;
    });
  }

  get first_coupon() {
    let first_coupon = this.items.find((coupon) => coupon.primary === true);
    return new UserCouponItem(first_coupon!);
  }
  //need to change
  get default_coupon() {
    let defaultCoupon = this.items.find((coupon) => coupon.default === true);
    return new UserCouponItem(defaultCoupon!);
  }

  get no_coupons() {
    return this.items.length === 0;
  }

  is_valid_coupon(code: string) {
    for (const item of this.all_coupons)
      if (item.coupon_code === code) return item;
    return false;
  }

  get is_any_coupon_applied() {
    for (const item of this.all_coupons) if (item.item.is_applied) return true;
    return false;
  }

  get applied_coupon_code() {
    for (const item of this.all_coupons)
      if (item.item.is_applied) return item.coupon_code;
    return "";
  }

  get is_free_del_coupon() {
    return this.applied_coupon_code === "FREEDEL";
  }

  get applied_coupon_id() {
    for (const item of this.all_coupons)
      if (item.item.is_applied) return item.coupon_id;
  }
}

export default UserCoupons;
