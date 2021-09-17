import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {of} from 'rxjs'
import {catchError, map, switchMap} from 'rxjs/operators'
import {UserInterface} from 'src/app/shared/types/user.interface'
import {AuthService} from '../../services/auth.service'
import {
  registerAction,
  registerFailuerAction,
  registerSuccessAction,
} from '../actions/register.action'

@Injectable()
export class RegisterEffect {
  constructor(private actions$: Actions, private _authService: AuthService) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this._authService.register(request).pipe(
          map((user: UserInterface) => {
            return registerSuccessAction({user})
          }),
          catchError(() => {
            return of(registerFailuerAction())
          })
        )
      })
    )
  )
}
