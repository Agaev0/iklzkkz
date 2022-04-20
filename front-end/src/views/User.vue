<template>
  <div>
        <p>{{ user.first_name }}</p>
        <p>{{ user.last_name }}</p>
        <p>{{ user.email }}</p>
        <img :src="user.avatar" alt="" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "User",
  data() {
    return {
      userId: this.$route.params.id,
      user: {},
    };
  },
  async mounted() {
    const { data } = await axios.get("https://reqres.in/api/users/" + this.userId);
    this.user = data.data;
  },
};
</script>
