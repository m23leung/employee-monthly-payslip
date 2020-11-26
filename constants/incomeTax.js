/****************************************************
 * Purpose: Stores the income tax
 *****************************************************/

let incomeTax = {
  TIER_1: 0, // $0 - $20,000
  TIER_2: 0.1, // $20,001 - $40,000
  TIER_3: 0.2, // $40,001 - $80,000
  TIER_4: 0.3, // $80,001 - $180,000
  TIER_5: 0.4, // $180,001 and over
};

export default Object.freeze(incomeTax);
