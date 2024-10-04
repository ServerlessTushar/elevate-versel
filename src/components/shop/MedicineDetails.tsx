"use client";
import React from "react";
import rtkApi from "../../lib/store/rtk/rtkApi";

export default function MedicineDetails() {
  const apis = rtkApi.useGetPrescriptionsQuery(undefined, {
    selectFromResult: (res) => ({
      ...res,
      data: res.data || [],
      isLoading: res.isLoading || !res.isSuccess,
    }),
  });

  return <div>MedicineDetails</div>;
}
