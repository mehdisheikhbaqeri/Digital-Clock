function displayTime() {
  let dateTime = new Date();
  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();
  let session = document.getElementById("session");

  if (hrs >= 12) {
    session.textContent = "PM";
  } else {
    session.textContent = "AM";
  }
  document.getElementById("hours").textContent = hrs;
  document.getElementById("minutes").textContent = min;
  document.querySelector(".seconds").textContent = sec;
}
setInterval(displayTime, 10);
