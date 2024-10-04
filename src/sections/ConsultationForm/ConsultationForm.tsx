"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Input from "../../components/Input";
import Select from "@/components/Select";
import NoCost from "../../../public/webp/nocost.webp";
import { epilogue, prospectusBold, prospectusSemiBold } from "@/app/fonts";
import { useSearchParams } from "next/navigation";
import { encrypt, decrypt } from "@/utils/encryption";
import useGeolocationData from "@/utils/hooks/useGeoLocationData";

const defaultFormAction =
  "https://forms.zohopublic.in/agulati/form/ElevateNowweightlossvoucher/formperma/UyANpRQU2WNOyItv89xW4X2GTnHzqOPGd5h7vpXpIig/htmlRecords/submit";

const ConsultationForm = ({
  formLocation = "openform",
  page,
  formActionLink = defaultFormAction,
  fbc,
  fbp,
}: {
  formActionLink?: string;
  fbc?: string;
  fbp?: string;
  formLocation?: "openform" | "headerform" | "bannerform";
  page?: string;
}) => {
  const { data: geolocation } = useGeolocationData()
  const ipAddress = geolocation?.IPv4
  const countryCode = geolocation?.country_code?.toLowerCase()

  const [currentUrl, setCurrentUrl] = useState<{
    hostname: string;
    url: string;
  }>({ hostname: "", url: "" });
  const searchParams = useSearchParams();
  const zf_referrer_name = searchParams.get("zf_referrer_name") ?? "";
  const zf_redirect_url = searchParams.get("zf_redirect_url") ?? "";
  const zc_gad = searchParams.get("zc_gad") ?? "";
  const utm_source = searchParams.get("utm_source") ?? "";
  const utm_medium = searchParams.get("utm_medium") ?? "";
  const utm_campaign = searchParams.get("utm_campaign") ?? "";
  const utm_term = searchParams.get("utm_term") ?? "";
  const utm_content = searchParams.get("utm_content") ?? "";
  const utm_placement = searchParams.get("utm_placement") ?? "";
  const utm_ad_id = searchParams.get("utm_ad_id") ?? "";
  const utm_adset_id = searchParams.get("utm_adset_id") ?? "";
  const lead_source = searchParams.get("lead_source") ?? "website";
  const matchtype = searchParams.get("matchtype") ?? "";
  const keyword = searchParams.get("keyword") ?? "";
  const utm_ad_name = searchParams.get("utm_ad_name") ?? "";
  const utm_platform = searchParams.get("utm_platform") ?? "";
  const utm_campaign_id = searchParams.get("utm_campaign_id") ?? "";
  const gclid = searchParams.get("gclid") ?? "";
  const fbclid = searchParams.get("fbclid") ?? "";
  const finalFbc = fbc ?? "";
  const finalFbp = fbp ?? "";

  useEffect(() => {
    setCurrentUrl({
      hostname: window.location.hostname,
      url: window.location.href,
    });
  }, []);

  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
  const handleCheckboxChange = (e: any) => {
    const value = e.target.value;
    if (selectedOptions.includes(value)) {
      setSelectedOptions((p) => p.filter((option) => option !== value));
    } else {
      setSelectedOptions((p) => [...p, value]);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    getFieldState,
    watch,
  } = useForm({
    mode: "all",
  });

  const phone = watch("PhoneNumber_countrycode", false);
  const name = watch("SingleLine", false);
  const weight = watch("Number4", false);
  const heightFeet = watch("Dropdown", false);
  const heightInches = watch("Dropdown1", false);
  const bmi: number = calculateBMI(weight, heightFeet, heightInches);

  const encryptedName = encrypt(name);
  const encryptedPhone = encrypt(phone);

  return (
    <section className="max-w-7xl mx-auto py-2 p-4 md:my-8">
      <div
        className={`relative bg-white py-4 rshadow-lg ${page === "easy-weight-loss"
          ? "rounded-3xl border-[#3881c5] border-[1px]"
          : "rounded-lg "
          }`}
      >

        {page === "allurion" ? (
          <div>
            <p
              className={`${prospectusSemiBold.className} text-center font-lg`}
            >
              Global solution for{" "}
              <span className="text-xs opacity-80">(all inclusive)</span>
            </p>
            <p
              className={`${prospectusSemiBold.className} text-center font-bold text-3xl md:text-3xl text-[#3881c5]`}
            >
              Best results
            </p>
          </div>
        ) : (
          <div>
            <p
              className={` ${prospectusSemiBold.className} text-center text-lg font-medium text-textDarkBlue`}
            >
              Health investment? Great returns
            </p>
            <p
              className={`${prospectusSemiBold.className} text-center font-bold text-3xl text-[#3881c5]`}
            >
              Don’t think twice
            </p>
          </div>
        )}
        <form
          action={formActionLink}
          name="stepform"
          method="POST"
          acceptCharset="UTF-8"
          encType="multipart/form-data"
          id="form2"
        >
          <input
            type="hidden"
            name="zf_referrer_name"
            value={zf_referrer_name}
          />
          <input className="opacity-0" type="checkbox" id="DecisionBox" name="DecisionBox" value={'true'} />
          <input type="hidden" name="zf_redirect_url" value={zf_redirect_url} />
          <input type="hidden" name="zc_gad" value={zc_gad} />
          <input type="hidden" name="utm_source" value={utm_source} />
          <input type="hidden" name="utm_medium" value={utm_medium} />
          <input type="hidden" name="utm_campaign" value={utm_campaign} />
          <input type="hidden" name="utm_term" value={utm_term} />
          <input type="hidden" name="utm_content" value={utm_content} />
          <input type="hidden" name="utm_placement" value={utm_placement} />
          <input type="hidden" name="utm_ad_id" value={utm_ad_id} />
          <input type="hidden" name="utm_adset_id" value={utm_adset_id} />
          <input type="hidden" name="lead_source" value={lead_source} />
          <input type="hidden" name="form_location" value={formLocation} />
          <input type="hidden" name="matchtype" value={matchtype} />
          <input type="hidden" name="keyword" value={keyword} />
          <input type="hidden" name="utm_ad_name" value={utm_ad_name} />
          <input type="hidden" name="utm_platform" value={utm_platform} />
          <input type="hidden" name="utm_campaign_id" value={utm_campaign_id} />
          <input type="hidden" name="gclid" value={gclid} />
          <input type="hidden" name="fbclid" value={fbclid} />
          <input
            type="hidden"
            name="page_url"
            id="page_url"
            value={currentUrl.url}
          />
          <input type="hidden" name="SingleLine1" value={finalFbc} />
          <input type="hidden" name="SingleLine2" value={finalFbp} />
          <input type="hidden" name="SingleLine3" value={encryptedPhone} />
          <input type="hidden" name="SingleLine4" value={encryptedName} />
          <input type="hidden" name="SingleLine5" value={ipAddress} />
          <input type="hidden" name="SingleLine6" value={countryCode} />
          <div>
            <div className="flex px-4 gap-4 md:gap-6 my-2">
              <Select
                title="Prefix"
                label="Dropdown2"
                error={errors.Dropdown2}
                placeholder={"Select Prefix"}
                {...register("Dropdown2", {
                  required: "Prefix is required",
                  validate: (value) =>
                    ["Mr", "Mrs", "Miss"].includes(value) || "Invalid Prefix",
                })}
                options={["Mr", "Mrs", "Miss"]}
              />
              <div className="flex-grow">
                <Input
                  error={errors.SingleLine}
                  title="Name"
                  subLabel=""
                  label="SingleLine"
                  register={register}
                  patternValue={/^\s*[a-zA-Z'-]+(?:\s+[a-zA-Z'-]+)*\s*$/}
                  patternMessage={"Error"}
                  required
                />
              </div>
            </div>
            <div className="flex flex-1 px-4  my-2">
              <div className="w-full">
                <Input
                  error={errors.PhoneNumber_countrycode}
                  title="Contact Number"
                  subLabel="(for your free consultation)"
                  label="PhoneNumber_countrycode"
                  patternMessage={"Invalid Mobile Number"}
                  patternValue={
                    /^(?:\+\d{1,3}\s*)?(?:\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/
                  }
                  register={register}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row px-4 gap-4 my-2 w-full">
              <div className="flex-grow">
                <Input
                  error={errors.Number1}
                  label="Number1"
                  title="Age"
                  subLabel=""
                  register={register}
                  required
                  patternValue={/^(1[0-1][0-9]|[1-9]?[0-9])$/}
                  patternMessage={"Invalid Age"}
                />
              </div>

              <div className="flex-grow">
                <Input
                  error={errors.Number4}
                  label="Number4"
                  subLabel="(in kgs)"
                  title="Enter Weight"
                  register={register}
                  required
                  patternValue={/^\d+(\.\d+)?$/}
                  patternMessage={"Error"}
                />
              </div>
            </div>
            <div className="flex px-4 gap-4">
              <Select
                error={errors.Dropdown}
                title="Select Height"
                label="Dropdown"
                placeholder={"Feet"}
                {...register("Dropdown", {
                  required: "Number is required",
                  validate: (value) =>
                    ["4", "5", "6", "7"].includes(value) || "Invalid number",
                })}
                options={["4", "5", "6", "7"]}
              />
              <Select
                error={errors.Dropdown1}
                title="_"
                label="Dropdown1"
                {...register("Dropdown1", {
                  required: "Number is required",
                  validate: (value) =>
                    [
                      "0",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10",
                      "11",
                      "12",
                    ].includes(value) || "Invalid number",
                })}
                placeholder={"Inches"}
                options={[
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                ]}
              />
            </div>
            <div className="opacity-0">
              <div className="d-flex">
                <label className="zf-labelName">BMI</label>
                <input
                  title="decimal"
                  id="bmi4"
                  maxLength={18}
                  name="Decimal"
                  placeholder=""
                  readOnly
                  type="text"
                  value={bmi ?? ""}
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center px-4 gap-4 mb-4">
              <div className="h-[2px] w-[20px] bg-primaryBlue"></div>
              <p
                className={`${prospectusBold.className} text-center text-primaryBlue rounded-3xl`}
              >
                Pre-existing Metabolic Condition
              </p>
              <div className="h-[2px] w-[20px] bg-primaryBlue"></div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center  md:w-4/6 mx-auto">
              <div>
                <input
                  className="hidden"
                  type="checkbox"
                  id={`Checkbox_2_2 ${formLocation}`}
                  name="Checkbox"
                  value="Diabetes&#x2f;Pre-diabetes"
                  autoComplete="off"
                  onChange={handleCheckboxChange}
                />
                <label
                  className={`${epilogue.className
                    } text-sm p-2 text-textDarkBlue rounded-lg ${selectedOptions.includes("Diabetes/Pre-diabetes")
                      ? "bg-[#c0d4e8]"
                      : "bg-[#EFF8FF]"
                    }`}
                  htmlFor={`Checkbox_2_2 ${formLocation}`}
                >
                  Diabetes&#x2f;Pre-diabetes
                </label>
              </div>
              <div>
                <input
                  className="hidden"
                  id={`Checkbox_6_2 ${formLocation}`}
                  name="Checkbox"
                  value="Sleep&#x20;Apnea"
                  autoComplete="off"
                  type="checkbox"
                  onChange={handleCheckboxChange}
                />
                <label
                  className={`${epilogue.className
                    } text-sm p-2 text-textDarkBlue   rounded-lg ${selectedOptions.includes("Sleep Apnea")
                      ? "bg-[#c0d4e8]"
                      : "bg-[#EFF8FF]"
                    }`}
                  htmlFor={`Checkbox_6_2 ${formLocation}`}
                >
                  Sleep&#x20;Apnea
                </label>
              </div>
              <div>
                <input
                  className="hidden"
                  type="checkbox"
                  id={`Checkbox_1_2 ${formLocation}`}
                  name="Checkbox"
                  value="Fatty Liver"
                  autoComplete="off"
                  onChange={handleCheckboxChange}
                />
                <label
                  className={`${epilogue.className
                    } text-sm p-2 text-textDarkBlue   rounded-lg ${selectedOptions.includes("Fatty Liver")
                      ? "bg-[#c0d4e8]"
                      : "bg-[#EFF8FF]"
                    }`}
                  htmlFor={`Checkbox_1_2 ${formLocation}`}
                >
                  Fatty Liver
                </label>
              </div>

              <div>
                <input
                  className="hidden"
                  type="checkbox"
                  id={`Checkbox_3_2 ${formLocation}`}
                  name="Checkbox"
                  onChange={handleCheckboxChange}
                  value="Thyroid"
                  autoComplete="off"
                />
                <label
                  className={`${epilogue.className
                    } text-sm p-2 text-textDarkBlue  rounded-lg ${selectedOptions.includes("Thyroid")
                      ? "bg-[#c0d4e8]"
                      : "bg-[#EFF8FF]"
                    }`}
                  htmlFor={`Checkbox_3_2 ${formLocation}`}
                >
                  Thyroid
                </label>
              </div>
              <div>
                <input
                  className="hidden"
                  type="checkbox"
                  id={`Checkbox_4_2 ${formLocation}`}
                  name="Checkbox"
                  value="High&#x20;Cholestrol"
                  autoComplete="off"
                  onChange={handleCheckboxChange}
                />
                <label
                  className={`${epilogue.className
                    } text-sm p-2 text-textDarkBlue   rounded-lg ${selectedOptions.includes("High Cholestrol")
                      ? "bg-[#c0d4e8]"
                      : "bg-[#EFF8FF]"
                    }`}
                  htmlFor={`Checkbox_4_2 ${formLocation}`}
                >
                  High&#x20;Cholestrol
                </label>
              </div>
              <div>
                <input
                  className="hidden"
                  type="checkbox"
                  id={`Checkbox_5_1 ${formLocation}`}
                  name="Checkbox"
                  value="Breastfeeding"
                  autoComplete="off"
                  onChange={handleCheckboxChange}
                />
                <label
                  className={`${epilogue.className
                    } text-sm  text-textDarkBlue  p-2 rounded-lg ${selectedOptions.includes("Breastfeeding")
                      ? "bg-[#c0d4e8]"
                      : "bg-[#EFF8FF]"
                    } ${page === "easy-weight-loss" && "hidden"}`}
                  htmlFor={`Checkbox_5_1 ${formLocation}`}
                >
                  Breastfeeding
                </label>
              </div>

              <div>
                <input
                  className="hidden"
                  id={`Checkbox_7_2 ${formLocation}`}
                  name="Checkbox"
                  value="None"
                  autoComplete="off"
                  type="checkbox"
                  onChange={handleCheckboxChange}
                />
                <label
                  className={`${epilogue.className
                    } text-sm p-2 text-textDarkBlue  rounded-lg ${selectedOptions.includes("None")
                      ? "bg-[#c0d4e8]"
                      : "bg-[#EFF8FF]"
                    }`}
                  htmlFor={`Checkbox_7_2 ${formLocation}`}
                >
                  None
                </label>
              </div>
            </div>
            <div className="flex justify-center my-4">
              {isValid ? (
                <button
                  // disabled={!isValid}
                  className={`${epilogue.className} p-2 rounded-lg w-1/2 bg-default-gradient
                                    }`}
                  onSubmit={() => {

                    handleSubmit((values) => { });
                  }}
                  type="submit"
                >
                  Submit
                </button>
              ) : (
                <button
                  // disabled={!isValid}
                  className={`${epilogue.className} p-2 rounded-lg w-1/2 bg-default-gradient
                                    }`}
                  onClick={handleSubmit(() => {
                    // handleSubmit((values) => {
                    // }
                    !isValid && alert("Fill all fields");
                  })}
                  type="button"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>

        <div className="absolute -bottom-20 right-0 md:bottom-12 overflow-hidden rounded-full">
          <Image
            src={NoCost}
            alt="form-emi"
            style={{ height: 100, width: 100 }}
          />
        </div>
        <div className="flex gap-4 mt-8 px-4 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="21"
            viewBox="0 0 16 21"
            fill="none"
          >
            <path
              d="M2.2464 20.1291C1.74462 20.1291 1.31522 19.9443 0.958198 19.5746C0.601176 19.205 0.422361 18.76 0.421753 18.2398V8.79335C0.421753 8.27379 0.600568 7.82918 0.958198 7.45951C1.31583 7.08983 1.74523 6.90468 2.2464 6.90405H3.15872V5.01475C3.15872 3.70799 3.60363 2.59424 4.49345 1.67353C5.38327 0.752808 6.45889 0.292134 7.72033 0.291504C8.98238 0.291504 10.0583 0.752178 10.9481 1.67353C11.8379 2.59487 12.2825 3.70862 12.2819 5.01475V6.90405H13.1943C13.696 6.90405 14.1257 7.0892 14.4834 7.45951C14.841 7.82981 15.0195 8.27442 15.0189 8.79335V18.2398C15.0189 18.7594 14.8404 19.2043 14.4834 19.5746C14.1264 19.9449 13.6966 20.1298 13.1943 20.1291H2.2464ZM7.72033 15.4059C8.22211 15.4059 8.65181 15.2211 9.00944 14.8514C9.36707 14.4817 9.54558 14.0368 9.54497 13.5166C9.54497 12.997 9.36646 12.5524 9.00944 12.1828C8.65242 11.8131 8.22272 11.6279 7.72033 11.6273C7.21855 11.6273 6.78915 11.8125 6.43213 12.1828C6.07511 12.5531 5.89629 12.9977 5.89569 13.5166C5.89569 14.0362 6.0745 14.4811 6.43213 14.8514C6.78976 15.2217 7.21916 15.4065 7.72033 15.4059ZM4.98336 6.90405H10.4573V5.01475C10.4573 4.22754 10.1912 3.55842 9.65901 3.00737C9.12683 2.45633 8.4806 2.1808 7.72033 2.1808C6.96006 2.1808 6.31383 2.45633 5.78165 3.00737C5.24946 3.55842 4.98336 4.22754 4.98336 5.01475V6.90405Z"
              fill="#EA6F54"
            />
          </svg>
          <span className={`${epilogue.className} text-textDarkBlue text-xs`}>
            Your data is safe with us. It is only used to find the right expert
            for you!
          </span>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;

const existingConditions = [
  {
    value: "Diabetes/Pre-diabetes",
    label: "Diabetes/Pre-diabetes",
  },
  { value: "Sleep Apnea", label: "Sleep Apnea" },
  { value: "Fatty Liver", label: "Fatty Liver" },
  { value: "Thyroid", label: "Thyroid" },
  { value: "High Cholestrol", label: "High Cholestrol" },
  { value: "Breastfeeding", label: "Breastfeeding" },
  { value: "None", label: "None" },
];
function calculateBMI(
  weight: number,
  heightFeet: number,
  heightInches: number
): any {
  // Convert height to inches
  if (!weight || !heightFeet || !heightInches) {
    return null;
  }
  const totalHeightInches: number = Number(
    Number(heightFeet * 12) + Number(heightInches)
  );

  // Convert weight to kilograms
  const weightKg: number = weight;

  // Convert height to meters
  const heightMeters: number = totalHeightInches / 39.3701;

  // Calculate BMI
  const bmi: number = weightKg / (heightMeters * heightMeters);

  return parseFloat(bmi.toFixed(2)); // Round BMI to 2 decimal places
}

// Example usage:
