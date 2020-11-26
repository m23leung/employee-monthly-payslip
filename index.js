/****************************************************
 * Purpose: Main entry to program
 *****************************************************/

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

  //robot.handleCommand(input);
  //readLine.prompt();

  let inputLine = input.trim();

  let firstIndex = inputLine.indexOf('"');
  let lastIndex = inputLine.indexOf('"', firstIndex + 1);

  console.log(`firstIndex: ${firstIndex} , lastIndex: ${lastIndex}`);

  let inputLineArgs = inputLine.split(" ");

  let command = inputLineArgs[0];
  let name = inputLine.substring(firstIndex, lastIndex + 1);
  let salary = inputLineArgs[inputLineArgs.length - 1];

  console.log(`${command} ${name} ${salary}`);

  process.exit(0);
});

// Set Ending Prompt
readLine.on("close", () => {
  console.log("\nSee you later!!!");
  process.exit(0);
});

// Trigger User Prompt
readLine.setPrompt("Payslip> ");
readLine.prompt();
