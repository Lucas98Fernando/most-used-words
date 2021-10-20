<template>
  <v-app>
    <v-app-bar app color="cyan" dark>
      <img
        class="mr-2"
        src="@/assets/logo.png"
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
