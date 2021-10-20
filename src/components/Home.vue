<template>
  <v-container fluid>
    <v-overlay :value="overlay">
      <v-progress-circular
        color="cyan"
        indeterminate
        size="64"
      ></v-progress-circular>
      <div>Processando...</div>
    </v-overlay>
    <v-form>
      <v-file-input
        v-model="files"
        label="Selecione os arquivos de legenda"
        prepend-icon="mdi-subtitles-outline"
        append-outer-icon="mdi-send"
        color="cyan"
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
import { ipcRenderer } from "electron";
import Pill from "./Pill.vue";

export default {
  name: "Home",

  components: { Pill },

  data() {
    return {
      overlay: false,
      files: [],
      groupedWords: [],
    };
  },

  methods: {
    processSubtitles() {
      try {
        this.overlay = true;
        const paths = this.files.map((f) => f.path);
        ipcRenderer.send("process-subtitle", paths);
        ipcRenderer.on("process-subtitle", (evt, resp) => {
          // Vai receber os objetos com as informações das palavras
          this.groupedWords = resp;
          this.overlay = false;
        });
      } catch (e) {
        console.log(e);
        this.overlay = false;
      }
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
