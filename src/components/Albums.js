import React, { useState } from 'react';

const Albums = () => {
    const [albumNames, setAlbumNames] = useState([
      { name: 'Dangerously in Love', img: "https://upload.wikimedia.org/wikipedia/en/8/84/Dangerously_In_Love_Album%282003%29.png" },
      { name: 'I Am... Sasha Fierce', img: "" },
      { name: 'Beyonce', img: "" },
      { name: 'Lemondade', img: "" },
      { name: '', img: ""},
      { name: '', img: ""}
    ])
  
    const renderRows = () => {
      return albumNames.map(a => <tr><td>{a.name}</td><td><img src={a.img} /></td></tr>)
    }
  
    return (
      <table style={{ border: "1px solid black", width: "100vw", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Name</th>
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