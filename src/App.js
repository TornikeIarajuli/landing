import "./App.css";
import React, { useRef, useState } from "react";
import {firestore, firebase, db, analytics} from "./firebase";
import { logEvent } from "firebase/analytics";
import {addDoc, collection} from "@firebase/firestore";
import validator from "validator";

function App() {
  const [isShown, setIsShown] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);
  const [updated, setUpdated] = useState("");
  const ref = collection(firestore, "emails")



  const handleClick = (e) => {
    setIsShown((current) => !current);
  };

  const handleButton = (event) => {
    setIsActive((current) => !current);
  };

  const handleMessage = async (e) => {
    e.preventDefault()
    setUpdated(inputRef.current.value);
    const data = {
      email: inputRef.current.value
    }
    try {
      if(validator.isEmail(data.email)) {
        addDoc(ref, data)
        inputRef.current.value = ""
      } else {
        inputRef.current.value = "enter a valid e-mail"
      }
      
   } catch(e) {
      console.log(e);
   }
  };

  let counter = 0;
  

  return (
    <div className="App">
      <div className="button_wrapper">
        <button
          className={isActive ? "display" : ""}
          id="pre_order"
          onClick={() => {
            logEvent(analytics, "preorder_button_click", "preorder_button_click", "preorder_button_click");
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
