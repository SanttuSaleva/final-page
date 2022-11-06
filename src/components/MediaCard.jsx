import React from 'react';

const MediaCard = ({media: {Year, Poster, Title, Type} }) => {
    return (
    <div className="media">
        <div>
            <p>{Year}</p>
        </div>    
        <div>
          <img src={Poster !== 'N/A' ? Poster : 'https://placeholder.com/350'} alt={Title}/>
        </div>
        
        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
    </div>    
    );
}

export default MediaCard;