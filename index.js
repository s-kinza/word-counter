// Import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer";
// Declarre a constant 'answer' and assign it to the result of inquirer.prompt function
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentence to Count The Word:"
    }
]);
const words = answer.Sentence.trim();
// Print the array of words to the console
console.log(words);
// print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
