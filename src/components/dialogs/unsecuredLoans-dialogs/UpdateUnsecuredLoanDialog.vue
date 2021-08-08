<template>
 <b-modal id="bv-modal-example" v-model="showUpdateModal" hide-footer>

<h2 class="add__modal-title">Update Unsecured Loan</h2>
<div class="modal-content">
<img :src="itemForUpdate.src" class="preview-image" />

 <h3 class="modal-content-APR">Label</h3>

  <input
   :maxlength="25"
   v-model.lazy="itemForUpdate.label"
        type="text"
         class="form-control"
      />

 <h3 class="modal-content-APR">ARP interest  range</h3>

  <input
  placeholder="Enter ARP interest range"
   :maxlength="25"
   v-model.lazy="itemForUpdate.APRInterestRange"
        type="text"
         class="form-control"
      />


     <h3 class="modal-content-loanAmount">Loan amount</h3>
     <input
  placeholder="Enter loan amount"
   :maxlength="40"
   v-model.lazy="itemForUpdate.loanAmount"
        type="text"
                 class="form-control"

      />

      </div>
   <h3 class="modal-content-loanTerm">Loan term</h3>
    <input
  placeholder="Enter loan term"
   :maxlength="40"
   v-model.lazy="itemForUpdate.loanTerm"
        type="text"
                 class="form-control"

      />
</div>

 <h3 class="modal-content-APR">Conditions</h3>

   <textarea
        placeholder="Enter conditions"
        class="form-control"
        name="conditions"
        id="conditions"
        :maxlength="1350"
        v-model.lazy="itemForUpdate.conditions"
      />
      </div>

       <div class="delete-action-buttons">
      <button class="btn btn-primary" @click="confirmUpdate(itemForUpdate)">
        Confirm
      </button>
      <button class="btn btn-secondary" @click="closeUpdateModal">Cancel</button>
    </div>
  </b-modal>
</template>

<script>
  export default {
    props: {
      showUpdateModal: Boolean,
      itemForUpdate: Object,
      copyOfItemForUpdate: Object
    },
    methods: {
      closeUpdateModal() {
        Object.assign(this.itemForUpdate, this.copyOfItemForUpdate);
        this.showUpdateModal = false;
        this.$emit('updateDialogClosed', this.showUpdateModal);
        this.$emit('originalLoan', this.itemForUpdate);
      },
      async confirmUpdate() {
        await this.$store.dispatch("updateUnsecuredLoan", this.itemForUpdate);
        this.closeUpdateModal();
        this.$store.dispatch("getUnsecuredLoansCollection");
      },
    }
  };
</script>

<style scoped>
  @import '../../../assets/dialogs.css';
</style>
