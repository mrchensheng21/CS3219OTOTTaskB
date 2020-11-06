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
          v-model="formDetailsEmail"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formDetailsName"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Phone:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="formDetailsPhone"
          required
          placeholder="Enter phone"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Gender:" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="formDetailsGender"
          :options="genders"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      genders: [{ value: null, text: "Select gender" }, "Male", "Female"],
      show: true
    };
  },
  computed: {
    formDetailsName: {
      get() {
        return this.$store.state.contact.contactForm.name;
      },
      set(value) {
        this.$store.commit("setContactFormAttribute", {
          field: "name",
          value
        });
      }
    },
    formDetailsEmail: {
      get() {
        return this.$store.state.contact.contactForm.email;
      },
      set(value) {
        this.$store.commit("setContactFormAttribute", {
          field: "email",
          value
        });
      }
    },
    formDetailsPhone: {
      get() {
        return this.$store.state.contact.contactForm.phone;
      },
      set(value) {
        this.$store.commit("setContactFormAttribute", {
          field: "phone",
          value
        });
      }
    },
    formDetailsGender: {
      get() {
        return this.$store.state.contact.contactForm.name;
      },
      set(value) {
        this.$store.commit("setContactFormAttribute", {
          field: "gender",
          value
        });
      }
    }
  },
  methods: {
    postContact(evt) {
      evt.preventDefault();
      this.$store
        .dispatch("saveContact")
        .then(alert("Contact Added"))
        .catch(error => alert("Error: " + error.toString()))
        .finally(() => {
          this.$store.commit("resetContactForm");
          this.show = false;
          this.$nextTick(() => {
            this.show = true;
          });
        });
    },
    onReset(evt) {
      evt.preventDefault();
      this.$store.commit("resetContactForm");
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
