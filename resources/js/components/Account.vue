<template>
    <div>

        <header-list></header-list>
        
        <article :style="{ 'background-color': bgColor }">
            <h1>Account Balance: {{ balance | money }}</h1>
            <p>In: {{ moneyIn | money }}</p>
            <p>Out: {{ moneyOut | money }}</p>
        </article>

    </div>

</template>

<script>
import HeaderList from './header/HeaderList'

export default {
    components: {
        HeaderList
    },
    data() {
        return {
            moneyIn: 300,
            moneyOut: 400
        }
    },
    filters: {
        money(val) {
            return val < 0 ?
                `-£${(0 - val).toFixed(2)}` :
                `£${val.toFixed(2)}`
        }
    },
    computed: {
        balance() {
            return this.moneyIn - this.moneyOut
        },
        bgColor() {
            return this.balance < 0 ? 'var(--red)' : 'var(--green)'
        }
    }
}
</script>

<style scoped>
    
    article {
        border-radius: 0.4rem;
        border: 0.1rem solid var(--off-white);
        max-width: 55rem;
        margin-left: auto;
        margin-right: auto;
        padding: 3rem;
        color: var(--text-light);
        letter-spacing: 0.1rem;
    }

</style>