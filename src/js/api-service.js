const BASE_URL = `https://restcountries.eu/rest/v2/name/`;

// функція, яка повертає відповідь з бекенду у вигляді json//
function fetchCountryByName(countryName) {
  return fetch(`${BASE_URL}${countryName}`).then((response) => {
    return response.json();
  });
}
export default { fetchCountryByName };
