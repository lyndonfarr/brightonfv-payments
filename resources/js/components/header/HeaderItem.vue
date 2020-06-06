<template>
    
    <li>
        <router-link
            class="btn"
            :to="{ name: 'table', params: { table } }"
            blud="hi"
        >
            {{ text }}
        </router-link>
    </li>

</template>

<script>
export default {
    props: {
        color: String,
        table: String,
        text: String
    }
}
</script>

<style scoped>

    a {
        display: block;
        border-radius: 0.4rem;
        border: solid 0.2rem var(--base);
        font-size: 2rem;
    }

</style>