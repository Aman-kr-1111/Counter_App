const counter = document.querySelector("#counter");
const minusBtn = document.querySelector("[minusBtn]");
const plusBtn = document.querySelector("[plusBtn]");
const resetBtn = document.querySelector("[resetBtn]");
const changeBy = document.querySelector("#changeBy");

plusBtn.addEventListener("click", () => {
  const countVal = parseInt(counter.innerText);
  const changeVal = parseInt(changeBy.value);
  counter.innerText = isNaN(changeVal) ? countVal + 1 : countVal + changeVal;
});

minusBtn.addEventListener("click", () => {
  const countVal = parseInt(counter.innerText);
  const changeVal = parseInt(changeBy.value);

  counter.innerText = isNaN(changeVal) ? countVal - 1 : countVal - changeVal;
});

resetBtn.addEventListener("click", () => {
  counter.innerText = 0;
  changeBy.value="1"
});
