/**
 * Check Cell Is Blocked
 *
 * Check if cell is blocked
 *
 * @param {string} cell
 *
 * @returns {boolean} Cell is blocked
 */
function checkCellIsBlocked(cell) {
  // blocked cells
  const blockedCells = ['e', 'p', 'w'];

  return blockedCells.includes(cell);
}

/**
 * Check Is Adjacent Cell
 *
 * Check if two cells (a and b) is adjacents
 *
 * @param {Position} aCellPosition
 * @param {Position} bCellPosition
 *
 * @returns {boolean} Cells is adjacents
 */
function checkIsAdjacentCell(aCellPosition, bCellPosition) {
  // getting (a) cell row and cell
  const { row: aCellRow, column: aCellColumn } = aCellPosition;

  // getting (b) cell row and cell
  const { row: bCellRow, column: bCellColumn } = bCellPosition;

  // is row adjacent
  const isRowAdjacent =
    (aCellRow === bCellRow + 1 || aCellRow === bCellRow - 1) &&
    aCellColumn === bCellColumn;

  // is column adjacent
  const isColumnAdjacent =
    (aCellColumn === bCellColumn + 1 || aCellColumn === bCellColumn - 1) &&
    aCellRow === bCellRow;

  return isRowAdjacent || isColumnAdjacent;
}

/**
 * Check Cell Is Border
 *
 * Checking if cell is a border
 *
 * @param {number} cellRow
 * @param {number} cellColumn
 * @param {number} height
 * @param {number} width
 *
 * @returns {boolean} Cell is a border
 */
function checkCellIsBorder(cellRow, cellColumn, height, width) {
  return (
    cellRow === 0 ||
    cellRow === height - 1 ||
    cellColumn === 0 ||
    cellColumn === width - 1
  );
}

/**
 * Create
 *
 * Create a scene
 *
 * @param {number} height
 * @param {number} width
 *
 * @returns {string[][]} Empty scene with borders
 */
function create(height, width) {
  // scene matrix
  const scene = [];

  // creating scene
  // adding rows
  for (let row = 0; row < height; row++) {
    // scene row
    const sceneRow = [];

    // adding columns to row
    for (let column = 0; column < width; column++) {
      // creating cell
      let cell = '';

      // checking if cell is border
      const isBorder = checkCellIsBorder(row, column, height, width);

      // if is border
      if (isBorder) {
        cell = 'w';
      }

      // adding cell to scene row
      sceneRow.push(cell);
    }

    // adding scene row to scene
    scene.push(sceneRow);
  }

  // returning scene
  return scene;
}

/**
 * Add Player
 *
 * Adding player to scene
 *
 * @param {string[][]} scene
 * @param {Object} playerPosition
 *
 * @returns {string[][]} Scene with player
 */
function addPlayer(scene, playerPosition) {
  // copying scene
  const newScene = scene;

  // getting player position row and column
  const { row, column } = playerPosition;

  // adding player
  newScene[row][column] = 'p';

  // returning new scene with player
  return newScene;
}

/**
 * Add Enemy
 *
 * Adding enemy to scene
 *
 * @param {string[][]} scene
 * @param {Object} enemyPosition
 *
 * @returns {string[][]} Scene with enemy
 */
function addEnemy(scene, enemyPosition) {
  // copying scene
  const newScene = scene;

  // getting enemy position row and column
  const { row, column } = enemyPosition;

  // adding enemy
  newScene[row][column] = 'e';

  // returning new scene with enemy
  return newScene;
}

function generateValidPosition(scene) {
  // getting scene total rows
  const sceneRows = scene.length;
  // getting scene total columns
  const sceneColumns = scene[0].length;

  // is valid position
  let isValidPosition = false;

  // enemy position row
  let positionRow;

  // enemy position column
  let positionColumn;

  do {
    // creating enemy position row
    positionRow = Math.floor(Math.random() * sceneRows);

    // creating enemy position column
    positionColumn = Math.floor(Math.random() * sceneColumns);

    // getting position cell
    const cell = scene[positionRow][positionColumn];

    // checking if cell is not blocked
    isValidPosition = !checkCellIsBlocked(cell);

    // while not valid position
  } while (!isValidPosition);

  return { row: positionRow, column: positionColumn };
}

function addWalls(scene, quantity) {
  // copying scene
  let newScene = scene;

  //
  for (let wallNumber = 0; wallNumber < quantity; wallNumber++) {
    const wallPosition = generateValidPosition(newScene);

    const { row: wallRow, column: wallColumn } = wallPosition;

    newScene[wallRow][wallColumn] = 'w';
  }

  return newScene;
}

export default {
  create,
  addPlayer,
  addEnemy,
  addWalls,
  generateValidPosition,
  checkCellIsBlocked,
  checkIsAdjacentCell,
  checkCellIsBorder,
};
