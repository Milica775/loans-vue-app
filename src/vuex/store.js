import Vue from "vue";
import Vuex from "vuex";
import * as fb from "../firebase";
import router from "../router/router";

Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {
    userProfile: {},
    securedLoansCollection: [],
    unsecuredLoansCollection: [],
    goldLoansCollection: [],
    loansAgainstAssetsCollection: [],
    educationLoansCollection: [],
    homeLoansCollection: [],
    personalLoansCollection: [],
    vehicleLoansCollection: [],
    authorized: false
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
      state.userProfile['id'] = fb.auth.currentUser.uid;
      console.log(state.userProfile);
    }
  },
  actions: {

    async login({dispatch}, form) {

      // loginovanje korisnika
      const {user} = await fb.auth.signInWithEmailAndPassword(form.email, form.password);

      // vracanje korisnika i setovanje u state-u
      dispatch('fetchUserProfile', user);

      router.push('/');

    },

    async logout({state, commit}) {

      // odjavimo korisnika sa fb
      await fb.auth.signOut();

      // resetujemo
      // commit('setUserProfile', {});
      state.userProfile = {};
      router.push('/login');

    },

    async fetchUserProfile({commit}, user) {

      // vracanje korisnika sa fb
      const userProfile = await fb.usersCollection.doc(user.uid).get();

      // postavljanje korisnika u state-u
      commit('setUserProfile', userProfile.data());

    },

    async register({dispatch}, form) {

      // registrovanje user-a
      const {user} = await fb.auth.createUserWithEmailAndPassword(form.email, form.password);

      // kreiranje korisnika u usersCollection na firebase-u
      await fb.usersCollection.doc(user.uid).set({
        email: form.email,
        password: form.password,
        name: form.name,
        lastName: form.lastName
      });

      // vracanje korisnika i setovanje u state-u
      dispatch('fetchUserProfile', user);

      router.push('/login');

    },
    // * Get All Secured Loans Method
    async getSecuredLoansCollection({state}) {

      let securedLoansRef = fb.securedLoansCollection;
      try {
        let allSecuredLoansSnapshot = await securedLoansRef.get();
        state.securedLoansCollection = [];
        allSecuredLoansSnapshot.forEach(async doc => {
          const singleSecuredLoan = doc.data();
          singleSecuredLoan["id"] = doc.id;


          let userId = singleSecuredLoan.userId;
          let userProfile = await fb.usersCollection.doc(userId).get();
          console.log(userProfile.data().name + ' ' + userProfile.data().lastName);
         singleSecuredLoan["firstName"] = await userProfile.data().name;
         singleSecuredLoan["lastName"] = await userProfile.data().lastName;
        state.securedLoansCollection.push(singleSecuredLoan);
          console.log(singleSecuredLoan);
        })
      } catch (error) {
        console.log(error);
      }
    },

    async deleteSecuredLoan({state}, id) {
      try {
        await fb.securedLoansCollection.doc(id).delete();
        alert('Successfully deleted Loan');
      } catch(error) {
        console.log(error);
      }
    },

    async updateSecuredLoan({}, itemForUpdate) {
      try {
        await fb.securedLoansCollection.doc(itemForUpdate.id).update({
          APRInterestRange: itemForUpdate.APRInterestRange,
          loanAmount: itemForUpdate.loanAmount,
          loanTerm: itemForUpdate.loanTerm,
          label:itemForUpdate.label,
          conditions: itemForUpdate.conditions,
          src: itemForUpdate.src
        });
        alert("Loan was updated!");
      } catch (error) {
        console.log(error);
      }
    },

    async createSecuredLoan({state}, payload) {
      const securedLoan = {
        APRInterestRange: payload.APRInterestRange,
        loanAmount: payload.loanAmount,
        loanTerm: payload.loanTerm,
        label: payload.label,
        conditions: payload.conditions,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.email,
        createdOn: new Date()
      };
      let imageUrl;
      let key;
      let storageRef = fb.storage;
      const data = await fb.securedLoansCollection.add(securedLoan);
      key = data.id;
      const fileName = payload.src.name;
      const ext = fileName.slice(fileName.lastIndexOf("."));
      const fileData = await storageRef
        .child("securedLoansImages/" + key + "." + ext)
        .put(payload.src);
      imageUrl = await fileData.ref.getDownloadURL();
      await fb.securedLoansCollection.doc(key).get();
      await fb.securedLoansCollection.doc(key).update({
        src: imageUrl
      });
    },

     // * Get All Unsecured Loans Method
     async getUnsecuredLoansCollection({state}) {

      let unsecuredLoansRef = fb.unsecuredLoansCollection;
      try {
        let allUnsecuredLoansSnapshot = await unsecuredLoansRef.get();
        state.unsecuredLoansCollection = [];
        allUnsecuredLoansSnapshot.forEach(async doc => {
          const singleUnsecuredLoan = doc.data();
          singleUnsecuredLoan["id"] = doc.id;


          let userId = singleUnsecuredLoan.userId;
          let userProfile = await fb.usersCollection.doc(userId).get();
          console.log(userProfile.data().name + ' ' + userProfile.data().lastName);
          singleUnsecuredLoan["firstName"] = await userProfile.data().name;
          singleUnsecuredLoan["lastName"] = await userProfile.data().lastName;
        state.unsecuredLoansCollection.push(singleUnsecuredLoan);
          console.log(singleUnsecuredLoan);
        })
      } catch (error) {
        console.log(error);
      }
    },

    async deleteUnsecuredLoan({state}, id) {
      try {
        await fb.unsecuredLoansCollection.doc(id).delete();
        alert('Successfully deleted Loan');
      } catch(error) {
        console.log(error);
      }
    },

    async updateUnsecuredLoan({}, itemForUpdate) {
      try {
        await fb.unsecuredLoansCollection.doc(itemForUpdate.id).update({
          APRInterestRange: itemForUpdate.APRInterestRange,
          loanAmount: itemForUpdate.loanAmount,
          loanTerm: itemForUpdate.loanTerm,
          label:itemForUpdate.label,
          conditions: itemForUpdate.conditions,
          src: itemForUpdate.src
        });
        alert("Loan was updated!");
      } catch (error) {
        console.log(error);
      }
    },

    async createUnsecuredLoan({state}, payload) {
      const unsecuredLoan = {
        APRInterestRange: payload.APRInterestRange,
        loanAmount: payload.loanAmount,
        loanTerm: payload.loanTerm,
        label: payload.label,
        conditions: payload.conditions,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.email,
        createdOn: new Date()
      };
      let imageUrl;
      let key;
      let storageRef = fb.storage;
      const data = await fb.unsecuredLoansCollection.add(unsecuredLoan);
      key = data.id;
      const fileName = payload.src.name;
      const ext = fileName.slice(fileName.lastIndexOf("."));
      const fileData = await storageRef
        .child("unsecuredLoansImages/" + key + "." + ext)
        .put(payload.src);
      imageUrl = await fileData.ref.getDownloadURL();
      await fb.unsecuredLoansCollection.doc(key).get();
      await fb.unsecuredLoansCollection.doc(key).update({
        src: imageUrl
      });
    },


    // * Get All Gold Loans Method
    async getGoldLoansCollection({state}) {

      let goldLoansRef = fb.goldLoansCollection;
      try {
        let allGoldLoansSnapshot = await goldLoansRef.get();
        state.goldLoansCollection = [];
        allGoldLoansSnapshot.forEach(async doc => {
          const singleGoldLoan = doc.data();
          singleGoldLoan["id"] = doc.id;


          let userId = singleGoldLoan.userId;
          let userProfile = await fb.usersCollection.doc(userId).get();
          console.log(userProfile.data().name + ' ' + userProfile.data().lastName);
          singleGoldLoan["firstName"] = await userProfile.data().name;
          singleGoldLoan["lastName"] = await userProfile.data().lastName;
        state.goldLoansCollection.push(singleGoldLoan);
          console.log(singleGoldLoan);
        })
      } catch (error) {
        console.log(error);
      }
    },

    async deleteGoldLoan({state}, id) {
      try {
        await fb.goldLoansCollection.doc(id).delete();
        alert('Successfully deleted Loan');
      } catch(error) {
        console.log(error);
      }
    },

    async updateGoldLoan({}, itemForUpdate) {
      try {
        await fb.goldLoansCollection.doc(itemForUpdate.id).update({
          APRInterestRange: itemForUpdate.APRInterestRange,
          loanAmount: itemForUpdate.loanAmount,
          loanTerm: itemForUpdate.loanTerm,
          label:itemForUpdate.label,
          conditions: itemForUpdate.conditions,
          src: itemForUpdate.src
        });
        alert("Loan was updated!");
      } catch (error) {
        console.log(error);
      }
    },

    async createGoldLoan({state}, payload) {
      const goldLoan = {
        APRInterestRange: payload.APRInterestRange,
        loanAmount: payload.loanAmount,
        loanTerm: payload.loanTerm,
        label: payload.label,
        conditions: payload.conditions,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.email,
        createdOn: new Date()
      };
      let imageUrl;
      let key;
      let storageRef = fb.storage;
      const data = await fb.goldLoansCollection.add(goldLoan);
      key = data.id;
      const fileName = payload.src.name;
      const ext = fileName.slice(fileName.lastIndexOf("."));
      const fileData = await storageRef
        .child("goldLoansImages/" + key + "." + ext)
        .put(payload.src);
      imageUrl = await fileData.ref.getDownloadURL();
      await fb.goldLoansCollection.doc(key).get();
      await fb.goldLoansCollection.doc(key).update({
        src: imageUrl
      });
    },

    // * Get All Loans Against Assets Method
    async getLoansAgainstAssetsCollection({state}) {

      let loansAgainstAssetsRef = fb.loansAgainstAssetsCollection;
      try {
        let allLoansAgainstAssetsSnapshot = await loansAgainstAssetsRef.get();
        state.loansAgainstAssetsCollection = [];
        allLoansAgainstAssetsSnapshot.forEach(async doc => {
          const singleLoanAgainstAssets = doc.data();
          singleLoanAgainstAssets["id"] = doc.id;


          let userId = singleLoanAgainstAssets.userId;
          let userProfile = await fb.usersCollection.doc(userId).get();
          console.log(userProfile.data().name + ' ' + userProfile.data().lastName);
          singleLoanAgainstAssets["firstName"] = await userProfile.data().name;
          singleLoanAgainstAssets["lastName"] = await userProfile.data().lastName;
        state.loansAgainstAssetsCollection.push(singleLoanAgainstAssets);
          console.log(singleLoanAgainstAssets);
        })
      } catch (error) {
        console.log(error);
      }
    },

    async deleteLoanAgainstAssets({state}, id) {
      try {
        await fb.loansAgainstAssetsCollection.doc(id).delete();
        alert('Successfully deleted Loan');
      } catch(error) {
        console.log(error);
      }
    },

    async updateLoanAgainstAssets({}, itemForUpdate) {
      try {
        await fb.loansAgainstAssetsCollection.doc(itemForUpdate.id).update({
          APRInterestRange: itemForUpdate.APRInterestRange,
          loanAmount: itemForUpdate.loanAmount,
          loanTerm: itemForUpdate.loanTerm,
          label:itemForUpdate.label,
          conditions: itemForUpdate.conditions,
          src: itemForUpdate.src
        });
        alert("Loan was updated!");
      } catch (error) {
        console.log(error);
      }
    },

    async createLoanAgainstAssets({state}, payload) {
      const loanAgainstAssets = {
        APRInterestRange: payload.APRInterestRange,
        loanAmount: payload.loanAmount,
        loanTerm: payload.loanTerm,
        label: payload.label,
        conditions: payload.conditions,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.email,
        createdOn: new Date()
      };
      let imageUrl;
      let key;
      let storageRef = fb.storage;
      const data = await fb.loansAgainstAssetsCollection.add(loanAgainstAssets);
      key = data.id;
      const fileName = payload.src.name;
      const ext = fileName.slice(fileName.lastIndexOf("."));
      const fileData = await storageRef
        .child("loansAgainstAssetsImages/" + key + "." + ext)
        .put(payload.src);
      imageUrl = await fileData.ref.getDownloadURL();
      await fb.loansAgainstAssetsCollection.doc(key).get();
      await fb.loansAgainstAssetsCollection.doc(key).update({
        src: imageUrl
      });
    },


    // * Get All Education Loans Method
    async getEducationLoansCollection({state}) {

      let educationLoansRef = fb.educationLoansCollection;
      try {
        let allEducationLoansSnapshot = await educationLoansRef.get();
        state.educationLoansCollection = [];
        allEducationLoansSnapshot.forEach(async doc => {
          const singleEducationLoan = doc.data();
          singleEducationLoan["id"] = doc.id;


          let userId = singleEducationLoan.userId;
          let userProfile = await fb.usersCollection.doc(userId).get();
          console.log(userProfile.data().name + ' ' + userProfile.data().lastName);
          singleEducationLoan["firstName"] = await userProfile.data().name;
          singleEducationLoan["lastName"] = await userProfile.data().lastName;
        state.educationLoansCollection.push(singleEducationLoan);
          console.log(singleEducationLoan);
        })
      } catch (error) {
        console.log(error);
      }
    },

    async deleteEducationLoan({state}, id) {
      try {
        await fb.educationLoansCollection.doc(id).delete();
        alert('Successfully deleted Loan');
      } catch(error) {
        console.log(error);
      }
    },

    async updateEducationLoan({}, itemForUpdate) {
      try {
        await fb.educationLoansCollection.doc(itemForUpdate.id).update({
          APRInterestRange: itemForUpdate.APRInterestRange,
          loanAmount: itemForUpdate.loanAmount,
          loanTerm: itemForUpdate.loanTerm,
          label:itemForUpdate.label,
          conditions: itemForUpdate.conditions,
          src: itemForUpdate.src
        });
        alert("Loan was updated!");
      } catch (error) {
        console.log(error);
      }
    },

    async createEducationLoan({state}, payload) {
      const educationLoan = {
        APRInterestRange: payload.APRInterestRange,
        loanAmount: payload.loanAmount,
        loanTerm: payload.loanTerm,
        label: payload.label,
        conditions: payload.conditions,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.email,
        createdOn: new Date()
      };
      let imageUrl;
      let key;
      let storageRef = fb.storage;
      const data = await fb.educationLoansCollection.add(educationLoan);
      key = data.id;
      const fileName = payload.src.name;
      const ext = fileName.slice(fileName.lastIndexOf("."));
      const fileData = await storageRef
        .child("educationLoansImages/" + key + "." + ext)
        .put(payload.src);
      imageUrl = await fileData.ref.getDownloadURL();
      await fb.educationLoansCollection.doc(key).get();
      await fb.educationLoansCollection.doc(key).update({
        src: imageUrl
      });
    },


    // * Get All Home Loans Method
    async getHomeLoansCollection({state}) {

      let homeLoansRef = fb.homeLoansCollection;
      try {
        let allHomeLoansSnapshot = await homeLoansRef.get();
        state.homeLoansCollection = [];
        allHomeLoansSnapshot.forEach(async doc => {
          const singleHomeLoan = doc.data();
          singleHomeLoan["id"] = doc.id;


          let userId = singleHomeLoan.userId;
          let userProfile = await fb.usersCollection.doc(userId).get();
          console.log(userProfile.data().name + ' ' + userProfile.data().lastName);
          singleHomeLoan["firstName"] = await userProfile.data().name;
          singleHomeLoan["lastName"] = await userProfile.data().lastName;
        state.homeLoansCollection.push(singleHomeLoan);
          console.log(singleHomeLoan);
        })
      } catch (error) {
        console.log(error);
      }
    },

    async deleteHomeLoan({state}, id) {
      try {
        await fb.homeLoansCollection.doc(id).delete();
        alert('Successfully deleted Loan');
      } catch(error) {
        console.log(error);
      }
    },

    async updateHomeLoan({}, itemForUpdate) {
      try {
        await fb.homeLoansCollection.doc(itemForUpdate.id).update({
          APRInterestRange: itemForUpdate.APRInterestRange,
          loanAmount: itemForUpdate.loanAmount,
          loanTerm: itemForUpdate.loanTerm,
          label:itemForUpdate.label,
          conditions: itemForUpdate.conditions,
          src: itemForUpdate.src
        });
        alert("Loan was updated!");
      } catch (error) {
        console.log(error);
      }
    },

    async createHomeLoan({state}, payload) {
      const homeLoan = {
        APRInterestRange: payload.APRInterestRange,
        loanAmount: payload.loanAmount,
        loanTerm: payload.loanTerm,
        label: payload.label,
        conditions: payload.conditions,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.email,
        createdOn: new Date()
      };
      let imageUrl;
      let key;
      let storageRef = fb.storage;
      const data = await fb.homeLoansCollection.add(homeLoan);
      key = data.id;
      const fileName = payload.src.name;
      const ext = fileName.slice(fileName.lastIndexOf("."));
      const fileData = await storageRef
        .child("homeLoansImages/" + key + "." + ext)
        .put(payload.src);
      imageUrl = await fileData.ref.getDownloadURL();
      await fb.homeLoansCollection.doc(key).get();
      await fb.homeLoansCollection.doc(key).update({
        src: imageUrl
      });
    },


    // * Get All Personal Loans Method
    async getPersonalLoansCollection({state}) {

      let personalLoansRef = fb.personalLoansCollection;
      try {
        let allPersonalLoansSnapshot = await personalLoansRef.get();
        state.personalLoansCollection = [];
        allPersonalLoansSnapshot.forEach(async doc => {
          const singlePersonalLoan = doc.data();
          singlePersonalLoan["id"] = doc.id;


          let userId = singlePersonalLoan.userId;
          let userProfile = await fb.usersCollection.doc(userId).get();
          console.log(userProfile.data().name + ' ' + userProfile.data().lastName);
          singlePersonalLoan["firstName"] = await userProfile.data().name;
          singlePersonalLoan["lastName"] = await userProfile.data().lastName;
        state.personalLoansCollection.push(singlePersonalLoan);
          console.log(singleSecuredLoan);
        })
      } catch (error) {
        console.log(error);
      }
    },

    async deletePersonalLoan({state}, id) {
      try {
        await fb.personalLoansCollection.doc(id).delete();
        alert('Successfully deleted Loan');
      } catch(error) {
        console.log(error);
      }
    },

    async updatePersonalLoan({}, itemForUpdate) {
      try {
        await fb.personalLoansCollection.doc(itemForUpdate.id).update({
          APRInterestRange: itemForUpdate.APRInterestRange,
          loanAmount: itemForUpdate.loanAmount,
          loanTerm: itemForUpdate.loanTerm,
          label:itemForUpdate.label,
          conditions: itemForUpdate.conditions,
          src: itemForUpdate.src
        });
        alert("Loan was updated!");
      } catch (error) {
        console.log(error);
      }
    },

    async createPersonalLoan({state}, payload) {
      const personalLoan = {
        APRInterestRange: payload.APRInterestRange,
        loanAmount: payload.loanAmount,
        loanTerm: payload.loanTerm,
        label: payload.label,
        conditions: payload.conditions,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.email,
        createdOn: new Date()
      };
      let imageUrl;
      let key;
      let storageRef = fb.storage;
      const data = await fb.personalLoansCollection.add(personalLoan);
      key = data.id;
      const fileName = payload.src.name;
      const ext = fileName.slice(fileName.lastIndexOf("."));
      const fileData = await storageRef
        .child("personalLoansImages/" + key + "." + ext)
        .put(payload.src);
      imageUrl = await fileData.ref.getDownloadURL();
      await fb.personalLoansCollection.doc(key).get();
      await fb.personalLoansCollection.doc(key).update({
        src: imageUrl
      });
    },


    // * Get All Vehicle Loans Method
    async getVehicleLoansCollection({state}) {

      let vehicleLoansRef = fb.vehicleLoansCollection;
      try {
        let allVehicleLoansSnapshot = await vehicleLoansRef.get();
        state.vehicleLoansCollection = [];
        allVehicleLoansSnapshot.forEach(async doc => {
          const singleVehicledLoan = doc.data();
          singleVehicledLoan["id"] = doc.id;


          let userId = singleVehicledLoan.userId;
          let userProfile = await fb.usersCollection.doc(userId).get();
          console.log(userProfile.data().name + ' ' + userProfile.data().lastName);
          singleVehicledLoan["firstName"] = await userProfile.data().name;
          singleVehicledLoan["lastName"] = await userProfile.data().lastName;
        state.vehicleLoansCollection.push(singleVehicledLoan);
          console.log(singleVehicledLoan);
        })
      } catch (error) {
        console.log(error);
      }
    },

    async deleteVehicleLoan({state}, id) {
      try {
        await fb.vehicleLoansCollection.doc(id).delete();
        alert('Successfully deleted Loan');
      } catch(error) {
        console.log(error);
      }
    },

    async updateVehicleLoan({}, itemForUpdate) {
      try {
        await fb.vehicleLoansCollection.doc(itemForUpdate.id).update({
          APRInterestRange: itemForUpdate.APRInterestRange,
          loanAmount: itemForUpdate.loanAmount,
          loanTerm: itemForUpdate.loanTerm,
          label:itemForUpdate.label,
          conditions: itemForUpdate.conditions,
          src: itemForUpdate.src
        });
        alert("Loan was updated!");
      } catch (error) {
        console.log(error);
      }
    },

    async createVehicleLoan({state}, payload) {
      const vehicleLoan = {
        APRInterestRange: payload.APRInterestRange,
        loanAmount: payload.loanAmount,
        loanTerm: payload.loanTerm,
        label: payload.label,
        conditions: payload.conditions,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.email,
        createdOn: new Date()
      };
      let imageUrl;
      let key;
      let storageRef = fb.storage;
      const data = await fb.vehicleLoansCollection.add(vehicleLoan);
      key = data.id;
      const fileName = payload.src.name;
      const ext = fileName.slice(fileName.lastIndexOf("."));
      const fileData = await storageRef
        .child("vehicleLoansImages/" + key + "." + ext)
        .put(payload.src);
      imageUrl = await fileData.ref.getDownloadURL();
      await fb.vehicleLoansCollection.doc(key).get();
      await fb.vehicleLoansCollection.doc(key).update({
        src: imageUrl
      });
    }


  }
})
