<template>
  <div class="home">
    <b-container>
      <b-row>
        <contacts-card
          v-for="contact in contacts"
          :key="contact._id"
          :name="contact.name"
          :email="contact.email"
          :phone="contact.phone"
          :gender="contact.gender"
          :contactid="contact._id"
        ></contacts-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import ContactsCard from "@/components/ContactsCard.vue";

export default {
  name: "Home",
  components: {
    "contacts-card": ContactsCard
  },
  data() {
    return {
      contacts: [],
      email: "",
      name: "",
      phone: "",
      gender: "",
      message: ""
    };
  },
  mounted() {
    axios.get("/api/contacts").then(res => {
      this.contacts = res.data.data;
    });
  }
};
</script>
