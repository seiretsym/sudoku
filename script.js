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
  if (cell.text() === "0") {
    cell.addClass("error")
  }
  if (cell.text() === "1") {
    cell.addClass("one")
  }
  if (cell.text() === "2") {
    cell.addClass("two")
  }
  if (cell.text() === "3") {
    cell.addClass("three")
  }
  if (cell.text() === "4") {
    cell.addClass("four")
  }
  if (cell.text() === "5") {
    cell.addClass("five")
  }
  if (cell.text() === "6") {
    cell.addClass("six")
  }
  if (cell.text() === "7") {
    cell.addClass("seven")
  }
  if (cell.text() === "8") {
    cell.addClass("eight")
  }
  if (cell.text() === "9") {
    cell.addClass("nine")
  }
  return cell;
}

async function makeSudoku() {
  const solution = [
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    4, 5, 6, 7, 8, 9, 1, 2, 3,
    7, 8, 9, 1, 2, 3, 4, 5, 6,
    2, 3, 4, 5, 6, 7, 8, 9, 1,
    5, 6, 7, 8, 9, 1, 2, 3, 4,
    8, 9, 1, 2, 3, 4, 5, 6, 7,
    3, 4, 5, 6, 7, 8, 9, 1, 2,
    6, 7, 8, 9, 1, 2, 3, 4, 5,
    9, 1, 2, 3, 4, 5, 6, 7, 8
  ]
  const template = await shuffleGrid(solution);

  const sudoku = [];

  for (let r = 0; r < 9; r++) {
    let temp = [];
    for (let c = 0; c < 9; c++) {
      temp.push(template[r*9+c]);
    }
    sudoku.push(temp);
  }

  makeGrid(sudoku);
}

async function shuffleGrid(grid) {

  for (let i = 0; i < 42; i++) {
    let n1 = Math.ceil(Math.random() * 9);
    let n2;
    
    do {
      n2 = Math.ceil(Math.random() * 9);
    }
    while (n1 === n2);

    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row * 9 + col] === n1) {
          grid[row * 9 + col] = n2;
        }
        else if (grid[row * 9 + col] === n2) {
          grid[row * 9 + col] = n1;
        }
      }
    }
  }

  for (let c = 0; c < 42; c++) {
    let s1 = Math.floor(Math.random() * 3);
    let s2 = Math.floor(Math.random() * 3);

    for(let row = 0; row < 9; row++) {
      let tmp = grid[row * 9 + (s1 * 3 + c % 3)];
      grid[row * 9 + (s1 * 3 + c % 3)] = grid[row * 9 + (s2 * 3 + c % 3)];
      grid[row * 9 + (s2 * 3 + c % 3)] = tmp;
    }
  }

  for (let s = 0; s < 42; s++) {
    let c1 = Math.floor(Math.random() * 3);
    let c2 = Math.floor(Math.random() * 3);

    for(let row = 0; row < 9; row++) {
      let tmp = grid[row * 9 + (s % 3 * 3 + c1)];
      grid[row * 9 + (s % 3 * 3 + c1)] = grid[row * 9 + (s % 3 * 3 + c2)];
      grid[row * 9 + (s % 3 * 3 + c2)] = tmp;
    }
  }

  for (let s = 0; s < 42; s++) {
    let r1 = Math.floor(Math.random() * 3);
    let r2 = Math.floor(Math.random() * 3);

    for(let col = 0; col < 9; col++)
    {
      let tmp = grid[(s % 3 * 3 + r1) * 9 + col];
      grid[(s % 3 * 3 + r1) * 9 + col] = grid[(s % 3 * 3 + r2) * 9 + col];
      grid[(s % 3 * 3 + r2) * 9 + col] = tmp;
    }
  }

  return grid;
}

makeSudoku();