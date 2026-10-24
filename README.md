# Chat with Gemini 1.5 Flash in the terminal

A Node.js loop that sends each line to `gemini-1.5-flash` and prints the reply. Type `exit` to stop. There is no `npm start` script. The command is `node index.js`.

## Start a chat

```bash
npm install
```

Create `.env` in this folder:

```
GEMINI_API_KEY=your_key_here
```

```bash
node index.js
```

The key comes from [Google AI Studio](https://aistudio.google.com/apikey). `package.json` already declares the ISC license. The `LICENSE` file is that same license so GitHub can detect it.

## License

[ISC](LICENSE)
