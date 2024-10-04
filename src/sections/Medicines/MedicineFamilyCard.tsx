import MedicineCard from "./MedicineCard";
import MedicineVariations from "./MedicineVariations";
import { UserCoupons, UserMedicineCart } from "@/serializers/shop";

type MedicineVariation = ProductItem[][];

interface Props {
  coupons?: UserCoupons;
  cart: UserMedicineCart;
  updateCart: (arg: { id: number; quantity: number }) => void;
}

const MedicineFamilyCard = ({ coupons, cart, updateCart }: Props) => {
  const medicineVariations: MedicineVariation = cart.groupProductsById;

  const renderMedicineCardList = (data: ProductItem[]) => {
    return (
      <div>
        {data.map((item, index) => {
          return (
            (item.active || item.quantity_available > 0) && (
              <MedicineCard
                coupons={coupons}
                updateQuantity={updateCart}
                item={item}
                isFirst={index === 0}
                key={index}
              />
            )
          );
        })}
      </div>
    );
  };

  return (
    <div>
      {medicineVariations.map((medicine, index) => {
        return (
          <div
            className="border-2 border-[#CCCCCCA6] py-3 pl-4 rounded-md flex flex-col gap-3 mb-2"
            key={index}
          >
            <div className="flex justify-between text-xs">
              <p>
                <i>{`${medicine[0].quantity_prescribed} ${medicine[0].variation.name} prescribed`}</i>
              </p>

              {medicine.length > 1 && (
                <MedicineVariations
                  medicine={medicine}
                  updateQuantity={updateCart}
                >
                  <button className="bg-[#FFF6F4] text-[#EA6F54] px-4 py-[2px] rounded-l-md">
                    {`${medicine.length} options`}
                  </button>
                </MedicineVariations>
              )}
            </div>
            <div className="flex flex-col gap-2">
              {renderMedicineCardList(medicine)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MedicineFamilyCard;
