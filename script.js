let hr = document.getElementById("r");
let min = document.getElementById("b");
let sec = docuement.getElementById("w");

function displayTime() {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;

  hr.style.transform = "rotate(${hRotation}deg)";
  min.style.transform = "rotate(${hRotation}deg)";
  style.style.transform = "rotate(${hRotation}deg)";
}
setInterval(displayTime, 1000);
