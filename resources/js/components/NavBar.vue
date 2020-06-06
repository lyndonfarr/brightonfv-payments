<template>
    <nav>
        <ul class="horizontal">
            <li>
                <router-link class="btn" to='/'>Brighton Footvolley</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>

    nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100vw;
        display: block;
        background-color: var(--base);
        color: var(--text-light);
    }

    a {
        display: block;
    }

</style>