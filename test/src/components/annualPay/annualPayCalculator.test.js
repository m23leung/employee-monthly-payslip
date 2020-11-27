/****************************************************
 * Purpose: Contains test for annualPayCalculator
 *****************************************************/

import { expect } from "chai";
import annualPayCalculator from "../../../../src/components/annualPay/annualPayCalculator";

describe("annualPayCalculator - calcIncomeTax", function () {
  // Taxable Income Edge Case: $-5
  it(`Valid - calcIncomeTax -$5`, function () {
    const annualSalary = -5;
    let annualPayCalc = new annualPayCalculator();
    const annualIncomeTax = annualPayCalc.calcAnnualIncomeTax(annualSalary);
    expect(annualIncomeTax).to.be.equal(0);
  });
  // Taxable Income Edge Case: $-5
  it(`Valid - calcIncomeTax 0`, function () {
    const annualSalary = 0;
    let annualPayCalc = new annualPayCalculator();
    const annualIncomeTax = annualPayCalc.calcAnnualIncomeTax(annualSalary);
    expect(annualIncomeTax).to.be.equal(0);
  });
  // Taxable Income Range: $0 - $20,000
  it(`Valid - calcIncomeTax $10,000`, function () {
    const annualSalary = 10000;
    let annualPayCalc = new annualPayCalculator();
    const annualIncomeTax = annualPayCalc.calcAnnualIncomeTax(annualSalary);
    expect(annualIncomeTax).to.be.equal(0);
  });
  // Taxable Income Range: $20,001 - $40,000
  it(`Valid - calcIncomeTax $30,000`, function () {
    const annualSalary = 30000;
    let annualPayCalc = new annualPayCalculator();
    const annualIncomeTax = annualPayCalc.calcAnnualIncomeTax(annualSalary);
    expect(annualIncomeTax).to.be.equal(1000);
  });
  // Taxable Income Range: $40,001 - $80,000
  it(`Valid - calcIncomeTax $60,000`, function () {
    const annualSalary = 60000;
    let annualPayCalc = new annualPayCalculator();
    const annualIncomeTax = annualPayCalc.calcAnnualIncomeTax(annualSalary);
    expect(annualIncomeTax).to.be.equal(6000);
  });
  // Taxable Income Range: $80,001 - $180,000
  it(`Valid - calcIncomeTax $100,000`, function () {
    const annualSalary = 100000;
    let annualPayCalc = new annualPayCalculator();
    const annualIncomeTax = annualPayCalc.calcAnnualIncomeTax(annualSalary);
    expect(annualIncomeTax).to.be.equal(16000);
  });
  // Taxable Income Range: Above $180,001
  it(`Valid - calcIncomeTax $200,000`, function () {
    const annualSalary = 200000;
    let annualPayCalc = new annualPayCalculator();
    const annualIncomeTax = annualPayCalc.calcAnnualIncomeTax(annualSalary);
    expect(annualIncomeTax).to.be.equal(48000);
  });
});
