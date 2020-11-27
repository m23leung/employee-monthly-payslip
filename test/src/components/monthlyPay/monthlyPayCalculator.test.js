/****************************************************
 * Purpose: Contains test for monthlyPayCalculator
 *****************************************************/

import { expect } from "chai";
import monthlyPayCalculator from "../../../../src/components/monthlyPay/monthlyPayCalculator";

describe("monthlyPayCalculator - calcMonthlyPayData", function () {
  let monthlyPayCalc = new monthlyPayCalculator();

  it(`Valid - calcMonthlyPayData -$0`, function () {
    const annualSalary = 0;
    const annualIncomeTax = 0;
    const monthlyIncomeTax = monthlyPayCalc.calcMonthlyPayData(
      annualSalary,
      annualIncomeTax
    );
    expect(monthlyIncomeTax.income).to.be.equal(0);
    expect(monthlyIncomeTax.incomeTax).to.be.equal(0);
    expect(monthlyIncomeTax.incomeNet).to.be.equal(0);
  });

  it(`Valid - calcMonthlyPayData -$30000`, function () {
    const annualSalary = 30000;
    const annualIncomeTax = 1000;
    const monthlyIncomeTax = monthlyPayCalc.calcMonthlyPayData(
      annualSalary,
      annualIncomeTax
    );
    expect(monthlyIncomeTax.income).to.be.equal(2500);
    expect(monthlyIncomeTax.incomeTax).to.be.equal(83);
    expect(monthlyIncomeTax.incomeNet).to.be.equal(2417);
  });

  it(`Valid - calcMonthlyPayData -$60000`, function () {
    const annualSalary = 60000;
    const annualIncomeTax = 6000;
    const monthlyIncomeTax = monthlyPayCalc.calcMonthlyPayData(
      annualSalary,
      annualIncomeTax
    );
    expect(monthlyIncomeTax.income).to.be.equal(5000);
    expect(monthlyIncomeTax.incomeTax).to.be.equal(500);
    expect(monthlyIncomeTax.incomeNet).to.be.equal(4500);
  });
});
