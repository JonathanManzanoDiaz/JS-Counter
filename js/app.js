let number = document.getElementById("number");
let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");

let count = 0;

decreaseBtn.onclick = () => {
  count--;
  return (number.innerHTML = `${count}`);
};

resetBtn.onclick = () => {
  count = 0;
  return (number.innerHTML = `${count}`);
};

increaseBtn.onclick = () => {
  count++;
  return (number.innerHTML = `${count}`);
};
