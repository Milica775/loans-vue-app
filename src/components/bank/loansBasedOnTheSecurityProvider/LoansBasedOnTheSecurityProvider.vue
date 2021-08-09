<template>
  <div class="bank-wrapper">
   <div class="bank-title">
      <h1 class="loans-title">Select loan based on the security provided!</h1>
    </div>
    <div class="single-loans">
           <div @click="goToSecuredLoans" class="left-single-loan security-loan">
          <h1 class="single-loan-title">Secured Loans</h1>
          <p class="single-loan-desc">These loans require the borrower to pledge collateral for the money being borrowed. In case the borrower is unable to repay the loan, the bank reserves the right to utilise the pledged collateral to recover the pending payment. The interest rate for such loans is much lower as compared to unsecured loans.


          </p>
        </div>

        <div @click="goToUnsecuredLoans" class="left-single-loan unsecurity-loan">
          <h1 class="single-loan-title">Unsecured Loans</h1>
          <p class="single-loan-desc">Unsecured loans are those that do not require any collateral for loan disbursement. The bank analyses the past relationship with the borrower, the credit score, and other factors to determine whether the loan should be given or not. The interest rate for such loans can be higher as there is no way to recover the loan amount if the borrower defaults.

          </p>
        </div>

    </div>
  </div>
  </div>
</template>

<script>
export default {
    methods: {
      goToSecuredLoans() {
        this.$router.push('/loans/securedLoans');
      },
      goToUnsecuredLoans() {
        this.$router.push('/loans/unsecuredLoans');
      }
    }

}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .bank-wrapper {
   width: 100%;
    height: 91.5vh;
    background: rgb(195, 178, 199);
    display: flex;
    flex-direction: column;
  }
   .loans-title {

      font-family: Georgia, serif;

    font-size: 35px;
    font-weight: bold;
    align-self: center;
    padding-top: 40px;
    padding-bottom: 10px;
    margin-bottom: 15px;

  }
   .bank-title {

      font-family: Georgia, serif;

    font-size: 35px;
    font-weight: bold;
    align-self: center;
    padding-top: 40px;
    padding-bottom: 10px;
    margin-bottom: 15px;

  }
  .single-loans {
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
    .left-single-loan {
    align-self: flex-start;
    width: 50%;
    height: 100%;
    border: 3px solid rgb(195, 178, 199);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.85;
  }
  .right-single-loan {
    align-self: flex-end;
    width: 50%;
    height: 100%;
    border: 3px solid rgb(195, 178, 199);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.85;
  }
  .single-loan-title {
        font-family: Georgia, serif;

    font-weight: bold;
    color: white;
    text-shadow: 2px 2px black;
  }
  .single-loan-desc {
    font-family: "Gill Sans Extrabold", sans-serif;
    text-align: center;
        font-weight: bold;
    width: 80%;
    font-size: 15px;
    color: white;
        text-shadow: 2px 2px black;

  }
  .security-loan {
      background-image: url("../../../assets/security-loan.jpg");

    background-repeat: no-repeat;
    background-size: cover;
  }
  .unsecurity-loan {
        background-image: url("../../../assets/unsecured-loan.jpg");

    background-repeat: no-repeat;
    background-size: cover;
  }

  .left-single-loan:hover {
    opacity: 100%;
    transition: 0.3s ease;
    cursor: pointer;
     }
       .right-single-loan:hover {
    opacity: 100%;
    transition: 0.3s ease;
    cursor: pointer;
  }
</style>
