/****************************************************
 * Purpose: Main entry to program
 *****************************************************/
import Parser from "./src/components/parser";

const parser = new Parser();
// **********************************
//   ReadLine Input - User Interface
// **********************************

const readline = require("readline");

// Initialize input receiver
const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Retrieve User Input
readLine.on("line", (input) => {
  // Set Exit Prompt
  if (input.toLowerCase().trim() === "exit") {
    console.log("\nSee you later!!!");
    process.exit(0);
  }

  parser.parseCommand(input);
  readLine.prompt();
});

// Set Ending Prompt
readLine.on("close", () => {
  console.log("\nSee you later!!!");
  process.exit(0);
});

// Trigger User Prompt
readLine.setPrompt("Payslip> ");
readLine.prompt();
