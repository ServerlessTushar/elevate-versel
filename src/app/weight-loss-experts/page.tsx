import FloatingButton from "@/components/FloatingButton";
import DetailDoctors from "@/sections/DetailDoctors/DetailDoctors";
import Footer from "@/sections/Footer/Footer";
import NavbarV2 from "@/sections/Nav/NavbarV2";
import { formActions } from "@/utils/formActions";
import { cookies } from "next/headers";
import React from "react";

const page = () => {
  const cookieStore = cookies();
  const fbp = cookieStore.get("_fbp");
  const fbc = cookieStore.get("_fbc");
  return (
    <main>
      <NavbarV2
        fbc={fbp?.value}
        fbp={fbp?.value}
        formActionLink={formActions?.["staging-home-page"]}
      />
      <DetailDoctors />
      <FloatingButton
        fbc={fbp?.value}
        fbp={fbp?.value}
        formActionLink={formActions?.["staging-home-page"]}
      />
      <Footer />
    </main>
  );
};

export default page;
