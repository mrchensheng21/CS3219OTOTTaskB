<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Contacts</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/ContactForm">ContactForm</b-nav-item>
          <b-nav-item to="/UpdateDelete">Update/Delete</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#nav a.router-link-exact-active {
  color: white;
}

#nav a {
  font-weight: bold;
  color: #210909;
}
</style>
