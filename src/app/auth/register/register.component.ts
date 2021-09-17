import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'
import {registerAction} from '../store/actions/register.action'
import {isSubmittingSelector} from '../store/selectors'
import { RegisterRequestInterface } from '../types/registerRequest.interface'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  form!: FormGroup
  isSubmitting$!: Observable<boolean>
  constructor(
    private fb: FormBuilder,
    private store$: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }
  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.email],
      password: '',
    })
  }
  initializeValues(): void {
    this.isSubmitting$ = this.store$.pipe(select(isSubmittingSelector))
  }
  submitSingin(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value
    }
    this.store$.dispatch(registerAction({request}))
  }
}
