<template>
  <div id="app" class="container mb-5">
    <div class="card">
      <!--<img alt="Vue logo" src="./assets/logo.png">-->

      <Header text="Reverse App"/>

      <Content msg="Content"/>

      <Footer text="Footer"/>
    </div>
  </div>
</template>

<script>
import Content from './components/Content.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import './assets/app.css';

export default {
  name: 'app',
  components: {
    Content,
    Header,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        /*display: inline-block;*/
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    .container{
     width: 340px;
    }
</style>
