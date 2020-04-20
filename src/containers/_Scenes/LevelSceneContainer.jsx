import React from 'react';

import LevelSceneComponent from '../../components/_Scenes/LevelScene';

import LevelBoardContainer from '../LevelBoardContainer';

const LevelSceneContainer = () => (
  <LevelSceneComponent LevelBoard={LevelBoardContainer} LevelHud={'hud'} />
);

export default LevelSceneContainer;
