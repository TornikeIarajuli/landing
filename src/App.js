import "./App.css";
import React, { useRef, useState } from "react";
import {firestore, firebase, db} from "./firebase";
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
