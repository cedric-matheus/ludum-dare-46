// Defining objects types
/**
 * @typedef Position
 * @type {object}
 * @property {number} row
 * @property {number} column
 */

// importing scene logic
import Scene from './Scene';

/**
 * Check Is Possible Movement
 *
 * Check if movement is possible
 *
 * @param {string} cell
 * @param {Position} cellPosition
 * @param {Position} enemyPosition
 *
 * @returns {boolean} Movement is possible
 */
function checkIsPossibleMovement(cell, cellPosition, enemyPosition) {
  // cell is adjacent
  const cellIsAdjacent = Scene.checkIsAdjacentCell(cellPosition, enemyPosition);

  // cell not is blocked
  const cellNotIsBlocked = !Scene.checkCellIsBlocked(cell);

  return cellIsAdjacent && cellNotIsBlocked;
}

/**
 * Move
 *
 * Move enemy to cellRow, cellColumn;
 *
 * @param {string[][]} scene
 * @param {Position} cellPosition
 * @param {Position} enemyPosition
 *
 * @returns {Object} { newScene, movementSuccess }
 */
function move(scene, cellPosition, enemyPosition) {
  // creating scene copy
  const newScene = scene;

  // getting cell row and column
  const { row: cellRow, column: cellColumn } = cellPosition;

  // getting enemy row and column
  const { row: enemyRow, column: enemyColumn } = enemyPosition;

  // getting cell
  const cell = scene[cellRow][cellColumn];

  // checking if movment is possible
  const isPossibleMovement = checkIsPossibleMovement(
    cell,
    cellPosition,
    enemyPosition
  );

  // movement success
  let movementSuccess = false;

  // move is movement is possible
  if (isPossibleMovement) {
    // resetting enemy cell
    newScene[enemyRow][enemyColumn] = '';

    // changing cell to enemy
    newScene[cellRow][cellColumn] = 'e';

    // success
    movementSuccess = true;
  }

  // retutning new scene
  return { newScene, movementSuccess };
}

/**
 * Create
 *
 * Create enemy.
 *
 * @param {string[][]} scene
 *
 * @returns {Object} { position: { row, column } }
 */
function create(scene) {
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
    isValidPosition = !Scene.checkCellIsBlocked(cell);

    // while not valid position
  } while (!isValidPosition);

  // returning enemy
  return { position: { row: positionRow, column: positionColumn } };
}

export default { create, move, checkIsPossibleMovement };
