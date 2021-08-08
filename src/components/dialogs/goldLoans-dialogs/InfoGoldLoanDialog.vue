<template>

 <b-modal id="bv-modal-example" v-model="showInfoModal" hide-footer>
    <div class="head-dialog-wrapper">
    <h1>{{ itemForInfo.label }}</h1>
          <hr />
          </div>
    <p> <b>Amount:</b> {{ itemForInfo.loanAmount }}</p>
        <p> <b>Payment period:</b> {{ itemForInfo.loanTerm }}</p>
    <p> <b>APR interest range:</b> {{ itemForInfo.APRInterestRange }}</p>
    <p> <b>Conditions:</b> {{ itemForInfo.conditions }}</p>
        <p> <b>User:</b> {{ itemForInfo.firstName }} {{ itemForInfo.lastName }}</p>
    <div class="delete-action-buttons">
      <button class="btn1" @click="closeInfoModal">Close</button>
    </div>


</b-modal>

</template>

<script>
  export default {
    props: {
      showInfoModal: Boolean,
      itemForInfo: Object
    },
    methods: {
      closeInfoModal() {
        this.showInfoModal=false;
        this.$emit('infoDialogClosed', this.showInfoModal);
      }
    },
    destroyed() {
      this.closeInfoModal();
    }
  };
</script>

<style scoped>
  @import '../../../assets/dialogs.css';
</style>
