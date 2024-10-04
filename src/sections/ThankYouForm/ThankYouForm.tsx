// @ts-nocheck
"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { decrypt } from "@/utils/encryption";

// continue with allurion form
// https://forms.zohopublic.in/agulati/form/TPChoicesJun2024AllurionPage5/formperma/pvVcSCZbFY23PO9j7X98PbXGRlwIGK8lWxObXJJAktk
const defaultFormAction =
  "https://forms.zohopublic.in/agulati/form/TPChoicesFeb2024LandingPage5/formperma/z7rCY_qM4mMvmQ18i-tSqZxPebWDVq3yxyXG9lFUy_0/htmlRecords/submit";

const ThankYouForm = ({
  formAction = defaultFormAction,
  dropDownName,
  type = "dummy",
}: {
  formAction?: string;
  dropDownName?: string;
  type?: "dummy" | "allurion";
}) => {
  const searchParams = useSearchParams();
  const [city, setCity] = useState("-Select-");
  const [otherCity, setOtherCity] = useState("");
  // const phone = searchParams.get('phone') ?? "";
  // const name = searchParams.get('name') ?? "";
  const phone = searchParams.get("hp") ?? "";
  const name = searchParams.get("hn") ?? "";
  const isInterested = searchParams.get("interested") ?? "";
  const iswithoutInsurance = searchParams.get("withoutInsurance") ?? "";
  const decryptedPhone = decrypt(phone);
  const decryptedName = decrypt(name);
  console.log("isWithoutInsurance", iswithoutInsurance);
  console.log({ name: decryptedName, phone: decryptedPhone });
  console.log("city: ", city);
  console.log("from form", dropDownName);
  const handleCityChange = (event) => {
    setCity(event.target.value);
    if (event.target.value !== "Other") {
      setOtherCity("");
    }
  };

  const handleOtherCityChange = (event) => {
    setOtherCity(event.target.value);
  };

  return (
    <div style={{ fontFamily: "Arial" }}>
      <div className="questionanswer">
        <form
          action={formAction}
          name="form"
          method="POST"
          // onSubmit='javascript:document.charset="UTF-8"; return validateForm();'
          accept-charset="UTF-8"
          encType="multipart/form-data"
          id="form"
        >
          <select
            name="Dropdown6"
            value={isInterested == "false"}
            className="opacity-0"
          ></select>
          {/* <select name="Dropdown6" value={iswithoutInsurance === "true"} className="opacity-0"></select> */}
          <input type="hidden" name="zf_referrer_name" value="" />
          {/*'<!-- To Track referrals , place the referrer name within the " " in the above hidden input field -->'*/}
          <input type="hidden" name="zf_redirect_url" value="" />
          {/*'<!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field -->'*/}
          <input type="hidden" name="zc_gad" value="" />
          {/*'<!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM -->'*/}
          <div className="zf-templateWrapper">
            <div className="zf-subContWrap zf-topAlign">
              <ul>
                <li className="zf-tempFrmWrapper zf-small">
                  <div className="zf-tempContDiv">
                    <span>
                      <input
                        type="hidden"
                        name="SingleLine"
                        checktype="c1"
                        value={decryptedName}
                        maxlength="255"
                        fieldType="1"
                        placeholder=""
                        required
                      />
                    </span>
                    <p
                      id="SingleLine_error"
                      className="zf-errorMessage hidden "
                      // style="display: none"
                    >
                      Invalid value
                    </p>
                  </div>
                  <div className="zf-clearBoth"></div>
                </li>

                <li className="zf-tempFrmWrapper zf-small">
                  <div className="zf-tempContDiv zf-phonefld">
                    <div className="zf-phwrapper zf-phNumber">
                      <span>
                        <input
                          type="hidden"
                          compname="PhoneNumber"
                          name="PhoneNumber_countrycode"
                          maxlength="20"
                          checktype="c7"
                          value={decryptedPhone}
                          phoneFormat="1"
                          isCountryCodeEnabled="false"
                          fieldType="11"
                          id="international_PhoneNumber_countrycode"
                          valType="number"
                          phoneFormatType="1"
                          placeholder=""
                          required
                        />
                      </span>
                      <div className="zf-clearBoth"></div>
                    </div>
                    <p
                      id="PhoneNumber_error"
                      className="zf-errorMessage hidden"
                      // style="display: none"
                    >
                      Invalid value
                    </p>
                  </div>
                  <div className="zf-clearBoth"></div>
                </li>

                <li
                  className="zf-radio zf-tempFrmWrapper flex flex-col gap-4"
                  required
                >
                  <label className="zf-labelName text-primaryBlue font-semibold">
                    What is your motivation to lose weight?
                  </label>
                  <div className="zf-tempContDiv ">
                    <div className="zf-overflow flex flex-col gap-2">
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown_1"
                          name="Dropdown"
                          checktype="c1"
                          value="Doctor&#x20;advised&#x20;for&#x20;health&#x20;reasons"
                        />
                        <label for="Dropdown_1" className="zf-radioChoice">
                          Doctor&#x20;advised&#x20;for&#x20;health&#x20;reasons
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown_2"
                          name="Dropdown"
                          checktype="c1"
                          value="Reduce&#x20;risk&#x20;of&#x20;chronic&#x20;disease"
                        />
                        <label for="Dropdown_2" className="zf-radioChoice">
                          Reduce&#x20;risk&#x20;of&#x20;chronic&#x20;disease
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4 items-start">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown_3"
                          name="Dropdown"
                          checktype="c1"
                          value="Special&#x20;occasion&#x20;&#x28;event,&#x20;wedding,&#x20;etc.&#x29;"
                        />
                        <label for="Dropdown_3" className="zf-radioChoice">
                          Special&#x20;occasion&#x20;&#x28;event,&#x20;wedding,&#x20;etc.&#x29;
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown_4"
                          name="Dropdown"
                          checktype="c1"
                          value="Getting&#x20;fitter&#x20;for&#x20;a&#x20;holiday"
                        />
                        <label for="Dropdown_4" className="zf-radioChoice">
                          Getting&#x20;fitter&#x20;for&#x20;a&#x20;holiday
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown_5"
                          name="Dropdown"
                          checktype="c1"
                          value="Improve&#x20;self&#x20;esteem"
                        />
                        <label for="Dropdown_5" className="zf-radioChoice">
                          Improve&#x20;self&#x20;esteem
                        </label>
                      </span>
                      <div className="zf-clearBoth"></div>
                    </div>
                    <p
                      id="Dropdown_error"
                      className="zf-errorMessage hidden"
                      // style="display: none"
                    >
                      Invalid value
                    </p>
                  </div>
                  <div className="zf-clearBoth"></div>
                </li>

                <li
                  className="zf-radio zf-tempFrmWrapper flex flex-col gap-4"
                  required
                >
                  <label className="zf-labelName text-primaryBlue font-semibold">
                    Have you tried losing weight through a paid program before?
                  </label>
                  <div className="zf-tempContDiv">
                    <div className="zf-overflow flex flex-col gap-2">
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown1_1"
                          name="Dropdown1"
                          checktype="c1"
                          value="Meal&#x20;replacement&#x20;&#x2f;&#x20;Herbal&#x20;drinks"
                        />
                        <label for="Dropdown1_1" className="zf-radioChoice">
                          Meal&#x20;replacement&#x20;&#x2f;&#x20;Herbal&#x20;drinks
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown1_2"
                          name="Dropdown1"
                          checktype="c1"
                          value="App-based&#x20;fitness&#x20;program"
                        />
                        <label for="Dropdown1_2" className="zf-radioChoice">
                          App-based&#x20;fitness&#x20;program
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown1_3"
                          name="Dropdown1"
                          checktype="c1"
                          value="Gym&#x20;&#x2f;&#x20;zumba&#x20;classNamees"
                        />
                        <label for="Dropdown1_3" className="zf-radioChoice">
                          Gym&#x20;&#x2f;&#x20;zumba&#x20;
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown1_4"
                          name="Dropdown1"
                          checktype="c1"
                          value="Offline&#x20;Paid&#x20;diet&#x20;program"
                        />
                        <label for="Dropdown1_4" className="zf-radioChoice">
                          Offline&#x20;Paid&#x20;diet&#x20;program
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown1_5"
                          name="Dropdown1"
                          checktype="c1"
                          value="Fad&#x20;Diets&#x20;&#x28;Keto,&#x20;GM,&#x20;etc.&#x29;"
                        />
                        <label for="Dropdown1_5" className="zf-radioChoice">
                          Fad&#x20;Diets&#x20;&#x28;Keto,&#x20;GM,&#x20;etc.&#x29;
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown1_6"
                          name="Dropdown1"
                          checktype="c1"
                          value="Never&#x20;tried&#x20;a&#x20;paid&#x20;program"
                        />
                        <label for="Dropdown1_6" className="zf-radioChoice">
                          Never&#x20;tried&#x20;a&#x20;paid&#x20;program
                        </label>
                      </span>
                      <div className="zf-clearBoth"></div>
                    </div>
                    <p
                      id="Dropdown1_error"
                      className="zf-errorMessage hidden"
                      // style="display: none"
                    >
                      Invalid value
                    </p>
                  </div>
                  <div className="zf-clearBoth"></div>
                </li>

                <li
                  className="zf-radio zf-tempFrmWrapper flex flex-col gap-4"
                  required
                >
                  <label className="zf-labelName text-primaryBlue font-semibold">
                    How many times in a week do you eat outside food?
                  </label>
                  <div className="zf-tempContDiv">
                    <div className="zf-overflow flex flex-col gap-2">
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown2_1"
                          name="Dropdown2"
                          checktype="c1"
                          value="Rarely"
                        />
                        <label for="Dropdown2_1" className="zf-radioChoice">
                          Rarely
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown2_2"
                          name="Dropdown2"
                          checktype="c1"
                          value="Once&#x20;a&#x20;week"
                        />
                        <label for="Dropdown2_2" className="zf-radioChoice">
                          Once&#x20;a&#x20;week
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown2_3"
                          name="Dropdown2"
                          checktype="c1"
                          value="Once&#x20;in&#x20;2&#x20;weeks"
                        />
                        <label for="Dropdown2_3" className="zf-radioChoice">
                          Once&#x20;in&#x20;2&#x20;weeks
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown2_4"
                          name="Dropdown2"
                          checktype="c1"
                          value="Swiggy&#x20;&amp;&#x20;Zomato&#x20;&lt;3"
                        />
                        <label for="Dropdown2_4" className="zf-radioChoice">
                          Swiggy&#x20;&amp;&#x20;Zomato&#x20;&lt;3
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown2_5"
                          name="Dropdown2"
                          checktype="c1"
                          value="I&#x20;love&#x20;eating&#x20;outside"
                        />
                        <label for="Dropdown2_5" className="zf-radioChoice">
                          I&#x20;love&#x20;eating&#x20;outside
                        </label>
                      </span>
                      <div className="zf-clearBoth"></div>
                    </div>
                    <p
                      id="Dropdown2_error"
                      className="zf-errorMessage hidden"
                      // style="display: none"
                    >
                      Invalid value
                    </p>
                  </div>
                  <div className="zf-clearBoth"></div>
                </li>

                <li
                  className="zf-radio zf-tempFrmWrapper flex flex-col gap-4"
                  required
                >
                  <label className="zf-labelName text-primaryBlue font-semibold">
                    Who cooks meals for you at home?
                  </label>
                  <div className="zf-tempContDiv">
                    <div className="zf-overflow flex flex-col gap-2">
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown3_1"
                          name="Dropdown3"
                          checktype="c1"
                          value="Self"
                        />
                        <label for="Dropdown3_1" className="zf-radioChoice">
                          Self
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown3_2"
                          name="Dropdown3"
                          checktype="c1"
                          value="Spouse"
                        />
                        <label for="Dropdown3_2" className="zf-radioChoice">
                          Spouse
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown3_3"
                          name="Dropdown3"
                          checktype="c1"
                          value="Maid&#x20;&#x2f;&#x20;Cook"
                        />
                        <label for="Dropdown3_3" className="zf-radioChoice">
                          Maid&#x20;&#x2f;&#x20;Cook
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown3_4"
                          name="Dropdown3"
                          checktype="c1"
                          value="Parent&#x20;&#x2f;&#x20;Sibling"
                        />
                        <label for="Dropdown3_4" className="zf-radioChoice">
                          Parent&#x20;&#x2f;&#x20;Sibling
                        </label>
                      </span>
                      <div className="zf-clearBoth"></div>
                    </div>
                    <p
                      id="Dropdown3_error"
                      className="zf-errorMessage hidden"
                      // style="display: none"
                    >
                      Invalid value
                    </p>
                  </div>
                  <div className="zf-clearBoth"></div>
                </li>

                <li
                  className="zf-radio zf-tempFrmWrapper flex flex-col gap-4"
                  required
                >
                  <label className="zf-labelName text-primaryBlue font-semibold">
                    What is your field of profession?
                  </label>
                  <div className="zf-tempContDiv">
                    <div className="zf-overflow flex flex-col gap-2">
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown4_1"
                          name="Dropdown4"
                          checktype="c1"
                          value="Teacher&#x20;&#x2f;&#x20;Professor&#x20;&#x2f;&#x20;Doctor"
                        />
                        <label for="Dropdown4_1" className="zf-radioChoice">
                          Teacher&#x20;&#x2f;&#x20;Professor&#x20;&#x2f;&#x20;Doctor
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown4_2"
                          name="Dropdown4"
                          checktype="c1"
                          value="Corporate&#x20;job&#x20;&#x2f;&#x20;Startup"
                        />
                        <label for="Dropdown4_2" className="zf-radioChoice">
                          Corporate&#x20;job&#x20;&#x2f;&#x20;Startup
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown4_3"
                          name="Dropdown4"
                          checktype="c1"
                          value="Government&#x20;job"
                        />
                        <label for="Dropdown4_3" className="zf-radioChoice">
                          Government&#x20;job
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown4_4"
                          name="Dropdown4"
                          checktype="c1"
                          value="Homemaker"
                        />
                        <label for="Dropdown4_4" className="zf-radioChoice">
                          Homemaker
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown4_5"
                          name="Dropdown4"
                          checktype="c1"
                          value="Businessman"
                        />
                        <label for="Dropdown4_5" className="zf-radioChoice">
                          Businessman
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown4_6"
                          name="Dropdown4"
                          checktype="c1"
                          value="Others"
                          onclick="toggleCustomInput(this)"
                        />
                        <label for="Dropdown4_6" className="zf-radioChoice">
                          Others
                        </label>
                      </span>
                      <div className="zf-clearBoth"></div>
                    </div>

                    <div className="zf-clearBoth"></div>
                    <div>
                      <input
                        type="text"
                        className="custom-input hidden"
                        name="otherProfession"
                        placeholder=""
                      />
                    </div>
                    <p
                      id="Dropdown4_error"
                      className="zf-errorMessage hidden"
                      // style="display: none"
                    >
                      Invalid value
                    </p>
                  </div>
                  <div className="zf-clearBoth"></div>
                </li>

                <li
                  className="zf-radio zf-tempFrmWrapper flex flex-col gap-4"
                  required
                >
                  <label className="zf-labelName text-primaryBlue font-semibold">
                    How soon are you looking to start your weight loss journey?
                  </label>
                  <div className="zf-tempContDiv">
                    <div className="zf-overflow flex flex-col gap-2">
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown5_1"
                          name="Dropdown5"
                          checktype="c1"
                          value="Immediately"
                        />
                        <label for="Dropdown5_1" className="zf-radioChoice">
                          Immediately
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown5_2"
                          name="Dropdown5"
                          checktype="c1"
                          value="Next&#x20;week"
                        />
                        <label for="Dropdown5_2" className="zf-radioChoice">
                          Next&#x20;week
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown5_3"
                          name="Dropdown5"
                          checktype="c1"
                          value="Next&#x20;month"
                        />
                        <label for="Dropdown5_3" className="zf-radioChoice">
                          Next&#x20;month
                        </label>
                      </span>
                      <span className="zf-multiAttType flex gap-4">
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Dropdown5_4"
                          name="Dropdown5"
                          checktype="c1"
                          value="Don&rsquo;t&#x20;know"
                        />
                        <label for="Dropdown5_4" className="zf-radioChoice">
                          Don&rsquo;t&#x20;know
                        </label>
                      </span>
                      <div className="zf-clearBoth"></div>
                    </div>
                    <p
                      id="Dropdown5_error"
                      className="zf-errorMessage hidden"
                      // style="display: none"
                    >
                      Invalid value
                    </p>
                  </div>
                  <div className="zf-clearBoth"></div>
                </li>

                <li class="zf-tempFrmWrapper zf-small">
                  <label class="zf-labelName text-primaryBlue font-semibold">
                    Which city are you from?
                  </label>
                  <div class="zf-tempContDiv ">
                    <select
                      onChange={handleCityChange}
                      class="zf-form-sBox border border-solid border-gray-400 rounded-md p-2 mt-4"
                      name={dropDownName}
                      checktype="c1"
                    >
                      <option selected="true" value="-Select-">
                        -Select-
                      </option>
                      <option value="Delhi&#x20;&#x2f;NCR">
                        Delhi &#x2f;NCR
                      </option>
                      <option value="Mumbai&#x2f;Navi&#x20;Mumbai&#x20;&#x2f;&#x20;Thane">
                        Mumbai&#x2f;Navi Mumbai &#x2f; Thane
                      </option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Pune">Pune</option>
                      <option value="Kolkata">Kolkata</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Jaipur">Jaipur</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Chandigarh&#x2f;Mohali">
                        Chandigarh&#x2f;Mohali
                      </option>
                      <option value="Other">Other</option>
                    </select>
                    <p
                      id="Dropdown7_error"
                      class="zf-errorMessage"
                      style={{ display: "none" }}
                    >
                      Invalid value
                    </p>
                  </div>
                  <div class="zf-clearBoth"></div>
                </li>

                {city === "Other" && (
                  <li class="zf-tempFrmWrapper zf-small mt-4">
                    <label class="zf-labelName text-primaryBlue font-semibold">
                      Other City
                    </label>
                    <div class="zf-tempContDiv">
                      <span>
                        <input
                          className="text-black border border-solid border-gray-400 rounded-md p-2 mt-4"
                          type="text"
                          name="SingleLine1"
                          checktype="c1"
                          value={otherCity}
                          maxlength="255"
                          placeholder=""
                          onChange={handleOtherCityChange}
                        />
                      </span>
                      <p
                        id="SingleLine1_error"
                        class="zf-errorMessage"
                        style={{ display: "none" }}
                      >
                        Invalid value
                      </p>
                    </div>
                    <div class="zf-clearBoth"></div>
                  </li>
                )}
              </ul>
            </div>
            <ul className="mt-4">
              <li className="zf-fmFooter flex justify-center">
                <button className="zf-submitColor rounded-2xl bg-[#3881c5] px-8 py-2 text-white font-medium">
                  SUBMIT
                </button>
              </li>
            </ul>
            <input
              name="Dropdown6"
              className="opacity-0"
              value={
                iswithoutInsurance === "true" && type === "allurion"
                  ? "Yes"
                  : ""
              }
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ThankYouForm;
