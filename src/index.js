function showCityTimezone(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY H:mm");
    alert(`It is ${currentTime} in ${event.target.value}`);
  }
}
let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", showCityTimezone);
