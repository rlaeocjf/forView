import { type } from "os";
import React, { useState, useLayoutEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ResultDetailPage from "./app/pages/ResultDetailPage";
import ResultListPage from "./app/pages/ResultListPage";
import TrendPage from "./app/pages/TrendPage";

export interface IDevice {
  deviceWidth: number | undefined;
  deviceHeight: number | undefined;
}
export interface IRNInfo {
  device: IDevice;
}

export const sendMessageToRN = (type: string, data: any) => {
  if (window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(JSON.stringify({ type, data }));
  }
};

function App() {
  const [dataFormRN, setDataFromRN] = useState<IDevice>({
    deviceWidth: undefined,
    deviceHeight: undefined,
  });
  // if (window.ReactNativeWebView) {
  //   /** android */
  //   document.addEventListener("message", listener);
  //   /** ios */
  //   window.addEventListener("message", listener);
  // } else {
  //   // 모바일이 아니라면 모바일 아님을 alert로 띄웁니다.
  //   alert({ message: ERROR_TYPES.notMobile });
  // }
  useLayoutEffect(() => {
    if (window.ReactNativeWebView) {
      window.addEventListener("message", ({ data }) => {
        setDataFromRN(JSON.parse(data));
      });
      document.addEventListener("message", (event) => {
        // alert(event.data);
        //alert(event["data"]);
        //alert(JSON.stringify(data));
        //setDataFromRN(JSON.parse(data));
      });
    }
  }, []);

  return (
    <Routes>
      <Route path="/results" element={<ResultListPage />} />
      <Route path="/detail/:itemId" element={<ResultDetailPage />} />
      <Route path="/trend" element={<TrendPage />} />
    </Routes>
  );
}

export default App;
