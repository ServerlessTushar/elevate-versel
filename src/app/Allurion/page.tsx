import HeroSection from "@/sections/Allurion/HeroSection/HeroSection";
import Navbar from "@/sections/Nav/Navbar";
import dynamic from "next/dynamic";
import Doctors from "../../sections/Allurion/Doctors/Doctors";
import ElevatingWeightLoss from "../../sections/Allurion/ElevatingWeightLoss/ElevatingWeightLoss";
import Footer from "../../sections/Footer/Footer";
import FAQs from "@/sections/Allurion/FAQs/FAQs";
import BrandImage from "../../sections/BrandImages/BrandImage";
import Testimonials from "@/sections/Testimonials/Testimonials";
import WeightLossTestimonials from "@/sections/WeightLossSection/WeightLossTestimonials/WeightLossTestimonials";
import ThankYouNotEligible from "@/sections/ThankYouNotEligible/ThankYouNotEligible";
import { cookies } from "next/headers";
import { formActions } from "@/utils/formActions";

const ConsultationForm = dynamic(
  () => import("../../sections/ConsultationForm/ConsultationForm")
);
const FloatingButton = dynamic(() => import("../../components/FloatingButton"));

const SimpleSteps = dynamic(
  () => import("../../sections/Allurion/SimpleSteps/SimpleSteps")
);
export default function Allurion() {
  const cookieStore = cookies();
  const fbp = cookieStore.get("_fbp");
  const fbc = cookieStore.get("_fbc");
  return (
    <main>
      <Navbar
        fbc={fbc?.value}
        fbp={fbp?.value}
        formActionLink={formActions["Allurion"]}
      />
      <div className="w-full bg-[#E9F5FF] md:bg-[#163849]">
        <div className="flex flex-col md:flex-row mx-auto md:mr-10">
          <HeroSection />
          <ConsultationForm
            page="allurion"
            fbc={fbc?.value}
            fbp={fbp?.value}
            formActionLink={formActions["Allurion"]}
          />
        </div>
      </div>
      <SimpleSteps id="TSqy0h9Zyig" />
      {/* <WeightLossTestimonials /> */}
      <Testimonials />
      <Doctors />
      <FAQs />
      <ElevatingWeightLoss />
      <BrandImage />
      {/* <ThankYouNotEligible /> */}
      <Footer />
      <FloatingButton
        fbc={fbc?.value}
        fbp={fbp?.value}
        formActionLink={formActions["Allurion"]}
      />
    </main>
  );
}
