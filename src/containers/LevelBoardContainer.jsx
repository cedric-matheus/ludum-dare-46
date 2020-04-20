import React from 'react';

import { connect } from 'react-redux';

import { endTurn } from '../store/actions/levelActions';

import LevelBoardComponent from '../components/LevelBoardComponent';

const mapStateToProps = (state) => ({
  level: state.levelReducer,
});

const mapDispatchToProps = (dispatch) => ({
  endTurn: (playerMoveCellPosition) =>
    dispatch(endTurn(playerMoveCellPosition)),
});

function LevelBoardContainer({ level, endTurn }) {
  const { player, levelMatrix } = level;

  return (
    <LevelBoardComponent
      endTurn={endTurn}
      levelMatrix={levelMatrix}
      player={player}
    />
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LevelBoardContainer);
