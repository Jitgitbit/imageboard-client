import React from 'react'
import CreateFormContainer from './CreateFormContainer'
import LoginFormContainer from './LoginFormContainer'
import SignInFormContainer from './SignInFormContainer';
// import './List.css';


export default function List (props) {
  
    const images = props //Take a good look at this handy notation!! props .images .map !!
    .images
    .map(image =>
      <div key={image.id}>
        <h3 className="Img">{image.title}</h3>
        <img src={image.url} alt=""/> 
      </div>)

      console.log("USAR?", props.user);  // check mapStateToProps in ListContainer for user!!!!
      console.log("USAR login?", props.user.jwt);  // check mapStateToProps in ListContainer for user!!!!
      console.log("USAR new user?", props.user.userCreated);  // check mapStateToProps in ListContainer for user!!!!
     
      
    const loginForm = props.user.jwt
      ? <CreateFormContainer/>
      : <LoginFormContainer/>

    const checkLoginForm = props.user.userCreated === false && props.user.jwt === undefined
      ? <SignInFormContainer/>
      : null

    return (
      <div>
        {/* <SignInFormContainer/> */}
        {loginForm}
        {checkLoginForm}
          <div>
            {images}
          </div>
      </div>
    )
}


