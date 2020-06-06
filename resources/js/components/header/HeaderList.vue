<template>    
    <header>
        <ul class="horizontal">
            <header-item
                text="Players"
                table="players"
            ></header-item>
            <header-item
                text="Bookings"
                table="bookings"
            ></header-item>
            <header-item
                text="Venues"
                table="venues"
            ></header-item>
        </ul>
    </header>
</template>

<script>
import HeaderItem from './HeaderItem'

export default {
    components: {
        HeaderItem
    }
}
</script>

<style>

    header {
        text-align: center;
        margin-bottom: 2rem;
    }

</style>