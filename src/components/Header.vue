<template>
    <div class="card-header">
        <h1 class="text-left">  {{ text }} </h1>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            text: String
        }
    }
</script>