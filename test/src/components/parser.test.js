/****************************************************
 * Purpose: Contains test for parser
 *****************************************************/

import { expect } from "chai";
import Parser from "../../../src/components/parser";

describe("parser - parseCommand", function () {
  const parserObj = new Parser();
  let isValidInput;

  it(`Valid - parseCommand`, function () {
    isValidInput = parserObj.parseCommand(
      `GenerateMonthlyPayslip "Bob Song" 0`
    );
    expect(isValidInput).to.be.equal(true);
  });

  it(`Valid - parseCommand #2`, function () {
    isValidInput = parserObj.parseCommand(
      `GenerateMonthlyPayslip "Mary Song" 60000`
    );
    expect(isValidInput).to.be.equal(true);
  });

  it(`Invalid - parseCommand - Invalid Command`, function () {
    isValidInput = parserObj.parseCommand(`MonkeyCommand "Mary Song" 60000`);
    expect(isValidInput).to.be.equal(false);
  });

  it(`Invalid - parseCommand - Empty Command`, function () {
    isValidInput = parserObj.parseCommand(``);
    expect(isValidInput).to.be.equal(false);
  });

  it(`Invalid - parseCommand - Negative Annual Salary`, function () {
    isValidInput = parserObj.parseCommand(
      `GenerateMonthlyPayslip "Mary Song" -40000`
    );
    expect(isValidInput).to.be.equal(false);

    isValidInput = parserObj.parseCommand(`GenerateMonthlyPayslip`);
    expect(isValidInput).to.be.equal(false);
  });

  it(`Invalid - parseCommand - No Employee Name & Annual Salary Args`, function () {
    isValidInput = parserObj.parseCommand(`GenerateMonthlyPayslip`);
    expect(isValidInput).to.be.equal(false);
  });

  it(`Invalid - parseCommand - No Annual Salary Arg`, function () {
    isValidInput = parserObj.parseCommand(`GenerateMonthlyPayslip "Mary Song"`);
    expect(isValidInput).to.be.equal(false);
  });
});
