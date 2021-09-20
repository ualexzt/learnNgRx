import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {of} from 'rxjs'
import {dispatch} from 'rxjs/internal/observable/pairs'
import {catchError, map, switchMap, tap} from 'rxjs/operators'
import {PersistanceService} from 'src/app/shared/services/persistance.service'
import {UserInterface} from 'src/app/shared/types/user.interface'
import {AuthService} from '../../services/auth.service'
import {
  registerAction,
  registerFailuerAction,
  registerSuccessAction,
} from '../actions/register.action'

@Injectable()
export class RegisterEffect {
  constructor(
    private actions$: Actions,
    private _authService: AuthService,
    private _persistanceService: PersistanceService,
    private _router: Router
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this._authService.register(request).pipe(
          map((user: UserInterface) => {
            this._persistanceService.set('accessToken', user.token)
            return registerSuccessAction({user})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailuerAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  redirectAfterRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this._router.navigateByUrl('/')
        })
      ),
    {dispatch: false}
  )
}
