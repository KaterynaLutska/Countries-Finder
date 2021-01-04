import {
  notice,
  error,
  defaultModules,
  defaults,
} from "@pnotify/core/dist/PNotify.js";
import "@pnotify/mobile/dist/PNotifyMobile.js";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import * as PNotifyMobile from "@pnotify/mobile/dist/PNotifyMobile.js";

// function errorNotify() {
//   error({
//     title: "Йой!",
//     text:
//
//     hide: false,
//   });
//   defaultModules.set(PNotifyMobile, {});
// }

function errorNotify() {
  notice({
    title: "ЙоЙ!",
    text: "Таку кількість країн нам не облетіти! Оберіть одну країну!",
    delay: 3000,
  });
}

export default errorNotify;
