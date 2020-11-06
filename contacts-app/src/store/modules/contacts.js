import axios from "axios";
import "babel-polyfill";

export default {
  state: {
    contactList: [],
    contactDetails: {
      _id: "",
      name: "",
      phone: "",
      email: "",
      gender: "",
      create_date: ""
    },
    contactForm: {
      name: "",
      phone: "",
      email: "",
      gender: ""
    },
    contactListStatus: {
      isLoading: true,
      isApiError: false,
      apiErrorMsg: ""
    },
    contactFormStatus: {
      isLoading: false,
      isApiError: false,
      apiErrorMsg: ""
    },
    isSaveSuccess: false,
    isContactEditable: false,
    deleteSuccessful: false,
    deleteErrorMessage: ""
  },
  mutations: {
    setContactListLoading(state, payload) {
      if (payload) {
        state.contactListStatus.isApiError = false;
      }
      state.contactListStatus.isLoading = payload;
    },

    setContactListApiError(state, payload) {
      state.contactListStatus.isApiError = true;
      state.contactListStatus.apiErrorMsg = payload;
    },

    setContactList(state, payload) {
      state.contactList = payload;
    },

    setContactListAttribute(state, { field, value }) {
      state.contactList[field] = value;
    },

    addToContactList(state, payload) {
      state.contactList.push(payload);
    },

    deleteFromContactList(state, payload) {
      const index = state.contactList.findIndex(contact => {
        return contact._id === payload._id;
      });
      state.contactList.splice(index, 1);
    },

    updateContactList(state, payload) {
      state.contactList = state.contactList.map(contact => {
        if (contact._id === payload._id) {
          return payload;
        }
        return contact;
      });
    },

    setContactFormLoading(state, isLoading) {
      state.contactFormStatus.isLoading = isLoading;
    },

    setContactFormAttribute(state, { field, value }) {
      state.contactForm[field] = value;
    },

    setContactFormApiError(state, msg) {
      state.contactFormStatus.isApiError = true;
      state.contactFormStatus.apiErrorMsg = msg;
    },

    resetContactForm(state) {
      state.contactForm.name = "";
      state.contactForm.phone = "";
      state.contactForm.email = "";
      state.contactForm.gender = "";
    },

    setContactFormField(state, { field, value }) {
      state.contactForm[field] = value;
    },

    setSaveSuccess(state, success) {
      state.isSaveSuccess = success;
    },
    setIsContactEditable(state, isContactEditable) {
      state.isContactEditable = isContactEditable;
    },

    deleteContactStatus(state, payload) {
      state.deleteSuccessful = payload
    },
    deleteErrorMessage(state, payload) {
      state.deleteErrorMsg = payload
    }
  },

  actions: {
    async getContactList({ commit }) {
      commit("setContactListLoading", true);
      axios
        .get("/api/contacts")
        .then(response => {
          commit("setContactList", response.data.data);
        })
        .catch(e => {
          commit("setContactListApiError", e.toString());
        })
        .finally(() => {
          commit("setContactListLoading", false);
        });
    },

    async saveContact({ commit, state }) {
      commit("setContactFormLoading", true);
      await axios
        .post("/api/contacts", state.contactForm)
        .then(response => {
          commit(
            "addToContactList",
            JSON.parse(JSON.stringify(response.data.data))
          );
          commit("setContactForm", response.data);
          commit("setSaveSuccess", true);
        })
        .catch(e => {
          commit("setContactFormApiError", e.toString());
          commit("setSaveSuccess", false);
        })
        .finally(() => {
          commit("setContactFormLoading", false);
        });
    },

    async updateContact({ commit }, state) {
      commit("setContactFormLoading", true);
      await axios
        .put("/api/contacts/" + state._id, state)
        .then(response => {
          commit("updateContactList", response.data.data);
        })
        .catch(e => {
          commit("setContactFormApiError", e.toString());
        })
        .finally(() => {
          commit("setContactFormLoading", false);
        });
    },

    async deleteContact({ commit }, payload) {
      commit("setContactFormLoading", true);
      await axios
        .delete("/api/contacts/" + payload._id)
        .then(() => {
          commit("deleteFromContactList", payload);
          commit("deleteContactStatus", true);
        })
        .catch(e => {
          commit("deleteErrorMessage", e.toString());
          commit("deleteContactStatus", false);
        })
        .finally(() => {
          commit("setContactFormLoading", false);
        });
    }
  }
};
