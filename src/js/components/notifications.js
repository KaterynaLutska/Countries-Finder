import { notice } from "@pnotify/core/dist/PNotify.js";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/PNotify.css";

function notify() {
  notice({
    title: "ЙоЙ!",
    text: "Таку кількість країн нам не облетіти! Оберіть одну країну!",
    delay: 2500,
    hide: true,
  });
}

export default notify;
