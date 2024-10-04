class UserCouponItem {
  item: Coupon;
  constructor(item: Coupon) {
    this.item = item;
  }

  get description() {
    return `${this.item?.description}`;
  }

  get is_coupon_applied() {
    return typeof this.item?.is_applied === "undefined"
      ? false
      : this.item?.is_applied;
  }

  get coupon_code() {
    return this.item?.coupon_code;
  }

  get coupon_discount() {
    return this.item?.coupon_rule.discount;
  }

  get coupon_id() {
    return this.item?.id;
  }

  get is_default_coupon() {
    return this.item.default;
  }
}
export default UserCouponItem;
