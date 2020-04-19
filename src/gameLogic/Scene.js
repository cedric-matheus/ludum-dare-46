/**
 * Check Cell Is Wall
 *
 * Check if cell is a wall
 *
 * @param {string} cell
 *
 * @returns {boolean} Cell is a wall
 */
function checkCellIsWall(cell) {
  return cell === 'w';
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

export default { create, addPlayer, checkCellIsWall, checkCellIsBorder };
