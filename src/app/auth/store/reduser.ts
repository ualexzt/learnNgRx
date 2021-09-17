import {Action, createReducer, on} from '@ngrx/store'
import {AuthStateInterface} from '../types/authState.interface'
import {registerAction} from './actions/register.action'

const initialStarte: AuthStateInterface = {
  isSubmitting: false,
}

const authReduser = createReducer(
  initialStarte,
  on(
    registerAction,
    (state): AuthStateInterface => ({...state, isSubmitting: true})
  )
)

export function reduser(state: AuthStateInterface, action: Action) {
  return authReduser(state, action)
}
