import {Injectable} from '@angular/core';
import {FbAuthResponse, User} from '../shared/shared';
import {environment} from '../../environments/environment';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';5
import {Router} from '@angular/router';

@Injectable()

export class AuthService {

  public error$: Subject<string> = new Subject<string>();

// --------------------------------------------------------------------------------------------------
  constructor(public http: HttpClient) {
  }
  login(user: User) {
    user.returnSecureToken = true;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }

  private handleError(error: HttpErrorResponse) {
    const {message} = error.error.error;
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Такого email не существует');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Пароль неверен');
        break;
      case 'INVALID_EMAIL':
        this.error$.next('Неверный email');
        break;
    }
    return throwError(error)
  }

  private setToken(response: FbAuthResponse): any {
    if (response) {
      const expDate: any = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    } else {
      localStorage.removeItem('fb-token');
      localStorage.removeItem('fb-token-exp');
    }
  }

  get token(): any {
    const expDate: any = new Date(localStorage.getItem('fb-token-exp'));
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('fb-token');
  }


  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }




}
