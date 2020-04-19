// importing scene logic
import Scene from './Scene';

// importing player logic
import Player from './Player';

/**
 * New Scene
 *
 * Create a new scene.
 *
 * @returns {string[][]} New scene
 */
function newScene() {
  // creating empty scene
  const emptyScene = Scene.create(12, 20);

  // creating player
  const player = Player.create(emptyScene);

  // adding player to scene
  const scene = Scene.addPlayer(emptyScene, player.position);

  return { scene, player };
}

export default { newScene };
