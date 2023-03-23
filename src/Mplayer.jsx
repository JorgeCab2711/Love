import React from 'react';
import musicFile from './videoplayback.mp3'; // import your music file

function MusicPlayer() {
  return (
    <div>
      <audio controls>
        <source src={musicFile} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default MusicPlayer;
