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
          <div className="answer">
            <h2>
              Currently the game is under development. If you want to get weekly
              updates, subscribe to our newsletter
            </h2>
            <form className="email_wrapper">
              <input ref={inputRef} type="text" id="message" name="message" />

              {/* <h2>Updated: {updated}</h2> */}

              <button className="update_message" onClick={handleMessage}>
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
