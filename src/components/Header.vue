<template>
    <div class="card-header">
        <h2 class="text-left small"> {{ text }} </h2>
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