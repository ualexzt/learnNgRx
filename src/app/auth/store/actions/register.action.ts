import {createAction, props} from '@ngrx/store'
import {RegisterRequestInterface} from '../../types/registerRequest.interface'

import {ActionType} from '../actionsType'

export const registerAction = createAction(
  ActionType.REGISTER,
  props<RegisterRequestInterface>()
)
