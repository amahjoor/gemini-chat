# Gemini Node.js Chatbot

A simple chatbot using Google Gemini and Node.js.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)

## Introduction

This project demonstrates how to create a simple chatbot using Google Gemini's generative AI capabilities and Node.js. The chatbot can process user inputs and generate responses using the Google Gemini API.

## Features

- Generate responses using Google Gemini's AI
- Interactive chat in the terminal
- Safe content generation with configurable harm categories

## Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/amahjoor/gemini-chat.git
    cd gemini-chat
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Create a `.env` file**:
    ```sh
    touch .env
    ```

4. **Add your Google Gemini API key to the `.env` file**:
    ```env
    GEMINI_API_KEY=your_actual_api_key_here
    ```

### Environment Variables

The project requires the following environment variable:

- `GEMINI_API_KEY`: Your Google Gemini API key.

## Usage

1. **Run the chatbot**:
    ```sh
    node index.js
    ```

2. **Interact with the chatbot**: Type your messages in the terminal. To exit, type `exit`.

## Credits

Special thanks to [Devarshi Shimpi](https://blog.devarshi.dev/how-to-create-ai-chatbot-google-gemini-using-nodejs) for the guide on creating an AI chatbot using Google Gemini and Node.js.
