import { JWT } from '../actions.js'
import {USER_CREATED} from '../actions'

export default function (state = {userCreated: false}, action = {}) {
  switch (action.type) {
    case USER_CREATED:
          return {...state, userCreated: true};
    case JWT:
          return action.payload
    default:
      return state
  }
}