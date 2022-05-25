<template>
  <div>
    <div class="row flex">
      <div class="col"><PDFJSViewer :path="pathpdffileviewer" :pdfurl="`CCNL__OK_TESTO CCNL STUDI PROFESSIONALI 04.05.2022_DEF.pdf`" /></div>
    </div>
    
  </div>
</template>

<script>
import PDFJSViewer from "./components/PDFJSViewer.vue";
export default {
  name: "app",
  components: {
    PDFJSViewer,
  },
  setup() {
    const pathpdffileviewer = "libpdfjsviewer/pdfjs-2.14.305-dist/web/viewer.html";
    return { pathpdffileviewer  };
  },

  inject: ["pdfurl"],
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
}

iframe{
  width: 100%;
  height: 100vh;
}
</style>
