import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatButtonModule} from '@angular/material/button'
import {BacendErrorsMassegesComponent} from './bacend-errors-masseges/bacend-errors-masseges.component'
import {MatIconModule} from '@angular/material/icon'
@NgModule({
  declarations: [BacendErrorsMassegesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    BacendErrorsMassegesComponent,
    MatIconModule,
  ],
})
export class SharedModule {}
