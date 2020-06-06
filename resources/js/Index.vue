<template>
    <div class="document__wrapper">
        <nav-bar></nav-bar>

        <main>

            <router-view></router-view>

        </main>

    </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
    components: {
        NavBar
    }
}
</script>

<style scoped>

    main::before {
        content: '';
        display: block;
        height: 5rem;
    }

    main {
        margin-top: 4rem;
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: 2rem;
        padding-right: 2rem;
    }

</style>