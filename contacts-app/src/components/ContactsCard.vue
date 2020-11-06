<template>
  <div>
    <b-card style="width: 20rem; height: 30rem;" class="overflow-hidden">
      <b-card-body>
        <b-card-title> Name: {{ displayContact.name }} </b-card-title>
        <b-card-text> Contact: {{ displayContact.phone }} </b-card-text>
        <b-card-text> Gender: {{ displayContact.gender }} </b-card-text>
        <b-card-text> Email: {{ displayContact.email }} </b-card-text>
        <b-button
          variant="outline-primary"
          style="width: 70px;"
          @click="showEditForm"
          >Edit</b-button
        >
        <b-button type="button" v-on:click="showDelete" variant="danger"
          >Delete</b-button
        >
      </b-card-body>
    </b-card>
    <b-modal ref="delete-modal" hide-footer title="Delete Contact">
      <p class="text-center">Do you want to delete {{ displayContact.name }}</p>
      <b-button type="button" v-on:click="deleteContact" variant="danger"
        >Yes</b-button
      >
      <b-button
        type="button"
        v-on:click="hideDelete"
        class="btn btn-secondary float-right"
        >Close</b-button
      >
    </b-modal>
    <b-modal ref="edit-modal" hide-footer title="Edit Contact">
      <b-form v-if="showForm">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="contactDetails.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="contactDetails.name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Phone:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="contactDetails.phone"
            required
            placeholder="Enter phone"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Gender:" label-for="input-4">
          <b-form-select
            id="input-4"
            v-model="contactDetails.gender"
            :options="genders"
            required
          ></b-form-select>
        </b-form-group>
        <button
          type="button"
          class="btn btn-primary float-right"
          v-on:click="updateContact"
        >
          Save changes
        </button>
        <button type="reset" class="btn btn-secondary">
          Reset
        </button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    contactDetails: {
      type: Object
    }
  },
  data() {
    return {
      initialDetails: null,
      displayContact: null,
      genders: [
        { value: null, text: "Please select an option" },
        "Male",
        "Female"
      ],
      showForm: true
    };
  },
  beforeMount() {
    this.displayContact = JSON.parse(JSON.stringify(this.contactDetails));
    this.initialDetails = JSON.parse(JSON.stringify(this.contactDetails));
  },
  watch: {
    contactDetails(update) {
      this.displayContact = update;
    }
  },
  methods: {
    showEditForm() {
      this.$refs["edit-modal"].show();
      console.log(this.initialDetails);
    },
    resetDisplay(initialState) {
      this.displayContact = initialState;
    },
    resetForm(evt) {
      evt.preventDefault();
      this.resetDisplay(this.initialDetails);
      this.showForm = false;
      this.$nextTick(() => {
        this.showForm = true;
      });
    },
    updateContact(evt) {
      evt.preventDefault();
      if (this.contactDetails.name == "") {
        this.contactDetails.name = this.displayContact.name;
      }
      if (this.contactDetails.email == "") {
        this.contactDetails.email = this.displayContact.email;
      }
      if (this.contactDetails.phone == "") {
        this.contactDetails.phone = this.displayContact.phone;
      }
      if (this.contactDetails.gender == "") {
        this.contactDetails.gender = this.displayContact.gender;
      }
      console.log(this.contactDetails);
      this.$store.dispatch("updateContact", this.contactDetails).then(() => {
        if (!this.$store.state.contact.contactListStatus.isApiError) {
          console.log("update success");
          alert("Contact Updated!");
          this.$refs["edit-modal"].hide();
        } else {
          alert(this.$store.state.contact.contactListStatus.isApiError);
        }
      });
    },
    showDelete(evt) {
      evt.preventDefault();
      this.$refs["delete-modal"].show();
    },
    hideDelete(evt) {
      evt.preventDefault();
      this.$refs["delete-modal"].hide();
    },
    deleteContact(evt) {
      evt.preventDefault();
      this.$store.dispatch("deleteContact", this.contactDetails).then(() => {
        if (this.$store.state.contact.deleteSuccessful) {
          alert("Contact Deleted!");
          this.$refs["delete-modal"].hide();
        } else {
          alert(this.$store.state.contact.deleteErrorMessage);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
