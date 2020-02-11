import React from 'react'
import CreateFormContainer from './CreateFormContainer'
import LoginFormContainer from './LoginFormContainer'
// import SignInFormContainer from './SignInFormContainer';

export default function List (props) {
  
    const images = props //Take a good look at this handy notation!! props .images .map !!
    .images
    .map(image =>
      <div key={image.id}>
        <h3>{image.title}</h3>
        <img src={image.url} alt=""/> 
      </div>)

      console.log("USAR?", props.user);  // check mapStateToProps in ListContainer for user!!!!

    const form = props.user
      ? <CreateFormContainer/>
      : <LoginFormContainer/>

    // const signForm = props.user
    //   ? <CreateFormContainer/>
    //   : <SignInFormContainer/>

    return (
      <div>
        {/* <SignInFormContainer/> */}
        {form}
          <div>
            {images}
          </div>
      </div>
    )
}


