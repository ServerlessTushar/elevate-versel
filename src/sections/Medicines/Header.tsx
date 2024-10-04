import logo from "../../../public/webp/logo.webp";
import flat15 from "../../../public/flat15.svg";
import tag from "../../../public/tag.svg";
import Image from "next/image";

import { notoMed } from "@/app/fonts";

const Header = () => {
  return (
    <div className="relative mb-5">
      <div className="flex justify-center py-4">
        <Image src={logo} alt="logo" height={20} />
      </div>
      {/* <Image
        src={flat15}
        alt="flat15"
        className="relative bottom-8"
        width={375}
      /> */}
      <div className={notoMed.className} style={{
        display: "flex",
        justifyContent: "center",
        backgroundImage: "linear-gradient(to right, #16394A, #3488B0)",
        color: "white",
        padding: "10px 0px"
      }}>
          FLAT 15% off on all orders
      </div>
      <Image
        src={tag}
        alt="tag"
        className="absolute bottom-0 left-3 "
        width={80}
      />
    </div>
  );
};

export default Header;
