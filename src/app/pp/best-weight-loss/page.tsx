import Navbar from "@/sections/Nav/Navbar";
import dynamic from "next/dynamic";
import Doctors from "../../../sections/Doctors/Doctors";
import FeaturesWeightLoss from "../../../sections/Features/FeaturesWeightLoss";
import BrandImage from "../../../sections/BrandImages/BrandImage";
import ElevatingWeightLoss from "../../../sections/ElevatingWeightLoss/ElevatingWeightLoss";
import Footer from "../../../sections/Footer/Footer";
import SimpleSteps from "../../../sections/SimpleSteps/SimpleSteps";
import WeightLossFeatures from "../../../sections/WeightLossSection/WeightLossFeatures/WeightLossFeatures";
import WeightLossHero from "../../../sections/HeroSection/WeightLossHero";
import { cookies } from "next/headers";
import { formActions } from "@/utils/formActions";

const ConsultationForm = dynamic(
  () => import("../../../sections/ConsultationForm/ConsultationForm")
);
const FloatingButton = dynamic(
  () => import("../../../components/FloatingButton")
);

export default function Home() {
  const cookieStore = cookies();
  const fbp = cookieStore.get("_fbp");
  const fbc = cookieStore.get("_fbc");
  return (
    <main>
      <Navbar fbc={fbc?.value} fbp={fbp?.value} formActionLink={formActions["best-weight-loss"]} />
      <div className="flex flex-col md:flex-row md:justify-center md:gap-4 items-center md:max-w-7xl mx-auto md:px-2">
        <WeightLossHero />
        <ConsultationForm fbc={fbc?.value} fbp={fbp?.value} formActionLink={formActions["best-weight-loss"]} />
      </div>
      <FeaturesWeightLoss />
      <SimpleSteps />
      <WeightLossFeatures />
      <Doctors />
      <ElevatingWeightLoss />
      <BrandImage />
      <Footer />
      <FloatingButton fbc={fbc?.value} fbp={fbp?.value} formActionLink={formActions["best-weight-loss"]} />
    </main>
  );
}
