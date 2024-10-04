import { ReactNode, useState } from "react";
import FloatingMedicineCard from "./FloatingMedicineCard";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/Drawer";

type Update = (arg: { id: number; quantity: number }) => void;
interface Props {
  children: ReactNode;
  medicine: ProductItem[];
  updateQuantity: Update;
}
const MedicineVariations = ({ children, medicine, updateQuantity }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex md:hidden justify-center relative">
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger asChild>
          {/* <button
                    className={`fixed bottom-0 rounded-t-[17px] w-full text-base py-4 text-white font-bold`}
                    style={{ display: isDrawerOpen ? "none" : "block" }}
                >
                    Book Consultation
                </button> */}
          {children}
        </DrawerTrigger>
        <DrawerContent className="flex flex-col font-sans rounded-t-3xl bg-[#FAF8F4]">
          {/* <DrawerClose className="flex justify-end items-center px-4 mb-2">
                        <X
                        />
                    </DrawerClose> */}
          <div className="w-[95%] mx-auto">
            <div className="text-center mb-4">
              <p>
                <b>{medicine[0].product.medicine.name}</b>
              </p>
              <p className="text-[#757575]">
                <i>{`${medicine[0].quantity_prescribed} ${medicine[0].variation.name} prescribed`}</i>
              </p>
            </div>

            <div className="z-40 min-h-[260px]">
              {medicine.map((item: ProductItem, index) => {
                return (
                  <FloatingMedicineCard
                    item={item}
                    updateQuantity={updateQuantity}
                    key={index}
                  />
                );
              })}
            </div>
            <button
              className="w-full bg-[#EA6F54] text-white rounded-md py-[10px] mb-3"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              Done
            </button>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MedicineVariations;
