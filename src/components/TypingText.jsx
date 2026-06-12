import { useState, useEffect } from "react";

const TypingText = ({ text, speed = 40, delay = 0, className }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingText;