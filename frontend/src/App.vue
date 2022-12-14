<template>
 <div class="main">
  <HeaderTemplate/>
   <router-view/>
   <FooterTemplate/>
 </div>
 
</template>

<script>
import './font.scss'
 import HeaderTemplate from './components/header-template/header-template.vue'
 import FooterTemplate from './components/footer-template/footer-template.vue'
export default {
  name: 'App',
  components: {
     HeaderTemplate,
     FooterTemplate
  }
}
import '../src/components/main.scss'
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
.container{
  max-width: 1720px;
  width: 100%;
  padding: 0px 20px;
}
.main{
  position: relative;
}
</style>

