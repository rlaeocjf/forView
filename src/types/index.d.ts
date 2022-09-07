export { };
interface Idata {
    deviceWidth?: number
    deviceHeight?: number
}
declare global {
    interface Window {
        ReactNativeWebView: any; // 👈️ turn off type checking
    }
    interface Event {
        data: Idata;
    }
}