import rtkApi from "./rtkApi";
import EndPoints from "./end-points";
import UserAddress from "@/serializers/shop/UserAddress";

const apis = rtkApi.injectEndpoints({
  endpoints(build) {
    return {
      getAddresses: build.query<OrderAddress[], void>({
        query: () => ({
          method: "GET",
          url: EndPoints.ADDRESS,
        }),
        providesTags: ["Address"],
        merge(currentCacheData, responseData, otherArgs) {
          if (
            currentCacheData.length === 0 ||
            currentCacheData.length !== responseData.length
          ) {
            return responseData;
          } else {
            return responseData.map((newItem) => {
              const item = currentCacheData.find((i) => newItem.id === i.id);
              if (item) {
                return {
                  ...item,
                  ...newItem,
                  default_address: item.default_address,
                };
              }
              return newItem;
            });
          }
        },
      }),

      editAddress: build.mutation<OrderAddress, OrderAddress>({
        query: (data) => {
          return {
            method: "PATCH",
            url: "api/v1/users/user_address/" + data.id + "/",
            body: data,
          };
        },
        async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            dispatch(
              apis.util.updateQueryData("getAddresses", undefined, (draft) => {
                draft?.forEach((item) => {
                  if (item.id === id) {
                    Object.assign(item, {
                      ...data,
                      default_address: item.default_address,
                    });
                  }
                });
              })
            );
          } catch (error) {
            console.log(error);
          }
        },
      }),
      createAddress: build.mutation<OrderAddress, OrderAddress>({
        query: (data) => {
          return {
            method: "POST",
            url: EndPoints.ADDRESS,
            body: {
              ...UserAddress.DEFAULT_ADDRESS,
              ...data,
            },
          };
        },
        invalidatesTags: ["Address"],
      }),
      addAddress: build.mutation<OrderAddress, OrderAddress>({
        queryFn: async (data) => {
          return { data };
        },
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            dispatch(
              apis.util.updateQueryData("getAddresses", undefined, (draft) => {
                draft?.unshift(data);
              })
            );
          } catch (error) {
            console.log(error);
          }
        },
      }),
      setDefaultAddress: build.mutation<object, OrderAddress>({
        queryFn: async ({ id }, { dispatch }) => {
          dispatch(
            apis.util.updateQueryData("getAddresses", undefined, (draft) => {
              draft.forEach((item) => {
                if (item.id === id) {
                  item.default_address = true;
                } else {
                  item.default_address = false;
                }
              });
            })
          );
          return { data: {} };
        },
      }),
      checkPinCode: build.mutation<
        OrderAddress & { available: boolean },
        { pincode: string; medicine_id: number }
      >({
        query({ pincode, medicine_id }) {
          return {
            method: "get",
            url: EndPoints.CHECK_PINCODE(medicine_id),
            params: { pincode },
          };
        },
      }),
    };
  },
});

export default apis;
