<template>
  <div>
    <div class="card" v-for="user in users" :key="user.id" @click="move(user.id)">
      <p>{{ user.first_name }}</p>
      <p>{{ user.last_name }}</p>
      <p>{{ user.email }}</p>
      <img :src="user.avatar" alt="" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Users",
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    const p = this.$route.query.page ? this.$route.query.page : 1;
    const { data } = await axios.get("https://reqres.in/api/users", {
      params:{ page: p}
    });
    this.users = data.data;
  },
  methods: {
    move(id) {
      this.$router.push("/users/" + id);
    }
  },
};
</script>

<style scoped>
.card {
  border: 1px solid black;
  margin-bottom: 3px;
}
.card:hover {
  color: red;
}
</style>