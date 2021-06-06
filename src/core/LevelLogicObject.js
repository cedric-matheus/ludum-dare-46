import NpcLogicObject from './NpcLogicObject';

// cell types object
export const CELL_CONTENTS = {
  w: 'wall',
  p: 'player',
  e: 'enemy',
  a: 'arcade',
  t: 'trash',
  r: 'refri',
  x: 'exit',
  '': '',
};

export default class LevelLogicObject {
  constructor(levelWidth = 20, levelHeight = 10) {
    this.levelMatrix = [];
    this.player = {};
    this.enemies = [];

    this.levelWidth = levelWidth;
    this.levelHeight = levelHeight;

    this.generateLevel();
  }

  checkCellIsBorder(cellPosition) {
    const levelWidth = this.levelWidth;
    const levelHeight = this.levelHeight;

    const { row: cellRow, column: cellColumn } = cellPosition;

    return (
      cellRow === 0 ||
      cellRow === levelHeight - 1 ||
      cellColumn === 0 ||
      cellColumn === levelWidth - 1
    );
  }

  createEmptyLevel() {
    const levelMatrix = [];

    const levelWidth = this.levelWidth;
    const levelHeight = this.levelHeight;

    // creating level
    // adding rows
    for (let row = 0; row < levelHeight; row++) {
      // level row
      const levelRow = [];

      // adding columns to row
      for (let column = 0; column < levelWidth; column++) {
        // creating cell
        let cell = '';

        const cellPosition = { row, column };

        // checking if cell is border
        const isBorder = this.checkCellIsBorder(cellPosition);

        // if is border
        if (isBorder) {
          cell = 'w';
        }

        // adding cell to level row
        levelRow.push(cell);
      }

      // adding level row to level
      levelMatrix.push(levelRow);
    }

    // setting level
    this.levelMatrix = levelMatrix;
  }

  checkCellIsEmpty(cell) {
    return cell === '';
  }

  generateValidPosition() {
    // is valid position
    let isValidPosition = false;

    // enemy position row
    let positionRow;

    // enemy position column
    let positionColumn;

    do {
      // creating enemy position row
      positionRow = Math.floor(Math.random() * this.levelHeight);

      // creating enemy position column
      positionColumn = Math.floor(Math.random() * this.levelWidth);

      // getting position cell
      const cell = this.levelMatrix[positionRow][positionColumn];

      // checking if cell is not blocked
      isValidPosition = this.checkCellIsEmpty(cell);

      // while not valid position
    } while (!isValidPosition);

    return { row: positionRow, column: positionColumn };
  }

  createPlayer() {
    const levelMatrix = this.levelMatrix;

    const playerPosition = this.generateValidPosition();

    const player = new NpcLogicObject(playerPosition, 'p');

    // getting player position row and column
    const { row, column } = playerPosition;

    // adding player
    levelMatrix[row][column] = player.type;

    this.levelMatrix = levelMatrix;
    this.player = player;
  }

  createEnemy() {
    const levelMatrix = this.levelMatrix;

    const enemyPosition = this.generateValidPosition();

    const enemy = new NpcLogicObject(enemyPosition, 'e');

    // getting player position row and column
    const { row, column } = enemyPosition;

    // adding player
    levelMatrix[row][column] = enemy.type;

    this.levelMatrix = levelMatrix;
    this.enemies.push(enemy);
  }

  addInteractiveElements(type, quantity) {
    const levelMatrix = this.levelMatrix;

    //
    for (let element = 0; element < quantity; element++) {
      const elementPosition = this.generateValidPosition();

      const { row, column } = elementPosition;

      levelMatrix[row][column] = type;
    }

    this.levelMatrix = levelMatrix;
  }

  movePlayer(cellPosition) {
    const levelMatrix = this.levelMatrix;
    const player = this.player;

    // getting cell row and column
    const { row: cellRow, column: cellColumn } = cellPosition;

    // getting player row and column
    const { row: playerRow, column: playerColumn } = player.position;

    // resetting player cell
    levelMatrix[playerRow][playerColumn] = '';

    // changing cell to player
    levelMatrix[cellRow][cellColumn] = 'p';

    player.position = cellPosition;

    this.levelMatrix = levelMatrix;
    this.player = player;
  }

  moveEnemies() {
    const enemies = this.enemies;

    for (let enemyIndex in enemies) {
      this.moveEnemy(enemyIndex);
    }
  }

  moveEnemy(enemyIndex) {
    const levelMatrix = this.levelMatrix;
    const enemy = this.enemies[enemyIndex];

    // getting enemy row and column
    const { row: enemyRow, column: enemyColumn } = enemy.position;

    // getting player row and column
    const { row: playerRow, column: playerColumn } = this.player.position;

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
      const cell = levelMatrix[cellRow][cellColumn];

      // checking if movment is possible
      isPossibleMovement = enemy.checkIsPossibleMovement(cell, cellPosition);
    } while (!isPossibleMovement);

    // resetting enemy cell
    levelMatrix[enemyRow][enemyColumn] = '';

    // changing cell to enemy
    levelMatrix[cellRow][cellColumn] = 'e';

    enemy.position = cellPosition;

    this.levelMatrix = levelMatrix;
    this.enemies[enemyIndex] = enemy;
  }

  generateLevel() {
    // creating empty level
    this.createEmptyLevel();

    // adding player to level
    this.createPlayer();

    // adding arcade
    this.addInteractiveElements('a', 4);

    // adding trash
    this.addInteractiveElements('t', 4);

    // adding refri
    this.addInteractiveElements('r', 4);

    // creating enemies
    for (let enemy = 0; enemy < 3; enemy++) {
      this.createEnemy();
    }

    // adding exit
    this.addInteractiveElements('x', 1);
  }

  endTurn(playerMoveCellPosition) {
    const player = this.player;
    const { row, column } = playerMoveCellPosition;

    const cell = this.levelMatrix[row][column];

    // player movement is possible
    const movementIsPossible = player.checkIsPossibleMovement(
      cell,
      playerMoveCellPosition
    );

    if (movementIsPossible) {
      this.movePlayer(playerMoveCellPosition);

      this.moveEnemies();
    }
  }
}
