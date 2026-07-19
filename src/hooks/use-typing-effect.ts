import { useState, useEffect } from "react";

export function useTypingEffect(words: string[], typingSpeed = 100, deletingSpeed = 50, delay = 1500) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      if (currentText.length === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        timeout = setTimeout(() => {}, delay / 2);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (currentText.length === words[currentWordIndex].length) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(words[currentWordIndex].substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delay]);

  return currentText;
}
