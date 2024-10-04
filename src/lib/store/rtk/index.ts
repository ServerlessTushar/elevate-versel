import addressApis from "./address-apis";
import orderApis from "./order-apis";
import apis from "./rtkApi";

export default {
  ...apis,
  ...addressApis,
  ...orderApis,
  endpoints: {
    ...apis.endpoints,
    ...addressApis.endpoints,
    ...orderApis.endpoints,
  },
};
