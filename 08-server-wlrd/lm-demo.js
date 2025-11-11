import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: "AIzaSyBUahuIiiz5xf7R0DVTxoIJ8xqT7vySBUY" // make sure you have this from google gemini
}); // shouldn't be in your front end code because anyone can access your passcode 

async function generateText(prompt) {
    const response = await ai.models.generateContent({ 
        model: "gemini-2.5-flash",
        contents: prompt
    });
        
    console.log(response.text)
}

let prompt = "Give me a list of 10 uninteresting things"; 
let llmText = await generateText(prompt);
console.log(llmText); 

// navigate to the right directory
// node lm-demo.js (the name of the file) and everything should print in terminal