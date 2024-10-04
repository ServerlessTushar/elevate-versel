import { UserDataActions } from "../Slices/UserDataSlice";
import { CartDataActions } from "../Slices/CartDataSlice";

export default {
  ...UserDataActions,
  ...CartDataActions,
};
