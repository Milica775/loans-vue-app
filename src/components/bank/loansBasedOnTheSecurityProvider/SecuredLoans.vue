<template>
  <div class="loans-wrapper">



    <div class="search-bar-wrapper">
      <input
        class="search-bar"
        v-model="filterText"
        placeholder="Search for Secured Loans..."
        type="text">
    </div>

      <div v-if="isLoggedIn" class="add-secured-loans-button-wrapper">
        <button @click="onAddIcon" type="button" class="btn btn-secondary1">
          Add new Secured loan
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>
        </button>
      </div>


     <div class="all-loans">
      <div
        v-for="loan in filteredSecuredLoans"
        :key="loan.id"
        class="single-loan-card">
        <h1 class="loan-label">{{ loan.label }}</h1>
        <br />
        <img class="loan-img" :src="loan.src" />
        <h4 @click="showInfo(loan)" class="loan-show-desc">
          Click here to read secured loan details!
        </h4>
        <div v-if="loggedUser(loan)" class="action-buttons">
          <svg
            @click="onUpdateIcon(loan)"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
            />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
          <svg
            @click="onDeleteIcon(loan)"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
            />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </div>
         </div>
    </div>
<app-delete-securedLoan-loan-dialog
      :showDeleteModal="showDeleteModal"
      :itemForDelete="itemForDelete"
      @deleteDialogClosed="showDeleteModal=$event"
      v-model="showDeleteModal">
    </app-delete-securedLoan-loan-dialog>
    <app-info-securedLoan-loan-dialog
      :showInfoModal="showInfoModal"
      :itemForInfo="itemForInfo"
      @infoDialogClosed="showInfoModal=$event"
      v-model="showInfoModal">
    </app-info-securedLoan-loan-dialog>
    <app-update-securedLoan-loan-dialog
      :showUpdateModal="showUpdateModal"
      :itemForUpdate="itemForUpdate"
      :copyOfItemForUpdate="copyOfItemForUpdate"
      @originalLoan="itemForUpdate=$event"
      @updateDialogClosed="showUpdateModal=$event"
      v-model="showUpdateModal">
    </app-update-securedLoan-loan-dialog>
    <app-add-securedLoan-loan-dialog
      :showAddModal="showAddModal"
      @addDialogClosed="showAddModal=$event"
      v-model="showAddModal">
    </app-add-securedLoan-loan-dialog>
  </div>
</template>

<script>
import DeleteSecuredLoanDialog from '../../dialogs/securedLoans-dialogs/DeleteSecuredLoanDialog.vue';
import UpdateSecuredLoanDialog from '../../dialogs/securedLoans-dialogs/UpdateSecuredLoanDialog.vue';
import AddSecuredLoanDialog from '../../dialogs/securedLoans-dialogs/AddSecuredLoanDialog.vue';
import InfoSecuredLoanDialog from '../../dialogs/securedLoans-dialogs/InfoSecuredLoanDialog.vue';
import { mapState } from "vuex";
import { userMixin } from "../../../mixins/userMixin";
import { loanMixin } from "../../../mixins/loanMixin";
export default {
  components: {
    'app-delete-securedLoan-loan-dialog': DeleteSecuredLoanDialog,
    'app-update-securedLoan-loan-dialog': UpdateSecuredLoanDialog,
    'app-add-securedLoan-loan-dialog': AddSecuredLoanDialog,
    'app-info-securedLoan-loan-dialog': InfoSecuredLoanDialog
  },
  computed: {
    ...mapState(["securedLoansCollection"]),
    filteredSecuredLoans() {
      return this.securedLoansCollection.filter((item) => {
         let loanAmount = item.loanAmount.toLowerCase();
        return loanAmount.match(this.filterText);
      })
    },
    // ! umesto computed-a, sada koristimo mixin iz userMixin-a
    // isLoggedIn() {
    //   return Object.keys(this.userProfile).length > 1
    // }
  },
  mixins: [
    userMixin,
    loanMixin
  ],
  mounted() {
    this.$store.dispatch("getSecuredLoansCollection");
  },
};
</script>

<style scoped>
 @import '../../../assets/loan.css';
</style>
