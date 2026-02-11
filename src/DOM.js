// Handles the UI

const DOM = (function () {
    const sidebar = document.querySelector(".sidebar");
    const mainpage = document.querySelector(".main-page");

    // Display to do object's information
    const displayTask = (task) => {
        const item = document.createElement('p');
        item.textContent = task.info;
        mainpage.appendChild(item);
    }
    

    return {displayTask}

})();

export {DOM};