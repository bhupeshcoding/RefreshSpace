// App.js
import React, { useState } from "react";
import FlashcardList from "./FlashcardList";
import AddFlashcard from "./AddFlashcard";
import FlashCard from "./FlashCard"; // Updated to match the correct case of the filename
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [flashcards, setFlashcards] = useState([
    {
      question: "What is OpenAI?",
      answer:
        "OpenAI is an AI research lab consisting of the for-profit OpenAI LP and the non-profit OpenAI Inc.",
    },
    {
      question: "Who founded OpenAI?",
      answer:
        "OpenAI was founded by Elon Musk, Sam Altman, Greg Brockman, Ilya Sutskever, John Schulman, and Wojciech Zaremba.",
    },
    {
      question: "What is GPT-3?",
      answer:
        "GPT-3 is a language model developed by OpenAI that can generate human-like text.",
    },
    {
      question: "What is GPT-3?",
      answer:
        "GPT-3 is a language model developed by OpenAI that can generate human-like text.",
    },
    {
      question: "What is OpenAI?",
      answer:
        "OpenAI is an AI research lab consisting of the for-profit OpenAI LP and the non-profit OpenAI Inc.",
    },
    {
      question: "Who founded OpenAI?",
      answer:
        "OpenAI was founded by Elon Musk, Sam Altman, Greg Brockman, Ilya Sutskever, John Schulman, and Wojciech Zaremba.",
    },
    {
      question: "What is GPT-2?",
      answer:
        "GPT-2 is a predecessor to GPT-3, which is capable of generating coherent and contextually relevant text.",
    },
    {
      question: "What does GPT stand for?",
      answer: "GPT stands for Generative Pre-trained Transformer.",
    },
    {
      question: "What is the difference between GPT-2 and GPT-3?",
      answer:
        "GPT-3 is significantly larger and more powerful than GPT-2, having 175 billion parameters compared to GPT-2's 1.5 billion.",
    },
    {
      question: "What is the purpose of GPT models?",
      answer:
        "GPT models are designed to generate human-like text and perform a wide range of language-related tasks.",
    },
    {
      question: "What is a parameter in machine learning?",
      answer:
        "A parameter is a value that influences the model's predictions. In GPT models, parameters define the relationships learned during training.",
    },
    {
      question: "What are transformers in AI?",
      answer:
        "Transformers are a type of neural network architecture designed to handle sequential data, such as text, and capture dependencies across long ranges.",
    },
    {
      question: "What is reinforcement learning?",
      answer:
        "Reinforcement learning is a type of machine learning where an agent learns by interacting with its environment and receiving feedback.",
    },
    {
      question: "What is fine-tuning in AI?",
      answer:
        "Fine-tuning is the process of adjusting a pre-trained model, like GPT, on a specific dataset to improve its performance for a particular task.",
    },
    {
      question: "What is supervised learning?",
      answer:
        "Supervised learning is a type of machine learning where the model is trained on labeled data, i.e., data with known outcomes.",
    },
    {
      question: "What is unsupervised learning?",
      answer:
        "Unsupervised learning involves training a model on unlabeled data, where the model must find patterns and relationships on its own.",
    },
    {
      question: "What is natural language processing (NLP)?",
      answer:
        "NLP is a field of AI focused on the interaction between computers and human language, enabling machines to understand and generate text.",
    },
    {
      question: "What is a neural network?",
      answer:
        "A neural network is a computational model inspired by the way biological neural networks in the human brain work, consisting of layers of interconnected nodes.",
    },
    {
      question: "What are the ethical concerns of AI?",
      answer:
        "Ethical concerns include bias, privacy, job displacement, accountability, and the misuse of AI technologies.",
    },
    {
      question: "What is the OpenAI API?",
      answer:
        "The OpenAI API provides developers access to the powerful GPT models for various language tasks such as text generation, translation, and summarization.",
    },
    {
      question: "What is GPT-4?",
      answer:
        "GPT-4 is the next iteration of GPT models, improving upon GPT-3 with more parameters, better performance, and handling more complex language tasks.",
    },
    {
      question: "What are the applications of GPT-3?",
      answer:
        "Applications include chatbots, content generation, language translation, sentiment analysis, code completion, and more.",
    },
    {
      question: "What is the role of tokens in GPT models?",
      answer:
        "Tokens are chunks of text (words or subwords) that GPT models process. The number of tokens determines how much text the model can handle at once.",
    },
    {
      question: "What is the OpenAI Codex?",
      answer:
        "Codex is a descendant of GPT-3 and is trained specifically for programming tasks, such as writing code and understanding programming languages.",
    },
    {
      question: "What is the maximum number of tokens GPT-3 can handle?",
      answer:
        "GPT-3 can process up to 4,096 tokens in a single prompt, which is roughly equivalent to 3,000 words.",
    },
    {
      question: "What is the use of the davinci model in OpenAI API?",
      answer:
        "Davinci is the most powerful model in the GPT-3 family and is best suited for complex tasks like summarization, creative writing, and advanced language understanding.",
    },
    {
      question: "How can GPT-3 be used for content creation?",
      answer:
        "GPT-3 can generate articles, blogs, social media posts, product descriptions, and even poetry, saving time and effort for content creators.",
    },
    {
      question: "What is a model checkpoint?",
      answer:
        "A model checkpoint is a saved version of a trained model at a specific point in its training process, allowing it to be resumed or evaluated.",
    },
    {
      question: "What is the significance of transfer learning?",
      answer:
        "Transfer learning allows models to leverage knowledge gained from one task to improve performance on a related task with less data.",
    },
    {
      question: "What is bias in AI models?",
      answer:
        "Bias in AI refers to the tendency of models to produce unfair or skewed outputs based on biased data or assumptions made during training.",
    },
    {
      question: "What is overfitting in machine learning?",
      answer:
        "Overfitting occurs when a model learns too much from its training data, capturing noise and details that don't generalize well to new data.",
    },
    {
      question: "What is underfitting in machine learning?",
      answer:
        "Underfitting occurs when a model is too simplistic to capture the underlying patterns in the data, leading to poor performance.",
    },
    {
      question: "What is the transformer architecture?",
      answer:
        "The transformer architecture is the foundation of models like GPT, using self-attention mechanisms to process input data in parallel and capture long-range dependencies.",
    },
    {
      question: "What is self-attention in transformers?",
      answer:
        "Self-attention is a mechanism in transformers that allows the model to focus on different parts of the input sequence when processing each token, improving context understanding.",
    },
    {
      question: "What is the Turing Test?",
      answer:
        "The Turing Test is a measure of a machine's ability to exhibit intelligent behavior indistinguishable from that of a human.",
    },
    {
      question: "What are the challenges of training GPT models?",
      answer:
        "Challenges include the need for massive computational resources, handling bias in training data, and ensuring ethical use of the technology.",
    },
    {
      question: "What is the role of AI in healthcare?",
      answer:
        "AI in healthcare is used for diagnosis, medical image analysis, drug discovery, personalized medicine, and administrative tasks, improving efficiency and outcomes.",
    },
    {
      question: "What is GPT-3's largest model?",
      answer:
        "The largest GPT-3 model, davinci, has 175 billion parameters, making it one of the most powerful language models ever created.",
    },
    {
      question: "How does GPT-3 handle multiple languages?",
      answer:
        "GPT-3 can process and generate text in multiple languages by learning patterns across diverse linguistic datasets during training.",
    },
    {
      question: "What are zero-shot and few-shot learning?",
      answer:
        "Zero-shot learning refers to a model's ability to perform a task without specific training for it. Few-shot learning allows the model to learn from just a few examples.",
    },
    {
      question: "What is NLP-based sentiment analysis?",
      answer:
        "Sentiment analysis is a natural language processing technique used to determine the emotional tone behind a series of words, often used for opinion mining.",
    },
    {
      question: "How does GPT-3 generate text?",
      answer:
        "GPT-3 generates text by predicting the next word in a sequence based on patterns learned from a large corpus of text data.",
    },
    {
      question: "What is a prompt in GPT-3?",
      answer:
        "A prompt is the input text or query provided to GPT-3, guiding the model to generate relevant and contextually appropriate responses.",
    },
    {
      question: "What is an API in the context of GPT?",
      answer:
        "An API (Application Programming Interface) allows developers to interact programmatically with GPT-3, sending text inputs and receiving generated responses.",
    },
    {
      question: "What are the limitations of GPT-3?",
      answer:
        "Limitations include the inability to understand true meaning, potential for generating biased or harmful content, and the need for large amounts of data and computational power.",
    },
    {
      question: "What is an AI model?",
      answer:
        "An AI model is a mathematical framework trained to recognize patterns and make predictions based on data, often used in machine learning and deep learning.",
    },
    {
      question: "What is the role of data in training AI models?",
      answer:
        "Data is crucial for training AI models as it provides the information necessary for the model to learn patterns, behaviors, and relationships in the target domain.",
    },
    {
      question: "How does GPT-3 handle ambiguity?",
      answer:
        "GPT-3 handles ambiguity by using contextual clues from the prompt to generate the most likely response, but it may still produce unclear or incorrect answers.",
    },
    {
      question: "What are the applications of GPT in customer support?",
      answer:
        "GPT models can power chatbots and virtual assistants, providing customers with automated responses, troubleshooting, and personalized recommendations.",
    },
    {
      question: "What is tokenization in natural language processing?",
      answer:
        "Tokenization is the process of breaking text into smaller units, called tokens, such as words, subwords, or characters, to facilitate processing by AI models.",
    },
    {
      question: "How does GPT-3 differ from traditional rule-based AI systems?",
      answer:
        "GPT-3 differs by relying on data-driven learning and pattern recognition, rather than predefined rules, making it more flexible and adaptable.",
    },
    {
      question: "What is prompt engineering?",
      answer:
        "Prompt engineering is the process of crafting effective input queries for models like GPT to improve the quality and relevance of the generated responses.",
    },
    {
      question: "What are some key benefits of GPT-3 for businesses?",
      answer:
        "Benefits include automating customer support, content creation, data analysis, and enhancing user experiences with intelligent interfaces.",
    },
    {
      question: "What is model distillation?",
      answer:
        "Model distillation is the process of transferring knowledge from a larger, complex model to a smaller, more efficient one for faster inference.",
    },
    {
      question: "What is an attention mechanism in AI?",
      answer:
        "An attention mechanism allows models to focus on specific parts of the input data when processing, improving efficiency and performance in tasks like translation.",
    },
    {
      question: "What is a generative model?",
      answer:
        "A generative model learns the distribution of data and can generate new data points similar to the training data, such as generating text with GPT.",
    },
    {
      question: "How is GPT-3 used in translation?",
      answer:
        "GPT-3 can translate text between languages by learning linguistic patterns and relationships during training, offering quick and reliable translations.",
    },
    {
      question: "What is the role of AI in education?",
      answer:
        "AI in education is used for personalized learning, intelligent tutoring systems, grading automation, and administrative tasks, enhancing educational experiences.",
    },
    {
      question: "How does GPT-3 generate code?",
      answer:
        "GPT-3 generates code by learning from programming-related texts and understanding syntax, functions, and libraries to produce code snippets based on user input.",
    },
    {
      question: "What is the significance of large language models in AI?",
      answer:
        "Large language models like GPT-3 can understand and generate human-like text, enabling a wide range of applications from customer service to content creation.",
    },
    {
      question: "How does GPT-3 handle context in long conversations?",
      answer:
        "GPT-3 handles long conversations by maintaining contextual information across multiple exchanges, ensuring coherent and contextually relevant responses.",
    },
    {
      question: "What are the key limitations of GPT-3?",
      answer:
        "Key limitations include the inability to verify factual correctness, generating biased content, and requiring large computational resources.",
    },
    {
      question: "What is a supervised fine-tuning process?",
      answer:
        "Supervised fine-tuning is a process where a model is trained on labeled data to improve its performance on a specific task.",
    },
    {
      question: "What is multi-modal AI?",
      answer:
        "Multi-modal AI systems can process and generate multiple types of data, such as text, images, and audio, creating more robust AI solutions.",
    },
    {
      question: "What is the significance of GPT-3 for creative industries?",
      answer:
        "GPT-3 enables creative industries to automate content generation, helping writers, marketers, and designers produce high-quality content more efficiently.",
    },
    {
      question: "What is the OpenAI Codex API?",
      answer:
        "The Codex API is a specialized version of GPT-3 focused on understanding and generating programming code, making it easier to build software applications.",
    },
  ]);

  const addFlashcard = (newFlashcard) => {
    setFlashcards([...flashcards, newFlashcard]);
  };

  return (
    <>
      <div className="container">
        <div className="App">
          <div className="container">
            <FlashcardList flashcards={flashcards} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
