import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ParagraphTypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
  showCursor?: boolean;
}

const ParagraphTypewriter = ({ 
  text, 
  speed = 30, 
  className = '', 
  delay = 0,
  showCursor = false
}: ParagraphTypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, isStarted]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-[2px] h-5 bg-primary ml-1"
        />
      )}
    </span>
  );
};

export default ParagraphTypewriter;