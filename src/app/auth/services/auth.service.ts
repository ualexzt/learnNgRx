import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {UserInterface} from 'src/app/shared/types/user.interface'
import {RegisterRequestInterface} from '../types/registerRequest.interface'
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment'
import {AuthResponseInterface} from '../types/authResponse.interface'
import {map} from 'rxjs/operators'
import {LoginRequestInterface} from '../types/loginRequest.interface'

@Injectable()
export class AuthService {
  constructor(private _http: HttpClient) {}

  getUser(response: AuthResponseInterface): UserInterface {
    return response.user
  }
  register(data: RegisterRequestInterface): Observable<UserInterface> {
    return this._http
      .post<AuthResponseInterface>(environment.apiUrl + '/users', data)
      .pipe(map(this.getUser))
  }
  login(data: LoginRequestInterface): Observable<UserInterface> {
    return this._http
      .post<AuthResponseInterface>(environment.apiUrl + '/users/login', data)
      .pipe(map(this.getUser))
  }
}
