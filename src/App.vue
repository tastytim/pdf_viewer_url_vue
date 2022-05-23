<template>
  <div>
    <WebViewer :path="`${path}lib`" :urlpath="pdfurl"/>
  </div>
</template>

<script>
import WebViewer from './components/WebViewer.vue'
export default {
  name: "app",
  components: {
    WebViewer
  },
  setup() {
    const path = process.env.BASE_URL;
    return { path };
  },
  inject: ["pdfurl"],
};
</script>

<style>
html,body{
  padding:0;
  margin:0;
  box-sizing:border-box;
}
#app {

}
</style>
