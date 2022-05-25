<template>
  <div v-if="pdfurl">
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
        return props.path + "?file=" + decodeURI(props.pdfurl);
      }
      return props.path;
    });

    return { getFilePath };
  },
  
  
};
</script>
<style scoped>

</style>
