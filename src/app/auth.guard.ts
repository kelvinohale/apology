import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('loggedin') === 'true';

    if (!isLoggedIn) {
      // Redirect to the login page if not logged in
      this.router.navigate(['/login']);
      return false;
    }

    return true; // Allow access if logged in
  }
}
