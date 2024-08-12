import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    this.checkLoginStatus();
  }

  private checkLoginStatus() {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.isLoggedInSubject.next(loggedIn);
  }

  get isLoggedIn() {
    return this.isLoggedInSubject.asObservable();
  }

  login(username: string, password: string): boolean {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.username === username && user.password === password) {
        localStorage.setItem('isLoggedIn', 'true');
        this.isLoggedInSubject.next(true);
        return true;
      }
    }
    return false;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedInSubject.next(false);
  }
}
