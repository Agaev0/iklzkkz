<template>
  <div>
    <div class="navbar">
      <ul class="nav-menu">
        <li><router-link style="color: white" to="/">Home</router-link></li>
        <li><router-link style="color: white" to="/smth">Smth</router-link></li>
        <li><router-link style="color: white" to="/about">About</router-link></li>
        <li><router-link style="color: white" to="/users">Users</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  background-color: black;
  position: relative;
  width: 100%;
  height: 50px;
}
.nav-menu {
  list-style-type: none;
  display: flex;
  color: white;
  justify-content: flex-end;
}
.nav-menu li {
  text-align: center;
  padding: 15px;
  margin-right: 15px;
}
</style>