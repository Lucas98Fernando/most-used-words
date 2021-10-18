<template>
  <div class="pill">
    <v-chip class="ma-2" color="red" text-color="white">
      {{ name }}
      <v-avatar right class="red darken-4 px-4">
        {{ amount }}
      </v-avatar>
    </v-chip>
  </div>
</template>

<script>
export default {
  name: "Pill",

  props: ["name", "amount"],
};
</script>
