import React from 'react';

function LevelScene({ LevelBoard, LevelHud }) {
  // rendering component
  return (
    <div className="levelSceneContainer">
      {/* <LevelHud /> */}
      <LevelBoard />
    </div>
  );
}

export default LevelScene;
