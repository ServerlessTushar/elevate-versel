import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pluralize = (word: string, count: number) => {
  return count > 1 ? `${word}s` : word;
};

export const getUpper = (str: string | undefined) => {
  if (typeof str === "string") {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  } else {
    return "";
  }
};

export const fomatDDMMYY = (date: Date, format?: string) => {
  return moment(date).format(format || "DD/MM/YYYY");
};

export const fetchPincodeData = async (pincode: number) => {
  try {
    const resp = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
    const data = await resp.json();
    return data[0].PostOffice[0].State;
  } catch (error) {
    throw error;
  }
};
