// src/utils/questionGenerator.js
import axios from 'axios';

const API_URL = 'https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B-Instruct';
const HF_API_TOKEN = 'YOUR_HUGGINGFACE_API_KEY'; // Replace this with your token

export const generateQuestions = async () => {
  const prompt = `
Generate 5 medium-difficulty general knowledge multiple-choice questions suitable for 12th-grade students. Each question should have four options labeled A, B, C, and D, with the correct answer indicated.

Format:
Q1: [Question text]
A) Option A
B) Option B
C) Option C
D) Option D
Answer: [Correct option letter]
`;

  try {
    const response = await axios.post(
      API_URL,
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${HF_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data[0].generated_text; // You'll need to parse this
  } catch (error) {
    console.error('Failed to generate questions:', error);
    return null;
  }
};
