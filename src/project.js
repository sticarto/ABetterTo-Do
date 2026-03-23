import { ToDoItem } from "./todo";

// This stores to-do lists
class Project {
    #title;
    #description;
    #toDoLists = [];

    constructor(title, description='') {
        this.#title = title;
        this.#description = description;
    }

    addToDoList(toDoList) {
        if (!(toDoList instanceof ToDoItem)) {
            console.error("Error: the parameter must be an instance of the ToDoItem class");
            return;
        }

        this.#toDoLists.push(toDoList);
    }

    removeToDoList(toDoList) {
        // For some reason, when I put an ID on the TODO object, it stops it from displaying
        // so I resorted to using the title instead... 
        const toDoListIndex = this.#toDoLists.findIndex(task => task.title === toDoList.title);
        if (toDoListIndex !== -1) {
            this.#toDoLists.splice(toDoListIndex, 1);
        }
    }


    get lists() {
        return this.#toDoLists;
    }

    get title() {
        return this.#title;
    }

    get description() {
        return this.#description
    }
    
}

export {Project};