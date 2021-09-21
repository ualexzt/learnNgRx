import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {of} from 'rxjs'
import {catchError, map, switchMap, tap} from 'rxjs/operators'
import {PersistanceService} from 'src/app/shared/services/persistance.service'
import {UserInterface} from 'src/app/shared/types/user.interface'
import {AuthService} from '../../services/auth.service'
import {loginAction, loginFailuerAction, loginSuccessAction} from '../actions/login.action'

@Injectable()
export class LoginEffect {
  constructor(
    private actions$: Actions,
    private _authService: AuthService,
    private _persistanceService: PersistanceService,
    private _router: Router
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this._authService.login(request).pipe(
          map((user: UserInterface) => {
            this._persistanceService.set('accessToken', user.token)
            return loginSuccessAction({user})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loginFailuerAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  redirectAfterRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this._router.navigateByUrl('/')
        })
      ),
    {dispatch: false}
  )
}
