export const loanMixin = {
  data() {
    return {
      filterText: '',
      itemForDelete: {},
      itemForInfo: {},
      itemForUpdate: {},
      showDeleteModal: false,
      showInfoModal: false,
      showUpdateModal: false,
      showAddModal: false,
      showAddModal: false,
      copyOfItemForUpdate: {}
    };
  },
  methods: {
    onDeleteIcon(loan) {
      this.itemForDelete = loan;
      this.showDeleteModal = true;
    },
    onUpdateIcon(loan) {
      this.itemForUpdate = loan;
      this.showUpdateModal = true;
      this.copyOfItemForUpdate = Object.assign({}, loan);
    },
    onAddIcon() {
      this.showAddModal = true;
    },
    showInfo(loan) {
      this.itemForInfo = loan;
      this.showInfoModal = true;
    },
    loggedUser(loan) {
      let userId = this.userProfile.id;
      return userId===loan.userId ? true : false;
    }
  }
}
