

const arr = [];
const ul = document.querySelector("ol");
const addToList = (e) => {
  e.preventDefault();
  console.log(e);
  let todo = document.querySelector("#todo").value;
  console.log(todo);
  if (!todo == "") {
    let newLi = document.createElement("li");
    let text = document.createTextNode(todo);
    newLi.appendChild(text);
    newLi.style.backgroundColor = colorGen();
    
   // const doneBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    //doneBtn.innerHTML = "✔️";
    delBtn.innerHTML = "❌";
    //newLi.appendChild(doneBtn);
    newLi.appendChild(delBtn);
    ul.appendChild(newLi);
    delBtn.addEventListener("click", () => newLi.remove());
    //doneBtn.addEventListener("click", () => newLi.classList.add("done"));
    document.querySelector("#todo").value = "";
  } else {
    
  }
};
const colorGen = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 9; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }
  return result;
};
document.querySelector("form").addEventListener("submit", addToList);

