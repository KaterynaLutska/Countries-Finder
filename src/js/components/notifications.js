import { error } from "@pnotify/core/dist/PNotify.js";
import "@pnotify/mobile/dist/PNotifyMobile.js";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/PNotify.css";

function errorNotify() {
  error({
    title: "Йой!",
    text:
      "Кількість країн перевищує можливості нашого сервера. Оберіть конкретну країну!",
    hide: false,
  });
}

export default errorNotify;
