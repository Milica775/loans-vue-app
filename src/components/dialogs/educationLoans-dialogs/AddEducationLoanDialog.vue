<template>
 <b-modal id="bv-modal-example" v-model="showAddModal" hide-footer>
<h2 class="add__modal-title">Add new Education Loan</h2>

 <h3 class="modal-content-APR">Label</h3>

  <input
  placeholder="Enter label"
   :maxlength="35"
   v-model="educationLoansAdded.label"
        type="text"
         class="form-control"
      />

 <h3 class="modal-content-APR">ARP interest range</h3>

  <input
  placeholder="Enter ARP interest range"
   :maxlength="25"
   v-model="educationLoansAdded.APRInterestRange"
        type="text"
         class="form-control"
      />

      <h3 class="modal-content-APR">Education Loans Image</h3>
      <img class="image-preview"
      :src="educationLoansAdded.src">
      <button
      @click="onPickFile()"
      class="upload-image-btn btn btn-primary">Upload Image</button>
      <input
      ref="fileInput"
      class="add-modal-image-btn"
      style="display: none"
      accept="image/*"
      type="file"
      @change="onFilePicked">

     <h3 class="modal-content-loanAmount">Loan amount</h3>
     <input
  placeholder="Enter loan amount"
   :maxlength="40"
   v-model="educationLoansAdded.loanAmount"
        type="text"
                 class="form-control"

      />

      </div>
   <h3 class="modal-content-loanTerm">Loan term</h3>
    <input
  placeholder="Enter loan term"
   :maxlength="40"
   v-model="educationLoansAdded.loanTerm"
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
        v-model="educationLoansAdded.conditions"
      />

<div class="delete-action-buttons">
      <button class="btn btn-primary" @click="confirmAdd(educationLoansAdded)">
        Confirm
      </button>
      <button class="btn btn-secondary" @click="closeAddModal">Cancel</button>
    </div>

    </b-modal>
</template>

<script>
export default {
  data() {
       return {
       previewImage: null,
       educationLoansAdded: {

       APRInterestRange: '',
       src: '',
       loanAmount: '',
       loanTerm: '',
       label: '',
       conditions:''

       }
       };
    },
  props: {
    showAddModal: Boolean,
  },
  methods: {
    onFilePicked(event) {
      const files = event.target.files;
      let fileName = files[0].name;
      if (fileName.lastIndexOf(".") <= 0) {
        alert("Please provide image");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.educationLoansAdded.src = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.previewImage = files[0];
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    async confirmAdd() {
      if(!this.previewImage) {
        alert('No image was selected!');
        return
      }
      const educationLoan = {
        label: this.educationLoansAdded.label,
        APRInterestRange: this.educationLoansAdded.APRInterestRange,
        src: this.previewImage,
        loanAmount: this.educationLoansAdded.loanAmount,
        loanTerm: this.educationLoansAdded.loanTerm,
        conditions: this.educationLoansAdded.conditions
      }
      await this.$store.dispatch('createEducationLoan', educationLoan);
      this.$store.dispatch('getEducationLoansCollection');
      this.closeAddModal();
    },
    closeAddModal() {
      this.showAddModal = false;
      this.$emit('addDialogClosed', this.showAddModal);
    },
  },
};
</script>
<style scoped>
  @import '../../../assets/dialogs.css';
</style>
