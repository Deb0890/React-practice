import React, { useState } from 'react';
import LikeButton from './LikeButton';

const Albums = () => {
    const [albumNames, setAlbumNames] = useState([
      { albumName: 'The Lion King: The Gift', img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/The_Lion_King_The_Gift.png/220px-The_Lion_King_The_Gift.png" },
      { albumName: 'Lemonade', img: "https://upload.wikimedia.org/wikipedia/en/5/53/Beyonce_-_Lemonade_%28Official_Album_Cover%29.png" },
      { albumName: 'Homecoming: The Live Album', img: "https://upload.wikimedia.org/wikipedia/en/a/ab/Beyonc%C3%A9_-_Homecoming-_The_Live_Album.png" },
      
    ])
  
    const renderRows = () => {
      return albumNames.map(a => <tr><td>{a.albumName}<LikeButton /></td><td><img src={a.img} /></td></tr>)
    }
  
    return (
      <table style={{ border: "1px solid black", width: "100vw", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Album Name</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          { renderRows() }
        </tbody>
      </table>
    );
  };
  
  export default Albums;