interface OrderAddress {
  address_line1: string;
  address_line2: string;
  pincode: string;
  city: string;
  id: number;
  address_type: string;
  default_address: boolean;
  state: string;
}

interface Medicine {
  id: number;
  name: string;
  quantity: number;
  price: number;
  discount: number;
  total: number;
}

interface Variation {
  id: number;
  name: string;
  type: string;
  variation: number;
}
interface Manufacturer {
  id: number;
  name: string;
}

type MedicineOrderStatus =
  | "payment_incomplete"
  | "to_order"
  | "order_placed"
  | "ordered_partially"
  | "cancelled"
  | "confirmed";
interface MedicineOrder {
  pincode: string;
  total_amount: string;
  shipping_address: string;
  updated_at: string;
  created_at: string;
  order_id: string;
  ehr_order_status: string;
  order_status: MedicineOrderStatus;
  order_details: OrderDetail[];
  order_timestamps: OrderTimestamp[];
  payment_txn_id: string;
  payment_mode: string;
  prescription: any;
  fulfilled_order: OrderType[];
  unfulfilled_order: OrderType[];
  tobefullfilled_orders: OrderType[];
  fulfilled_total: number;
  refund_total: number;
  coupon: { id: number; coupon_code: string };
  shipping_amount: number;
}

interface OrderTimestamp {
  order: number;
  order_status: string;
  timestamp: string;
}

interface OrderType {
  order_items: OrderDetail[];
}

interface CartItem {
  id: number;
  sku: string;
  product: Product;
  product_item: ProductItem;
  to_beordered_quantity: number;
  quantity: number;
  ordered_quantity: number;
  item_amount: number;
  item_discount: number;
  item_status: string;
  item_mrp: number;
  order_sliced: boolean;
  fulfilled_qty: number;
  vendor: Vendor;
  wiq_order_id: number;
  sub_order_id: number;
  invoice_id: number;
}

interface ProductItem {
  id: number;
  sku: number;
  product: Product;
  variation: Variation;
  mrp: string;
  price: string;
  manufacturer: {
    id: number;
    name: string;
  };
  oos: boolean;
  active: boolean;
  quantity_available: number;
  quantity_prescribed: number;
  shipping_charge: number;
  order_id: number;
  coupon_code: string;
  coupon_id: number | null;
}

interface Product {
  id: number;
  product_name: string;
  medicine: Medicine;
  category: string;
  specifications: string;
  image_url: string | null;
}

interface Medicine {
  id: number;
  name: string;
  formulation: "tablet" | "capsule" | "injection" | "powder";
}

interface Vendor {
  id: number;
  vendor_name: string;
  vendor_logo: string;
  contact_person: string;
  phone: string;
  country_code: string;
  display_name: string;
}

interface OrderDetail {
  id: number;
  order: number;
  product: null;
  product_item: ProductItem;
  medicine: Medicine;
  to_beordered_quantity: number;
  quantity: number;
  ordered_quantity: number;
  item_amount: string;
  item_discount: number;
  item_status: string;
  item_mrp: string;
  order_sliced: boolean;
  fulfilled_qty: number;
  vendor: Vendor;
  wiq_order_id: number;
  sub_order_id: number;
  invoice_id: number;
}

interface CreateOrderAddress {
  pincode: string;
  shipping_address: string;
  id: number;
}

interface CreateOrderParams {
  pincode: string;
  prescription: number;
  latest_shipping_address: number;
  shipping_address: string;
  total_amount: string;
  order_items: {
    product_item_id: number;
    quantity: number;
    item_amount: string;
    item_mrp: string;
    fulfilled_qty: number;
  }[];
  coupon: number | undefined;
  shipping_amount: number;
  discounted_amount: number;
  source: string;
}

interface InitiatePaymentParams {
  order_id: string;
}

interface InitiatePaymentResponse {
  id: string;
  entity: string;
  amount: number;
  amount_paid: number;
  amount_due: number;
  currency: string;
  receipt: string;
  offer_id: string;
  status: string;
  attempts: number;
  notes: {
    order_id: string;
  };
  created_at: number;
  elevate_now_order_id: string;
  razorpay_options: RazorpayOptions;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface ConfirmParams extends RazorpayResponse {
  elevate_now_order_id: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  order_id: string;
  theme?: {
    color?: string;
  };
  prefill?: Partial<{
    email: string;
    contact: string;
    name: string;
  }>;
}
interface CreateOrderResponse {
  id: number;
  user: number;
  pincode: string;
  total_amount: string;
  shipping_address: string;
  updated_at: string;
  created_at: string;
  order_id: string;
}

type ProcessType = "success" | "failure" | "processing" | "";

interface UpdateCart {
  id: number;
  quantity: number;
  code: string | undefined;
}
interface ModalProps {
  visible: boolean;
  close: () => void;
}

// default apis

interface BusinessConfig {
  configuration: Configuration;
  logo_url: string;
  testimonials: Testimonial[];
  created_at: string;
  updated_at: string;
}

interface Configuration {
  show_goal_reminder: boolean;
  time_zone: string;
  business_name: string;
  terms_and_privacy_policy_url: string;
  getData: boolean;
  phone: string;
  email: string;
  enable_zoho_crm: boolean;
  redcliffe_iframe_url: string;
  slack_bot_token: string;
  zoho_client_id: string;
  zoho_client_secret: string;
  zoho_redirect_url: string;
  zoho_redirection_uri: string;
  website_url: string;
  enable_zoho_meeting: boolean;
  privacy_policy_url: string;
  google_fit: string;
  apple_health: string;
}

interface Testimonial {
  uuid: string;
  key: string;
  type: string;
  title: string;
  file: string;
  banner: string;
  extra_info: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

interface CouponRule {
  title: string;
  type: string; // 'percentage' | 'fixed';
  discount: number;
  minimum_cart_amount: number;
  maximum_cart_amount: number;
  item: any[];
  category: any[];
  user: any[];
  location: any[];
  created_at: string;
  updated_at: string;
}

interface Coupon {
  id: number;
  coupon_code: string;
  description: string;
  start_date: string;
  end_date: string;
  maximum_uses: number;
  current_uses: number;
  coupon_rule: CouponRule;
  disabled: boolean;
  created_at: string;
  updated_at: string;
  default: boolean;
  is_applied: boolean;
  primary: boolean;
}

interface DiscountResponse {
  amount: number;
  coupon_code: string;
  discount: number;
  success: boolean;
}

interface Prescription {
  id: number;
  diagnosis: string;
  advice: string;
  status: string;
  note: string;
  admin: Admin;
  goal: Goal;
  data: Record<string, unknown>;
  department: string | null;
  enable_medicine: boolean | null;
  prescription_medicines: PrescriptionMedicine[];
  patient_history: string;
  created_at: string;
  updated_at: string;
  doctor: Doctor | null;
  total_amount: number;
  last_updated_at: string;
}

interface UserData {
  date_of_birth: string;
  address: string;
  adherence: Adherence;
  admins: UsersAdmin[];
  age: string;
  carekit_ordered: string;
  channel: string;
  city: string;
  created_at: Date;
  email: string;
  full_name: string;
  gender: string;
  health_matrix: HealthMatrix;
  height: string;
  id: number;
  last_activity: Date;
  last_weight_log_activity: Date;
  patient_id: null;
  phone: string;
  pincode: string;
  profile_info: ProfileInfo[];
  profile_url: string;
  starting_bmi: null;
  state: string;
  status: Status;
  subscription_expiry_date: Date;
  subscription_title: null;
  target_weight: string | null | undefined;
  updated_at: Date;
  weight: string;
  health_coach: {
    full_name: string;
  };
  percent_goals_completed_today: number;
}

interface UserSlice {
  userData: UserData | null;
  accessToken: string | null;
  isTokenExpired: boolean;
}

interface CartSlice {
  cartData: ProductItem[] | null;
  orderId: number | null;
}
