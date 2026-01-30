'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface QuizIntroProps {
  onStart: () => void;
}

export function QuizIntro({ onStart }: QuizIntroProps) {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Find the Perfect Art Lessons for You
              </h1>
              <p className="font-sans text-lg md:text-xl text-black/90 leading-relaxed max-w-md">
                Take this quiz to discover which art lessons best suit your needs. Answer a few simple questions and find the ideal course to enhance your artistic skills.
              </p>
            </div>

            <Button
              onClick={onStart}
              className="bg-accent hover:bg-accent/90 text-white w-fit px-8 py-6 text-lg font-medium rounded-lg transition-colors duration-200"
            >
              Start →
          </Button>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square md:aspect-auto md:h-96 lg:h-full rounded-xl overflow-hidden">
              <Image
                src="/images/image.png"
                alt="Artist painting with brush"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
