import React from 'react'
import CreateFormContainer from './CreateFormContainer'
import LoginFormContainer from './LoginFormContainer'

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
        <LoginFormContainer/>
        <CreateFormContainer/>
          <div>
            {images}
          </div>
      </div>
    )
}


