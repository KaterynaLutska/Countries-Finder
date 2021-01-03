const BASE_URL = `https://restcountries.eu/rest/v2/name/`;

// функція, яка повертає json//
function fetchCountryByName(countryName) {
  return fetch(`${BASE_URL}${countryName}`) // повертає проміс
    .then((response) => {
      // розпарсили відповідь від бекенду з допомогою then //
      return response.json(); // повертає ще один проміс, результатом якого є respnose.json
    });
}
// console.log(fetchCountryByName());
export default { fetchCountryByName };
