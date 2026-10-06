/* =================================
   PAGE 2 — NAME VERIFICATION
================================= */

.name-section {
  width: 50%;
  margin: 38px auto 0;
}


.name-section h1 {
  text-align: center;

  color: #35372f;

  font-size: clamp(18px, 1.6vw, 22px);

  line-height: 1.2;

  font-weight: 700;

  margin-bottom: 28px;
}


/* Form */

#nameForm {
  width: 100%;
}


/* Input group */

.input-group {
  width: 100%;
  margin-bottom: 20px;
}


.input-group label {
  display: block;

  color: #35372f;

  font-size: 14px;

  font-weight: 600;

  margin-bottom: 7px;
}


.input-group input {
  width: 100%;

  height: 48px;

  padding: 0 16px;

  border: 1.5px solid #35372f;

  border-radius: 10px;

  background: #ffffff;

  color: #35372f;

  font-family: "Poppins", sans-serif;

  font-size: 14px;

  outline: none;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}


.input-group input:focus {
  border-color: #9a2327;

  box-shadow:
    0 0 0 3px rgba(154, 35, 39, 0.10);
}


.input-group input::placeholder {
  color: #999999;
}


/* =================================
   VERIFICATION BOX
================================= */

.verification-box {
  width: 100%;

  min-height: 44px;

  margin-top: 8px;

  padding: 9px 15px;

  border: 1.5px solid #9a2327;

  border-radius: 22px;

  display: flex;

  align-items: center;

  justify-content: center;

  text-align: center;

  color: #9a2327;

  background: #ffffff;

  font-size: 13px;

  font-weight: 600;

  transition:
    background 0.2s ease,
    color 0.2s ease;
}


/* Successful verification */

.verification-box.success {
  background: #9a2327;

  color: #ffffff;
}


/* =================================
   SUBMIT BUTTON
================================= */

.submit-button {
  width: 100%;

  min-height: 48px;

  margin-top: 22px;

  border: none;

  border-radius: 12px;

  background: #9a2327;

  color: #ffffff;

  font-family: "Poppins", sans-serif;

  font-size: 17px;

  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}


.submit-button:hover {
  background: #7f1d21;

  transform: translateY(-1px);

  box-shadow:
    0 6px 16px rgba(154, 35, 39, 0.18);
}


.submit-button:active {
  transform: translateY(0);
}


/* =================================
   PAGE 2 — TABLET
================================= */

@media (max-width: 900px) {

  .name-section {
    width: 65%;
  }

}


/* =================================
   PAGE 2 — MOBILE
================================= */

@media (max-width: 650px) {

  .name-section {
    width: 100%;

    margin-top: 30px;
  }


  .name-section h1 {
    font-size: 18px;

    margin-bottom: 25px;
  }


  .input-group {
    margin-bottom: 17px;
  }


  .input-group input {
    height: 47px;
  }


  .verification-box {
    min-height: 44px;

    font-size: 12px;
  }


  .submit-button {
    min-height: 48px;

    font-size: 16px;
  }

}