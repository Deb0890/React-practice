import React, { useState } from 'react';

const LikeButton = () => {
    const [ liked, setLiked ] = useState(false);

    const handleLike = e => {
        e.stopPropagation()
        setLiked(!liked)
    }

    return (
        <button role="switch" onClick={handleLike} style={{ color: liked ? 'blue' : 'grey' }}>Like</button>
    );
}

export default LikeButton;

// ★