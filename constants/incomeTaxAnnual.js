/****************************************************
 * Purpose: Stores the income tax annual rate
 *****************************************************/

let incomeTaxAnnual = {
  TIER_1: { from: 0, to: 20000, rate: 0 }, // $0 - $20,000
  TIER_2: { from: 20001, to: 40000, rate: 0.1 }, // $20,001 - $40,000
  TIER_3: { from: 40001, to: 80000, rate: 0.2 }, // $40,001 - $80,000
  TIER_4: { from: 80001, to: 180000, rate: 0.3 }, // $80,001 - $180,000
  TIER_5: { from: 180001, to: null, rate: 0.4 }, // $180,001 and over
};

export default Object.freeze(incomeTaxAnnual);
