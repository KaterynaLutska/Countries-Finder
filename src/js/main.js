import refs from "./refs";
import countryCardMarcup from "../templates/country.hbs";
import countryName from "../templates/name-country.hbs";
import notify from "./components/notifications";
import debounce from "lodash.debounce";
import API from "./api-service.js";

refs.searchForm.addEventListener("input", debounce(findCountry, 500));

// функція відмальовки карточки країни //√

function renderCountryCard(country) {
  const marcup = countryCardMarcup(country);
  refs.countryCard.innerHTML = marcup;
}

// функція відмальовки cписку країни //
function tenCountries(country) {
  const marcup = countryName(country);
  refs.countryCard.innerHTML = marcup;
}

// функція пошуку країни //
function findCountry(event) {
  event.preventDefault();

  const input = refs.searchForm;
  const searchQuery = input.elements.query.value;

  API.fetchCountryByName(searchQuery)
    .then((renderCountryCard) => {
      renderCountryCard;
      couuntryNumber(renderCountryCard);
      console.log(renderCountryCard.length);
    })
    .catch((error) => {
      console.log(error);
    });
}

// функція, яка рахує кількість країни //
function couuntryNumber(countryNumber) {
  if (countryNumber.length > 10) {
    notify();
  } else if (countryNumber.length > 1 && countryNumber.length <= 10) {
    //видалити нотіфікашку
    tenCountries(countryNumber);
  } else if (countryNumber.length === 1) {
    //видалити нотіфікашку
    renderCountryCard(countryNumber);
  }
}
