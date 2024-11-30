import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  password: string = ''; // Bind the input value
  isButtonDisabled: boolean = false;
  isSpinnerVisible: boolean = false;
  buttonText: string = 'Enter';

  constructor(private router: Router) {}

  onLogin() {
    this.isButtonDisabled = true;
    this.isSpinnerVisible = true;

    setTimeout(() => {
      this.isSpinnerVisible = false;

      if (this.password === 'raymond7') {
        // Correct password logic
        localStorage.setItem('loggedin', 'true');
        this.router.navigate(['/home']); // Route to home page
      } else {
        // Incorrect password logic
        this.buttonText = 'Incorrect Password';
        setTimeout(() => {
          this.buttonText = 'Enter'; // Reset button text after showing error
          this.isButtonDisabled = false;
        }, 2000);
      }
    }, 2000);
  }
}
