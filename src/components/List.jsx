import React from 'react'

export default function List (props) {
  
    const images = props //Take a good look at this handy notation!! props .images .map !!
    .images
    .map(image =>
      <div key={image.id}>
        <h3>{image.title}</h3>
        <img src={image.url} alt=""/> 
      </div>)
    return (
      <div>
        {images}
      </div>
    )
}


