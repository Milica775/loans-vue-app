<template>
  <div class="bank-wrapper">
   <div class="bank-title">
      <h1 class="loans-title">Select loan based on the purpose!</h1>
    </div>
    <div class="single-loans">
        <div @click="goToEducationLoans" class="left-single-loan education-loan">
          <h1 class="single-loan-title">Education loans</h1>
          <p class="single-loan-desc">Education loans are financing instruments that aid the borrower pursue education. The course can either be an undergraduate degree, a postgraduate degree, or any other diploma/certification course from a reputed institution/university. You must have the admission pass provided by the institution to get the financing. The financing is available both for domestic and international courses.

          </p>
        </div>
        <div @click="goToPersonalLoans" class="right-single-loan personal-loan">
          <h1 to="/recipes/veggie-recipes" class="single-loan-title">Pesonal loans</h1>
          <p class="single-loan-desc">Whenever there is a liquidity issue, you can go for a personal loan. The purpose of taking a personal loan can be anything from repaying an old debt, going on vacation, funding for the downpayment of a house/car, and medical emergency to purchasing big-ticket furniture or gadgets. Personal loans are offered based on the applicant’s past relationship with the lender and credit score.
          </p>
        </div>
        <div @click="goToVehicleLoans" class="left-single-loan vehicle-loan">
          <h1 class="single-loan-title">Vehicle loans</h1>
          <p class="single-loan-desc">Vehicle loans finance the purchase of two-wheeler and four-wheeler vehicles. Further, the four-wheeled vehicle can be a new one or a used one. Based on the on-road price of the vehicle, the loan amount will be determined by the lender. You may have to get ready with a downpayment to get the vehicle as the loan rarely provides 100% financing. The vehicle will be owned by the lender until full repayment is made.
          </p>
        </div>
        <div @click="goToHomeLoans" class="right-single-loan home-loan">
          <h1 class="single-loan-title">Home loans</h1>
          <p class="single-loan-desc">Home loans are dedicated to receiving funds in order to purchase a house/flat, construct a house, renovate/repair an existing house, or purchase a plot for the construction of a house/flats. In this case, the property will be held by the lender and the ownership will be transferred to the rightful owner upon completion of repayments.
          </p>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    methods: {
      goToHomeLoans() {
        this.$router.push('/loans/homeLoans');
      },
      goToEducationLoans() {
        this.$router.push('/loans/educationLoans');
      },
      goToPersonalLoans() {
        this.$router.push('/loans/personalLoans');
      },
      goToVehicleLoans() {
        this.$router.push('/loans/vehicleLoans');
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
   .bank-title {
    font-family: 'Indie Flower', cursive;
    font-size: 35px;
    font-weight: bold;
    align-self: center;
    padding-top: 40px;
    padding-bottom: 10px;
    margin-bottom: 15px;
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
    height: 50%;
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
    height: 50%;
    border: 3px solid rgb(195, 178, 199);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.85;
  }
  .single-loan-title {
    font-family: "Gill Sans Extrabold", sans-serif;
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
  .education-loan {
      background-image: url("../../../assets/education-loan.jpg");

    background-repeat: no-repeat;
    background-size: cover;
  }
  .vehicle-loan {
        background-image: url("../../../assets/vehicle-loan.jpg");

    background-repeat: no-repeat;
    background-size: cover;
  }
  .personal-loan {
          background-image: url("../../../assets/personal-loan.jpg");

    background-repeat: no-repeat;
    background-size: cover;
  }
  .home-loan {
          background-image: url("../../../assets/home-loan.jpg");

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
