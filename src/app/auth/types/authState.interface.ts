import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import {UserInterface} from 'src/app/shared/types/user.interface'

export interface AuthStateInterface {
  isSubmitting: boolean
  currentUser: UserInterface | null
  isLoggetIn: boolean | null
  validatonErrors: BackendErrorsInterface | null
}
