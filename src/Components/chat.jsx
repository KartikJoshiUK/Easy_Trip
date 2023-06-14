import { useEffect } from "react";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
Kommunicate.init("20699085bb132e7b43419bac0c3885085", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});
const Chat = () => {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "20699085bb132e7b43419bac0c3885085",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
    console.log("HELLO EVERY ONE");
  }, []);
  return <div></div>;
};

export default Chat;
