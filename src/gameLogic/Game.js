// importing scene logic
import Scene from './Scene';

// importing player logic
import Player from './Player';

// importing enemy logic
import Enemy from './Enemy';

/**
 * New Scene
 *
 * Create a new scene.
 *
 * @returns {string[][]} New scene
 */
function newScene() {
  // creating empty scene
  let scene = Scene.create(12, 20);

  // creating player
  const player = Player.create(scene);

  // adding player to scene
  scene = Scene.addPlayer(scene, player.position);

  // creating enemy
  const enemy = Enemy.create(scene);

  // adding enemy to scene
  scene = Scene.addEnemy(scene, enemy.position);

  return { scene, player, enemy };
}

export default { newScene };
