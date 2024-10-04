import React, { useMemo } from "react";
import Image from "next/image";
import Quantity from "@/components/Quantity";
import MedicineImg from "../../../public/medicine.svg";
import { UserMedicineCartItem } from "@/serializers/shop";
import { useCoupons } from "@/utils/hooks/shop";

type Update = (arg: { id: number; quantity: number }) => void;

interface Props {
  item: ProductItem;
  updateQuantity: Update;
}

const FloatingMedicineCard = ({ item, updateQuantity }: Props) => {
  const medicine = useMemo(() => new UserMedicineCartItem(item), [item]);
  const { coupons } = useCoupons();
  return (
    <div
      className="border-2 border-[#CCCCCCA6] bg-white rounded-md flex flex-col gap-3 p-2 mb-3"
      style={{ opacity: medicine.is_oos ? 0.5 : 1 }}
    >
      <div className="flex justify-between relative w-full">
        <div className="flex gap-4">
          <Image src={MedicineImg} alt="medicine" height={60} />
          <div className="text-[15px] my-auto">
            <p className="text-[#757575]">{medicine.variation}</p>
            {!coupons?.is_any_coupon_applied ||
            medicine?.is_oos ||
            medicine?.quantity_available === 0 ? (
              <p>Rs. {medicine.slashed_price}</p>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p style={{ fontWeight: 700, fontSize: 16, marginRight: 5 }}>
                  Rs. {medicine.price}
                </p>
                <p
                  style={{
                    textDecorationLine: "line-through",
                    fontSize: 12,
                    color: "#757575",
                  }}
                >
                  Rs. {medicine.slashed_price}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="w-[27%] relativ my-auto">
          <Quantity
            update={(quantity) => updateQuantity({ id: item.id, quantity })}
            maxQuantity={medicine.max_quantity}
            itemQuantity={medicine.quantity_available}
            medicine={medicine}
            isPrimary={false}
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingMedicineCard;
