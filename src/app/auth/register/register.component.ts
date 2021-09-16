import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Store } from '@ngrx/store'
import { registerAction } from '../store/actions/register.action'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  form!: FormGroup
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm()
  }
  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.email],
      password: '',
      confirm: '',
    })
  }
  submitSingin(): void {
    if (this.form.value.password !== this.form.value.confirm || !this.form.valid) {
      console.log('Form incorrect')
    } else {
      this.store.dispatch(registerAction(this.form.value))
    }
  }
}
