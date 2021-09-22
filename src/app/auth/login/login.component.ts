import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {loginAction} from '../store/actions/login.action'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../store/selectors'
import {LoginRequestInterface} from '../types/loginRequest.interface'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  isSubmitting$!: Observable<boolean>
  backendErrors$!: Observable<BackendErrorsInterface | null>
  form!: FormGroup

  constructor(
    private loginForm: FormBuilder,
    private store$: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeData()
  }
  initializeData() {
    this.isSubmitting$ = this.store$.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store$.pipe(select(validationErrorsSelector))
  }
  initializeForm() {
    this.form = this.loginForm.group({
      email: ['', Validators.email],
      password: ['', Validators.minLength(8)],
    })
  }

  submitSingin() {
    const request: LoginRequestInterface = {
      user: this.form.value,
    }
    this.store$.dispatch(loginAction({request}))
  }
}
