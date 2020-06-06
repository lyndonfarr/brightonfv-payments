<template>

    <section>
        <table>
            {{ $route.params.table }}
        </table>
    </section>

</template>

<script>
    export default {
    }
</script>

<style scoped>

    header {
        text-align: center;
    }

    ul > li > a {
        border: 2px solid grey;
        font-size: 2rem;
        border-radius: 4px;
    }

</style>
