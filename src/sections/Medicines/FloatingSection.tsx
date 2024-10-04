import { ReactNode, useState } from "react";
import { notoLight } from "@/app/fonts";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/Drawer";

interface FloatingSectionProps {
  children: ReactNode;
  data: ReactNode;
}

const FloatingSection = ({ children, data }: FloatingSectionProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flexjustify-center relative">
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent
          className={`flex flex-col font-sans rounded-t-3xl bg-[#FAF8F4] ${notoLight.className}`}
        >
          {data}
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default FloatingSection;
