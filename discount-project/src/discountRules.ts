// discountRules.ts

export type AgeGroup = "<1" | "1-3" | "3-18" | ">18";
export type FlightPeriod = "Craciun" | "Paste" | "Vara";

export function calculateDiscount(age: number, period: FlightPeriod): number {
  if (age < 1) {
    return 100;
  } else if (age >= 1 && age <= 3) {
    return 50;
  } else if (age > 3 && age <= 18) {
    return 30;
  } else {
    // peste 18 ani – reducerea depinde de perioada zborului
    switch (period) {
      case "Craciun":
        return 50;
      case "Paste":
        return 30;
      case "Vara":
        return 0;
      default:
        return 0;
    }
  }
}