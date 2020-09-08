import { Dad } from "./Dad";
import { ENGINE_METHOD_PKEY_ASN1_METHS } from "constants";

export interface Age {
  birthMonth: number;
  birthYear: number;
  currentMonth: number;
  currentYear: number;
}

const dad = new Dad();

const findDadAge = ({
  birthMonth,
  birthYear,
  currentMonth,
  currentYear,
}: {
  birthMonth: number;
  birthYear: number;
  currentMonth: number;
  currentYear: number;
}): number => {
  let monthCalc = currentMonth - birthMonth;
  const yearCalc = currentYear - birthYear;

  switch (monthCalc) {
    case 1:
      monthCalc = 0.1;
      break;
    case 2:
      monthCalc = 0.2;
      break;
    case 3:
      monthCalc = 0.3;
      break;
  }

  return yearCalc + monthCalc;
};

console.log(findDadAge(dad));
