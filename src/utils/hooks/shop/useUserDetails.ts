import { useAppSelector } from "@/lib/store/store";
import { useMemo } from "react";

const useUserDetails = () => {
  const userData = useAppSelector((state) => state.UserDataSlice.userData);

  return useMemo(
    () => ({
      ...userData,
      get name() {
        return userData?.full_name || "";
      },
      get address() {
        return {
          pincode: userData?.pincode || "",
          city: userData?.city,
          address_line1: userData?.address,
        };
      },
      get prefill() {
        return {
          email: userData?.email || "",
          contact: userData?.phone || "",
          name: userData?.full_name || "",
        };
      },
    }),
    [userData]
  );
};

export default useUserDetails;
