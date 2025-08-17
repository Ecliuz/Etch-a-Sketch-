function createGrid(size) {
    const container = document.getElementById("grid-container");

    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        let newDiv = document.createElement("div");

        let squareSize = 100 / size;
        newDiv.style.width = squareSize + "%";
        newDiv.style.height = squareSize + "%";

        newDiv.style.border = "1px solid black";
        newDiv.style.boxSizing = "border-box";

        newDiv.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#D7FFD1';
        });

        const resetButton = document.getElementById("reset-grid")
        resetButton.addEventListener('click', function() {
            newDiv.style.backgroundColor = '#F9D1FF';
        });

        container.appendChild(newDiv);
    }
}

let newGrid = document.getElementById("new-grid");

newGrid.addEventListener('click', function() {
    let userGrid = prompt("How many squares per side do you want? ");
    parseInt(userGrid);

    if (userGrid < 100) {
        createGrid(userGrid);
    } else {
        alert("You have exceed the limit!")
    }
});

createGrid(8);
