<template>
    <div>
        <header-list></header-list>
        
        <article>
            <div class="polygon"></div>
            <div class="links">
                <router-link
                    to="/"
                >
                    15 Players in credit
                </router-link>
                <router-link
                    to="/"
                >
                    20 Players in debt
                </router-link>
            </div>

            <div :style="{ backgroundColor: bgColor }" class="circle balance">
                <h1>{{ balance | money }}</h1>
            </div>
            <p class="in">In: {{ moneyIn | money }}</p>
            <p class="out">Out: {{ moneyOut | money }}</p>

            <ul>
                <li>
                    <router-link
                        to="/"
                        class="btn blue"
                    >
                        30 Upcoming events
                    </router-link>
                </li>
            </ul>
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
            moneyOut: 200
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

    .polygon {
        display: block;
        height: 17rem;
        background-color: lightgrey;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        clip-path: polygon(8% 0, 100% 100%, 100% 0);
        z-index: -1;
    }

    .links {
        position: absolute;
        top: 1.5rem;
        right: 2rem;
    }

    .links a {
        display: block;
        padding: 0.3em;
        z-index: 1;
        position: relative;
        text-align: right;
    }

    .links a::after {
        position: absolute;
        content: '';
        top: 50%;
        left: 101%;
        height: 0.4rem;
        width: 0.4rem;
        border-radius: 50%;
        transform: translateY(-50%);
        opacity: 0;
        transition: 0.5s all;
    }

    .links a:hover::after {
        opacity: 1;
    }

    .links a:first-child::after {
        background-color: var(--green);
    }

    .links a:first-child {
        color: var(--green);
    }

    .links a:last-child::after {
        background-color: var(--red);
    }

    .links a:last-child {
        color: var(--red);
    }

    .flex {
        display: flex;
        margin-top: 2rem;
    }

    .circle {
        height: 15rem;
        width: 15rem;
        border-radius: 50%;
    }

    .balance {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--text-light);
        margin-left: auto;
        margin-right: auto;
    }
    
    article {
        position: relative;
        border-radius: 0.4rem;
        border: 0.1rem solid var(--off-white);
        max-width: 50rem;
        margin-left: auto;
        margin-right: auto;
        padding: 6rem 3rem;
        letter-spacing: 0.1rem;
        box-shadow: 0.2rem 0.2rem 2rem 0.2rem rgba(0, 0, 0, 0.1);
    }

    article::after {
        content: '';
        display: block;
        height: 3rem;
    }

    article > p {
        text-align: center;
        margin-top: 3rem;
    }

    .in {
        color: var(--blue);
    }

    .out {
        color: var(--red);
    }

    ul {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        left: 0;
        overflow: hidden;
    }

    ul, ul > li:last-child a {
        border-radius: 0 0 0.4rem 0.4rem;
    }

    ul > li {
        flex: 1 0 calc(100% / 3);
    }

    ul > li a {
        white-space: nowrap;
        display: block;
        text-align: center;
        color: var(--text-light);
        border: 1px solid;
        transition: 0.3s all;
        position: relative;
    }

    ul > li a:hover::after {
        opacity: 1;
        width: 10rem;
        bottom: 0.8rem;
    }

    ul > li a::after {
        position: absolute;
        bottom: 0.5rem;
        content: '';
        width: 2rem;
        height: 0.1rem;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--white);
        opacity: 0;
        transition: all 0.5s;
    }

    .red {
        background-color: var(--red);
        border-color: var(--red);
    }

    .blue {
        background-color: var(--blue);
        border-color: var(--blue);
    }

    .green {
        background-color: var(--green);
        border-color: var(--green);
    }

</style>