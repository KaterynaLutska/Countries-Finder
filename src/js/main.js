import refs from "./refs";
import countryCardMarcup from "../templates/country.hbs";
import errorNotify from "./components/notifications";
import debounce from "lodash.debounce";
import API from "./api-service.js";

// функція відмальовки карточки країни //

refs.searchForm.addEventListener("input", findCountry);

function renderCountryCard(country) {
  const marcup = countryCardMarcup(country);
  refs.countryCard.innerHTML = marcup;
  console.dir(marcup);
}

// функція пошуку країни //
function findCountry(event) {
  event.preventDefault();
  //   const input = refs.input.value;
  //   console.log(input);

  const input = event.currentTarget;

  const searchQuery = input.elements.query.value;

  API.fetchCountryByName(searchQuery)
    .then(renderCountryCard) // якщо все добре, то на проміс ми вішаємо наступний then з необіхдними даними
    .catch((error) => {
      console.log(error);
    });
  // якщо все погано  - спіймали відповідь в catch
  //.finally(() => input.reset()); // очищуємо поля input
}

// function couuntryNumber(number) {
//   if (number.length >= 2 && number.length <= 10) {
//     return "10 країн";
//   } else if (number.length > 10) {
//     return errorNotify();
//   } else if (number.length === 1) {
//     return refs.searchForm.addEventListener("input", findCountry);
//   }
// }
