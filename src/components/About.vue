<template>
    <div class="about">
        <h1>Hello {{ test }} This is an about page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...</p>
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