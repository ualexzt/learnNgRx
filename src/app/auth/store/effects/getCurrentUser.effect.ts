import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {of} from 'rxjs'
import {catchError, map, switchMap} from 'rxjs/operators'
import {PersistanceService} from 'src/app/shared/services/persistance.service'
import {UserInterface} from 'src/app/shared/types/user.interface'
import {AuthService} from '../../services/auth.service'
import {
  getCurrentUserAction,
  getCurrentUserFailuerAction,
  getCurrentUserSuccessAction,
} from '../actions/getCurrentUser.action'

@Injectable()
export class GetCurrentUserEffect {
  constructor(
    private actions$: Actions,
    private _authService: AuthService,
    private _persistanceService: PersistanceService
  ) {}

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this._persistanceService.get('accessToken')
        if (!token) {
          return of(getCurrentUserFailuerAction())
        }
        return this._authService.getCurrentUser().pipe(
          map((currentUser: UserInterface) => {
            return getCurrentUserSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getCurrentUserFailuerAction())
          })
        )
      })
    )
  )
}
