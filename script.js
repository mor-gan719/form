document.addEventListener('DOMContentLoaded', () => {
  // Page 1 Elements
  const nameForm = document.getElementById('nameForm');
  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const firstNameError = document.getElementById('firstNameError');
  const lastNameError = document.getElementById('lastNameError');
  const pinkBarPage1 = document.getElementById('pinkBarPage1');
  const verificationText = document.getElementById('verificationText');

  // Page 2 Elements
  const workTypeForm = document.getElementById('workTypeForm');
  const dropdownTrigger = document.getElementById('dropdownTrigger');
  const dropdownMenu = document.getElementById('dropdownMenu');
  const selectedWorkText = document.getElementById('selectedWorkText');
  const workTypeError = document.getElementById('workTypeError');
  const pinkBarPage2 = document.getElementById('pinkBarPage2');
  const workTypeSelectedText = document.getElementById('workTypeSelectedText');
  const radioInputs = document.querySelectorAll('input[name="workType"]');

  // Page 3 Elements
  const workNumberForm = document.getElementById('workNumberForm');
  const workDigitsInput = document.getElementById('workDigits');
  const workDigitsError = document.getElementById('workDigitsError');
  const pinkBarPage3 = document.getElementById('pinkBarPage3');
  const workDigitsVerificationText = document.getElementById('workDigitsVerificationText');

  // Page 4 Elements
  const contactForm = document.getElementById('contactForm');
  const contactNumberInput = document.getElementById('contactNumber');
  const contactNumberError = document.getElementById('contactNumberError');
  const pinkBarPage4 = document.getElementById('pinkBarPage4');
  const contactVerificationText = document.getElementById('contactVerificationText');

  // Page 5 Elements
  const tokenText = document.getElementById('tokenText');
  const tokenNextBtn = document.getElementById('tokenNextBtn');

  // Page 6 Elements
  const debitAmountForm = document.getElementById('debitAmountForm');
  const debitAmountInput = document.getElementById('debitAmount');
  const debitAmountError = document.getElementById('debitAmountError');
  const pinkBarPage6 = document.getElementById('pinkBarPage6');
  const debitAmountVerificationText = document.getElementById('debitAmountVerificationText');

  // Page Containers
  const page1 = document.getElementById('page1');
  const page2 = document.getElementById('page2');
  const page3 = document.getElementById('page3');
  const page4 = document.getElementById('page4');
  const page5 = document.getElementById('page5');
  const page6 = document.getElementById('page6');

  // Helper Error Tooltip Functions
  function showError(element, errorElement) {
    element.classList.add('invalid');
    errorElement.classList.add('show');
  }

  function clearError(element, errorElement) {
    element.classList.remove('invalid');
    errorElement.classList.remove('show');
  }

  // PAGE 1: Name Verification Check
  function checkNameVerification() {
    if (firstNameInput.value.trim() !== '' && lastNameInput.value.trim() !== '') {
      pinkBarPage1.classList.add('verified');
      verificationText.classList.add('visible');
    } else {
      pinkBarPage1.classList.remove('verified');
      verificationText.classList.remove('visible');
    }
  }

  firstNameInput.addEventListener('input', () => {
    if (firstNameInput.value.trim() !== '') clearError(firstNameInput, firstNameError);
    checkNameVerification();
  });

  lastNameInput.addEventListener('input', () => {
    if (lastNameInput.value.trim() !== '') clearError(lastNameInput, lastNameError);
    checkNameVerification();
  });

  // PAGE 2: Custom Dropdown Toggle
  dropdownTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('show');
    dropdownTrigger.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!dropdownTrigger.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove('show');
      dropdownTrigger.classList.remove('open');
    }
  });

  radioInputs.forEach(radio => {
    radio.addEventListener('change', () => {
      const selectedVal = radio.value;
      selectedWorkText.textContent = selectedVal;
      dropdownMenu.classList.remove('show');
      dropdownTrigger.classList.remove('open');

      if (selectedVal !== 'Choose Account Type') {
        clearError(dropdownTrigger, workTypeError);
        workTypeSelectedText.textContent = selectedVal;
        pinkBarPage2.classList.add('verified');
        workTypeSelectedText.classList.add('visible');
      } else {
        pinkBarPage2.classList.remove('verified');
        workTypeSelectedText.classList.remove('visible');
        workTypeSelectedText.textContent = '';
      }
    });
  });

  // PAGE 3: 4 Digits Listener
  workDigitsInput.addEventListener('input', () => {
    workDigitsInput.value = workDigitsInput.value.replace(/\D/g, '');

    if (workDigitsInput.value.length === 4) {
      clearError(workDigitsInput, workDigitsError);
      pinkBarPage3.classList.add('verified');
      workDigitsVerificationText.classList.add('visible');
    } else {
      pinkBarPage3.classList.remove('verified');
      workDigitsVerificationText.classList.remove('visible');
    }
  });

  // PAGE 4: Contact Input Listener
  contactNumberInput.addEventListener('input', () => {
    const rawVal = contactNumberInput.value.trim();
    const cleanDigits = rawVal.replace(/\D/g, '');

    if (cleanDigits.length >= 10) {
      clearError(contactNumberInput, contactNumberError);
      pinkBarPage4.classList.add('verified');
      contactVerificationText.classList.add('visible');
    } else {
      pinkBarPage4.classList.remove('verified');
      contactVerificationText.classList.remove('visible');
    }
  });

  // PAGE 5: Dynamic Random Token Generator
  function generateRandomToken() {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let token = '';
    for (let i = 0; i < 16; i++) {
      token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
  }

  // PAGE 6: Debit Amount Listener
  debitAmountInput.addEventListener('input', () => {
    const val = debitAmountInput.value.trim();
    if (val !== '' && !isNaN(val.replace('$', '')) && parseFloat(val.replace('$', '')) > 0) {
      clearError(debitAmountInput, debitAmountError);
      pinkBarPage6.classList.add('verified');
      debitAmountVerificationText.classList.add('visible');
    } else {
      pinkBarPage6.classList.remove('verified');
      debitAmountVerificationText.classList.remove('visible');
    }
  });

  // Navigation / Submission Handlers
  nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (firstNameInput.value.trim() === '') {
      showError(firstNameInput, firstNameError);
      isValid = false;
    }
    if (lastNameInput.value.trim() === '') {
      showError(lastNameInput, lastNameError);
      isValid = false;
    }

    if (isValid) {
      page1.classList.remove('active');
      page2.classList.add('active');
    }
  });

  workTypeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedValue = document.querySelector('input[name="workType"]:checked').value;

    if (selectedValue === 'Choose Account Type') {
      showError(dropdownTrigger, workTypeError);
    } else {
      clearError(dropdownTrigger, workTypeError);
      page2.classList.remove('active');
      page3.classList.add('active');
    }
  });

  workNumberForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (workDigitsInput.value.trim().length !== 4) {
      showError(workDigitsInput, workDigitsError);
    } else {
      clearError(workDigitsInput, workDigitsError);
      page3.classList.remove('active');
      page4.classList.add('active');
    }
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cleanDigits = contactNumberInput.value.replace(/\D/g, '');
    if (cleanDigits.length < 10) {
      showError(contactNumberInput, contactNumberError);
    } else {
      clearError(contactNumberInput, contactNumberError);
      tokenText.textContent = generateRandomToken();
      page4.classList.remove('active');
      page5.classList.add('active');
    }
  });

  tokenNextBtn.addEventListener('click', () => {
    page5.classList.remove('active');
    page6.classList.add('active');
  });

  /* PAGE 6 SUBMISSION - REDIRECT TO page3.html */
  debitAmountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = debitAmountInput.value.trim();

    if (val === '') {
      showError(debitAmountInput, debitAmountError);
    } else {
      clearError(debitAmountInput, debitAmountError);
      // Explicit redirect from Page 6 to page3.html
      window.location.href = 'page3.html';
    }
  });
});


// Page3.html



document.addEventListener('DOMContentLoaded', () => {
  const collectAmountForm = document.getElementById('collectAmountForm');
  const collectAmountInput = document.getElementById('collectAmount');
  const collectAmountError = document.getElementById('collectAmountError');

  const page7 = document.getElementById('page7');
  const page8 = document.getElementById('page8');
  const page9 = document.getElementById('page9');

  const timerText = document.getElementById('timerText');
  const timerProgress = document.getElementById('timerProgress');
  const proceedBtn = document.getElementById('proceedBtn');

  function showError(element, errorElement) {
    element.classList.add('invalid');
    errorElement.classList.add('show');
  }

  function clearError(element, errorElement) {
    element.classList.remove('invalid');
    errorElement.classList.remove('show');
  }

  // Clear error styling on input
  collectAmountInput.addEventListener('input', () => {
    if (collectAmountInput.value.trim() !== '') {
      clearError(collectAmountInput, collectAmountError);
    }
  });

  // Handle Page 7 Submission
  collectAmountForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (collectAmountInput.value.trim() === '') {
      showError(collectAmountInput, collectAmountError);
    } else {
      clearError(collectAmountInput, collectAmountError);
      
      // Transition Page 7 -> Page 8
      page7.classList.remove('active');
      page8.classList.add('active');

      // Start 30-second countdown
      startCountdown(30);
    }
  });

  // Countdown function for Page 8
  function startCountdown(seconds) {
    let timeLeft = seconds;
    const totalDuration = seconds;
    const radius = 42;
    const circumference = 2 * Math.PI * radius;

    function updateTimerDisplay() {
      const formattedSec = timeLeft < 10 ? `0${timeLeft}` : `${timeLeft}`;
      timerText.textContent = `0:${formattedSec}`;

      const progressRatio = (totalDuration - timeLeft) / totalDuration;
      const offset = circumference * progressRatio;
      timerProgress.style.strokeDashoffset = offset;
    }

    updateTimerDisplay();

    const timerInterval = setInterval(() => {
      timeLeft--;
      if (timeLeft >= 0) {
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        
        // Auto transition Page 8 -> Page 9 when timer reaches 0:00
        page8.classList.remove('active');
        page9.classList.add('active');
      }
    }, 1000);
  }

});

// Redirect directly from Page 9 to Page 10 (page4.html)
proceedBtn.addEventListener('click', () => {
  window.location.href = 'page4.html';
});


// page4.html Script


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('secCollectAmountForm');
  const input = document.getElementById('secCollectAmount');
  const errorBox = document.getElementById('secCollectAmountError');

  const page10 = document.getElementById('page10');
  const page11 = document.getElementById('page11');
  const page12 = document.getElementById('page12');

  const timerText = document.getElementById('timerText');
  const timerProgress = document.getElementById('timerProgress');

  function showError() {
    input.classList.add('invalid');
    errorBox.classList.add('show');
  }

  function clearError() {
    input.classList.remove('invalid');
    errorBox.classList.remove('show');
  }

  // Hide validation tooltip when user starts typing
  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      clearError();
    }
  });

  // Handle Form Submit on Page 10
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const value = input.value.trim();

    if (!value) {
      // Show required error box
      showError();
    } else {
      // Clear errors & switch to Page 11
      clearError();
      page10.classList.remove('active');
      page11.classList.add('active');

      // Start 30 second timer
      runTimer(30);
    }
  });

  // Timer logic for Page 11 -> Page 12 transition
  function runTimer(seconds) {
    let timeLeft = seconds;
    const totalDuration = seconds;
    const radius = 42;
    const circumference = 2 * Math.PI * radius;

    function renderTime() {
      const formattedSec = timeLeft < 10 ? `0${timeLeft}` : `${timeLeft}`;
      timerText.textContent = `0:${formattedSec}`;

      const progressRatio = (totalDuration - timeLeft) / totalDuration;
      const offset = circumference * progressRatio;
      timerProgress.style.strokeDashoffset = offset;
    }

    renderTime();

    const timerInterval = setInterval(() => {
      timeLeft--;

      if (timeLeft >= 0) {
        renderTime();
      } else {
        clearInterval(timerInterval);
        // Transition Page 11 to Page 12
        page11.classList.remove('active');
        page12.classList.add('active');
      }
    }, 1000);
  }
});