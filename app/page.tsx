'use client';

import { useState } from 'react';
import { QuizIntro } from '@/components/quiz/QuizIntro';

type QuizState = 'intro' | 'quiz';

export default function Home() {
  const [quizState, setQuizState] = useState<QuizState>('intro');

  const handleStart = () => {
    setQuizState('quiz');
    // Здесь можно добавить логику для показа вопросов квиза
    console.log('Quiz started!');
  };

  if (quizState === 'intro') {
    return <QuizIntro onStart={handleStart} />;
  }

  // Плейсхолдер для будущих компонентов вопросов
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Started!</h2>
        <p className="text-muted-foreground">Quiz questions will be displayed here.</p>
      </div>
    </div>
  );
}
