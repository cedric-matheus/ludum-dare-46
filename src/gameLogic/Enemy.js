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
 * Move enemy
 *
 * @param {string[][]} scene
 * @param {Position} playerPosition
 * @param {Position} enemyPosition
 *
 * @returns {Object} { newScene, newEnemyPosition }
 */
function move(scene, playerPosition, enemyPosition) {
  // creating scene copy
  const newScene = scene;

  // getting enemy row and column
  const { row: enemyRow, column: enemyColumn } = enemyPosition;

  // getting player row and column
  const { row: playerRow, column: playerColumn } = playerPosition;

  // getting row distance from player
  const rowDistance = Math.abs(playerRow - enemyRow);

  // getting column distance from player
  const columnDistance = Math.abs(playerColumn - enemyColumn);

  const rowMovements = {
    positive: { row: enemyRow + 1, column: enemyColumn },
    negative: { row: enemyRow - 1, column: enemyColumn },
  };

  const columnMovements = {
    positive: { row: enemyRow, column: enemyColumn + 1 },
    negative: { row: enemyRow, column: enemyColumn - 1 },
  };

  const movements = {
    rowMovements,
    columnMovements,
  };

  const movementList = [];

  // checking if first movement option is a row movement or column movement
  if (rowDistance > columnDistance) {
    // adding first movement option
    if (enemyRow < playerRow) {
      movementList.push(movements['rowMovements']['positive']);
    } else {
      movementList.push(movements['rowMovements']['negative']);
    }

    // adding second and third movement options
    if (enemyColumn < playerColumn) {
      movementList.push(movements['columnMovements']['positive']);
      movementList.push(movements['columnMovements']['negative']);
    } else {
      movementList.push(movements['columnMovements']['negative']);
      movementList.push(movements['columnMovements']['positive']);
    }

    // adding last movement option
    if (enemyRow < playerRow) {
      movementList.push(movements['rowMovements']['negative']);
    } else {
      movementList.push(movements['rowMovements']['positive']);
    }
  } else {
    // adding first movement option
    if (enemyColumn < playerColumn) {
      movementList.push(movements['columnMovements']['positive']);
    } else {
      movementList.push(movements['columnMovements']['negative']);
    }

    // adding second and third movement options
    if (enemyRow < playerRow) {
      movementList.push(movements['rowMovements']['positive']);
      movementList.push(movements['rowMovements']['negative']);
    } else {
      movementList.push(movements['rowMovements']['negative']);
      movementList.push(movements['rowMovements']['positive']);
    }

    // adding last movement option
    if (enemyColumn < playerColumn) {
      movementList.push(movements['columnMovements']['negative']);
    } else {
      movementList.push(movements['columnMovements']['positive']);
    }
  }

  // enemy movement position
  let cellPosition;

  //
  let isPossibleMovement;

  let movementOption = -1;

  // getting cell row and column
  let cellRow;
  let cellColumn;

  // testing movements
  do {
    movementOption++;

    cellPosition = movementList[movementOption];

    // getting cell row and column
    cellRow = cellPosition.row;
    cellColumn = cellPosition.column;

    // getting cell
    const cell = scene[cellRow][cellColumn];

    // checking if movment is possible
    isPossibleMovement = checkIsPossibleMovement(
      cell,
      cellPosition,
      enemyPosition
    );
  } while (!isPossibleMovement);

  // resetting enemy cell
  newScene[enemyRow][enemyColumn] = '';

  // changing cell to enemy
  newScene[cellRow][cellColumn] = 'e';

  // retutning new scene
  return { newScene, newEnemyPosition: cellPosition };
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
  // getting valid position to create enemy
  const position = Scene.generateValidPosition(scene);

  // returning enemy
  return { position };
}

export default { create, move, checkIsPossibleMovement };
