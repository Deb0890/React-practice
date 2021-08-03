import React, { useState } from 'react';
// import LikeButton from './LikeButton';

const ArtistInfo = () => {
  const [ artists, setArtist ] = useState([
    { name: "Beyonce", genre: "RnB" },
    // { name: "JLo", genre: "pop"}
  ]);

  const renderArtistInfo = () => 
    artists.map((a, i) => {
      return (
        <>
          <h2 key={i}> Artist: {a.name} </h2>
          <p>Genre: {a.genre}</p>
        </>
      )
    });

    return (
      <div>
        {
          renderArtistInfo()
        }
        {/* <LikeButton /> */}
      </div>
    );
  }
  
  export default ArtistInfo;
