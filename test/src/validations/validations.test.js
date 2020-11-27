/****************************************************
 * Purpose: Contains test for validations
 *****************************************************/

import { expect } from "chai";
import {
  isValidNumber,
  isPositiveSalary,
} from "../../../src/validations/validations";

describe("validations", function () {
  it(`validations - isValidNumber - false`, function () {
    expect(isValidNumber("COW")).to.be.equal(false);
    expect(isValidNumber("MONKEY")).to.be.equal(false);
  });
  it(`validations - isValidNumber - true`, function () {
    expect(isValidNumber(700)).to.be.equal(true);
    expect(isValidNumber(80000)).to.be.equal(true);
  });
  it(`validations - isPositiveSalary - true`, function () {
    expect(isPositiveSalary(20000)).to.be.equal(true);
    expect(isPositiveSalary(0)).to.be.equal(true);
  });
  it(`validations - isPositiveSalary - false`, function () {
    expect(isPositiveSalary(-500)).to.be.equal(false);
    expect(isPositiveSalary(-30000)).to.be.equal(false);
  });
});
