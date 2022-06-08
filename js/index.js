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
    const delBtn = document.createElement("button");
    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = "✔️";
    delBtn.innerHTML = " ❌ ";
    newLi.appendChild(doneBtn);
    
    newLi.appendChild(delBtn);
    ul.appendChild(newLi);
    doneBtn.addEventListener("click", () => newLi.classList.add("done"));
    

    delBtn.addEventListener("click", () => newLi.remove());
    document.querySelector("#todo").value = "";
    
  } else {
    
  }
};

document.querySelector("form").addEventListener("submit", addToList);
$(document).on("click", ".check", function() {

  $(this).toggleClass("selected");

});

// When enter key is pressed append a new item to the list


