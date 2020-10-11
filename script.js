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
  const template = [
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

  // first let's pick a random box in the template
  const rng = Math.floor(Math.random() * 9);

  // then we set up the box with 1-9 and shuffle it around
  let box = [1,2,3,4,5,6,7,8,9];
  box = shuffle(box);

  // setup the first box in the grid
  template[rng] = box;

  // let's set up our rows and cols to make placement easier
  const rows = setRows(template);
  const cols = setCols(template);

  console.log("Rows", rows);
  console.log("Cols", cols);

  // 

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

function setRows(array) {
  const rows = [[], [], [], [], [], [], [], [], []];
  array.forEach((box, bIndex) => {
    box.forEach((cell, cIndex) => {
      if (Math.floor(bIndex / 3) === 0) {
        if (cIndex < 3) {
          rows[0].push(cell);
        } else if (cIndex < 6) {
          rows[1].push(cell);
        } else {
          rows[2].push(cell);
        }
      } else if (Math.floor(bIndex / 3) === 1) {
        if (cIndex < 3) {
          rows[3].push(cell);
        } else if (cIndex < 6) {
          rows[4].push(cell);
        } else {
          rows[5].push(cell);
        }
      } else {
        if (cIndex < 3) {
          rows[6].push(cell);
        } else if (cIndex < 6) {
          rows[7].push(cell);
        } else {
          rows[8].push(cell);
        }
      }
    })
  })
  return rows;
}

function setCols(array) {
  const cols = [[],[],[],[],[],[],[],[],[]];
  array.forEach((box, bIndex) => {
    box.forEach((cell, cIndex) => {
      if (bIndex % 3 === 0) {
        if (cIndex % 3 === 0) {
          cols[0].push(cell);
        } else if (cIndex % 3 === 1) {
          cols[1].push(cell);
        } else {
          cols[2].push(cell);
        }
      } else if (bIndex % 3 === 1) {
        if (cIndex % 3 === 0) {
          cols[3].push(cell);
        } else if (cIndex % 3 === 1) {
          cols[4].push(cell);
        } else {
          cols[5].push(cell);
        }
      } else {
        if (cIndex % 3 === 0) {
          cols[6].push(cell);
        } else if (cIndex % 3 === 1) {
          cols[7].push(cell);
        } else {
          cols[8].push(cell);
        }
      }
    })
  })
  return cols;
}

const sudoku = makeSudoku();
makeGrid(sudoku);