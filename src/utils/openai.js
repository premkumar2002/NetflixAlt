const { OpenAI } = require("openai");  // if using CommonJS, or import { OpenAI } if using ES6 modules
const baseURL = "https://api.aimlapi.com/v1";
const apiKey = "85e18ea967e84f04a0908e9ba35019fa"

const openai = new OpenAI({
  apiKey,
  baseURL,  // New base URL
  dangerouslyAllowBrowser: true
});

export default openai;
