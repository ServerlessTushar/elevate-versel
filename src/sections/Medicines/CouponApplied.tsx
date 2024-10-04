import Image from "next/image";
import couponApplied from "../../../public/couponApplied.svg";
import successConfetti from "../../../public/lottieJson/successConfetti.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const CouponApplied = ({
  setCouponAppliedMsg,
  discount,
}: {
  setCouponAppliedMsg: (couponApplied: boolean) => void;
  discount: string;
}) => {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-gray-950 bg-opacity-50 overflow-y-auto h-full w-full z-30">
      <div className="flex justify-center items-end h-[55%] w-[75%] bg-white rounded-xl p-5">
        <Lottie
          animationData={successConfetti}
          loop={false}
          autoplay
          style={{
            position: "absolute",
            pointerEvents: "none",
            top: 0,
            left: 0,
          }}
        />
        <div className="w-[75%] flex flex-col gap-10">
          <Image src={couponApplied} alt="coupon applied" className="mx-auto" />
          <div>
            <p className="text-center">15APP applied</p>
            <p className="text-center text-[#EA6F54]">
              You saved Rs.{discount}
            </p>
          </div>

          <button
            onClick={() => setCouponAppliedMsg(false)}
            className="bg-[#EA6F54] text-white py-2 rounded-lg"
          >
            Thanks!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponApplied;
