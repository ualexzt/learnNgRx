import {Action, createReducer, on} from '@ngrx/store'
import {AuthStateInterface} from '../types/authState.interface'
import {
  registerAction,
  registerFailuerAction,
  registerSuccessAction,
} from './actions/register.action'

const initialStarte: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggetIn: null,
  validatonErrors: null,
}

const authReduser = createReducer(
  initialStarte,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validatonErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggetIn: true,
      validatonErrors: null,
      currentUser: action.user,
    })
  ),
  on(
    registerFailuerAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validatonErrors: action.errors,
    })
  )
)

export function reduser(state: AuthStateInterface, action: Action) {
  return authReduser(state, action)
}
