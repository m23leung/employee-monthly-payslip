/****************************************************
 * Purpose: Contains all the validation functions
 *****************************************************/

import errorMessages from "../../constants/errorMessages";

/**
 * Checks if the number is valid
 * @param  input
 */
export const isValidNumber = (input) => {
  if (isNaN(parseInt(input))) {
    console.log(errorMessages.invalidArguments);
    return false;
  }
  return true;
};

/**
 * Checks if the number is positive
 * @param  input
 */
export const isPositiveSalary = (salary) => {
  if (parseInt(salary) < 0) {
    console.log(errorMessages.negativeNumber);
    return false;
  }
  return true;
};
