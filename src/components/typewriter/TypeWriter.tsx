import React, { ReactElement, useCallback, useEffect, useState } from "react";

import "./type-writer.scss";

interface TypeWriterProps {
  typingDelay: number;
  erasingDelay: number;
  newTextDelay: number;
  textArray: Array<string>;
  loop: boolean;
}

interface DelayText {
  text: string;
  delay: number;
}

export default function TypeWriter({
  typingDelay,
  erasingDelay,
  newTextDelay,
  textArray,
  loop,
}: TypeWriterProps): ReactElement {
  const [states, setStates] = useState<DelayText[]>([]);
  const [stateIndex, setStateIndex] = useState<number>(0);
  const [textContent, setTextContent] = useState<string>("");
  const [typing, setTyping] = useState(false);

  const init = useCallback(() => {
    const allStates: Array<DelayText> = [];
    textArray.forEach((word: string) => {
      for (let i = 1; i <= word.length; i++)
        allStates.push({
          text: word.substr(0, i),
          delay: typingDelay,
        });
      for (let i = word.length - 1; i >= 0; i--)
        allStates.push({
          text: word.substr(0, i),
          delay: i === word.length - 1 ? newTextDelay : erasingDelay,
        });
      allStates.push({ text: "", delay: typingDelay });
    });
    setStates(allStates);
  }, [erasingDelay, typingDelay, newTextDelay, textArray]);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    if (states.length === 0) return;
    const delay = states[stateIndex].delay;

    const nextIndex = (stateIndex + 1) % states.length;

    const lastWordLength = textArray.slice(-1)[0].length;
    if (nextIndex === states.length - lastWordLength && !loop) return;

    const timeout = setTimeout(() => {
      const nextDelay = states[nextIndex].delay;
      setTyping(nextDelay === typingDelay || nextDelay === erasingDelay);
      setTextContent(states[stateIndex].text);
      setStateIndex(nextIndex);
    }, delay);

    return () => clearTimeout(timeout);
  }, [states, stateIndex, erasingDelay, typingDelay, loop, textArray]);

  const classes = ["cursor"];
  if (typing) classes.push("typing");

  return (
    <div
      style={{
        margin: "1rem 0 1rem 0",
        alignSelf: "center",
      }}
    >
      <span className="typed-text">{textContent}</span>
      <span className={classes.join(" ")}>&nbsp;</span>
    </div>
  );
}
