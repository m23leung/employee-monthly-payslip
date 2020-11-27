/****************************************************
 * Purpose: Contains test for payslipGenerator
 *****************************************************/

import { expect } from "chai";
import payslipGenerator from "../../../src/components/payslipGenerator";

describe("paySlipGenerator -  generateMonthlyPayslip", function () {
  it(`valid - generateMonthlyPayslip #1`, function () {
    const empName = "Freddy Jones";
    const annualSalary = 60000;
    const payslipGeneratorObj = new payslipGenerator();

    payslipGeneratorObj.generateMonthlyPayslip(empName, annualSalary);
  });
  it(`valid - generateMonthlyPayslip #2`, function () {
    const empName = "Joey Mercury";
    const annualSalary = 100000;
    const payslipGeneratorObj = new payslipGenerator();
    payslipGeneratorObj.generateMonthlyPayslip(empName, annualSalary);
  });
});
