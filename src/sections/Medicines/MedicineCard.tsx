// @ts-nocheck
"use client";
import Image from "next/image";
import { useMemo } from "react";
import { notoLight, notoMed, notoBold } from "@/app/fonts";
import { UserCoupons, UserMedicineCartItem } from "@/serializers/shop";
import Quantity from "@/components/Quantity";

type Update = (arg: { id: number; quantity: number }) => void;

interface Props {
  item: ProductItem;
  updateQuantity: Update;
  isFirst?: boolean;
  fulfilled?: boolean;
  quant?: number;
  coupons?: UserCoupons;
}

const MedicineCard = ({ item, updateQuantity, isFirst, coupons }: Props) => {
  const medicine = useMemo(() => new UserMedicineCartItem(item), [item]);

  const borderStyle = isFirst
    ? {
        paddingTop: 0,
        marginTop: 0,
        opacity: medicine.is_oos ? 0.5 : 1,
      }
    : {
        borderTopWidth: 1,
        borderTopColor: "#cccccc",
        paddingTop: 10,
        marginTop: 10,
        opacity: medicine.is_oos ? 0.5 : 1,
      };

  return (
    <div
      className="flex justify-between relative w-full pr-4"
      style={borderStyle}
    >
      <div className="flex gap-4 w-[75%]">
        <Image
          src={medicine.image}
          alt="medicine"
          className="h-[68px] w-[68px] my-auto"
        />
        <div className="text-[15px]">
          <p className={notoBold.className}>{medicine.name}</p>
          <p className={`text-[#757575] text-sm ${notoLight.className}`}>
            {medicine.variation}
          </p>
          {!coupons?.is_any_coupon_applied ||
          medicine?.is_oos ||
          medicine?.quantity_available === 0 ? (
            <p className={notoMed.className}>Rs. {medicine.slashed_price}</p>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <p
                style={{ fontWeight: 700, fontSize: 16, marginRight: 5 }}
                className={notoMed.className}
              >
                Rs. {medicine.price}
              </p>
              <p
                style={{
                  textDecorationLine: "line-through",
                  fontSize: 12,
                  color: "#757575",
                }}
                className={notoMed.className}
              >
                Rs. {medicine.slashed_price}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="w-[25%] relative ">
        {medicine.is_oos && (
          <div>
            <p style={{ color: "#757575", fontSize: 12, fontWeight: 500 }}>
              Out of Stock
            </p>
          </div>
        )}
        <div className="w-full absolute bottom-0 right-0">
          <Quantity
            medicine={medicine}
            maxQuantity={medicine.max_quantity}
            update={(quantity) => updateQuantity({ id: item.id, quantity })}
            itemQuantity={medicine.quantity_available}
            isPrimary={true}
          />
        </div>
      </div>
    </div>
  );
};
export default MedicineCard;
