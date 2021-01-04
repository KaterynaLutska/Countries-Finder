import refs from "./refs";
import countryCardMarcup from "../templates/country.hbs";
import errorNotify from "./components/notifications";
//import debounce from "lodash.debounce";
import API from "./api-service.js";
import countryName from "../templates/name-country.hbs";

// функція відмальовки карточки країни //

refs.searchForm.addEventListener("input", findCountry);

function renderCountryCard(country) {
  const marcup = countryCardMarcup(country);
  refs.countryCard.innerHTML = marcup;
}

function tenCountries(country) {
  const marcup = countryName(country);
  refs.countryCard.innerHTML = marcup;
}

// функція пошуку країни //
function findCountry(event) {
  event.preventDefault();

  const input = event.currentTarget;
  const searchQuery = input.elements.query.value;

  API.fetchCountryByName(searchQuery)
    .then((renderCountryCard) => {
      renderCountryCard;
      couuntryNumber(renderCountryCard);
      console.log(renderCountryCard.length);
    }) // якщо все добре, то на проміс ми вішаємо наступний then з необіхдними даними
    .catch((error) => {
      // якщо все погано  - спіймали відповідь в catch
      console.log(error);
    });
  //.finally(() => input.reset()); // очищуємо поля input
}

function couuntryNumber(countryNumber) {
  if (countryNumber.length > 10) {
    errorNotify();
  } else if (countryNumber.length > 1 && countryNumber.length <= 10) {
    //видалити нотіфікашку
    tenCountries(countryNumber);
  } else if (countryNumber.length === 1) {
    //видалити нотіфікашку
    renderCountryCard(countryNumber);
  }
}
