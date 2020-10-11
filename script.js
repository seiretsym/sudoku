const sudoku = [
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
]


function makeGrid(sudoku) {
  const grid = $("<div>").addClass("grid");
  const gridCol1 = makeCol();
  const gridCol2 = makeCol();
  const gridCol3 = makeCol();

  sudoku.forEach((array, index) => {
    const box = makeBox();
    const boxCol1 = makeCol();
    const boxCol2 = makeCol();
    const boxCol3 = makeCol();
    for (let i = 0; i < 9; i++) {
      const cell = makeCell(array[i]);
      if (i % 3 === 0) {
        boxCol1.append(cell);
      } else if (i % 3 === 1) {
        boxCol2.append(cell);
      } else {
        boxCol3.append(cell);
      }
    }
    box.append(boxCol1, boxCol2, boxCol3)
    if (index % 3 === 0) {
      gridCol1.append(box);
    } else if (index % 3 === 1) {
      gridCol2.append(box);
    } else {
      gridCol3.append(box);
    }
  })

  grid.append(gridCol1, gridCol2, gridCol3)
  $("#content").append(grid);
}

function makeBox() {
  const box = $("<div>").addClass("box");
  return box;
}

function makeCol() {
  const col = $("<div>").addClass("col");
  return col;
}

function makeCell(num) {
  const cell = $("<div>").addClass("cell").text(num);
  return cell;
}

function makeSudoku() {
  let template = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]

  // first let's find 
}


makeGrid(sudoku);