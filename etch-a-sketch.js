const getSquares = function() {
  row = String(prompt("Enter the number of rows"));
  column = String(prompt("Enter the number of columns"));
} 

const buildGrid = function() {
  const grid = document.querySelector('#container');
  for (let i = 0; i < row; i++) {
    const row = document.createElement('div');
    row.setAttribute('id', 'row');
    grid.appendChild(row);
    for (let j = 0; j < column; j++) {
      const column = document.createElement('div');
      column.setAttribute('id', 'column');
      row.appendChild(column);
      column.addEventListener('mouseover', () => {
        column.setAttribute('style', 'background-color: black;');
      });
    }
  }
}

const resetGrid = function() {
  location.reload();
}

let row = 0;
let column = 0;

const gridBtn = document.querySelector('#gridbtn');
gridBtn.addEventListener('click', () => {
  getSquares();
  buildGrid();
});

const resetBtn = document.querySelector('#resetbtn');
resetBtn.addEventListener('click', () => {
  resetGrid();
});