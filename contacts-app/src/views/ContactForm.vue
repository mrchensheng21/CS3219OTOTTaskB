<template>
  <div>
    <b-form @submit="postContact" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Phone:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="phone"
          required
          placeholder="Enter phone"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Gender:" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="gender"
          :options="genders"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    {{ message }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      name: "",
      phone: "",
      gender: null,
      message: "",
      genders: [{ text: "Select One", value: null }, "Male", "Female"],
      show: true
    };
  },
  methods: {
    postContact(evt) {
      evt.preventDefault();
      const data = {
        name: this.name,
        email: this.email,
        gender: this.gender,
        phone: this.phone
      };
      axios
        .post("/api/contacts", data)
        .then(() => {
          (this.name = ""),
            (this.email = ""),
            (this.phone = ""),
            (this.gender = ""),
            (this.show = false),
            (this.message = "Successful !"),
            this.$nextTick(() => {
              this.show = true;
            });
        })
        .catch(() => {
          this.message = "Submit form failed";
        });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.email = "";
      this.name = "";
      this.phone = "";
      this.gender = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
