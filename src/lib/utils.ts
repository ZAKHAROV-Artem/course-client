import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateCode(code: string) {
  const allowedChars = /^[0-9A-Za-z_\-]{18}$/;
  return allowedChars.test(code);
}

export function initials(fullname: string) {
  return fullname
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}
