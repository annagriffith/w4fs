import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loginrequest, LoginResponse } from '../interfaces/loginrequest';

@Injectable({ providedIn: 'root' })
export class Auth {
  private readonly http = inject(HttpClient);
  // server login API
  private readonly authUrl = 'http://localhost:3001/api/auth';

  login(credentials: Loginrequest): Observable<LoginResponse> {
    // send email and password to node server
    return this.http.post<LoginResponse>(this.authUrl, credentials);
  }
}
