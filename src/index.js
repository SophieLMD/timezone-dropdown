function showCityTimezone(event) {
  let citiesSelect = document.querySelector("#city");
  citiesSelect.addEventListener("change", showCityTimezone);
  if (event.target.value.length > 0) {
    alert(event.target.value);
  }
}
showCityTimezone();
