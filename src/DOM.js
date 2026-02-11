// Handles the UI

import { ToDoItem } from "./todo";

const DOM = (function () {
    const sidebar = document.querySelector(".sidebar");
    const mainpage = document.querySelector(".main-page");

    // Display to-do object's information
    const displayTask = (task) => {
        if (!(task instanceof ToDoItem)) {
            console.error("Error: the parameter must be an instance of the ToDoItem class");
            return;
        }

        const item = document.createElement('p');
        item.textContent = task.info;
        mainpage.appendChild(item);
    }
    

    return {displayTask}

})();

export {DOM};