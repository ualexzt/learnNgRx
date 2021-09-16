import {createAction, props} from '@ngrx/store'

import {ActionType} from '../actionsType'

export const registerAction = createAction(
  ActionType.REGISTER,
  props<{username: string; email: string; password: string}>()
)
