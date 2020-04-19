// importing scene logic
import Scene from './Scene';

/**
 * Check Is Possible Movement
 *
 * Check if movement is possible
 *
 * @param {string} cell
 * @param {number} cellRow
 * @param {number} cellColumn
 * @param {number} playerRow
 * @param {number} playerColumn
 *
 * @returns {boolean} Movement is possible
 */
export function checkIsPossibleMovement(
  cell,
  cellRow,
  cellColumn,
  playerRow,
  playerColumn
) {
  // is possible row movement
  const isPossibleRowMovement =
    (cellRow === playerRow + 1 || cellRow === playerRow - 1) &&
    cellColumn === playerColumn;

  // is possible column movement
  const isPossibleColumnMovement =
    (cellColumn === playerColumn + 1 || cellColumn === playerColumn - 1) &&
    cellRow === playerRow;

  // cell not is wall
  const cellNotIsWall = !Scene.checkCellIsWall(cell);

  return (isPossibleRowMovement || isPossibleColumnMovement) && cellNotIsWall;
}

/**
 * Move
 *
 * Move player to cellRow, cellColumn;
 *
 * @param {string[][]} scene
 * @param {number} cellRow
 * @param {number} cellColumn
 * @param {number} playerRow
 * @param {number} playerColumn
 *
 * @returns {Object} { newScene, movementSuccess }
 */
function move(scene, cellRow, cellColumn, playerRow, playerColumn) {
  // creating scene copy
  const newScene = scene;

  // get cell
  const cell = scene[cellRow][cellColumn];

  // checking if movment is possible
  const isPossibleMovement = checkIsPossibleMovement(
    cell,
    cellRow,
    cellColumn,
    playerRow,
    playerColumn
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

    isValidPosition = scene[positionRow][positionColumn] !== 'w';

    // while not valid position
  } while (!isValidPosition);

  // returning player
  return { position: { row: positionRow, column: positionColumn } };
}

export default { create, move, checkIsPossibleMovement };
