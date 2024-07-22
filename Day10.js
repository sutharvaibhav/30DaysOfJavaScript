let targetPara = document.getElementById("targetPara");
let targetInput = document.getElementById("targetInput");
let targetBtn = document.getElementById("targetBtn");
let targetSelect = document.getElementById("cars");
let list = document.getElementById("list");
let listItems = document.getElementsByClassName("list-item");
let myForm = document.getElementById("myForm");
let isKeyUpEvent = false;

// Task 1
// targetBtn.addEventListener("click", function(){
//     targetPara.textContent="Button clicked!";
// });

// Task 2
// targetBtn.addEventListener("dblclick", function () {
//   targetPara.textContent = "Double clicked!";
// });

// Task 3
// targetBtn.addEventListener("mouseover",function(){
//     targetPara.style.backgroundColor = "red";
// });

// Task 4
// targetBtn.addEventListener("mouseout",function(){
//     targetPara.style.backgroundColor = "white";
// });

// Task 5
// targetInput.addEventListener("keyup", function () {
//     targetPara.textContent = targetInput.value;
// });

// Task 6
// targetInput.addEventListener("keydown", function () {
//     targetPara.textContent = targetInput.value;
// });

// Task 7
// myForm.addEventListener("submit", function(){
//     event.preventDefault();
//     targetPara.textContent = targetInput.value;
// });

// Task 8
// targetSelect.addEventListener("change", function(){
//     targetPara.textContent = targetSelect.value;
// });

// Task 9
// for (let i = 0; i <= listItems.length+1; i++) {
//   listItems[i].addEventListener("click", function () {
//     alert(`item ${i+1}`);
//   });
// }

// Task 10
document.addEventListener("DOMContentLoaded", loadSavedData);

myForm.addEventListener("submit", function () {
  event.preventDefault();
  let li = document.createElement("li");
  li.textContent = targetInput.value;
  targetInput.value = "";
  li.className = "list-item";
  list.appendChild(li);
  saveDataLocally();
});

function saveDataLocally() {
  const items = Array.from(list.children).map((item) => item.textContent);
  localStorage.setItem("savedItems", JSON.stringify(items));
}

function loadSavedData() {
  const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
  list.innerHTML = "";
  savedItems.forEach((itemText) => {
    const li = document.createElement("li");
    li.textContent = itemText;
    li.className = "list-item";
    list.appendChild(li);
  });
}
