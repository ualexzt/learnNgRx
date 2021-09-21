import {createAction, props} from '@ngrx/store'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {UserInterface} from 'src/app/shared/types/user.interface'
import {LoginRequestInterface} from '../../types/loginRequest.interface'
import {ActionType} from '../actionsType'

export const loginAction = createAction(
  ActionType.LOGIN,
  props<{request: LoginRequestInterface}>()
)

export const loginSuccessAction = createAction(
  ActionType.LOGIN_SUCCESS,
  props<{user: UserInterface}>()
)

export const loginFailuerAction = createAction(
  ActionType.LOGIN_FAILURE,
  props<{errors: BackendErrorsInterface}>()
)
