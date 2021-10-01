import {createAction, props} from '@ngrx/store'
import {UserInterface} from 'src/app/shared/types/user.interface'
import {ActionType} from '../actionsType'

export const getCurrentUserAction = createAction(ActionType.GET_CURRENT_USER)

export const getCurrentUserSuccessAction = createAction(
  ActionType.GET_CURRENT_USER_SUCCESS,
  props<{currentUser: UserInterface}>()
)

export const getCurrentUserFailuerAction = createAction(
  ActionType.GET_CURRENT_USER_FAILUER
)
