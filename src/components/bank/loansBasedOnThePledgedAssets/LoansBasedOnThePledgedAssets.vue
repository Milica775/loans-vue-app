<template>
  <div class="bank-wrapper">
   <div class="bank-title">
      <h1 class="loans-title">Select loan based on the pledged assets!</h1>
    </div>
    <div class="single-loans">
           <div @click="goToGoldLoans" class="left-single-loan gold-loan">
          <h1 class="single-loan-title">Gold Loan</h1>
          <p class="single-loan-desc">Many financiers and lenders offer cash when the borrower pledges physical gold, may it be jewellery or gold bars/coins. The lender weighs the gold and calculates the amount offered based on several checks of purity and other things. The money can be utilised for any purpose.

The loan must be repaid in monthly instalments so the loan can be cleared by the end of the tenure and the gold can be taken back to custody by the borrower. If the borrower fails to make the repayments on time, the lender reserves the right to take over the gold to recover the losses.

          </p>
        </div>

        <div @click="goToLoansAgainstAssets" class="left-single-loan loan-against-assets">
          <h1 class="single-loan-title">Loan Against Assets</h1>
          <p class="single-loan-desc">Similar to pledging gold, individuals and businesses pledge property, insurance policies, FD certificates, mutual funds, shares, bonds, and other assets in order to borrow money. Based on the value of the pledged assets, the lender will offer a loan with some margin at hand.

The borrower needs to make repayments on time so that he/she can get custody of the pledged assets at the end of the tenure. Failing to do so, the lender can sell the assets to recover the defaulted money.

          </p>
        </div>

    </div>
  </div>
  </div>
</template>

<script>
export default {
    methods: {
      goToGoldLoans() {
        this.$router.push('/loans/goldLoans');
      },
      goToLoansAgainstAssets() {
        this.$router.push('/loans/loansAgainstAssets');
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
  .gold-loan {
      background-image: url("../../../assets/gold-loan.jpg");

    background-repeat: no-repeat;
    background-size: cover;
  }
  .loan-against-assets {
        background-image: url("../../../assets/loan-against-assets.jpg");

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
