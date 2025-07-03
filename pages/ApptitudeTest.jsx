// AptitudeTest.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AptitudeTest() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      const randomQuestions = generateRandomQuestions();
      setQuestions(randomQuestions);
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (timeLeft <= 0 && !submitted) {
      handleSubmit();
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  const handleChange = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) {
        score++;
      }
    });
    setSubmitted(true);
    alert(`Test submitted! Your score: ${score}/${questions.length}`);
    navigate('/collagedetails');
  };

  const generateRandomQuestions = () => {
    const sampleQuestions = [
      {
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Nitrogen"
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Gd", "Go"],
        answer: "Au"
      },
      {
        question: "Which country hosted the 2020 Summer Olympics?",
        options: ["China", "Brazil", "Japan", "Germany"],
        answer: "Japan"
      },
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
        answer: "Mitochondria"
      },
      {
        question: "Who discovered gravity after observing a falling apple?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        answer: "Isaac Newton"
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
      },
      {
        question: "What is the boiling point of water at sea level?",
        options: ["100°C", "90°C", "80°C", "110°C"],
        answer: "100°C"
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Mark Twain", "Jane Austen", "William Shakespeare", "Charles Dickens"],
        answer: "William Shakespeare"
      },
      {
        question: "Which continent is the Sahara Desert located on?",
        options: ["Asia", "Africa", "Australia", "South America"],
        answer: "Africa"
      },
      {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        answer: "Paris"
      }
    ];

    // Shuffle and select 5 random questions for each user
    const shuffled = sampleQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  return (
    <div style={{ padding: '2rem', background: '#f5f5f5', minHeight: '100vh' }}>
      <h1>Aptitude Test</h1>
      <h3>Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</h3>

      {questions.map((q, i) => (
        <div key={i} style={{ marginBottom: '1.5rem', background: 'white', padding: '1rem', borderRadius: '10px' }}>
          <h4>Q{i + 1}. {q.question}</h4>
          {q.options.map((opt, j) => (
            <div key={j}>
              <label>
                <input
                  type="radio"
                  name={`question-${i}`}
                  value={opt}
                  disabled={submitted}
                  onChange={() => handleChange(i, opt)}
                  checked={answers[i] === opt}
                /> {opt}
              </label>
            </div>
          ))}
        </div>
      ))}

      {!submitted && (
        <button onClick={handleSubmit} style={{ padding: '10px 20px', fontSize: '1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '8px' }}>
          Submit Test
        </button>
      )}
    </div>
  );
}

export default AptitudeTest;