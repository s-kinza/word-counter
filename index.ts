#! /usr/bin/env node

// this line is called a shebang, it tells the OS to run it with nodejs

// Import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer"

// Declarre a constant 'answer' and assign it to the result of inquirer.prompt function

const answer: {
    Sentence: string
} = await inquirer.prompt(
    [
        {
            name: "Sentence",
            type: "input",
            message: "Enter Your Sentence to Count The Word:"
        }
    ]
)

const words = answer.Sentence.trim().split(" ")

// Print the array of words to the console
console.log(words)

// print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
