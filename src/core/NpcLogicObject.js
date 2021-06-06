// scenes constants
export default class NpcLogicObject {
  constructor(position, type) {
    this.blockedCells = ['e', 'p', 'w'];
    this.type = type;
    this.position = position;
  }

  checkCellIsBlocked(cell) {
    return this.blockedCells.includes(cell);
  }

  checkIsAdjacentCell(cellPosition) {
    // getting (a) cell row and cell
    const { row: aCellRow, column: aCellColumn } = cellPosition;

    // getting (b) cell row and cell
    const { row: bCellRow, column: bCellColumn } = this.position;

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

  checkIsPossibleMovement(cell, cellPosition) {
    // cell is adjacent
    const cellIsAdjacent = this.checkIsAdjacentCell(cellPosition);

    // cell not is blocked
    const cellNotIsBlocked = !this.checkCellIsBlocked(cell);

    return cellIsAdjacent && cellNotIsBlocked;
  }
}
