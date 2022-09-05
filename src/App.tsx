import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ResultDetailPage from "./app/pages/ResultDetailPage";
import ResultListPage from "./app/pages/ResultListPage";

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
    <Routes>
      <Route path="/results" element={<ResultListPage />} />
      <Route path="/detail" element={<ResultDetailPage />} />
    </Routes>
  );
}

export default App;
