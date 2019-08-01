<!--TODO: Make nav into Header-->

<template>
  <div id="app" class="container mb-5">
      <!--{{ info }}-->
    <div class="card">

        <nav class="card-header pb-3">
            <div>
                <img alt="Vue logo" src="./assets/logo.png" class="w-25 float-left">
            </div>
            <h1 class="small">Router Links</h1>
            <router-link to="/">Home</router-link>
            <router-link to="/api">API</router-link>
            <router-link to="/about/Rene">About</router-link>
        </nav>


        <!--<Header text="Header Component"/>-->
        <router-view />
        <!--<Content msg="Content Component"/>-->
        <Footer text="Footer Component"/>

    </div>
  </div>
</template>

<script>
// import Content from './components/Content.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import './assets/app.css';

export default {
  name: 'app',
  components: {
    // Content,
    Header,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
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

    body {
        background-color: #EEEEEE;
        font-family: 'Montserrat', sans-serif;
        display: grid;
        grid-template-rows: auto;
        justify-items: center;
        padding-top: 50px;
    }

    /*nav {*/
        /*padding: 20px 20px 20px 20px;*/
    /*}*/

    nav a {
        padding: 10px;
        text-decoration: none;
    }
</style>
