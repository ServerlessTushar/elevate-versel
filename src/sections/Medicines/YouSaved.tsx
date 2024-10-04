import Image from "next/image";
import percent from "../../../public/percent.svg";

const YouSaved = ({ savings }: { savings: string }) => {
  return (
    <div className="flex gap-2 px-4 py-2 bg-[#54A5521A] border-[1px] border-[#54A552] rounded-xl">
      <Image src={percent} alt="percent" height={30} />
      <p className="text-[#54A552] my-auto">
        Wohoo! You saved <b>Rs. {savings}</b>
      </p>
    </div>
  );
};

export default YouSaved;
