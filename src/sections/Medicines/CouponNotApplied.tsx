import Image from "next/image"
import couponNotApplied from "../../../public/couponNotApplied.svg"


const CouponNotApplied = ({setCouponApplied}: {setCouponApplied: (couponApplied: boolean) => void}) => {
    return (
        <div className="flex justify-center items-center fixed inset-0 bg-gray-950 bg-opacity-50 overflow-y-auto h-full w-full z-30">
            <div className="flex justify-center items-end h-[55%] w-[75%] bg-white rounded-xl p-5">
                <div className="w-[70%] flex flex-col gap-8">
                    <Image
                    src={couponNotApplied}
                    alt='coupon applied'
                    className="mx-auto"
                    height={90}
                    />
                    <div>
                        <p className="text-center">
                            Your Code is INVALID
                        </p>
                        <p className="text-center text-[#EA6F54]">
                            Please check the code again or contact us at
                            +919830098300
                        </p>
                    </div>
                    
                    <button
                    onClick={() => setCouponApplied(false)}
                    className="bg-[#EA6F54] text-white py-2 rounded-lg">
                        Okay!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CouponNotApplied