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

    // remove to do lists


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