// Handles the UI
// Make it into an IEFF? I only need one of these.
const Display = (function () {
    const sidebar = document.querySelector(".sidebar");
    const mainpage = document.querySelector(".main-page");

    // this is just an example for learning | It works.
    const addText = (text) => {
        const newDiv = document.createElement('div');
        newDiv.textContent = text;
        sidebar.appendChild(newDiv);
    }

    return {addText}

})();

export {Display};