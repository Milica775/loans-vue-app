<template>
  <div class="bank-wrapper">
   <div class="bank-title">
      <h1 class="display-4">Select one of three loan types!</h1>
    </div>

<div class="cards">
  <div class="card"  @click="goToSecurityProvidedLoans"><h3 class="display">Based on the Security Provided</h3><p class="display">Secured loans are protected by an asset. The item purchased, such as a home or a car, can be used as collateral.  </p></div>
  <div class="card" @click="goToLoansBasedOnPurpose"><h3 class="display">Based on the Purpose</h3><p class="display">A loan that is backed by securities and that is used to buy other securities under certain government regulations.</p></div>
  <div class="card" @click="goToLoansBasedOnPledgedAssets"><h3 class="display">Based on the Pledged Assets</h3><p class="display">A pledged-asset loan allows the borrower to retain ownership of the valuable possession.</p></div>

</div>

  </div>
</template>

<script>
export default {
    methods: {
      goToLoansBasedOnPurpose() {
        this.$router.push('/loans/loansBasedOnPurpose');
      },
      goToLoansBasedOnPledgedAssets() {
        this.$router.push('/loans/loansBasedOnPledgedAssets');
      },
      goToSecurityProvidedLoans() {
        this.$router.push('/loans/securityProvidedLoans');
      }
    }

}
</script>

<style scoped>


html { font-size: 22px; }
body { padding: 16rem; }

.card {
  background-color: dodgerblue;
  color: black;
  padding: 15rem;
  height: 10rem;
}

.cards {
  max-width: 1200px;
  padding: -550px;
  margin: 0 auto 500px;
  display: grid;
  grid-gap: 1rem;
}

/* Screen larger than 600px? 2 column */
@media (min-width: 600px) {
  .cards { grid-template-columns: repeat(2, 1fr); }
}

/* Screen larger than 900px? 3 columns */
@media (min-width: 900px) {
  .cards { grid-template-columns: repeat(3, 1fr); }
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .bank-wrapper {
   width: 100%;

    background: rgb(195, 178, 199);;
    display: flex;
    flex-direction: column;
    justify-content: center;
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


  * {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 20px;
}

/* Remove extra left and right margins, due to padding */
.row {margin: 50px 400px 200px 400px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 5px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}
.display-4 {
  font-family: Georgia, serif;


}
.display {
  font-family: Georgia, serif;


}
</style>
