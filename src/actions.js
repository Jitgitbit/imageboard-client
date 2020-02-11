import request from 'superagent'

export const ALL_IMAGES = 'ALL_IMAGES'

const baseUrl = 'http://localhost:4000'

function allImages (payload) {
  return {
    type: ALL_IMAGES,
    payload
  }
}

export const getImages = () => (dispatch, getState) => {
  const state = getState()
  const { images } = state
  if (!images.length) {
    request(`${baseUrl}/image`)
      .then(response => {
        const action = allImages(response.body)
        dispatch(action)
      })
      .catch(console.error)
  }
}

export const NEW_IMAGE = 'NEW_IMAGE'
function newImage (payload) {
  return {
    type: NEW_IMAGE,
    payload
  }
}
export const createImage = data => dispatch => {
  request
    .post(`${baseUrl}/image`)
    .send(data)
    .then(response => {
      const action = newImage(response.body)
      dispatch(action)
    })
    .catch(console.error)
}

export const JWT = 'JWT'

function dispatchLogin(user) {
  return {
    type: JWT,
    payload: user
  }
}
export const login = (email, password) => dispatch => {
  console.log('user data test')
  const user = {
    email,
    password
  }
  request
    .post(`${baseUrl}/user`)
    .send(user)
    .then(response =>{
      const action = dispatchLogin(response.body)
      dispatch (action)
    })
    .catch(console.error)
}

export const signIn = (email, password) => dispatch => {
  console.log('user data test for login')
  const user = {
    email,
    password
  }
  request
    .post(`${baseUrl}/login`)
    .send(user)
    .then(response =>{
      const action = dispatchLogin(response.body)
      dispatch (action)
    })
    .catch(console.error)
}