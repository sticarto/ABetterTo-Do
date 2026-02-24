// Handles the UI

import { ToDoItem } from "./todo";

const DOM = (function () {
    const sidebar = document.querySelector(".sidebar");
    const mainpage = document.querySelector(".main-page");


    const displayToDo = (task) => {
        if (!(task instanceof ToDoItem)) {
            console.error("Error: the parameter must be an instance of the ToDoItem class");
            return;
        }

        const item = document.createElement('p');
        item.textContent = task.info;
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

    }


    return {displayProject, addProjectToSidebar}

})();

export {DOM};