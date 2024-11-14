import React from 'react';
import { Settings } from 'react-feather';
import { GameLogicContext } from '../GameProvider';

function GameSettings() {

  const {handleToggleSettings} = React.useContext(GameLogicContext);

  const settingsStyle = {
    cursor: "pointer"
  }

  return (
    <Settings size={22} onClick={handleToggleSettings} style={settingsStyle}></Settings>
  );
}

export default GameSettings;
