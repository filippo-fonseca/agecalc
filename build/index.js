"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dad_1 = require("./Dad");
var dad = new Dad_1.Dad();
var findDadAge = function (_a) {
    var birthMonth = _a.birthMonth, birthYear = _a.birthYear, currentMonth = _a.currentMonth, currentYear = _a.currentYear;
    var monthCalc = currentMonth - birthMonth;
    var yearCalc = currentYear - birthYear;
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
