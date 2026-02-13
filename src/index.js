import "./styles.css";
import { ToDoItem } from "./todo";
import { DOM } from "./DOM";
import { Project } from "./project";

const defaultToDoItem = new ToDoItem('Take out the trash', "Write something here", "due date", "high");
const defaultProject = new Project('First Project');
const secondProject = new Project('Second Project');

defaultProject.addToDoList(defaultToDoItem);
console.log(defaultProject.lists)

DOM.displayTask(defaultToDoItem);
DOM.addProjectToSidebar(defaultProject);
DOM.addProjectToSidebar(secondProject);