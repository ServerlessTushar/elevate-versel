import localFont from "next/font/local";
import { Epilogue, Noto_Sans } from "next/font/google";



export const prospectus = localFont({
  src: "../../public/fonts/ProspectusSTD-Regular.woff2",
  display: "swap",
});
export const prospectusSemiBold = localFont({
  src: "../../public/fonts/ProspectusSTD-SemiBold.woff2",
  display: "swap",
});
export const prospectusBold = localFont({
  src: "../../public/fonts/ProspectusSTD-Bold.woff2",
  display: "swap",
});
export const prospectusBlack = localFont({
  src: "../../public/fonts/ProspectusSTD-Black.woff2",
  display: "swap",
});

// export const prospectus = localFont({
//   src: [
//     {
//       path: "../../public/fonts/ProspectusSTD-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/ProspectusSTD-SemiBold.woff2",
//       weight: "600",
//       style: "semibold",
//     },
//     {
//       path: "../../public/fonts/ProspectusSTD-Bold.woff2",
//       weight: "700",
//       style: "bold",
//     },
//     {
//       path: "../../public/fonts/ProspectusSTD-Black.woff2",
//       weight: "900",
//       style: "black",
//     },
//   ],
// });
export const epilogue = Epilogue({ subsets: ["latin"] });
export const epilogueBold = Epilogue({ subsets: ["latin"], weight: "700" });
export const epilogueSemiBold = Epilogue({ subsets: ["latin"], weight: "600" });

export const notoLight = Noto_Sans({weight:"400", display:"swap", subsets: ['latin'], preload: true})
export const notoMed = Noto_Sans({weight:"500", display:"swap", subsets: ['latin'], preload: true})
export const notoBold = Noto_Sans({weight:"700", display:"swap", subsets: ['latin'], preload: true})
