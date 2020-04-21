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
  let scene = Scene.create(9, 9);

  // adding inside walls
  scene = Scene.addWalls(scene, 5, 'r');

  scene = Scene.addWalls(scene, 5, 'f');

  // creating player
  const player = Player.create(scene);

  // adding player to scene
  scene = Scene.addPlayer(scene, player.position);

  // creating enemy
  const enemy = Enemy.create(scene);

  // adding enemy to scene
  scene = Scene.addEnemy(scene, enemy.position);

  // creating enemy
  const enemy2 = Enemy.create(scene);

  // adding enemy to scene
  scene = Scene.addEnemy(scene, enemy2.position);

  return { scene, player, enemy, enemy2 };
}

function endTurn(scene, player, enemy, enemy2) {
  const { position: playerPosition } = player;
  const { position: enemyPosition } = enemy;
  const { position: enemy2Position } = enemy2;
  const { newScene, newEnemyPosition } = Enemy.move(
    scene,
    playerPosition,
    enemyPosition
  );

  const {
    newScene: newScene2,
    newEnemyPosition: newEnemy2Position,
  } = Enemy.move(newScene, playerPosition, enemy2Position);

  console.log(newScene);

  return { newScene2, newEnemyPosition, newEnemy2Position };
}

export default { newScene, endTurn };
