import "./styles.css";
import { ToDoItem } from "./todo";
import { DOM } from "./DOM";
import { Project } from "./project";


// const addToDoButton = document.querySelector('#create-todo-button');


// addToDoButton.addEventListener('click', DOM.toDoModal);

DOM.projectModal();


// Examples stuff ----------------
const defaultToDoItem = new ToDoItem('Take out the trash', "Write something here", "due date", "high");
const secondToDoItem = new ToDoItem('Walk the dog', "Write something here", "due date", "medium");
const defaultProject = new Project('First Project', 'Add a to-do item to get started!');


defaultProject.addToDoList(defaultToDoItem);
defaultProject.addToDoList(secondToDoItem);
console.log(defaultProject.lists)

DOM.displayProject(defaultProject);
DOM.addProjectToSidebar(defaultProject);
