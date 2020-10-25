<template>
  <div>
    <b-card style="width: 16rem;">
      <b-card-body>
        <b-card-title>
          {{ name }}
        </b-card-title>
        <b-card-text> Contact: {{ phone }} </b-card-text>
        <b-card-text> Gender: {{ gender }} </b-card-text>
        <b-card-text> Email: {{ email }} </b-card-text>
        <b-card-footer>
          {{ contactid }}
        </b-card-footer>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["name", "phone", "gender", "email", "contactid"]
};
</script>

<style lang="scss" scoped></style>
