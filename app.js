let jobInput = document.querySelector("#jobInput");
let addBtn = document.querySelector("#addBtn");
let itemBox = document.querySelector(".items");
const jobs = [];

function addItemElement(job) {
  // const job_id = job.id;
  let item = document.createElement("div");
  item.classList.add("item");
  item.setAttribute("job-item-id", job.id);
  let span = document.createElement("span");
  // console.log( job);
  span.textContent = job.job;
  item.appendChild(span);

  let opertionsBox = document.createElement("div");
  opertionsBox.classList.add("opertions");
  //
  let deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "delete";
  deleteBtn.addEventListener("click", function (e) {
    let item = e.target.parentElement.parentElement;
    if (item.getAttribute("job-item-id") == job.id) {
      itemBox.removeChild(item);
    }
  });
  // edit button
  let editBtn = document.createElement("input");
  editBtn.type = "button";
  editBtn.value = "edit";

  editBtn.addEventListener("click", function (e) {
    let item = e.target.parentElement.parentElement;
    if (opertionsBox.querySelector(".saveBtn")) return;
    if (item.getAttribute("job-item-id") == job.id) {
      jobInput.value = job.job;
      addBtn.style.display = "none";
      // create input for edit
      let saveBtn = document.createElement("input");
      saveBtn.classList.add("saveBtn");
      saveBtn.type = "button";
      saveBtn.value = "save";
      opertionsBox.appendChild(saveBtn);

      // remove edit button
      saveBtn.addEventListener("click", function () {
        const newJob = jobInput.value;
        if (newJob.trim() === "" || newJob.length === 0) {
          alert("Please enter a job");
          return;
        }
        job.job = newJob;
        span.textContent = newJob;
        addBtn.style.display = "block";
        // remove save button
        opertionsBox.removeChild(saveBtn);
        jobInput.value = "";
      });
    }
  });

  // add buttons to opertionsBox
  opertionsBox.append(deleteBtn, editBtn);
  item.appendChild(opertionsBox);
  itemBox.appendChild(item);
}
let renderId = () => {
  return (
    Math.random().toString(36).substring(6, 9) +
    "_" +
    Date.now().toString().substring(10, 15)
  );
};
addBtn.addEventListener("click", function () {
  let job = jobInput.value;

  if (job.trim() !== "" && job.length > 0) {
    if (jobs.some((j) => j.job === job)) {
      alert("This job already exists.");
      return;
    }
    jobs.push({ job: job, completed: false, id: renderId() });
    addItemElement(jobs[jobs.length - 1]);
    jobInput.value = "";
  } else {
    alert("Please enter a job");
  }
});
