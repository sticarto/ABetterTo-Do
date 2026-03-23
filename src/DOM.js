// Handles the UI

import { Project } from "./project";
import { ToDoItem } from "./todo";

const DOM = (function () {
    const sidebar = document.querySelector(".sidebar");
    const mainpage = document.querySelector(".main-page");
    let currentProject; // just to let the DOM know the active project


    const displayToDo = (task) => {
        if (!(task instanceof ToDoItem)) {
            console.error("Error: the parameter must be an instance of the ToDoItem class");
            return;
        }

        const item = document.createElement('div');
        item.classList.add("task");
        item.textContent = task.info;

        const hiddenInfo = document.createElement('div');
        hiddenInfo.classList.add("hide");
        hiddenInfo.style.padding = "10px";
        hiddenInfo.textContent = task.description;

        const removeButton = document.createElement('button');
        removeButton.classList.add("remove-todo-button");
        removeButton.textContent = "X";

        removeButton.addEventListener('click', () => {
            currentProject.removeToDoList(task);
            displayProject(currentProject);
        })

        item.addEventListener('click', () => {
            hiddenInfo.classList.toggle("hide");
        })
        
        item.appendChild(removeButton);
        item.appendChild(hiddenInfo);
        mainpage.appendChild(item);
    }
    

    const addProjectToSidebar = (project) => {
        const projectTitle = document.createElement('button');

        projectTitle.textContent = project.title;

        projectTitle.addEventListener('click', () => displayProject(project));

        sidebar.appendChild(projectTitle);

    }


    const displayProject = (project) => {

        while (mainpage.firstChild) {
            mainpage.removeChild(mainpage.firstChild);
        }
        
        const projectTitle = document.createElement('h1');
        const projectDescription = document.createElement('p');

        projectDescription.textContent = project.description;
        projectTitle.textContent = project.title;

        mainpage.appendChild(projectTitle);
        mainpage.appendChild(projectDescription);

        // iterate through the to do lists the project has stored and display them in order
        project.lists.forEach(todo => {
            displayToDo(todo);
        });

        currentProject = project; // this allows access for adding to-dos to current page

    }


    const projectModal = () => {
        const addProjectButton = document.querySelector('#create-project-button');
        const dialog = document.querySelector('#dialog-add-project');
        const btnConfirm = dialog.querySelector('#button-confirm-project');

        addProjectButton.addEventListener('click', () => dialog.showModal());

        dialog.addEventListener('close', (e) => {
            document.querySelector('#dialog-add-project > form').reset();
        })

        btnConfirm.addEventListener('click', (event) => {
            event.preventDefault();

            const project_title = dialog.querySelector('#title').value;
            const project_description = dialog.querySelector('#description').value;

            // only the project title is required
            // Should this be moved elsewhere? It might not be the DOM's responsibility
            if (project_title) {
                const newProject = new Project(project_title, project_description);

                addProjectToSidebar(newProject);
            }

            dialog.close();
        })

    }


    const toDoModal = () => {
        const addToDoButton = document.querySelector('#create-todo-button');
        const dialog = document.querySelector('#dialog-add-todo');
        const btnConfirm = document.querySelector('#button-confirm-todo')

        addToDoButton.addEventListener('click', () => dialog.showModal());

        dialog.addEventListener('close', (e) => {
            document.querySelector('#dialog-add-todo > form').reset();
        })

        btnConfirm.addEventListener('click', (event) => {
            event.preventDefault();

            const todo_title = dialog.querySelector('#todo').value;
            const todo_description = dialog.querySelector('#todo-desc').value;
            const todo_dueDate = dialog.querySelector('#due-date').value;
            const todo_priority = dialog.querySelector('#priority').value;
            
            
            if (todo_title) {
                const newToDo = new ToDoItem(todo_title, todo_description, todo_dueDate, todo_priority);

                currentProject.addToDoList(newToDo);
                displayProject(currentProject);
            }

            dialog.close();
        })
    }

    return {displayProject, addProjectToSidebar, projectModal, toDoModal}

})();

export {DOM};