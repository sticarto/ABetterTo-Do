import "./styles.css";
import { ToDoItem } from "./todo";
import { DOM } from "./DOM";
import { Project } from "./project";

const addProjectButton = document.querySelector('#create-project-button');
const dialog = document.querySelector('#dialog-add-project');
const btnConfirm = dialog.querySelector('#button-confirm');

addProjectButton.addEventListener('click', () => dialog.showModal());

dialog.addEventListener('close', (e) => {
    document.querySelector('#dialog-add-project > form').reset();
})

btnConfirm.addEventListener('click', (event) => {
    event.preventDefault();

    const project_title = dialog.querySelector('#title').value;
    const project_description = dialog.querySelector('#description').value;

    // only the project title is required
    if (project_title) {
        const newProject = new Project(project_title, project_description);

        DOM.addProjectToSidebar(newProject);
    }

    dialog.close();
})



const defaultToDoItem = new ToDoItem('Take out the trash', "Write something here", "due date", "high");
const secondToDoItem = new ToDoItem('Walk the dog', "Write something here", "due date", "medium");
const defaultProject = new Project('First Project', 'Add a to-do item to get started!');
const secondProject = new Project('Second Project');

defaultProject.addToDoList(defaultToDoItem);
defaultProject.addToDoList(secondToDoItem);
console.log(defaultProject.lists)

DOM.displayProject(defaultProject);
DOM.addProjectToSidebar(defaultProject);
DOM.addProjectToSidebar(secondProject);