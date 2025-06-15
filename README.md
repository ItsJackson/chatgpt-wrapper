# ChatGPT Wrapper for OpenAI API

A simple TypeScript class wrapper for the OpenAI Chat Completion API.

## Installation

Run the following command to install the official OpenAI SDK. Make sure you are using version 4.x or later.


# Setup
Create an ``.env`` file in your project root and add your OpenAI API key.
```.env
OPEN_API_KEY=sk-......
```
Make sure to load this environment variable in your application (e.g. using ``dotenv``).

# Usage 
Import your ChatGPT class, instantiate it with your API key and optional parameters such as model name, system prompt content, and roles. Use the async sendMessage method to send user messages and get AI responses.

Example:
```.ts
import { ChatGPT } from "./chatgpt";

const chat = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY!,
  // Optional parameters:
  // model: "gpt-3.5-turbo",
  // systemContent: "You are a helpful assistant.",
  // systemRole: "system",
  // userRole: "user",
});

(async () => {
  const response = await chat.sendMessage("Hello, ChatGPT! How are you?");
  console.log("ChatGPT response:", response);
})();
```

# Contributing
Soon:tm:
