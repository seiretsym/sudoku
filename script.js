function makeGrid(sudoku) {
  const grid = $("<div>").addClass("grid");
  const col = makeCol();
  sudoku.forEach(array => {
    const row = makeRow();
    for (let i = 0; i < array.length; i++) {
      const cell = makeCell(array[i]);
      row.append(cell);
    }
    col.append(row);
  })

  grid.append(col);
  $("#content").append(grid);
}

function getBox(row, col, grid) {
  const box = [];
  // box 1
  if (row < 3 && col < 3) {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        box.push(grid[r][c]);
      }
    }
  } else if (row > 2 && row < 6 && col < 3) { // box 2
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 3; c++) {
        box.push(grid[r][c]);
      }
    }
  } else if (row > 5 && col < 3) { // box 3
    for (let r = 6; r < 9; r++) {
      for (let c = 0; c < 3; c++) {
        box.push(grid[r][c]);
      }
    }
  } else if (row < 3 && col > 2 && col < 6) { // box 4
    for (let r = 0; r < 3; r++) {
      for (let c = 3; c < 6; c++) {
        box.push(grid[r][c]);
      }
    }
  } else if (row > 2 && row < 6 && col > 2 && col < 6) { // box 5
    for (let r = 3; r < 6; r++) {
      for (let c = 3; c < 6; c++) {
        box.push(grid[r][c]);
      }
    }
  } else if (row > 5 && col > 2 && col < 6) { // box 6
    for (let r = 6; r < 9; r++) {
      for (let c = 3; c < 6; c++) {
        box.push(grid[r][c]);
      }
    }
  } else if (row < 3 && col > 5) { // box 7
    for (let r = 0; r < 3; r++) {
      for (let c = 6; c < 9; c++) {
        box.push(grid[r][c]);
      }
    }
  } else if (row > 2 && row < 6 && col > 5) { // box 8 
    for (let r = 3; r < 6; r++) {
      for (let c = 6; c < 9; c++) {
        box.push(grid[r][c]);
      }
    }
  } else { // box 9
    for (let r = 6; r < 9; r++) {
      for (let c = 6; c < 9; c++) {
        box.push(grid[r][c]);
      }
    }
  }
  return box;
}

function makeRow() {
  const row = $("<row>").addClass("row");
  return row;
}

function makeCol() {
  const col = $("<div>").addClass("col");
  return col;
}

function makeCell(num) {
  const cell = $("<div>").addClass("cell").text(num);
  return cell;
}

function checkGrid(grid) {
  for (let rows = 0; rows < 9; rows++) {
    for (let cols = 0; cols < 9; cols++) {
      if (grid[rows][cols] === 0) {
        return false
      }
    }
  }
  return true;
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]

  // total cells = 81 so loop 81 times
  for (let cell = 0; cell < 81; cell++) {
    // determine row and col
    const row = Math.floor(i / 9);
    const col = i % 9;

    if (template[row][col] === 0) {
      // loop through each number used in sudoku 1-9
      for (let num = 1; num < 10; num++) {
        // check if number has been used in row
        if (template[row].indexOf(num) > -1) {
          continue;
        } else {
          // check if number has been used in col
          let checkCol = false;
          for (let c = 0; c < 9; c++) {
            if (template[row][c] === num) {
              checkCol = true;
              break;
            } else {
              // check the box we're working on
            }
          }
        }
      }
    }
  }

  console.log(template);
  return template;
}

function shuffle(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      let temp = array[i];
      let rng = Math.floor(Math.random() * array.length);
      array[i] = array[rng];
      array[rng] = temp;
    }
  }
  return array;
}

const sudoku = makeSudoku();
makeGrid(sudoku);