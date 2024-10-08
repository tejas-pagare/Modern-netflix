// import OpenAI from 'openai';
// import { OPENAI_KEY } from './constants';

// const openai = new OpenAI({
//   apiKey: OPENAI_KEY, // This is the default and can be omitted
//   dangerouslyAllowBrowser: true
// });

// export default openai;

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;