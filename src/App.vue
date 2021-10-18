<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <img
        class="mr-2"
        src="https://cdn-icons-png.flaticon.com/512/5088/5088981.png"
        alt="Logo"
        width="50"
      />
      <v-toolbar-title>Most Used Words</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "@/components/Home.vue";

export default {
  name: "App",

  components: { Home },
};
</script>
