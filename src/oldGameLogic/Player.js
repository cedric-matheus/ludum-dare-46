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
 * @param {Position} playerPosition
 *
 * @returns {boolean} Movement is possible
 */
function checkIsPossibleMovement(cell, cellPosition, playerPosition) {
  // cell is adjacent
  const cellIsAdjacent = Scene.checkIsAdjacentCell(
    cellPosition,
    playerPosition
  );

  // cell not is blocked
  const cellNotIsBlocked = !Scene.checkCellIsBlocked(cell);

  return cellIsAdjacent && cellNotIsBlocked;
}

/**
 * Move
 *
 * Move player to cellRow, cellColumn;
 *
 * @param {string[][]} scene
 * @param {Position} cellPosition
 * @param {Position} playerPosition
 *
 * @returns {Object} { newScene, movementSuccess }
 */
function move(scene, cellPosition, playerPosition) {
  // creating scene copy
  const newScene = scene;

  // getting cell row and column
  const { row: cellRow, column: cellColumn } = cellPosition;

  // getting player row and column
  const { row: playerRow, column: playerColumn } = playerPosition;

  // getting cell
  const cell = scene[cellRow][cellColumn];

  // checking if movment is possible
  const isPossibleMovement = checkIsPossibleMovement(
    cell,
    cellPosition,
    playerPosition
  );

  // movement success
  let movementSuccess = false;

  // move is movement is possible
  if (isPossibleMovement) {
    // resetting player cell
    newScene[playerRow][playerColumn] = '';

    // changing cell to player
    newScene[cellRow][cellColumn] = 'p';

    // success
    movementSuccess = true;
  }

  // retutning new scene
  return { newScene, movementSuccess };
}

/**
 * Create
 *
 * Create player.
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

  // player position row
  let positionRow;

  // player position column
  let positionColumn;

  do {
    // creating player position row
    positionRow = Math.floor(Math.random() * sceneRows);

    // creating player position column
    positionColumn = Math.floor(Math.random() * sceneColumns);

    // getting position cell
    const cell = scene[positionRow][positionColumn];

    // checking if cell is not blocked
    isValidPosition = !Scene.checkCellIsBlocked(cell);

    // while not valid position
  } while (!isValidPosition);

  // returning player
  return { position: { row: positionRow, column: positionColumn } };
}

export default { create, move, checkIsPossibleMovement };
