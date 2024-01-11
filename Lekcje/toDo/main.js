const inputNameTask = document.querySelector("#taskNameInput");
const addTaskBtn = document.querySelector("#btnAddTask");
const taskList = document.querySelector("#list");

const addTask = () => {
  let taskName = inputNameTask.value;
  const taskListItem = document.createElement("li");
  taskListItem.classList.add("list-item");
  const taskItemName = document.createElement("span");
  taskItemName.innerText = taskName;
  taskListItem.appendChild(taskItemName);
  const checkboxTask = document.createElement("input");
  checkboxTask.type = "checkbox";
  taskListItem.appendChild(checkboxTask);
  const optionDiv = document.createElement("div");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const saveBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  deleteBtn.classList.add("delete-btn");
  saveBtn.classList.add("save-btn");
  cancelBtn.classList.add("cancel-btn");
  editBtn.innerText = "Edytuj";
  deleteBtn.innerText = "Usuń";
  saveBtn.innerText = "Zapisz";
  cancelBtn.innerText = "Anuluj";
  optionDiv.appendChild(editBtn);
  optionDiv.appendChild(deleteBtn);
  optionDiv.appendChild(saveBtn);
  optionDiv.appendChild(cancelBtn);
  taskListItem.appendChild(optionDiv);

  taskList.appendChild(taskListItem);

  inputNameTask.value = "";
};

addTaskBtn.addEventListener("click", () => {
  addTask();
});
