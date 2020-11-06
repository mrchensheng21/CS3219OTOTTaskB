<template>
  <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Contact ID:"
        label-for="input-1"
        v-if="!show"
      >
        <b-form-input
          id="input-1"
          v-model="contactid"
          placeholder="Enter contactid"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Email address:"
        label-for="input-2"
        v-if="show"
      >
        <b-form-input
          id="input-2"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Your Name:"
        label-for="input-3"
        v-if="show"
      >
        <b-form-input
          id="input-3"
          v-model="name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group 4"
        label="Phone:"
        label-for="input-4"
        v-if="show"
      >
        <b-form-input
          id="input-3"
          v-model="phone"
          required
          placeholder="Enter phone"
          v-if="show"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="Gender:"
        label-for="input-5"
        v-if="show"
      >
        <b-form-select
          id="input-4"
          v-model="gender"
          :options="genders"
          required
          v-if="show"
        ></b-form-select>
      </b-form-group>
      <b-button v-on:click="showList" variant="primary" v-if="!show"
        >Update</b-button
      >
      <b-button v-on:click="deleteContact" variant="danger" v-if="!show"
        >Delete</b-button
      >
      <b-button v-on:click="updateContact" variant="primary" v-if="show"
        >Submit</b-button
      >
    </b-form>
    {{ message }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      contactid: "",
      message: "",
      email: "",
      name: "",
      phone: "",
      gender: "",
      genders: [{ text: "Select One", value: null }, "Male", "Female"],
      show: false
    };
  },
  methods: {
    deleteContact(evt) {
      evt.preventDefault();
      if (this.contactid == "") {
        this.message = "Please input a contact id";
      } else {
        axios
          .delete("/api/contacts/" + this.contactid)
          .then(res => {
            if (res.data.message == "Contact deleted") {
              (this.contactid = ""), (this.message = "Delete Successful !");
            }
          })
          .catch(error => {
            this.message = error.message;
          });
      }
    },
    updateContact(evt) {
      evt.preventDefault();
      var data = {};

      if (this.name != "") {
        data["name"] = this.name;
      }
      if (this.email != "") {
        data["email"] = this.email;
      }
      if (this.phone != "") {
        data["phone"] = this.phone;
      }
      if (this.gender != "") {
        data["gender"] = this.gender;
      }

      axios
        .put("/api/contacts/" + this.contactid, data)
        .then(res => {
          if (res.data.message == "Contact Info updated") {
            this.message = "Contact Updated!";
          }
        })
        .catch(() => {
          this.message = "Failed";
        });
    },
    showList(evt) {
      evt.preventDefault();
      if (this.contactid == "") {
        this.message = "Please input a contact id";
      } else {
        this.show = true;
        this.message = "";
      }
    }
  }
};
</script>
