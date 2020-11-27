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

    isValidInput = parserObj.parseCommand(
      `GenerateMonthlyPayslip "Mary Song" 60000`
    );
    expect(isValidInput).to.be.equal(true);
  });

  it(`Invalid - parseCommand`, function () {
    isValidInput = parserObj.parseCommand(`MonkeyCommand "Mary Song" 60000`);
    expect(isValidInput).to.be.equal(false);

    isValidInput = parserObj.parseCommand(`MonkeyCommand "Mary Song" Barrel`);
    expect(isValidInput).to.be.equal(false);

    isValidInput = parserObj.parseCommand(`GenerateMonthlyPayslip "Mary Song"`);
    expect(isValidInput).to.be.equal(false);

    isValidInput = parserObj.parseCommand(
      `GenerateMonthlyPayslip "Mary Song" -40000`
    );
    expect(isValidInput).to.be.equal(false);

    isValidInput = parserObj.parseCommand(`GenerateMonthlyPayslip`);
    expect(isValidInput).to.be.equal(false);

    isValidInput = parserObj.parseCommand(``);
    expect(isValidInput).to.be.equal(false);
  });
});
