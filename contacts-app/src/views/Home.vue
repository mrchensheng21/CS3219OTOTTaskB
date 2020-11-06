<template>
  <div class="home">
    <b-container>
      <b-row>
        <ContactsCard
          v-for="contact in contactList"
          :key="contact._id"
          :contactDetails="contact"
        ></ContactsCard>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactsCard from "@/components/ContactsCard.vue";

export default {
  name: "Home",
  components: {
    ContactsCard
  },
  data() {
    return {
      contactList: null
    };
  },
  beforeMount() {
    this.$store.dispatch("getContactList");
    this.contactList = this.$store.state.contact.contactList;
  },
  computed: {
    contactDetailsName: {
      get() {
        return this.$store.state.contact.contactDetails.name;
      },
      set(value) {
        this.$store.commit("setContactDetailsAttribute", {
          field: "name",
          value
        });
      }
    },
    contactDetailsEmail: {
      get() {
        return this.$store.state.contact.contactDetails.email;
      },
      set(value) {
        this.$store.commit("setContactDetailsAttribute", {
          field: "email",
          value
        });
      }
    },
    contactDetailsPhone: {
      get() {
        return this.$store.state.contact.contactDetails.phone;
      },
      set(value) {
        this.$store.commit("setContactDetailsAttribute", {
          field: "phone",
          value
        });
      }
    },
    contactDetailsGender: {
      get() {
        return this.$store.state.contact.contactDetails.name;
      },
      set(value) {
        this.$store.commit("setContactDetailsAttribute", {
          field: "gender",
          value
        });
      }
    },
    getSetContactList: {
      get() {
        return this.$store.state.contact.contactList;
      }, set(value) {
        this.$store.commit('setContactList', value)        
      }
    }
  },
  watch: {
    getSetContactList(updated) {
      this.contactList = updated;
    }
  }
};
</script>
