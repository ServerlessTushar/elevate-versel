import HeroSection from "@/sections/HeroSection/HeroSection";
import Navbar from "@/sections/Nav/Navbar";
import dynamic from "next/dynamic";
import Image from "next/image";
import HeroImg from "../../../../public/webp/get-fitter-today-banner.webp"
import Doctors from "../../../sections/Doctors/Doctors";
import Testimonials from "../../../sections/Testimonials/Testimonials";
import Features from "../../../sections/Features/Features";
import BrandImage from "../../../sections/BrandImages/BrandImage";
import ElevatingWeightLoss from "../../../sections/ElevatingWeightLoss/ElevatingWeightLoss";
import Footer from '../../../sections/Footer/Footer';
import SimpleSteps from "@/sections/SimpleSteps/SimpleSteps";
import { formActions } from "@/utils/formActions";
import { cookies } from "next/headers";


const ConsultationForm = dynamic(
  () => import("../../../sections/ConsultationForm/ConsultationForm")
);
const FloatingButton = dynamic(
  () => import("../../../components/FloatingButton")
);


export default function Home() {
  const cookieStore = cookies()
  const fbp = cookieStore.get('_fbp')
  const fbc = cookieStore.get('_fbc')

  return (
    <main >
      <Navbar fbc={fbc?.value} fbp={fbp?.value} formActionLink={formActions["get-fitter-today"]} />
      <div className="flex flex-col md:flex-row md:max-w-7xl mx-auto">
        <HeroSection />
        <ConsultationForm formActionLink={formActions["get-fitter-today"]} fbc={fbc?.value} fbp={fbp?.value} />
        <Image src={HeroImg} className='hidden md:block' loading='lazy' alt={"Hero Image Desktop"} fill style={{ objectFit: "cover", zIndex: -1 }} />
      </div>
      <SimpleSteps />
      <Features />
      <Testimonials />
      <Doctors />
      <ElevatingWeightLoss />
      <BrandImage />
      <Footer />
      <FloatingButton fbc={fbc?.value} fbp={fbp?.value} formActionLink={formActions["get-fitter-today"]} />
    </main>
  );
}
