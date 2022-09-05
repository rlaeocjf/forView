import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [dataFormRN, setDataFromRN] = useState<string>();

  // if (window.ReactNativeWebView) {
  //   /** android */
  //   document.addEventListener("message", listener);
  //   /** ios */
  //   window.addEventListener("message", listener);
  // } else {
  //   // 모바일이 아니라면 모바일 아님을 alert로 띄웁니다.
  //   alert({ message: ERROR_TYPES.notMobile });
  // }

  useEffect(() => {
    if (window.ReactNativeWebView) {
      console.log(window.ReactNativeWebView);
      window.addEventListener("message", ({ data }) => {
        console.log(data);
        setDataFromRN(data);
      });
    }
  }, []);

  const sendMessage = () => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "REQ_CAMERA_PERMISSION" })
      );
    } else {
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>data from rn : {dataFormRN}</p>
        <button onClick={sendMessage}>move navigator</button>
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
