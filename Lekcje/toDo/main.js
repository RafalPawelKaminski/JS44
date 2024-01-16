import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const inputNameTask = document.querySelector("#taskNameInput");
const addTaskBtn = document.querySelector("#btnAddTask");
const taskList = document.querySelector("#list");

let taskArray = [];

const addTaskToArr = () => {
  let taskOb = {
    id: uuidv4(),
    taskName: inputNameTask.value,
    taskDone: false,
  };
  taskArray.push(taskOb);
  renderTaskList(taskArray);
  console.log(taskArray);
  inputNameTask.value = "";
};

const renderTaskList = (arr) => {
  taskList.innerHTML = "";
  arr.forEach((element) => {
    const taskListItem = document.createElement("li");
    taskListItem.id = element.id;
    taskListItem.classList.add("list-item");
    const taskItemName = document.createElement("span");
    taskItemName.innerText = element.taskName;
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
    editBtn.addEventListener("click", () => {
      let editInput = document.createElement("input");
      editInput.placeholder = element.taskName;
      taskListItem.innerHTML = "";
      taskListItem.appendChild(editInput);
      taskListItem.appendChild(optionDiv);
      saveBtn.addEventListener("click", () => {
        let newEleName = editInput.value;
        let elementToChange = taskArray.find(
          (ele) => ele.id === taskListItem.id
        );
        elementToChange.taskName = newEleName;
        renderTaskList(taskArray);
      });
    });
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      taskArray = taskArray.filter((item) => item.id !== taskListItem.id);
      renderTaskList(taskArray);
    });
    saveBtn.classList.add("save-btn");
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.addEventListener("click", () => {
      renderTaskList(taskArray);
    });
    editBtn.innerText = "Edytuj";
    deleteBtn.innerText = "Usuń";
    saveBtn.innerText = "Zapisz";
    cancelBtn.innerText = "Anuluj";
    checkboxTask.addEventListener("click", () => {
      let elementToChange = taskArray.find((ele) => ele.id === taskListItem.id);
      if (checkboxTask.checked === false) {
        elementToChange.taskDone = false;
      } else if (checkboxTask.checked === true) {
        elementToChange.taskDone = true;
      }
      console.log(taskArray);
    });
    if (element.taskDone === true) {
      checkboxTask.checked = true;
    }
    optionDiv.appendChild(editBtn);
    optionDiv.appendChild(deleteBtn);
    optionDiv.appendChild(saveBtn);
    optionDiv.appendChild(cancelBtn);
    taskListItem.appendChild(optionDiv);

    taskList.appendChild(taskListItem);
  });
};

addTaskBtn.addEventListener("click", () => {
  addTaskToArr();
});

inputNameTask.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addTaskToArr();
  }
});
