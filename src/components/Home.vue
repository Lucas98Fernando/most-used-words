<template>
  <v-container fluid>
    <v-form>
      <v-file-input
        v-model="files"
        label="Selecione os arquivos de legenda"
        prepend-icon="mdi-subtitles-outline"
        append-outer-icon="mdi-send"
        multiple
        chips
        @click:append-outer="processSubtitles"
      />
    </v-form>
    <div class="pills">
      <Pill
        v-for="(word, i) in groupedWords"
        :key="i"
        :name="word.name"
        :amount="word.amount"
      />
    </div>
  </v-container>
</template>

<script>
import Pill from "./Pill.vue";

export default {
  name: "Home",

  components: { Pill },

  data() {
    return {
      files: [],
      groupedWords: [
        {
          name: "i",
          amount: "1034",
        },
        {
          name: "you",
          amount: "1334",
        },
        {
          name: "how",
          amount: "301",
        },
      ],
    };
  },

  methods: {
    processSubtitles() {
      console.log(this.files);
    },
  },
};
</script>

<style lang="scss">
.pills {
  display: flex;
  flex-wrap: wrap;
}
</style>
