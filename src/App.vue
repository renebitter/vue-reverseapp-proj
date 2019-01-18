<template>
  <div id="app" class="container mb-5">
    <div class="card">
      <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </nav>

        <router-view />
        <Header text="Reverse App"/>
        <Content msg="Content"/>
        <Footer text="Footer"/>



    </div>
  </div>
</template>

<!--<template>-->
  <!--<div id="app">-->
    <!--<nav>-->
      <!--<router-link to="/">Home</router-link>-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</nav>-->
    <!--<router-view/>-->
  <!--</div>-->
<!--</template>-->

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

    /*body {*/
        /*background-color: #EEEEEE;*/
        /*font-family: 'Montserrat', sans-serif;*/
        /*display: grid;*/
        /*grid-template-rows: auto;*/
        /*justify-items: center;*/
        /*padding-top: 50px;*/
    /*}*/

    /*nav {*/
        /*padding: 20px 20px 20px 0;*/
    /*}*/

    /*nav a {*/
        /*padding: 10px;*/
        /*text-decoration: none;*/
        /*background: #fff;*/
        /*border-radius: 3px;*/
        /*color: rgb(0, 110, 255);*/
        /*font-weight: bold;*/
        /*margin-right: 15px;*/
    /*}*/
</style>
