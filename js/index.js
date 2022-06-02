
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
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    newLi.appendChild(delBtn);
    ul.appendChild(newLi);
    delBtn.addEventListener("click", () => newLi.remove());
    document.querySelector("#todo").value = "";
  } else {
    
  }
};

document.querySelector("form").addEventListener("submit", addToList);

