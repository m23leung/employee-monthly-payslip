/****************************************************
 * Purpose: Contains test for incomeTaxCalculator
 *****************************************************/

import { expect } from "chai";
import incomeTaxCalculator from "../../../src/components/incomeTaxCalculator";

describe("incomeTaxCalculator - calcMonthlyPayData", function () {
  let incomeTaxCalc = new incomeTaxCalculator();

  // Taxable Income Range: $0 - $20,000
  it(`Valid - calcMonthlyPayData -$0`, function () {
    const annualSalary = 0;
    const annualIncomeTax = 0;
    const monthlyIncomeTax = incomeTaxCalc.calcMonthlyPayData(annualSalary);
    expect(monthlyIncomeTax.income).to.be.equal(0);
    expect(monthlyIncomeTax.incomeTax).to.be.equal(0);
    expect(monthlyIncomeTax.incomeNet).to.be.equal(0);
  });

  // Taxable Income Range: $0 - $20,000
  it(`Valid - calcMonthlyPayData -$10000`, function () {
    const annualSalary = 10000;
    const annualIncomeTax = 0;
    const monthlyIncomeTax = incomeTaxCalc.calcMonthlyPayData(annualSalary);
    expect(monthlyIncomeTax.income).to.be.equal(833);
    expect(monthlyIncomeTax.incomeTax).to.be.equal(0);
    expect(monthlyIncomeTax.incomeNet).to.be.equal(833);
  });

  // Taxable Income Range: $20,001 - $40,000
  it(`Valid - calcMonthlyPayData -$30000`, function () {
    const annualSalary = 30000;
    const annualIncomeTax = 1000;
    const monthlyIncomeTax = incomeTaxCalc.calcMonthlyPayData(annualSalary);
    expect(monthlyIncomeTax.income).to.be.equal(2500);
    expect(monthlyIncomeTax.incomeTax).to.be.equal(83);
    expect(monthlyIncomeTax.incomeNet).to.be.equal(2417);
  });

  // Taxable Income Range: $40,001 - $80,000
  it(`Valid - calcMonthlyPayData -$60000`, function () {
    const annualSalary = 60000;
    const annualIncomeTax = 6000;
    const monthlyIncomeTax = incomeTaxCalc.calcMonthlyPayData(annualSalary);
    expect(monthlyIncomeTax.income).to.be.equal(5000);
    expect(monthlyIncomeTax.incomeTax).to.be.equal(500);
    expect(monthlyIncomeTax.incomeNet).to.be.equal(4500);
  });

  // Taxable Income Range: $80,001 - $180,000
  it(`Valid - calcMonthlyPayData -$100000`, function () {
    const annualSalary = 100000;
    const annualIncomeTax = 16000;
    const monthlyIncomeTax = incomeTaxCalc.calcMonthlyPayData(annualSalary);
    expect(monthlyIncomeTax.income).to.be.equal(8333);
    expect(monthlyIncomeTax.incomeTax).to.be.equal(1333);
    expect(monthlyIncomeTax.incomeNet).to.be.equal(7000);
  });

  // Taxable Income Range: Above $180,001
  it(`Valid - calcMonthlyPayData -$200000`, function () {
    const annualSalary = 200000;
    const annualIncomeTax = 48000;
    const monthlyIncomeTax = incomeTaxCalc.calcMonthlyPayData(annualSalary);
    expect(monthlyIncomeTax.income).to.be.equal(16667);
    expect(monthlyIncomeTax.incomeTax).to.be.equal(4000);
    expect(monthlyIncomeTax.incomeNet).to.be.equal(12667);
  });
});
