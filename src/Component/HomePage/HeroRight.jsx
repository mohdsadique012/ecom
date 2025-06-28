
import React, { useEffect, useState } from "react";

const HeroRightBox = () => {
  const titleText = "Why SKYMATES Is A Right Reseller Partner?";
  const [displayedText, setDisplayedText] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const words = titleText.split(" ");
    const tempText = Array(words.length).fill([]);
    let wordIndex = 0;
    let charIndex = 0;

    const intervalId = setInterval(() => {
      if (!isDeleting) {
        // Typing phase
        if (wordIndex < words.length) {
          const word = words[wordIndex];
          if (charIndex < word.length) {
            tempText[wordIndex] = [...tempText[wordIndex], word[charIndex]];
            setDisplayedText([...tempText]);
            charIndex++;
          } else {
            wordIndex++;
            charIndex = 0;
          }
        } else {
          // Once finished typing, start deleting
          setIsDeleting(true);
        }
      } else {
        // Deleting phase
        if (wordIndex >= 0) {
          const word = tempText[wordIndex];
          if (word.length > 0) {
            tempText[wordIndex] = word.slice(0, -1); // Remove last character
            setDisplayedText([...tempText]);
          } else {
            wordIndex--;
          }
        } else {
          // Reset to typing phase
          setIsDeleting(false);
          wordIndex = 0;
          charIndex = 0;
        }
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [isDeleting, titleText]);

  return (
    <div
      className="w-full md:w-[60%] flex flex-col gap-5 pt-16 px-4 md:pt-[110px] md:pl-[60px] z-50"
    >
      <h1
        className="font-semibold text-3xl md:text-[43px] leading-[40px] md:leading-[50px] text-red-800 transition-all ease-in duration-200"
        style={{ letterSpacing: "0.05em" }}
      >
        {displayedText.map((wordChars, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-2">
            {wordChars.map((char, charIndex) => (
              <span
                key={charIndex}
                className="inline-block"
                style={{ animationDelay: `${charIndex * 0.05}s` }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </h1>
      <p className="text-base md:text-lg">
        Every piece tells a story—discover the luxury of leather
        <br className="hidden md:inline" /> that ages beautifully with you.
      </p>
    </div>
  );
};

export default HeroRightBox;
