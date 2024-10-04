import Image from "next/image";
import minus from "../../public/minus.svg";
import plus from "../../public/plus.svg";
import { useEffect, useRef, useState } from "react";
import { UserMedicineCartItem } from "@/serializers/shop";
import { useCart } from "@/utils/hooks/shop";

interface QuantityProps {
  medicine: UserMedicineCartItem;
  update: (quantity: number) => void;
  maxQuantity: number;
  itemQuantity: number;
  isPrimary: boolean;
}

const Quantity = ({
  update,
  maxQuantity,
  itemQuantity,
  medicine,
  isPrimary,
}: QuantityProps) => {
  const [count, setCount] = useState(itemQuantity);
  const { updateCartByAPI } = useCart();
  const isMounted = useRef(false);
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isMounted.current && isPrimary) {
      updateCartByAPI();
    } else {
      isMounted.current = true;
    }
  }, [itemQuantity]);

  useEffect(() => {
    setCount(itemQuantity);
  }, [itemQuantity]);

  const changeMedicineCount = (cb: (value: number) => number) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    setCount((prev) => {
      let newValue = cb(prev);
      if (newValue < 1) {
        newValue = 0;
      } else if (newValue > maxQuantity) {
        window.alert("Maximum quantity is " + maxQuantity);
        newValue = maxQuantity;
      }
      timer.current = setTimeout(() => {
        update(newValue);
      }, 500);

      return newValue;
    });
  };

  return (
    <div>
      {count > 0 ? (
        <div className="flex bg-[#FFF6F4] rounded-full">
          <button
            disabled={medicine.is_oos}
            onClick={() => changeMedicineCount((p) => p - 1)}
            className="bg-[#FFC6B9] h-[26px] w-[26px] text-lg rounded-full flex justify-center items-center"
          >
            <Image src={minus} alt="minus" />
          </button>
          <p className="text-center w-[35%] text-[17px]">
            <b>{count}</b>
          </p>
          <button
            disabled={medicine.is_oos}
            onClick={() => changeMedicineCount((p) => p + 1)}
            className="bg-[#EA6F54] h-[26px] w-[26px] text-lg rounded-full flex justify-center items-center"
          >
            <Image src={plus} alt="plus" />
          </button>
        </div>
      ) : (
        <div
          style={{
            borderWidth: 1,
            borderColor: "#EA6F54",
            borderRadius: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 76,
          }}
          onClick={
            medicine.is_oos ? () => {} : () => changeMedicineCount((p) => p + 1)
          }
        >
          <p style={{ fontSize: 17, color: "#EA6F54" }}>ADD</p>
        </div>
      )}
    </div>
  );
};

export default Quantity;
