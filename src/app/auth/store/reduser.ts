import {Action, createReducer, on} from '@ngrx/store'
import {AuthStateInterface} from '../types/authState.interface'
import {
  getCurrentUserAction,
  getCurrentUserFailuerAction,
  getCurrentUserSuccessAction,
} from './actions/getCurrentUser.action'
import {
  loginAction,
  loginFailuerAction,
  loginSuccessAction,
} from './actions/login.action'
import {
  registerAction,
  registerFailuerAction,
  registerSuccessAction,
} from './actions/register.action'

const initialStarte: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
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
  ),
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validatonErrors: null,
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggetIn: true,
      validatonErrors: null,
      currentUser: action.user,
    })
  ),
  on(
    loginFailuerAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validatonErrors: action.errors,
    })
  ),
  on(
    getCurrentUserAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggetIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    getCurrentUserFailuerAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggetIn: false,
      currentUser: null,
    })
  )
)

export function reduser(state: AuthStateInterface, action: Action) {
  return authReduser(state, action)
}
