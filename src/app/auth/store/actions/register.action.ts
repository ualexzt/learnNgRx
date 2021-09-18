import {createAction, props} from '@ngrx/store'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {UserInterface} from 'src/app/shared/types/user.interface'
import {RegisterRequestInterface} from '../../types/registerRequest.interface'

import {ActionType} from '../actionsType'

export const registerAction = createAction(
  ActionType.REGISTER,
  props<{request: RegisterRequestInterface}>()
)
export const registerSuccessAction = createAction(
  ActionType.REGISTER_SUCCESS,
  props<{user: UserInterface}>()
)

export const registerFailuerAction = createAction(
  ActionType.REGISTER_FAILURE,
  props<{errors: BackendErrorsInterface}>()
 )
