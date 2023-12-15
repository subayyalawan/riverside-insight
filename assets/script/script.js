// ////////////////////////////////////
//   for custom arrow buttons on number input
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let myInput = document.getElementById("examinees");
let incBtn = document.querySelector(".increment");
let decBtn = document.querySelector(".decrement");

let inputVal = myInput.getAttribute("value");

myInput.addEventListener("change", () => {
  myInput.setAttribute("value", myInput.value);
});

incBtn.addEventListener("click", () => {
  inputVal = parseInt(myInput.getAttribute("value"));

  let newInputVal = inputVal + 1;
  myInput.setAttribute("value", newInputVal);
  myInput.value = newInputVal;
});

decBtn.addEventListener("click", () => {
  inputVal = parseInt(myInput.getAttribute("value"));
  let newInputVal = inputVal - 1;
  myInput.setAttribute("value", newInputVal);
  myInput.value = newInputVal;
});





////////////////////////////////////
//   for showing two different forms with next and prev btn
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


let nxtBtn = document.querySelector(".nextBtn")
let prevBtn = document.querySelector(".backBtn")
let form1 = document.querySelector(".form1")
let form2 = document.querySelector(".form2")
let progress = document.querySelectorAll(".progress")
let progressLine = document.querySelectorAll(".pool-progress-line");



nxtBtn.addEventListener('click', ()=>{
  form1.style.display = "none"
  form2.style.display = "flex"
  progress[0].classList.add('active');
  progress[1].classList.add('active');
  progressLine[0].classList.add('active')
  progressLine[1].classList.add('active')
})


prevBtn.addEventListener("click", () => {
  form1.style.display = "flex";
  form2.style.display = "none";
  
  progress[0].classList.add("active");
  progress[1].classList.remove("active");
  progressLine[0].classList.add("active");
  progressLine[1].classList.remove("active");

});


