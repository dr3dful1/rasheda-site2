import React from 'react';
import { Player } from 'video-react';
 
export default props => {
  return (
    <Player>
      <source src="legal_background.mp4" />
    </Player>
  );
};