import React, { useState } from 'react';

const Artist = () => {
    const [ artistName, setArtistName ] = useState('Beyonce');
  
  
  
    return (
      <div>
        <h2>{artistName}</h2>
        <h3>Artist</h3>
        {/* <h3>Kanto Region</h3>
        <h3>Pokemon Caught: {pokemonCaught}</h3>
        <button onClick={increasePokemonCount}>
          I caught another one!
        </button> */}
      </div>
    );
  }
  
  export default Artist;