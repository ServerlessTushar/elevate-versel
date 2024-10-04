import rtkApi from "@/lib/store/rtk/rtkApi";
import { useAppSelector } from "@/lib/store/store";

const usePrescriptions = () => {
  const { accessToken } = useAppSelector((state) => state.UserDataSlice);
  const apis = rtkApi.useGetPrescriptionsQuery(undefined, {
    selectFromResult: (res) => ({
      ...res,
      data: res.data || [],
      isLoading: res.isLoading || !res.isSuccess,
    }),
    skip: !!!accessToken,
  });

  return {
    ...apis,
    get active_prescription() {
      const [item] = apis.data.filter(
        (prescription) => prescription.status === "published"
      );
      return item;
    },
    get prescriptions() {
      const rest = apis.data.filter(
        (prescription) => prescription.status === "unpublished"
      );
      return Array.isArray(rest) ? rest : [];
    },
  };
};

export default usePrescriptions;
