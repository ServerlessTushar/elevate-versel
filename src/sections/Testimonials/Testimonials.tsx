import React from "react";
import Image from "next/image";
import StarImg from "../../../public/webp/star.webp";
import BackedByScienceImgMobile from "../../../public/webp/resultsbgmob.webp";
import BackedByScienceImg from "../../../public/webp/get-fitter-today-content-bg.webp";
import BackedByScienceAllurianImg from "../../../public/BackedByScienceAllurianImg.webp";
import BackedBySBackedByScienceAllurianMob from "../../../public/BackedByScienceAllurianMob.webp";
import Google from "../../../public/webp/google.webp";
import { epilogue, prospectus, prospectusSemiBold } from "@/app/fonts";
import RecommendationBadge from "../../../public/webp/docCircle.webp";

const Testimonials = ({ page }: { page?: string }) => {
  const testimonialCards = testimonialsData?.map((testimonial) => {
    const firstLetter = testimonial?.name[0];
    return (
      <div key={testimonial?.name} className="flex flex-1">
        <div
          className={`${epilogue.className} text-textDarkBlue bg-white rounded-lg shadow-lg p-6 flex-1  `}
        >
          <div className="flex justify-between">
            <div className="flex gap-2 my-2">
              <div
                style={{ backgroundColor: testimonial.color }}
                className=" p-2 w-10 h-10 rounded-full flex justify-center items-center"
              >
                <p className="font-bold text-xl text-white translate-y-[2px]">
                  {firstLetter}
                </p>
              </div>
              <div>
                <p className="font-semibold text-lg">{testimonial?.name}</p>
                <p className="text-xs">{testimonial?.time}</p>
              </div>
            </div>
            {testimonial?.reviewSource === "google" && (
              <div className="flex justify-center items-center">
                <Image src={Google} alt="google" />
              </div>
            )}
          </div>
          {firstLetter != "M" ? (
            <Image src={StarImg} alt="rating" />
          ) : (
            <svg
              width="126"
              height="26"
              viewBox="0 0 126 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3127 3.22209C11.8394 2.17766 13.3306 2.17767 13.8574 3.2221L15.9503 7.37207C16.1594 7.78672 16.5575 8.07345 17.017 8.14047L21.6346 8.81392C22.8061 8.98477 23.2705 10.4269 22.4188 11.2492L19.1119 14.4418C18.7729 14.7691 18.6176 15.243 18.6972 15.7076L19.4713 20.2265C19.6697 21.3849 18.4597 22.272 17.4147 21.7342L13.2371 19.5844C12.8279 19.3739 12.3422 19.3739 11.933 19.5844L7.75535 21.7342C6.71039 22.272 5.50035 21.3849 5.69878 20.2265L6.4729 15.7076C6.55248 15.243 6.39721 14.7691 6.05813 14.4418L2.75131 11.2492C1.89959 10.4269 2.36392 8.98477 3.53543 8.81392L8.15304 8.14047C8.61258 8.07345 9.01063 7.78672 9.21974 7.37207L11.3127 3.22209Z"
                fill="#FCD503"
              />
              <path
                d="M36.383 3.22209C36.9097 2.17766 38.401 2.17767 38.9277 3.2221L41.0206 7.37207C41.2297 7.78672 41.6278 8.07345 42.0873 8.14047L46.7049 8.81392C47.8765 8.98477 48.3408 10.4269 47.4891 11.2492L44.1822 14.4418C43.8432 14.7691 43.6879 15.243 43.7675 15.7076L44.5416 20.2265C44.74 21.3849 43.53 22.272 42.485 21.7342L38.3074 19.5844C37.8982 19.3739 37.4125 19.3739 37.0033 19.5844L32.8257 21.7342C31.7807 22.272 30.5707 21.3849 30.7691 20.2265L31.5432 15.7076C31.6228 15.243 31.4675 14.7691 31.1284 14.4418L27.8216 11.2492C26.9699 10.4269 27.4342 8.98477 28.6057 8.81392L33.2234 8.14047C33.6829 8.07345 34.0809 7.78672 34.2901 7.37207L36.383 3.22209Z"
                fill="#FCD503"
              />
              <path
                d="M61.4543 3.22209C61.981 2.17766 63.4722 2.17767 63.999 3.2221L66.0919 7.37207C66.301 7.78672 66.6991 8.07345 67.1586 8.14047L71.7762 8.81392C72.9477 8.98477 73.4121 10.4269 72.5604 11.2492L69.2535 14.4418C68.9145 14.7691 68.7592 15.243 68.8388 15.7076L69.6129 20.2265C69.8113 21.3849 68.6013 22.272 67.5563 21.7342L63.3787 19.5844C62.9695 19.3739 62.4838 19.3739 62.0746 19.5844L57.8969 21.7342C56.852 22.272 55.642 21.3849 55.8404 20.2265L56.6145 15.7076C56.6941 15.243 56.5388 14.7691 56.1997 14.4418L52.8929 11.2492C52.0412 10.4269 52.5055 8.98477 53.677 8.81392L58.2946 8.14047C58.7542 8.07345 59.1522 7.78672 59.3613 7.37207L61.4543 3.22209Z"
                fill="#FCD503"
              />
              <path
                d="M86.5246 3.22209C87.0513 2.17766 88.5426 2.17767 89.0693 3.2221L91.1622 7.37207C91.3713 7.78672 91.7694 8.07345 92.2289 8.14047L96.8465 8.81392C98.0181 8.98477 98.4824 10.4269 97.6307 11.2492L94.3238 14.4418C93.9848 14.7691 93.8295 15.243 93.9091 15.7076L94.6832 20.2265C94.8816 21.3849 93.6716 22.272 92.6266 21.7342L88.449 19.5844C88.0398 19.3739 87.5541 19.3739 87.1449 19.5844L82.9673 21.7342C81.9223 22.272 80.7123 21.3849 80.9107 20.2265L81.6848 15.7076C81.7644 15.243 81.6091 14.7691 81.27 14.4418L77.9632 11.2492C77.1115 10.4269 77.5758 8.98477 78.7473 8.81392L83.365 8.14047C83.8245 8.07345 84.2225 7.78672 84.4317 7.37207L86.5246 3.22209Z"
                fill="#FCD503"
              />
              <path
                d="M111.599 3.22209C112.126 2.17766 113.617 2.17767 114.144 3.2221L116.236 7.37207C116.446 7.78672 116.844 8.07345 117.303 8.14047L121.921 8.81392C123.092 8.98477 123.557 10.4269 122.705 11.2492L119.398 14.4418C119.059 14.7691 118.904 15.243 118.983 15.7076L119.757 20.2265C119.956 21.3849 118.746 22.272 117.701 21.7342L113.523 19.5844C113.114 19.3739 112.628 19.3739 112.219 19.5844L108.041 21.7342C106.997 22.272 105.786 21.3849 105.985 20.2265L106.759 15.7076C106.839 15.243 106.683 14.7691 106.344 14.4418L103.037 11.2492C102.186 10.4269 102.65 8.98477 103.822 8.81392L108.439 8.14047C108.899 8.07345 109.297 7.78672 109.506 7.37207L111.599 3.22209Z"
                fill="#D9D9D9"
              />
            </svg>
          )}

          <p className="text-xs  my-4 font-normal leading-5">
            {testimonial?.text}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="">
      <div className="py-8 pt-16 relative h-72 md:h-[600px] flex items-center justify-center text-center">
        {
          <h3
            className={`block font-bold text-3xl md:text-7xl  w-2/3 text-white ${prospectusSemiBold.className}`}
          >
            We are backed <br /> by science <br /> and{" "}
            <span className="text-[#f8d275]">
              proven by
              <br /> results
            </span>
          </h3>
        }
        {page === "allurion" ? (
          <Image
            src={BackedByScienceAllurianImg}
            className="md:hidden"
            alt={"Backed by Science Mobile"}
            fill
            style={{ zIndex: -1, objectFit: "cover" }}
          />
        ) : (
          <Image
            src={BackedByScienceImgMobile}
            className="md:hidden"
            alt={"Backed by Science Mobile"}
            fill
            style={{ zIndex: -1, objectFit: "cover" }}
          />
        )}
        {page === "allurion" ? (
          <Image
            src={BackedBySBackedByScienceAllurianMob}
            className="hidden md:flex"
            alt={"Backed by Science"}
            fill
            style={{ zIndex: -1, objectFit: "cover" }}
          />
        ) : (
          <Image
            src={BackedByScienceImg}
            className="hidden md:flex"
            alt={"Backed by Science"}
            fill
            style={{ zIndex: -1, objectFit: "cover" }}
          />
        )}
        <div className="absolute bottom-0 left-[70%] md:right-0 md:-translate-y-44">
          <Image
            src={RecommendationBadge}
            className="rounded-full md:hidden"
            style={{ height: 80, width: "auto" }}
            alt="gif"
          />
          <Image
            src={RecommendationBadge}
            className="rounded-full hidden md:flex"
            style={{ height: 120, width: "auto" }}
            alt="gif"
          />
        </div>
      </div>
      <div className="h-4 bg-[#3881C5]"></div>

      <section className=" px-4 py-8 pb-20  bg-[#3881C5]">
        <div className="max-w-7xl mx-auto flex gap-8 flex-col md:flex-row md:-translate-y-24 ">
          {testimonialCards}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

const testimonialsData = [
  {
    color: "#DD6666",
    name: "Varun Surya",
    time: "a week ago",
    reviewSource: "google",
    text: "I started my weight loss journey at 105 kg and now I am at 97 kg with detailed and timely guidance of Ms. Dashmeet. Dashmeet Coach - you are awesome and very knowledgeable person. Hope I will emerge as winner in this journey. Keep it up 👏🏻 👍",
  },
  {
    color: "#baa148",
    name: "Divya Sharma",
    time: "a week ago",
    reviewSource: "other",
    text: "I am so happy that I came across elevate now during my visit to a clinic nearby on a day I was feeling very low about my weight struggle. Now, with the help of my coach Krantika Kale, I am able to manage my challenges. I reduced from 105 to 95 and started on 14 December . Now, when I go out, I plan and manage my diet. Even during my visit to home town for a marriage, I lost l.5 kg.",
  },
  {
    color: "#9548ba",
    name: "Manthan Prajapati",
    time: "2 weeks ago",
    reviewSource: "google",
    text: "It was my perfect decision to join elevate now for my weightloss journey. Not only i am loosing weight but i am also apprenticing new healthy life style. I am also choosing my foods right. Managing my sleep better. Managing my stress levels accordingly... especially thanks to my habit coach Kanchan singh. She has been supporting me from day one. she constantly helps me in my daily activities & diet to choose right. With her constant guidance i am able to stay away from wrong & unhealthy food. With her support i reduced my weight from 106 KG to 100 KG in 1 month. I am looking forward to losing more and also getting to learn more mindfulness.",
  },
];
