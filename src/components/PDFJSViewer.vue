<template>
  <div v-if="fileName">
    <iframe height="100%" width="100%" :src="getFilePath"></iframe>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  name: "PDFJSViewer",
  props: {
    path: String,
    pdfurl: String,
  },
  setup(props) {
    const getFilePath = computed(() => {
      if (props.pdfurl !== "") {
        return props.path + "?file=" + props.pdfurl;
      }
      return props.path;
    });

    return { getFilePath };
  },
};
</script>
<style scoped>
div {
  width: 50%;
  height: 79vh;
  min-width: 400px;
}
</style>
