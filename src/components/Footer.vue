<template>
    <div class="card-footer">
        <h2 class="text-left small"> {{ text }} </h2>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        props: {
            text: String
        }
    }
</script>