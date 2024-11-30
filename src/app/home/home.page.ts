import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router) {
    // Check if the user is logged in
    const loggedIn = localStorage.getItem('loggedin');
    if (loggedIn !== 'true') {
      // Redirect to the login page if not logged in
      this.router.navigate(['/login']);
    }
  }
  showContinue = false;
  isOverlayActive = false;
  isButtonDisabled = false; // To disable the button
  isSpinnerVisible = false; // To show or hide the spinner
  buttonText = 'Click to write it together'; // Default button text
  showContinueSpinner = false;
  showContinueBtn = true;
  showHeading = false;
  showRest = false;

  ngOnInit() {
    setTimeout(() => {
      this.showHeading = true;
    }, 1500);
  }

  // startTypingAnimation() {
  //   let currentIndex = 0;

  //   const typingInterval = setInterval(() => {
  //     this.typingText += this.fullText[currentIndex];
  //     currentIndex++;

  //     this.cdr.detectChanges(); // Ensure the DOM updates with each new character

  //     if (currentIndex === this.fullText.length) {
  //       clearInterval(typingInterval); // Stop typing once the text is fully displayed
  //     }
  //   }, 100); // Typing speed (100ms per character)
  // }

  onButtonClick() {
    // Step 1: Disable the button and show the spinner
    this.isButtonDisabled = true;
    this.isSpinnerVisible = true;

    // Step 2: After 2 seconds, update the button text and hide the spinner
    setTimeout(() => {
      this.isSpinnerVisible = false;
      this.buttonText = 'Thank You!';
    }, 2000);

    // Step 3: After 3 seconds, show the overlay (modal)
    setTimeout(() => {
      this.toggleOverlay();
    }, 3000);

    setTimeout(() => {
      // Show the pop-up alert
      alert('Now get your ass to my DM lol');
    }, 6500);
  }

  toggleOverlay() {
    this.isOverlayActive = !this.isOverlayActive;
  }

  showBody() {
    this.showContinueSpinner = true;
    this.showRest = true;

    setTimeout(() => {
      this.showContinue = true;
      this.showContinueSpinner = false;
      this.showContinueBtn = false;
    }, 2000);
  }
}
