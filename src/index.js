function showSelectedCity(event) {
  if (event.target.value.length > 0) {
    alert(event.target.value);
  }
}
let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", showSelectedCity);
showSelectedCity();
