function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = document.querySelector(".date");
  let losAngelesTimeElement = document.querySelector(".time");

  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesTimeElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");

  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[<small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");

  let parisTime = moment().tz("Europe/Paris");
  parisTimeElement.innerHTML = parisTime.format("MMMM Do YYYY");

  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[<small>]");
}
updateTime();
setInterval(updateTime, 1000);
