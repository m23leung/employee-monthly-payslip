/************************************************************
 * Purpose: Parses user input to invoke appropriate commands
 *************************************************************/
import incomeTaxCalculator from "./incomeTaxCalculator";
import payslipGenerator from "./payslipGenerator";
import commandList from "../constants/commandList";
import errorMessages from "../constants/errorMessages";
import { isValidNumber, isPositiveSalary } from "../validations/validations";

export default class parser {
  constructor() {
    this.payslipGenerator = new payslipGenerator();
  }
  /**
   * Processes the command provided by user
   * @param  input
   */
  parseCommand(input) {
    let inputLine = input.trim();

    let firstIndexName = inputLine.indexOf('"');
    let lastIndexName = inputLine.indexOf('"', firstIndexName + 1);

    let inputLineArgs = inputLine.split(" ");

    const command = inputLineArgs[0].toLowerCase();
    const empName = inputLine.substring(firstIndexName, lastIndexName + 1);
    const annualSalary = inputLineArgs[inputLineArgs.length - 1];

    if (command == commandList.MONTHLY_SLIP) {
      // TODO: Parse name for errors

      // If annual salary is negative or not number, throw error. Do not generate slip
      if (!isValidNumber(annualSalary)) {
        return false;
      } else if (!isPositiveSalary(annualSalary)) {
        return false;
      }

      this.payslipGenerator.generateMonthlyPayslip(empName, annualSalary);
      return true;
    } else {
      console.log(errorMessages.invalidCommand);
      return false;
    }
  }
}
