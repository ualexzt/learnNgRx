import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {AuthRoutingModule} from './auth.routing'
import {RegisterComponent} from './register/register.component'
import {ReactiveFormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store'
import {reduser} from './store/reduser'
import {AuthService} from './services/auth.service'
import {EffectsModule} from '@ngrx/effects'
import {RegisterEffect} from './store/effects/register.effect'
import {SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reduser),
    EffectsModule.forFeature([RegisterEffect]),
  ],
  providers: [AuthService],
})
export class AuthModule {}
