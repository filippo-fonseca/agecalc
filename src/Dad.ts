import { Age } from "./index";

export class Dad implements Age {
  birthMonth: number;
  birthYear: number;
  currentMonth: number;
  currentYear: number;

  constructor() {
    this.birthMonth = 7;
    this.birthYear = 1956;
    this.currentMonth = 9;
    this.currentYear = 2020;
  }
}
