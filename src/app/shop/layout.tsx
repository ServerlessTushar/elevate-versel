import React, { ReactNode } from "react";
import StoreProvider from "../StoreProvider";

interface Props {
  children: ReactNode;
}

export default function ShopLayout({ children }: Props) {
  return (
    <StoreProvider>
      <div>{children}</div>
    </StoreProvider>
  );
}
