/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, } from "@google/generative-ai";
import chalk from "chalk";
import ora from "ora";
import prompt from "prompt-sync";
import dotenv from "dotenv";

dotenv.config();

const promptSync = prompt();

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

const safetySettings = [{ category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE, },
{ category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE, },
{ category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE, },
{ category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE, },
];

async function run() {
    const theSpin = ora('Starting chat...').start();
    try {
        const chat = model.startChat({
            generationConfig: generationConfig,
            safetySettings: safetySettings,
            history: [],
        });
        theSpin.stop();

        while (true) {
            const userInput = promptSync(chalk.green('You: '));
            if (userInput.toLowerCase() === 'exit') {
                console.log(chalk.yellow('Goodbye!'));
                process.exit(0);
            }
            const result = await chat.sendMessage(userInput);
            if (result.error) {
                console.error(chalk.red('AI Error:'), result.error.message);
                continue;
            }
            const response = result.response.text();
            console.log(chalk.blue('AI:'), response);
        }
    } catch (error) {
        theSpin.stop();
        console.error(chalk.red('An error occurred:'), error.message);
        process.exit(1);
    } 
}

run();