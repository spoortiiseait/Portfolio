import { useState, useEffect } from 'react';

export function useTypewriter(words = [], typingSpeed = 100, deletingSpeed = 50, pauseTime = 1800) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[index % words.length];

    if (!isDeleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  return words.length > 0 ? words[index % words.length].substring(0, subIndex) : '';
}
