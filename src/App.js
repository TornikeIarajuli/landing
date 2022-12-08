import "./App.css";
import React, { useRef, useState } from "react";

function App() {
  const [isShown, setIsShown] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);
  const [updated, setUpdated] = useState("");

  const handleClick = (e) => {
    setIsShown((current) => !current);
  };

  const handleButton = (event) => {
    setIsActive((current) => !current);
  };

  const handleMessage = () => {
    setUpdated(inputRef.current.value);
  };

  let counter = 0;

  return (
    <div className="App">
      <div className="button_wrapper">
        <button
          className={isActive ? "display" : ""}
          id="pre_order"
          onClick={() => {
            counter++;
            console.log(counter);
            handleClick();
            handleButton();
          }}
        >
          PRE-ORDER NOW
        </button>
        {isShown && (
          <div className="sub-news">
            <div className="test">
              <p className="sub-news-heading">
                Currently the game is under development. If you want to get
                weekly
              </p>
              <p className="sub-news-heading lower">
                updates, subscribe to our newsletter
              </p>
            </div>

            <div className="sub-news-wrapper">
              <input
                ref={inputRef}
                type="email"
                id="message"
                name="message"
                className="sub-news-input"
                placeholder="Enter your email"
              />

              <button onClick={handleMessage} className="sub-news-btn">
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
