<template>
    <div class="card-body">
        <h2 class="card-title">Hello {{ test }} This is an about page</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...</p>
        <div>
            <ul>
                <li><a href="#" class="fa fa-facebook"></a></li>
                <li><a href="#" class="fa fa-twitter"></a></li>
                <li><a href="#" class="fa fa-google"></a></li>
                <li><a href="#" class="fa fa-linkedin"></a></li>
                <li><a href="#" class="fa fa-youtube"></a></li>
                <li><a href="#" class="fa fa-instagram"></a></li>
                <li><a href="#" class="fa fa-pinterest"></a></li>
                <li><a href="#" class="fa fa-snapchat-ghost"></a></li>
                <li><a href="#" class="fa fa-skype"></a></li>
                <li><a href="#" class="fa fa-android"></a></li>
                <li><a href="#" class="fa fa-dribbble"></a></li>
                <li><a href="#" class="fa fa-vimeo"></a></li>
                <li><a href="#" class="fa fa-tumblr"></a></li>
                <li><a href="#" class="fa fa-vine"></a></li>
                <li><a href="#" class="fa fa-foursquare"></a></li>
                <li><a href="#" class="fa fa-stumbleupon"></a></li>
                <li><a href="#" class="fa fa-flickr"></a></li>
                <li><a href="#" class="fa fa-yahoo"></a></li>
                <li><a href="#" class="fa fa-reddit"></a></li>
                <li><a href="#" class="fa fa-rss"></a></li>
                <li><a href="#" class="fa fa-facebook"></a></li>
                <li><a href="#" class="fa fa-twitter"></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',

        data() {
            return {
                test: this.$route.params.name
            }
        },
        created() {
            // console.log(this);
        }
    }
</script>

<style scoped>

    li {
        display: inline-block;
        margin: 0 10px;
    }

    @keyframes spin {
        100% {transform: rotate(1turn); }
    }

    a.fa:hover{
        text-decoration: none;
        /*color: red;*/
        animation-play-state: running;
    }

    .fa {
        padding: 5px;
        font-size: 30px;
        width: 35px;
        /*height: 75px;*/
        /*text-align: center;*/
        /*text-decoration: none;*/
        margin: 5px 2px;
        /*border-radius: 50%;*/
        animation: spin 10s linear infinite;
        /*Set our animation play state to paused initially */
        animation-play-state: paused;
    }

    .fa:hover {
        opacity: 0.7;
    }

    .fa-facebook {
        background: #3B5998;
        color: white;
    }

    .fa-twitter {
        background: #55ACEE;
        color: white;
    }

    .fa-google {
        background: #dd4b39;
        color: white;
    }

    .fa-linkedin {
        background: #007bb5;
        color: white;
    }

    .fa-youtube {
        background: #bb0000;
        color: white;
    }

    .fa-instagram {
        background: #125688;
        color: white;
    }

    .fa-pinterest {
        background: #cb2027;
        color: white;
    }

    .fa-snapchat-ghost {
        background: #fffc00;
        color: white;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }

    .fa-skype {
        background: #00aff0;
        color: white;
    }

    .fa-android {
        background: #a4c639;
        color: white;
    }

    .fa-dribbble {
        background: #ea4c89;
        color: white;
    }

    .fa-vimeo {
        background: #45bbff;
        color: white;
    }

    .fa-tumblr {
        background: #2c4762;
        color: white;
    }

    .fa-vine {
        background: #00b489;
        color: white;
    }

    .fa-foursquare {
        background: #45bbff;
        color: white;
    }

    .fa-stumbleupon {
        background: #eb4924;
        color: white;
    }

    .fa-flickr {
        background: #f40083;
        color: white;
    }

    .fa-yahoo {
        background: #430297;
        color: white;
    }

    .fa-soundcloud {
        background: #ff5500;
        color: white;
    }

    .fa-reddit {
        background: #ff5700;
        color: white;
    }

    .fa-rss {
        background: #ff6600;
        color: white;
    }
</style>