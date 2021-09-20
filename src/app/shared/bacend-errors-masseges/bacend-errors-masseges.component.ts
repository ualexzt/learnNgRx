import {Component, Input, OnInit} from '@angular/core'
import {BackendErrorsInterface} from '../types/backendErrors.interface'

@Component({
  selector: 'mc-backend-errors-masseges',
  templateUrl: './bacend-errors-masseges.component.html',
})
export class BacendErrorsMassegesComponent implements OnInit {
  @Input() backendErrors!: BackendErrorsInterface 
  errorMessages: string[] = []
  constructor() {}

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join(', ')
      return `${name} ${messages}`
    })
    console.log(this.errorMessages)
  }
}
