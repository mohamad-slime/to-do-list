let jobInput = document.getElementById("jobInput");
let addBtn = document.getElementById("addBtn");

let itemBox = document.getElementsByClassName("items")[0];

addBtn.addEventListener("click", function () {
  let job = jobInput.value;
  console.log(job);

  if (job.trim() !== "" && job.length > 0) {
    let item = document.createElement("div");
    let span = document.createElement("span");
    let opertionsBox = document.createElement("div");
    //   difaine the opertions box
    let deleteBtn = document.createElement("input");
    deleteBtn.type = "button";
    deleteBtn.value = "delete";
    // difaine the delete button
    let editBtn = document.createElement("input");
    editBtn.type = "button";
    editBtn.value = "edit";
    // difaine the edit button
    opertionsBox.classList.add("opertions");
    opertionsBox.appendChild(deleteBtn);
    opertionsBox.appendChild(editBtn);
    //   difaine the opertions box
    span.textContent = job;
    item.appendChild(span);
    item.classList.add("item");

    item.appendChild(opertionsBox);
    itemBox.appendChild(item);
  } else {
    alert("Please enter a job");
  }
});
