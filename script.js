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
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]

  // first let's pick a random box in the template
  // const rng = Math.floor(Math.random() * 9);
  const rng = 0;

  // then we set up the box with 1-9 and shuffle it around
  let box = [1,2,3,4,5,6,7,8,9];
  box = shuffle(box);

  // setup the first box in the grid
  template[rng] = box;

  // let's set up our rows and cols to make placement easier
  const rowGrid = convertGrid(template, "row");
  const colGrid = convertGrid(template, "col");

  // start setting up sudoku grid
  for (let i = 0; i < template[rng].length; i++) {
    let row = 0;
    let col = 0;
    if (rng < 3) {
      if (rng % 3 === 0) {
        if (i < 3) {
          row = 0;
          rows = insertCellByRow(template[rng][i], row, rowGrid);
        } else if (i < 6) {
          row = 1;
          // rows = insertCellByRow(template[rng][i], row, rowGrid);
        } else {
          row = 2;
          // rows = insertCellByRow(template[rng][i], row, rowGrid);
        }
        // console.log("rows 1-3 & cols 1-3")
      } else if (rng % 3 === 1) {
        // console.log("rows 1-3 & cols 4-6")
      } else {
        // console.log("rows 1-3 & cols 7-9")
      }
    } else if (rng < 6) {
      if (rng % 3 === 0) {
        // console.log("rows 4-6 & cols 1-3")
      } else if (rng % 3 === 1) {
        // console.log("rows 4-6 & cols 4-6")
      } else {
        // console.log("rows 4-6 & cols 7-9")
      }
    } else {
      if (rng % 3 === 0) {
        // console.log("rows 7-9 & cols 1-3")
      } else if (rng % 3 === 1) {
        // console.log("rows 7-9 & cols 4-6")
      } else {
        // console.log("rows 7-9 & cols 7-9")
      }
    }

  }

  template = convertGrid(rows, "row")
  console.log(template);
  console.log(Array.from(template[0], (data, i) => i < 3))
  return template;
}

function insertCellByRow(num, row, grid) {
  if (row < 3) {
    if (row % 3 === 0) {
      console.log("?");
      while (grid[row+1].indexOf(num) === -1) {
        const rng = Math.floor(Math.random() * 3) + 3;
        if (grid[row+1][rng] === 0) {
          grid[row+1][rng] = num;
        }
      }
      while (grid[row+2].indexOf(num) === -1) {
        const rng = Math.floor(Math.random() * 3) + 6;
        if (grid[row+2][rng] === 0) {
          grid[row+2][rng] = num;
        }
      }
    } else if (row % 3 === 1) {
      console.log("?");
      while (grid[row-1].indexOf(num) === -1) {
        const rng = Math.floor(Math.random() * 3) + 3;
        if (grid[row-1][rng] === 0) {
          grid[row-1][rng] = num;
        } else {
          grid[roq-1][rng] = 0;
        }
      }
      while (grid[row+1].indexOf(num) === -1) {
        const rng = Math.floor(Math.random() * 3) + 6;
        if (grid[row+1][rng] === 0) {
          grid[row+1][rng] = num;
        }
      }
    } else {
      while (grid[row-1].indexOf(num) === -1) {
        const rng = Math.floor(Math.random() * 3) + 3;
        if (grid[row-1][rng] === 0) {
          grid[row-1][rng] = num;
        }
      }
      while (grid[row-2].indexOf(num) === -1) {
        const rng = Math.floor(Math.random() * 3) + 6;
        if (grid[row-2][rng] === 0) {
          grid[row-2][rng] = num;
        }
      }
    }
  } else if (row < 6) {
        if (row % 3 === 0) {

    } else if ( row % 3 === 1) {
      
    } else {
      
    }
  } else {
    if (row % 3 === 0) {

    } else if ( row % 3 === 1) {
      
    } else {
      
    }
  }
  return grid;
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

function convertGrid(grid, type) {
  let temp = [[],[],[],[],[],[],[],[],[]];

  switch(type) {
    case "row":
      grid.forEach((box, bIndex) => {
        box.forEach((cell, cIndex) => {
          if (Math.floor(bIndex / 3) === 0) {
            if (cIndex < 3) {
              temp[0].push(cell);
            } else if (cIndex < 6) {
              temp[1].push(cell);
            } else {
              temp[2].push(cell);
            }
          } else if (Math.floor(bIndex / 3) === 1) {
            if (cIndex < 3) {
              temp[3].push(cell);
            } else if (cIndex < 6) {
              temp[4].push(cell);
            } else {
              temp[5].push(cell);
            }
          } else {
            if (cIndex < 3) {
              temp[6].push(cell);
            } else if (cIndex < 6) {
              temp[7].push(cell);
            } else {
              temp[8].push(cell);
            }
          }
        })
      })
      break;
    case "col":
      grid.forEach((box, bIndex) => {
        box.forEach((cell, cIndex) => {
          if (bIndex % 3 === 0) {
            if (cIndex % 3 === 0) {
              temp[0].push(cell);
            } else if (cIndex % 3 === 1) {
              temp[1].push(cell);
            } else {
              temp[2].push(cell);
            }
          } else if (bIndex % 3 === 1) {
            if (cIndex % 3 === 0) {
              temp[3].push(cell);
            } else if (cIndex % 3 === 1) {
              temp[4].push(cell);
            } else {
              temp[5].push(cell);
            }
          } else {
            if (cIndex % 3 === 0) {
              temp[6].push(cell);
            } else if (cIndex % 3 === 1) {
              temp[7].push(cell);
            } else {
              temp[8].push(cell);
            }
          }
        })
      })
      break;
    default:
      temp = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]
      grid.forEach((col, coIndex) => {
        for (let i = 0; i < 9; i++) {
          if (coIndex < 3) {
            if (i < 3) {
              temp[0][(i%3*3) + (coIndex % 3)] = col[i];
            } else if (i < 6) {
              temp[3][(i%3*3) + (coIndex % 3)] = col[i];
            } else {
              temp[6][(i%3*3) + (coIndex % 3)] = col[i];
            }
          } else if (coIndex < 6) {
            if (i < 3) {
              temp[1][(i%3*3) + (coIndex % 3)] = col[i];
            } else if (i < 6) {
              temp[4][(i%3*3) + (coIndex % 3)] = col[i];
            } else {
              temp[7][(i%3*3) + (coIndex % 3)] = col[i];
            }
          } else {
            if (i < 3) {
              temp[2][(i%3*3) + (coIndex % 3)] = col[i];
            } else if (i < 6) {
              temp[5][(i%3*3) + (coIndex % 3)] = col[i];
            } else {
              temp[8][(i%3*3) + (coIndex % 3)] = col[i];
            }
          }
        }
      })
      break;
  }
  return temp;
}

const sudoku = makeSudoku();
makeGrid(sudoku);