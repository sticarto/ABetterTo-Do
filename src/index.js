import "./styles.css";
import { ToDoItem } from "./todo";
import { DOM } from "./DOM";
import { Project } from "./project";

const defaultToDoItem = new ToDoItem('Take out the trash', "Write something here", "due date", "high");
const secondToDoItem = new ToDoItem('Walk the dog', "Write something here", "due date", "medium");
const defaultProject = new Project('First Project');
const secondProject = new Project('Second Project');

defaultProject.addToDoList(defaultToDoItem);
defaultProject.addToDoList(secondToDoItem);
console.log(defaultProject.lists)

DOM.displayProject(defaultProject);
DOM.addProjectToSidebar(defaultProject);
DOM.addProjectToSidebar(secondProject);