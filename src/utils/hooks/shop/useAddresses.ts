import rtkApi from "@/lib/store/rtk";
import { useAppSelector } from "@/lib/store/store";

const useAddresses = () => {
  const { accessToken } = useAppSelector((state) => state.UserDataSlice);
  const response = rtkApi.useGetAddressesQuery(undefined, {
    selectFromResult: (res) => ({
      ...res,
      addresses: res.data || [],
      refreshing: res.isFetching && res.isSuccess,
      isLoading: res.isLoading || !res.isSuccess,
    }),
    skip: !!!accessToken,
  });

  const isValid = (address?: OrderAddress) => {
    if (!address) return false;
    return !!address.address_line1 && !!address.address_type;
  };

  return {
    ...response,
    refetch: async () => {
      return await response.refetch();
    },
    get has_address() {
      return !!response.addresses[0];
    },
    get can_continue(): boolean {
      return isValid(this.default_address);
    },
    get order_address() {
      return response.addresses.find((i) => i.default_address);
    },
    get can_add_address() {
      return response.addresses.length < 2;
    },
    get default_address() {
      return response.addresses.find((address) => address.default_address);
    },
    get checkout_address(): OrderAddress {
      return this.default_address || response.addresses[0];
    },
    get default_type() {
      if (
        response.addresses.find((address) => address.address_type === "home")
      ) {
        return "other";
      } else {
        return "home";
      }
    },
    isValid,
  };
};

export default useAddresses;
