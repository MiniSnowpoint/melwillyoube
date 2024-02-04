import React from "react";
import { useState } from "react";
import './page.css';

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure Mel?",
      "Babe are you really sure?",
      "Think again babe",
      "I won't ask again smh",
      "Surely not Mel?",
      "I know you're just joking anyways",
      "Are you absolutely certain?",
      "This is deffo a mistake!",
      "So you don't love me?",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer Mel?",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="question">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="pic" />
          <div className="text-4xl font-bold my-4">I definitely knew you'd say yes babe! I love you</div>
        </>
      ) : (
        <>
          <img
            className="bear"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="pic"
          />
          <h1 className="text">Will you be my Valentine Melissa?</h1>
          <div>
            <button
              className={`accept`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="decline"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
