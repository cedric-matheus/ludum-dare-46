import { connect } from 'react-redux';

import { newGame } from '../../store/actions/gameActions';

import MainMenuScene from '../../components/_Scenes/MainMenuScene';

const mapDispatchToProps = (dispatch) => ({
  newGameClickHandler: () => dispatch(newGame()),
});

export default connect(null, mapDispatchToProps)(MainMenuScene);
