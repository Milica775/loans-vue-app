<template>
 <b-modal id="bv-modal-example" v-model="showDeleteModal" hide-footer>

     <h3>Removing loan {{itemForDelete.label}}</h3>
     <p>Are you sure you want to delete ?</p>
     <button class="btn btn-primary" @click="confirmDelete(itemForDelete.id)">Yes</button>
          <button class="btn btn-secondary" @click="closeDeleteModal">No</button>

     <div>
     </div>
    </b-modal>
</template>

<script>
  export default {
    props: {
      showDeleteModal: Boolean,
      itemForDelete: Object
    },
    methods: {
      closeDeleteModal() {
        this.showDeleteModal = false;
        this.$emit('deleteDialogClosed', this.showDeleteModal);
      },
       confirmDelete(id)  {
        this.$store.dispatch("deleteGoldLoan", id);
        this.closeDeleteModal();
        this.$store.dispatch("getGoldLoansCollection");
 },
    },
    created() {
      console.log(this.itemForDelete);
    }
  };
</script>

<style scoped>
  @import '../../../assets/dialogs.css';
</style>
