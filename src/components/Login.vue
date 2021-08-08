<template>
 <div class="login-page-wrapper">
    <b-form
      class="login-form"
      @submit="onSubmit"
      @reset="onReset"
      v-if="showForm"
    >
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Your Password:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          placeholder="Enter your Password"
          required
        ></b-form-input>
      </b-form-group>

      <h4 class="sign-up-title">
        <router-link class="sign-up-link" to="/register">
          Still don't have an account?
          <br />
          Sign up.
        </router-link>
      </h4>
      <div class="action-btns mt-4">
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="secondary">Reset</b-button>
      </div>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      showForm: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.dispatch('login', {
        email: this.form.email,
        password: this.form.password
      })
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.showForm = false;
      this.$nextTick(() => {
        this.showForm = true;
      });
    },
  },
};
</script>

<style scoped>
  @import '../assets/dialogs.css';

  .login-page-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 91vh;
    width: 100%;
    background: rgb(195, 178, 199);
  }
  .login-form {
     font-family: Georgia, serif;
    margin-top: 300px;
    height: 700 px;
    background: white;
     width: 450px;
  background:white;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 20px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;

  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  }
  #input-1,
  #input-2 {
    width: 300px;
  }
  .sign-up-title {
    text-align: center;
    font-weight: 15px;
  }
  .sign-up-link {
      font-family: Georgia, serif;

    font-weight: bold;
    font-size: 15px;
    color: rgb(54, 54, 54) !important;
  }

  * {
  box-sizing: border-box;
}

body {
  background: #2554FF !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
}

body,
html,
.App,
.vue-tempalte,
.vertical-center {
  width: 100%;
  height: 100%;
}

.vertical-center {
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
}

.inner-block {
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}

.vertical-center .form-control:focus {
  border-color: #2554FF;
  box-shadow: none;
}

.vertical-center h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

label {
  font-weight: 500;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7a7a7a;
  margin: 0;
}

.forgot-password a {
  color: #2554FF;
}

</style>
