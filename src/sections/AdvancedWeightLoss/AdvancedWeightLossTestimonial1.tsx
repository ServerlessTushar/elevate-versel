import React from "react";
import kratiMobile from "../../../public/advanced-weight-loss/mobile/Krati.webp";
import kratiDesk from "../../../public/advanced-weight-loss/desktop/KratiDesk.webp";
import nitinMob from "../../../public/advanced-weight-loss/mobile/Nitin-weight_ago-and-later_.webp";
import nitinDesk from "../../../public/advanced-weight-loss/desktop/NitinDesk.webp";
import rickyMob from "../../../public/advanced-weight-loss/mobile/Ricky-weight_ago-and-later_.webp";
import rickyDesktop from "../../../public/advanced-weight-loss/desktop/RickyDesk.webp";
import AdvancedWeightLossTestimonialCard from "@/components/AdvancedWeightLossTestimonialCard";
export default function AdvancedWeightLossTestimonial1() {
  return (
    <div className="mt-6 mb-16 md:mx-12">
      <div className="flex flex-col md:hidden items-center">
        {AdvancedWeightLossTestimonialData.map((testimonial) => (
          <AdvancedWeightLossTestimonialCard
            key={testimonial.id}
            data={testimonial}
          />
        ))}
      </div>
      <div className="hidden md:flex md:flex-row gap-12 mx-6">
        {AdvancedWeightLossTestimonialData.map((testimonial) => (
          <AdvancedWeightLossTestimonialCard
            key={testimonial.id}
            data={testimonial}
          />
        ))}
      </div>
    </div>
  );
}

const AdvancedWeightLossTestimonialData = [
  {
    id: 1,
    name: "Krati",
    info: "Age 27, BMI 32",
    mobImg: kratiMobile,
    desktopImg: kratiDesk,
    comment:
      "“Losing weight with PCOS was next to impossible. Elevate Now did the magic”",
  },
  {
    id: 2,
    name: "Nitin Dhar",
    info: "Age 33, BMI 39.5",
    mobImg: nitinMob,
    desktopImg: nitinDesk,
    comment:
      "“It was so difficult to control my eating habits. Elevate Now coaches were a game changer”",
  },
  {
    id: 3,
    name: "Ricky Singh",
    info: "Age 41, BMI 33.85",
    mobImg: rickyMob,
    desktopImg: rickyDesktop,
    comment:
      "“I never thought I would be able to lose weight with a traveling job like mine”",
  },
];
