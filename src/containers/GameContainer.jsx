import { connect } from 'react-redux';
import GameComponent from '../components/GameComponent';

const mapStateToProps = (state) => ({
  game: state.gameReducer,
});

export default connect(mapStateToProps, null)(GameComponent);
