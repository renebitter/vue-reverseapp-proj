<template>

    <div class="card-body">
        <h1 class="mb-3 text-left small">Content Component {{ msg }}</h1>

        <div class="mb-3 text-left">
            <h2 class="mb-3 text-left small">API Info</h2>

            <section v-if="errored">
                <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
            </section>

            <section v-else>
                <div v-if="loading">Loading...</div>
                <div v-else v-for="currency in info" class="currency">
                    {{ currency.description }}:
                    <span class="lighten">
                    <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
                  </span>
                </div>
            </section>

        </div>
    </div>

</template>

<script>

    import axios from 'axios';

    export default {
        name: 'Api',
        props: {
            msg: String,
        },
        data() {
            return {
                info: null,
                loading: true,
                errored: false
            }
        },
        mounted () {
            axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => (this.info = response.data.bpi))
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        },
        filters: {
            currencydecimal (value) {
                return value.toFixed(2)
            }
        },
    }

</script>

<style scoped>

</style>